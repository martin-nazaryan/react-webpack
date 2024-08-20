import { store } from '@/store';

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export enum StoreLoadingEnum {
  Idle = 'IDLE',
  Pending = 'PENDING',
  Succeeded = 'SUCCEEDED',
  Failed = 'FAILED',
}

export interface Pagination {
  page: number;
  totalItems: number;
  totalPages: number;
}

export interface PaginationResponse<T> {
  data: T[];
  first: number;
  items: number;
  last: number;
  next: number;
  pages: number;
  prev: number;
}
