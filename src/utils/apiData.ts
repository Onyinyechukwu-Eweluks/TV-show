import axios from "axios";

export const showUrl = "https://api.tvmaze.com/shows";
export const searchUrl = "https://api.tvmaze.com";

export const getAxios = async () => {
  const result = await axios.get(showUrl);
  const data = await result.data;
  return data;
};

export const getSearchData = async (name: string) => {
  try {
    const result = await axios.get(searchUrl + name);
    const data = await result.data;
    return data;
  } catch (error) {
    console.log(error);
  }
};
