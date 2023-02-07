import axios from "axios";
const apiClient = axios.create({
  baseURL: "https://shop-server-voaa.onrender.com", // <- ENV variable
});
apiClient.interceptors.request.use((config) => {
  return ({
    ...config,
  })
},
  error => Promise.reject(error),
);

apiClient.interceptors.response.use((response) =>
  response,
  async (error) => {
    return Promise.reject(error.response.data);
  },
);

const { get, post } = apiClient;
export { get, post };