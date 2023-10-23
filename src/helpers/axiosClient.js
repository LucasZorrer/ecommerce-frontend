import axios from "axios";

const apiAuth = axios.create({
  baseURL: `http://localhost:4001/`,
});

const apiMain = axios.create({
  baseURL: `http://localhost:4000/`,
});


apiAuth.interceptors.request.use((config) => {
  const token = localStorage.getItem("ACCESS_TOKEN");
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

apiMain.interceptors.request.use((config) => {
  const token = localStorage.getItem("ACCESS_TOKEN");
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    try {
      const { response } = error;
      if (response.status === 401) {
        localStorage.removeItem("ACCESS_TOKEN");
      }
    } catch (e) {
      console.error(e);
    }

    throw error;
  }
);

export {apiAuth, apiMain};
