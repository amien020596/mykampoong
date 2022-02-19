import { authorizeFether } from "libs/fetcher/fetcher-post";
import { config } from "../../constants";

const url = config.NEXT_PUBLIC_API_URL + "/booking/add-to-cart";

const bookingAddToCart = async (data) => await authorizeFether(url, data, true, true, true);
export { bookingAddToCart, bookingAddToCart as useBookNow };
