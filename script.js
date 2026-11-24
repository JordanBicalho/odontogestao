const agendamentos = [
    { data: "2026-11-24", horario: "09:00", paciente: "João da Silva", procedimento: "Limpeza Dental", status: "confirmado" },
    { data: "2026-11-24", horario: "10:00", paciente: "Maria Oliveira", procedimento: "Avaliação Odontológica", status: "agendado" },
    { data: "2025-11-24", horario: "11:00", paciente: "Carlos Santos", procedimento: "Restauração", status: "confirmado" }
];

const hoje = "2026-11-24";
const totalConsultas = document.getElementById("total-consultas")
totalConsultas.textContent = agendamentos.length;


const pacientes = ["Maria Oliveira", "João da Silva", "Carlos Santos"];

console.log(pacientes.length);

const totalPacientes = document.getElementById("total-pacientes");
totalPacientes.textContent = pacientes.length;