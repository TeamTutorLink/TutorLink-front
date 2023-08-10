import { AxiosResponse } from 'axios';
import { defaultInstance, AuthTokenInstance } from './customAPI';

const API = {
  getLessons: async (): Promise<AxiosResponse> => {
    const response = await defaultInstance.get(`lessons?page=1`);
    return response;
  },
  getLoginLessons: async (): Promise<AxiosResponse> => {
    const accessToken = localStorage.getItem('accessToken');
    const response = await defaultInstance.get(`lessons/login?page=1`, {
      headers: {
        accessToken: `${accessToken}`,
      },
    });
    return response;
  },
  postLogOut: async (): Promise<AxiosResponse> => {
    const accessToken = localStorage.getItem('accessToken');
    const response = await defaultInstance.post(`users/logout`, accessToken);
    return response;
  },
};

export default API;
