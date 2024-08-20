import { createSlice, createAsyncThunk, createEntityAdapter, SerializedError } from '@reduxjs/toolkit';
import { CreateTodoRequest, Todo, TodosResponse, UpdateTodoRequest } from '@/store/slices/todos/types';
import { RootState, StoreLoadingEnum } from '@/store/types';
import { todosApi } from '@/store/slices/todos/api';

const todosAdapter = createEntityAdapter<Todo>();

interface TodosState {
  loading: StoreLoadingEnum;
  error: SerializedError | null;
}

const initialState = todosAdapter.getInitialState<TodosState>({
  loading: StoreLoadingEnum.Idle,
  error: null,
});

export const fetchTodosThunk = createAsyncThunk<TodosResponse>('todos/fetchAll', async (_, thunkAPI) => {
  try {
    const { data } = await todosApi.fetchAll();
    return data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e);
  }
});

export const addTodoThunk = createAsyncThunk<Todo, CreateTodoRequest>('todos/add', async (params, thunkAPI) => {
  try {
    const { data } = await todosApi.create(params);
    return data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e);
  }
});

export const deleteTodoThunk = createAsyncThunk<Todo, string>('todos/delete', async (params, thunkAPI) => {
  try {
    const { data } = await todosApi.delete(params);
    return data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e);
  }
});

export const updateTodoThunk = createAsyncThunk<Todo, UpdateTodoRequest>('todos/update', async (params, thunkAPI) => {
  try {
    const { data } = await todosApi.update(params);
    return data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e);
  }
});

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodosThunk.pending, (state) => {
        state.loading = StoreLoadingEnum.Pending;
      })
      .addCase(fetchTodosThunk.fulfilled, (state, action) => {
        state.loading = StoreLoadingEnum.Succeeded;
        todosAdapter.setAll(state, action.payload);
      })
      .addCase(fetchTodosThunk.rejected, (state, action) => {
        state.loading = StoreLoadingEnum.Failed;
        state.error = action.error;
      })

      .addCase(addTodoThunk.pending, (state) => {
        state.loading = StoreLoadingEnum.Pending;
      })
      .addCase(addTodoThunk.fulfilled, (state, action) => {
        todosAdapter.addOne(state, action.payload);
      })
      .addCase(addTodoThunk.rejected, (state, action) => {
        state.loading = StoreLoadingEnum.Failed;
        state.error = action.error;
      })

      .addCase(updateTodoThunk.pending, (state) => {
        state.loading = StoreLoadingEnum.Pending;
      })
      .addCase(updateTodoThunk.fulfilled, (state, action) => {
        todosAdapter.updateOne(state, {
          id: action.payload.id,
          changes: {
            completed: action.payload.completed,
          },
        });
      })
      .addCase(updateTodoThunk.rejected, (state, action) => {
        state.loading = StoreLoadingEnum.Failed;
        state.error = action.error;
      })

      .addCase(deleteTodoThunk.pending, (state) => {
        state.loading = StoreLoadingEnum.Pending;
      })
      .addCase(deleteTodoThunk.fulfilled, (state, action) => {
        todosAdapter.removeOne(state, action.payload.id);
      })
      .addCase(deleteTodoThunk.rejected, (state, action) => {
        state.loading = StoreLoadingEnum.Failed;
        state.error = action.error;
      });
  },
});

export const { selectAll: selectTodos } = todosAdapter.getSelectors((state: RootState) => state.todos);

export default todosSlice.reducer;
