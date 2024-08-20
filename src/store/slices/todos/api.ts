import { CreateTodoRequest, Todo, TodosResponse, UpdateTodoRequest } from '@/store/slices/todos/types';
import apiInstance from '@/services/api';
import { AxiosResponse } from 'axios';

export const todosApi = {
  async fetchAll(): Promise<AxiosResponse<TodosResponse>> {
    return apiInstance.get('/todos');
  },
  async create(data: CreateTodoRequest): Promise<AxiosResponse<Todo>> {
    return apiInstance.post('/todos', data);
  },
  async delete(id: string): Promise<AxiosResponse<Todo>> {
    return apiInstance.delete(`/todos/${id}`);
  },
  async update(params: UpdateTodoRequest): Promise<AxiosResponse<Todo>> {
    return apiInstance.patch(`/todos/${params.id}`, {
      completed: params.completed,
    });
  },
};
