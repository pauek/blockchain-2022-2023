
const div = document.getElementById("root");
div.textContent = "Esto lo he puesto desde Javascript";
div.style.backgroundColor = "lightblue";

for (let i = 0; i < 1000; i++) {
  const p = document.createElement('p');
  p.textContent = `Este es el párrafo ${i}`;
  div.appendChild(p);
}