// eslint-disable-next-line @typescript-eslint/no-unused-vars
import axios from 'axios';
const APIbaseURL = 'http://15.164.165.34:8080/';

// interceptors로 axios error 처리
const axiosApi = ({ options }: any) => {
  const instance = axios.create({
    baseURL: APIbaseURL,
    ...options,
  });

  instance.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      return Promise.reject(error);
    },
  );

  instance.interceptors.request.use(
    (request) => {
      return request;
    },
    (error) => {
      return Promise.reject(error);
    },
  );

  instance.defaults.timeout = 5000; // 5초
  return instance;
};

// accessToken & refreshToken
const axiosAuthTokenApi = ({ options }: any) => {
  const instance = axios.create({
    baseURL: APIbaseURL,
    ...options,
    headers: {
      Accept: 'application/json',
    },
  });
  instance.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      return Promise.reject(error);
    },
  );

  // 로컬스토리지에 저장한 토큰을 필요할때마다 request에 담아서 보내기
  // AccessToken 없으면 요청
  instance.interceptors.request.use(
    (config) => {
      const accessToken = localStorage.getItem('accessToken');
      const refreshToken = localStorage.getItem('refreshToken');
      if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
        config.headers.RefreshToken = `Bearer ${refreshToken}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    },
  );
  instance.defaults.timeout = 2500; // 2.5초
  return instance;
};

export const defaultInstance = axiosApi(APIbaseURL);
export const AuthTokenInstance = axiosAuthTokenApi(APIbaseURL);
