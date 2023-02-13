import User from "./User";
import './UserList.css';

function UserList({ users }) {
  return (
    <div className="user-list">
      {users.map((user) => (
        <User user={user} />
      ))}
    </div>
  );
}

export default UserList;
