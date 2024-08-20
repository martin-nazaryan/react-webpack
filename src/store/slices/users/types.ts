import { PaginationResponse } from '@/store/types';

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  age: number;
  address: string;
  picture: string;
}

export interface UsersRequest {
  page: number;
  search: string;
  sort: string;
}

export type UsersResponse = PaginationResponse<User>;
