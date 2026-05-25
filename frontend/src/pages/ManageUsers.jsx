function ManageUsers() {

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

            <tr>

              <td>1</td>

              <td>Navya</td>

              <td>navya@gmail.com</td>

              <td>USER</td>

            </tr>

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default ManageUsers;