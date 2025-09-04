import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3000",
});

instance.interceptors.request.use(
  function (request) {
    // Do something before request is sent
    console.log('request ----->',request)
    return request;
  },
  function (error) {
    // Do something with request error 
    return Promise.reject(error);
  }
);

instance.interceptors.request.use(
  function (response) {
    // Do something before request is sent
    console.log("response ------>",response)
    return response;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

export default instance;
