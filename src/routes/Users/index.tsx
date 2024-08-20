import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { fetchUsersThunk, selectUsers, selectUsersPage, selectUsersTotalPages, usersSlice } from '@/store/slices/users';
import { ChangeEvent, useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { debounce } from 'lodash';
import Input from '@/components/shared/Input';

const Users = () => {
  const dispatch = useAppDispatch();
  const users = useAppSelector(selectUsers);
  const page = useAppSelector(selectUsersPage);
  const totalPages = useAppSelector(selectUsersTotalPages);
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('firstName');

  useEffect(() => {
    dispatch(fetchUsersThunk({ page, search, sort: sort }));
  }, [dispatch, page, search, sort]);

  const navigate = useNavigate();

  const handleGoToUser = (id: string) => {
    navigate(`/users/${id}`);
  };

  const handleNextPage = () => {
    if (page < totalPages) {
      dispatch(usersSlice.actions.setPage(page + 1));
    }
  };

  const handlePrevPage = () => {
    if (page > 1) {
      dispatch(usersSlice.actions.setPage(page - 1));
    }
  };

  const debouncedSearch = useMemo(
    () =>
      debounce((search: string) => {
        setSearch(search);
      }, 500),
    [],
  );

  const handleSort = (value: string) => {
    setSort(value === sort ? `-${value}` : value);
  };

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    debouncedSearch(e.target.value);
  };

  return (
    <div>
      <div className="py-4">
        <Input placeholder="Search by name" onChange={handleSearch} />
      </div>

      <div className="overflow-x-auto bg-white shadow-md rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500
                tracking-wider"
              >
                ID
              </th>

              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500
                tracking-wider"
              >
                Picture
              </th>

              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-blue-500 tracking-wider cursor-pointer"
                onClick={() => handleSort('firstName')}
              >
                Name {sort === 'firstName' ? '▲' : sort === '-firstName' ? '▼' : ''}
              </th>

              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500  tracking-wider">
                Email
              </th>

              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-blue-500 tracking-wider cursor-pointer"
                onClick={() => handleSort('age')}
              >
                Age {sort === 'age' ? '▲' : sort === '-age' ? '▼' : ''}
              </th>

              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500  tracking-wider">
                Address
              </th>
            </tr>
          </thead>

          <tbody className="bg-white divide-y divide-gray-200">
            {users.map((user) => {
              return (
                <tr key={user.id} className="hover:bg-gray-100 cursor-pointer" onClick={() => handleGoToUser(user.id)}>
                  <td className="px-6 py-3 text-left text-xs font-medium text-gray-500  tracking-wider">{user.id}</td>

                  <td
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500
                  tracking-wider"
                  >
                    <img
                      className="h-10 w-10 rounded-full"
                      src={user.picture}
                      alt={`${user.firstName} ${user.lastName}`}
                    />
                  </td>

                  <td
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500
                  tracking-wider"
                  >
                    {user.firstName}
                  </td>

                  <td
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500
                  tracking-wider"
                  >
                    {user.email}
                  </td>

                  <td
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500
                  tracking-wider"
                  >
                    {user.age}
                  </td>

                  <td
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500
                  tracking-wider"
                  >
                    {user.address}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="flex justify-center items-center mt-4 gap-4">
        <button
          disabled={page === 1}
          onClick={handlePrevPage}
          className="disabled:bg-gray-50 px-4 py-2 bg-gray-200 text-gray-700 rounded-md shadow hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          id="prevPage"
        >
          Previous
        </button>

        <span id="pageInfo" className="text-gray-600">
          Page {page} of {totalPages}
        </span>

        <button
          disabled={page === totalPages}
          onClick={handleNextPage}
          className="disabled:bg-gray-50 px-4 py-2 bg-gray-200 text-gray-700 rounded-md shadow hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          id="nextPage"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Users;
