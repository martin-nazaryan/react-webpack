export interface Todo {
  id: string;
  title: string;
  completed: boolean;
}
export type TodosResponse = Todo[];
export type CreateTodoRequest = Omit<Todo, 'id'>;
export interface UpdateTodoRequest {
  id: string;
  completed: boolean;
}
