import { UsersRequest, UsersResponse } from '@/store/slices/users/types';
import apiInstance from '@/services/api';
import { AxiosResponse } from 'axios';

export const usersApi = {
  async fetchAll(params: UsersRequest): Promise<AxiosResponse<UsersResponse>> {
    return apiInstance.get(`/users?_page=${params.page}&_per_page=10&firstName=${params.search}&_sort=${params.sort}`);
  },
  async fetchOne(id?: string): Promise<AxiosResponse<UsersResponse>> {
    return apiInstance.get(`/users?id=${id}`);
  },
};
