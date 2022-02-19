import fetcher from "libs/fetcher-post";

const bookingAddToCart = async (data) => {
  const url = process.env.NEXT_PUBLIC_API_URL + "/booking/add-to-cart";

  return await fetcher(url, data);
};

export { bookingAddToCart };
