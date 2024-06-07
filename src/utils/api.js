import axios from "axios";

const BASE_URL = "api url";
const TMDB_TOKEN ="your token";

const headers = {
  Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {
  try {
    const { data } = await axios.get(BASE_URL + url, {
      headers,
      params,
    });

    return data;
  } catch (err) {
    // console.log(err);
    return err;
  }
};
