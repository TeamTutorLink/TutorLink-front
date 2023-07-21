import { AxiosResponse } from 'axios';
import { defaultInstance, AuthTokenInstance } from './customAPI';

const API = {
  getLessons: async (): Promise<AxiosResponse> => {
    const response = await defaultInstance.get(`lessons?page=1`);
    return response;
  },
};

export default API;
