import axios from "axios";

export const fetchGQLData = (url, query, token) => {
  return axios.post(url, query, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
};
