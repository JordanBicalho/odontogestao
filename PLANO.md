# Plano do OdontoGestão

## Feito até 25/11/2026
- [x] Menu lateral com `<aside>` + `<nav>` e item ativo
- [x] Três telas: `index.html`, `pacientes.html`, `agendamentos.html`
- [x] Cards com flex e `gap`
- [x] Barra de pesquisa com `:focus-within` (+ `aria-label`)
- [x] Layout do `<li>` do paciente (avatar, nome, legenda, setinha)
- [x] Limpezas: `href="#"`, ícones dos cards, `h2`/`p` restritos (`aside h2`, `main p`)
- [x] Próximos agendamentos no dashboard (`<time>` + nome)
- [x] Tela de Agendamentos (header, filtros, lista com status) seguindo o Figma
- [x] Primeiro JS: array de pacientes e total no card (`id="total-pacientes"`)
- [x] Array de agendamentos com objetos (`data`, `horario`, `paciente`, `procedimento`, `status`)
- [x] JS separado: `dados.js` (compartilhado) + `dashboard.js` + `agendamentos.js`
- [x] Lista de agendamentos gerada com `forEach` + `innerHTML` (sem `<li>` à mão)
- [x] Status com `text-transform: capitalize`

## Aprendido em 23/11
- `<label>` dá nome ao campo (clique + leitor de tela); campo sem texto visível usa `aria-label`. Placeholder não substitui.
- `<div>` organiza layout; `<section>` é parte da página com tema; `<fieldset>` agrupa campos.
- No HTML, espaço no `class` separa classes (`class="status confirmado"`).
- No CSS: `.a.b` = mesmo elemento com as duas classes; `.a .b` = `.b` dentro de `.a`.
- Classe base + classe de variação (`.status` + `.confirmado`): formato num lugar, cor no outro.
- `::before` com `content: ""` cria um elemento extra (a bolinha); `currentColor` usa a cor do texto.
- `font: inherit` em botões/inputs/selects (eles não herdam a fonte sozinhos).
- `<button>` dentro de `<form>` envia e recarrega a página → `type="button"` (depois: `preventDefault()`).
- `<script>` no fim do `<body>` (ou `defer`): senão o `getElementById` devolve `null`.

## Aprendido em 25/11 (revisar antes de começar)
- `const` = o nome sempre aponta pra mesma caixa, mas o conteúdo pode mudar (`push`). `let` deixa trocar a caixa.
- Objeto `{ chave: valor }` junta vários dados de uma coisa só. Acesso com ponto: `agendamentos[0].paciente`.
- Array começa no `[0]`. Índice que não existe dá `undefined`.
- Guardar tudo e filtrar o que precisa (não "resetar" o array todo dia). Por isso cada agendamento tem `data`.
- Vários `<script>` rodam em ordem e enxergam as mesmas variáveis → `dados.js` sempre antes.
- `getElementById` devolve o **elemento**, não o texto. Depois escreve nele com `textContent`.
- `forEach(function (item) { ... })` roda o bloco uma vez por item e entrega o **objeto inteiro**; o ponto escolhe o dado.
- Template string: crase `` ` `` + `${...}`. O que é igual pra todos fica fixo no molde; o que muda vira `${...}`.
- `innerHTML` entende tags (`textContent` não). `=` troca tudo, `+=` adiciona.
- O CSS não liga pra quem escreveu o HTML: as classes no molde continuam funcionando.
- Os erros mais comuns:
  - `Cannot set properties of null` → elemento não encontrado (id errado ou script na página errada/antes).
  - `x is not defined` → variável ainda não existe (ordem dos scripts).
  - `SyntaxError` → código escrito errado (ex.: abriu com crase e fechou com aspas).
- Erro no Console com nome de arquivo que não é seu (extensão, `favicon.ico`) → não é do seu código.
- Dados no array somem ao recarregar; pra durar de verdade precisa de banco de dados (próximo projeto).

## Próximas tarefas (meta: ~4h)
Limite de tempo por tarefa. Se estourar, anota o que faltou e segue.

1. [ ] Revisar o "Aprendido em 25/11" sem olhar o código (15 min)
2. [ ] "Consultas Hoje" contando só os de hoje (45 min)
   - [ ] Entender `filter`: devolve um array novo só com os itens que passam no teste
   - [ ] `const consultasHoje = agendamentos.filter(...)` com `data === hoje`
   - [ ] Card mostra `consultasHoje.length`
   - [ ] Corrigir a data do Carlos (`2025` → `2026`)
3. [ ] Lista em ordem de horário (45 min)
   - [ ] Entender `sort` comparando dois itens
   - [ ] Ordenar por `horario` antes do `forEach`
4. [ ] "Próximos agendamentos" do dashboard vindo do array (1h)
   - [ ] Mesmo raciocínio do `agendamentos.js`: `forEach` + molde do `<li class="agendamento">`
   - [ ] Apagar o `<li>` escrito à mão no `index.html`
5. [ ] Pacientes como objetos (1h)
   - [ ] `pacientes` vira array de objetos (`nome`, `cpf`, ...)
   - [ ] Cadastrar a Ana Souza (hoje ela tem agendamento mas não é paciente)
   - [ ] Ajustar o `dashboard.js` se precisar
6. [ ] Commit + atualizar este plano (10 min)

## Depois (ideias, sem ordem)
- Lista de pacientes gerada com JS (`pacientes.js`)
- Filtro de status (o `<select>`) funcionando
- `hoje` vindo do computador com `new Date()` em vez de escrito à mão
- Botão "Novo Agendamento": formulário + `push` no array
  - Cuidado: dado digitado pelo usuário dentro do `innerHTML` pode ser perigoso; ver como proteger antes

## Pendências menores
- Ícones do Figma: relógio no horário, seta no "Ver detalhes", ícones nos filtros, no título e no menu lateral
- Sombra leve nos cards (`box-shadow`)
- Cor do ícone do avatar (vem do SVG)
- `box-sizing: border-box`
- Favicon: `<link rel="icon" href="imgs/dente.png">` no `<head>`
- Data do título "Agendamentos do dia" ainda fixa no HTML

## Meta maior
Terminar este projeto, depois o próximo, com banco de dados. Alvo: ~10 projetos bons no portfólio.
