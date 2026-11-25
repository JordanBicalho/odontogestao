const lista = document.getElementById("lista-agendamentos");

agendamentos.forEach(function (agendamento) {
  lista.innerHTML += `
        <li class="item-agendamento">
            <time class="horario" datetime="${agendamento.horario}">${agendamento.horario}</time>
            <img class="icone-pacient" src="imgs/circle-user.svg" alt="">
            <div class="info-paciente">
                <h4>${agendamento.paciente}</h4>
                <p>${agendamento.procedimento}</p>
            </div>
            <span class="status ${agendamento.status}">${agendamento.status}</span>
            <a href="#" class="botao-secundario">Ver detalhes</a>
        </li>
    `;
});

