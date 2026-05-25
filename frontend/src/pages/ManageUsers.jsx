import {
  useEffect,
  useState,
} from "react";

import {
  toast,
} from "react-toastify";

import adminService
from "../service/adminService";

function ManageUsers() {

  const [users,
    setUsers] =
    useState([]);

  useEffect(() => {

    fetchUsers();

  }, []);

  const fetchUsers =
    async () => {

    try {

      const data =
        await adminService
          .getAllUsers();

      setUsers(data);

    } catch (error) {

      toast.error(
        "Failed to load users"
      );
    }
  };

  return (

    <div className="container mt-5">

      <h2 className="mb-4">
        Manage Users
      </h2>

      <div className="card shadow p-4">

        <table className="table table-bordered">

          <thead>

            <tr>

              <th>ID</th>

              <th>Name</th>

              <th>Email</th>

              <th>Role</th>

            </tr>

          </thead>

          <tbody>

            {
              users.map(
                (user) => (

                  <tr key={user.id}>

                    <td>
                      {user.id}
                    </td>

                    <td>
                      {user.name}
                    </td>

                    <td>
                      {user.email}
                    </td>

                    <td>
                      {user.role}
                    </td>

                  </tr>
                )
              )
            }

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default ManageUsers;
