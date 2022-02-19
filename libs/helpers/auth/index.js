import Router from "next/router";
import { API_CODES } from "libs/consts/api";
import { parseCookies, destroyCookie, setCookie } from "nookies";

export const tokenLabel = "myk-token";
export const refreshTokenLabel = "myk-refresh-token";

const TOKEN_MAX_AGE = 30 * 60; // 30 minutes
const REFRESH_TOKEN_MAX_AGE = 60 * 60 * 24 * 30; // 30 days

export function getToken() {
  const cookies = parseCookies();
  return {
    token: cookies[tokenLabel],
    refreshToken: cookies[refreshTokenLabel]
  };
}

export function destroyToken() {
  destroyCookie(null, tokenLabel, { path: "/" });
  destroyCookie(null, refreshTokenLabel, { path: "/" });
}

export function setToken(token, refreshToken) {
  setCookie(null, tokenLabel, token, { maxAge: TOKEN_MAX_AGE, path: "/" });
  setCookie(null, refreshTokenLabel, refreshToken, {
    maxAge: REFRESH_TOKEN_MAX_AGE,
    path: "/"
  });
}

export function logout() {
  destroyToken();
  Router.push("/");
}

export function forwardMaintenance() {
  Router.push("/maintenance");
}

export function requireAuthentication(callback) {
  return async (context) => {
    const { req, res } = context;
    const cookies = parseCookies({ req });

    if (!cookies[tokenLabel] && !cookies[refreshTokenLabel]) {
      res.statusCode = API_CODES.FOUND;
      res.setHeader("Location", "/");
    }

    return await callback(context);
  };
}
