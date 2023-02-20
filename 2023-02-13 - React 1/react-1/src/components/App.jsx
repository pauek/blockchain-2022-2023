import TextoExtra from "./TextoExtra";
import UserList from './UserList';

export default function App(props) {
  return (
    <section>
      <h1>{props.title}</h1>
      <input type="text" value={props.value} />
      <TextoExtra activo={true} />
      <UserList users={props.datos} />
    </section>
  );
};