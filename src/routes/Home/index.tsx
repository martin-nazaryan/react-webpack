import { FC, useEffect } from 'react';
import { addTodoThunk, fetchTodosThunk, selectTodos, deleteTodoThunk, updateTodoThunk } from '@/store/slices/todos';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import Button from '@/components/shared/Button';
import { SubmitHandler, useForm } from 'react-hook-form';
import { TodoFormValues } from '@/routes/Home/types';
import { yupResolver } from '@hookform/resolvers/yup';
import { validationSchema } from '@/routes/Home/validationSchema';
import CardTitle from '../../components/shared/CardTitle';
import Card from '@/components/shared/Card';
import CardContent from '../../components/shared/CardContent';
import Input from '@/components/shared/Input';
import FormGroup from '@/components/shared/FormGroup';
import FormControl from '@/components/shared/FormControl';
import FormLabel from '@/components/shared/FormLabel';
import FormText from '@/components/shared/FormText';

const Home: FC = () => {
  const dispatch = useAppDispatch();
  const todos = useAppSelector(selectTodos);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TodoFormValues>({
    resolver: yupResolver(validationSchema),
  });

  useEffect(() => {
    dispatch(fetchTodosThunk());
  }, [dispatch]);

  const onSubmit: SubmitHandler<TodoFormValues> = (data) => {
    dispatch(
      addTodoThunk({
        title: data.title,
        completed: false,
      }),
    );

    reset();
  };

  const handleOnDelete = (id: string) => {
    dispatch(deleteTodoThunk(id));
  };

  const handleOnCheck = (id: string, completed: boolean) => {
    dispatch(
      updateTodoThunk({
        id,
        completed,
      }),
    );
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6 items-start">
      <Card className="w-full">
        <CardTitle>Add new Todo</CardTitle>

        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormGroup>
              <FormControl>
                <FormLabel>Title</FormLabel>

                <Input placeholder="Title" {...register('title')} />

                <FormText>{errors.title && <p>{errors.title.message}</p>}</FormText>
              </FormControl>
            </FormGroup>

            <Button type="submit" variant="primary" className="w-full">
              Add Todo
            </Button>
          </form>
        </CardContent>
      </Card>

      <Card className="w-full">
        <CardTitle>Todo List</CardTitle>

        <CardContent>
          <ul className="space-y-4">
            {todos.map((todo) => {
              return (
                <li
                  key={todo.id}
                  className="grid grid-cols-[auto_1fr_auto] items-center p-4 bg-gray-100 rounded-md hover:bg-gray-200"
                >
                  <input
                    type="checkbox"
                    className="form-checkbox h-5 w-5 text-indigo-600 rounded focus:ring-indigo-500"
                    id={`task-${todo.id}`}
                    checked={todo.completed}
                    onChange={() => handleOnCheck(todo.id, !todo.completed)}
                  />

                  <label htmlFor={`task-${todo.id}`} className="ml-3 text-gray-700">
                    {todo.title}
                  </label>

                  <button
                    onClick={() => handleOnDelete(todo.id)}
                    className="ml-auto justify-self-end bg-red-600 text-white px-2 py-1 rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
                  >
                    Delete
                  </button>
                </li>
              );
            })}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default Home;
