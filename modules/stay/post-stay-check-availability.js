import fetcher from "libs/fetcher-post";

const stayCheckAvailability = async (slug, data) => {
  const url = process.env.NEXT_PUBLIC_API_URL + "/list-available-room/" + slug;

  return await fetcher(url, data);
};

export { stayCheckAvailability };
