import "./UserDataTable.css";

export default function UserDataTable({ user }) {
  return (
    <div className="user-data-table">
      <table className="table">
        <caption className="table-caption">{user.Name} Info</caption>
        <thead className="thead">
          <tr className="tr">
            <th>ID</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody className="tbody">
          <tr>
            <td>{user.ID}</td>
            <td>{user.Name}</td>
            <td>{user.Username}</td>
            <td>{user.Email}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
