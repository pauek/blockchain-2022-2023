import User from "./User";

export default function App(props) {
  let title = "Lista de Usuarios";
  let extra = true;
  return (
    <section>
      <h1>{title}</h1>
      <input type="text" value={"hola".repeat(3) + "!!"} />
      {extra && <p>Este es el texto extra</p>}
      <div>
        {props.datos.map(user => <User user={user} />)}
      </div>
    </section>
  );
};