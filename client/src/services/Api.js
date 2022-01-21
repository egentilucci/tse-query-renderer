import axios from "axios";

export default () => {
  console.log("inside api.js", window.location);
  const currentWindowLocation = window.location.hostname;
  return axios.create({
    baseURL: "http://" + currentWindowLocation + ":3000",
  });
};
