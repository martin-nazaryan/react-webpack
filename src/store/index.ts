import { configureStore } from '@reduxjs/toolkit';
import { todosSlice } from '@/store/slices/todos';
import { usersSlice } from '@/store/slices/users';

export const store = configureStore({
  reducer: {
    todos: todosSlice.reducer,
    users: usersSlice.reducer,
  },
});
