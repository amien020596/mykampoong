import { destroyCookie, parseCookies, setCookie } from "nookies";

import { API_CODES } from "libs/consts/api";
import Router from "next/router";

export const tokenLabel = "myk-token";
export const refreshTokenLabel = "myk-refresh-token";

const TOKEN_MAX_AGE = 60 * 60 * 24 * 100; // 100 days
const REFRESH_TOKEN_MAX_AGE = 60 * 60 * 24 * 100; // 100 days

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

  window.localStorage.removeItem("USSID")
  window.localStorage.removeItem("myk-token");
  window.localStorage.removeItem("myk-refresh-token")
  window.localStorage.removeItem("myk-refresh-lifetime")
}

export function setToken(token, refreshToken, lifetime) {
  setCookie(null, tokenLabel, token, { maxAge: TOKEN_MAX_AGE, path: "/" });
  setCookie(null, refreshTokenLabel, refreshToken, {
    maxAge: REFRESH_TOKEN_MAX_AGE,
    path: "/"
  });

  window.localStorage.setItem("myk-token-lifetime", lifetime);
  window.localStorage.setItem("myk-token", token);
  window.localStorage.setItem("myk-refresh-token", refreshToken);
}

export function isloginUser() {
  if (typeof window !== undefined) {
    if (getToken().token) {
      return true;
    }
  } else {
    if (window.localStorage.getItem("USSID") && getToken().token) {
      return true;
    }
  }
  return false;
}

export function setAuthData(user) {
  window.localStorage.setItem("USSID", user)
}

export function getAuthData() {
  if (typeof window !== undefined) {
    if (getToken().token) {
      return JSON.parse(window.localStorage.getItem("USSID"));
    }
  } else {
    if (window.localStorage.getItem("USSID") && getToken().token) {
      return JSON.parse(window.localStorage.getItem("USSID"));
    }
  }
  return false;
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
