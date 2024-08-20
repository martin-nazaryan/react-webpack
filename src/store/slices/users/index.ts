import { createSlice, createAsyncThunk, createEntityAdapter, SerializedError } from '@reduxjs/toolkit';
import { User, UsersRequest, UsersResponse } from '@/store/slices/users/types';
import { Pagination, RootState, StoreLoadingEnum } from '@/store/types';
import { usersApi } from '@/store/slices/users/api';

const usersAdapter = createEntityAdapter<User>();

interface UsersState extends Pagination {
  loading: StoreLoadingEnum;
  error: SerializedError | null;
}

const initialState = usersAdapter.getInitialState<UsersState>({
  loading: StoreLoadingEnum.Idle,
  error: null,
  page: 1,
  totalItems: 0,
  totalPages: 0,
});

export const fetchUsersThunk = createAsyncThunk<UsersResponse, UsersRequest>(
  'users/fetchAll',
  async (params, thunkAPI) => {
    try {
      const { data } = await usersApi.fetchAll(params);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  },
);

export const fetchUserThunk = createAsyncThunk<UsersResponse, string | undefined>(
  'users/fetchOne',
  async (params, thunkAPI) => {
    try {
      const { data } = await usersApi.fetchOne(params);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  },
);

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setPage(state, action) {
      state.page = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsersThunk.pending, (state) => {
        state.loading = StoreLoadingEnum.Pending;
      })
      .addCase(fetchUsersThunk.fulfilled, (state, action) => {
        state.loading = StoreLoadingEnum.Succeeded;
        usersAdapter.setAll(state, action.payload.data);
        state.totalItems = action.payload.items;
        state.totalPages = action.payload.pages;
      })
      .addCase(fetchUsersThunk.rejected, (state, action) => {
        state.loading = StoreLoadingEnum.Failed;
        state.error = action.error;
      });
  },
});

export const { selectAll: selectUsers, selectById: selectUser } = usersAdapter.getSelectors(
  (state: RootState) => state.users,
);
export const selectUsersPage = (state: RootState) => state.users.page;
export const selectUsersTotalPages = (state: RootState) => state.users.totalPages;

export default usersSlice.reducer;
