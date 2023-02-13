import './user.css';

const datos = [
  {
    nombre: "Fulanito",
    apellido: "García",
    email: "fulanito.garcia@gmail.com",
  },
  {
    nombre: "Menganito",
    apellido: "Fernández",
    email: "mf@hotmail.com",
  },
];

const generateUser = (user) => {
  return <div className="user">
    <div className="name">{user.nombre} {user.apellido}</div>
    <div className="email">{user.email}</div>
  </div>
}

export const generatePage = () => {
  let title = "Lista de Usuarios";
  let extra = true;
  return (
    <section>
      <h1>{title}</h1>
      <input type="text" value={"hola".repeat(3) + "!!"} />
      {extra && <p>Este es el texto extra</p>}
      <div>
        {datos.map(generateUser)}
      </div>
    </section>
  );
};
