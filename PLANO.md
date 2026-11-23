# Plano do OdontoGestão

## Feito até 23/11/2026
- [x] Menu lateral com `<aside>` + `<nav>` e item ativo
- [x] Três telas: `index.html`, `pacientes.html`, `agendamentos.html`
- [x] Cards com flex e `gap`
- [x] Barra de pesquisa com `:focus-within` (+ `aria-label`)
- [x] Layout do `<li>` do paciente (avatar, nome, legenda, setinha)
- [x] Limpezas: `href="#"`, ícones dos cards, `h2`/`p` restritos (`aside h2`, `main p`)
- [x] Próximos agendamentos no dashboard (`<time>` + nome)
- [x] Tela de Agendamentos (header, filtros, lista com status) seguindo o Figma
- [x] Primeiro JS: array de pacientes e total no card (`id="total-pacientes"`)

## Aprendido hoje (revisar antes de começar)
- `<label>` dá nome ao campo (clique + leitor de tela); campo sem texto visível usa `aria-label`. Placeholder não substitui.
- `<div>` organiza layout; `<section>` é parte da página com tema; `<fieldset>` agrupa campos.
- No HTML, espaço no `class` separa classes (`class="status confirmado"`).
- No CSS: `.a.b` = mesmo elemento com as duas classes; `.a .b` = `.b` dentro de `.a`.
- Classe base + classe de variação (`.status` + `.confirmado`): formato num lugar, cor no outro.
- `::before` com `content: ""` cria um elemento extra (a bolinha); `currentColor` usa a cor do texto.
- `font: inherit` em botões/inputs/selects (eles não herdam a fonte sozinhos).
- `<button>` dentro de `<form>` envia e recarrega a página → `type="button"` (depois: `preventDefault()`).
- `<script>` no fim do `<body>` (ou `defer`): senão o `getElementById` devolve `null`.
- Erro `Cannot set properties of null` = elemento não encontrado (id errado ou script rodou antes).

## Tarefas de amanhã (meta: ~4h)
Limite de tempo por tarefa. Se estourar, anota o que faltou e segue.

1. [ ] Revisar o "Aprendido hoje" sem olhar o código (15 min)
2. [ ] Objetos: array de agendamentos (45 min)
   - [ ] Cada agendamento como objeto: `horario`, `paciente`, `procedimento`, `status`
   - [ ] Testar no Console: `agendamentos[0].paciente`, `agendamentos.length`
   - [ ] Escrever o total no card "Consultas Hoje" (`id="total-consultas"`)
3. [ ] Separar o JS (30 min)
   - [ ] `dados.js` com os arrays (pacientes e agendamentos)
   - [ ] `dashboard.js` com o código do dashboard; carregar `dados.js` antes
4. [ ] Gerar a lista de agendamentos com JS (1h30)
   - [ ] `agendamentos.js` na `agendamentos.html`
   - [ ] Percorrer o array (`forEach`) e criar um `<li class="item-agendamento">` para cada
   - [ ] Status vira classe: `"status " + agendamento.status`
   - [ ] Apagar os `<li>` escritos à mão no HTML
5. [ ] Commit + atualizar este plano (10 min)

## Pendências menores
- Ícones do Figma: relógio no horário, seta no "Ver detalhes", ícones nos filtros, no título e no menu lateral
- Sombra leve nos cards (`box-shadow`)
- Cor do ícone do avatar (vem do SVG)
- `box-sizing: border-box`

## Meta maior
Terminar este projeto, depois o próximo, com banco de dados. Alvo: ~10 projetos bons no portfólio.
