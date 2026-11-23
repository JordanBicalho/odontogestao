const pacientes = ["Maria Oliveira", "João da Silva", "Carlos Santos"];

console.log(pacientes.length);

const totalPacientes = document.getElementById("total-pacientes");
totalPacientes.textContent = pacientes.length;