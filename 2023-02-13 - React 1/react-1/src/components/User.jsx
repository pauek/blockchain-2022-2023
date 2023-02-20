import './User.css';

const User = ({ user }) => {
  return <div className="user">
    <div className="name">{user.nombre} {user.apellido}</div>
    <div className="email">{user.email}</div>
  </div>
}

export default User;
