import { authorizeFether } from "libs/fetcher/fetcher-post";
import { config } from "../../constants";

const postDataPayment = async (code_order, data) => {

  const url = config.NEXT_PUBLIC_API_URL + "/booking/payment/" + `${code_order}`;
  return await authorizeFether(url, data);
};

export { postDataPayment };
