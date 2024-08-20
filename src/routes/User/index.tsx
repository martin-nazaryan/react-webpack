import { FC, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { useParams } from 'react-router-dom';
import { fetchUserThunk, selectUser } from '@/store/slices/users';

const User: FC = () => {
  const dispatch = useAppDispatch();
  const params = useParams();
  const user = useAppSelector((state) => selectUser(state, params.id!));

  useEffect(() => {
    dispatch(fetchUserThunk(params.id));
  }, [dispatch, params]);

  if (!user) {
    return <h1>No User Found!!!</h1>;
  }

  return (
    <div className="flex justify-center items-center h-full">
      <div className="max-w-lg w-full p-6 bg-white rounded-lg shadow-md">
        <div className="flex flex-col items-center">
          <img
            className="w-32 h-32 rounded-full object-cover"
            src={user.picture}
            alt={`${user.firstName} ${user.lastName}`}
          />
          <h2 className="mt-4 text-3xl font-semibold text-gray-900 text-center">
            {user.firstName} {user.lastName}
          </h2>
          <p className="text-gray-600 text-center">{user.email}</p>
        </div>
        <div className="mt-6 space-y-4 text-center">
          <div>
            <h3 className="text-lg font-medium text-gray-800">Personal Information</h3>
            <div className="mt-2 space-y-2">
              <p className="text-gray-700"><span className="font-semibold">Age:</span> {user.age}</p>
              <p className="text-gray-700"><span className="font-semibold">Address:</span> {user.address}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
