import axios, { AxiosRequestConfig } from "axios";

type HTTP_METHOD = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

export const fetcher = async (
  method: HTTP_METHOD,
  url: string,
  params?: any,
  headers?: Record<string, string>,
) => {
  const config: AxiosRequestConfig = {
    method,
    url,
    ...(method === 'GET' || method === 'DELETE'
      ? { params }
      : { data: params }),
    headers: {
      ...(headers ?? {}),
    },
    withCredentials: true,
  };

  try {
    const res = await axios.request(config);
    return res.data;
  } catch (error: any) {
    return {
      status: error.response?.status || 500,
      error: error.message || 'Unknown error',
      details: error.response?.data,
    };
  }
};