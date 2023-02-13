
const TextoExtra = (props) => {
  if (props.activo) {
    return <p>Este es el texto extra</p>;
  } else {
    return null;
  }
}

export default TextoExtra;