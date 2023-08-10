import { AxiosResponse } from 'axios';
import { defaultInstance, AuthTokenInstance } from './customAPI';

interface SearchKeyword {
  searchKeyword: string;
}

const API = {
  // 메인페이지 강의 리스트 (로그인/비로그인)
  getNonloginLessons: async (): Promise<AxiosResponse> => {
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

  // 검색 페이지 (비로그인) - 타이틀 검색, 선생님 검색
  getNonloginSearchTitle: async (
    data: SearchKeyword,
  ): Promise<AxiosResponse> => {
    const accessToken = localStorage.getItem('accessToken');
    const response = await defaultInstance.get(
      `/lessons/search?type=0&keyword=${data}&page=1`,
      {
        headers: {
          accessToken: `${accessToken}`,
        },
      },
    );
    return response;
  },
  getNonloginSearchTeacher: async (
    data: SearchKeyword,
  ): Promise<AxiosResponse> => {
    const accessToken = localStorage.getItem('accessToken');
    const response = await defaultInstance.get(
      `/lessons/search?type=0&keyword=${data}&page=1`,
      {
        headers: {
          accessToken: `${accessToken}`,
        },
      },
    );
    return response;
  },

  // 검색 페이지 (로그인) - 타이틀 검색, 선생님 검색
  getLoginSearchTitle: async (data: SearchKeyword): Promise<AxiosResponse> => {
    const accessToken = localStorage.getItem('accessToken');
    const response = await defaultInstance.get(
      `lessons/search/login?type=0&keyword=${data}&page=1`,
      {
        headers: {
          accessToken: `${accessToken}`,
        },
      },
    );
    return response;
  },
  getLoginSearchTeacher: async (
    data: SearchKeyword,
  ): Promise<AxiosResponse> => {
    const accessToken = localStorage.getItem('accessToken');
    const response = await defaultInstance.get(
      `lessons/search/login?type=1&keyword=${data}&page=1`,
      {
        headers: {
          accessToken: `${accessToken}`,
        },
      },
    );
    return response;
  },

  // 로그아웃
  postLogOut: async (): Promise<AxiosResponse> => {
    const accessToken = localStorage.getItem('accessToken');
    const response = await defaultInstance.post(`users/logout`, accessToken);
    return response;
  },
};

export default API;
