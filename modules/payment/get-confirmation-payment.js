import { authorizeAxiosGet } from "libs/fetcher/fetcher-get";
import { config } from "../../constants";

const getConfirmationPayment = async (data) => {

  const url = config.NEXT_PUBLIC_API_URL + "/booking/confirmation-payment";
  return await authorizeAxiosGet(url, data);
};

export { getConfirmationPayment };
