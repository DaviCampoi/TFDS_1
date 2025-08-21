

document.addEventListener("DOMContentLoaded", async () => {

    const toDos = [
        "Estudar HTML semântico",
        "Praticar CSS básico",
        "Revisar seletores CSS",
        "Montar página com Flexbox",
        "Adicionar responsividade com media queries",
        "Estudar JavaScript básico",
        "Praticar manipulação do DOM",
        "Implementar evento de clique em botão",
        "Criar lista dinâmica com JS",
        "Estudar funções em JavaScript",
        "Aprender sobre arrays e objetos",
        "Praticar laços (for, while)",
        "Estudar fetch() e requisições HTTP",
        "Consumir API simples (ex: Pokédex)",
        "Criar mini-projeto integrando tudo"
    ];

    const buttonListAddElement = document.getElementsByClassName("btn")[0];

    buttonListAddElement.addEventListener("click", (event) => {
        event.preventDefault();

        // Adicionar event

    });

    // Codar aqui

    // Professor, comentei em cada linha para ficar mais fácil de estudar o meu código para execução de próximas tarefas

    // 1) Criar uma list <ul> com itens <li> das tarefas já existentes na array

  const listWrapper = document.getElementById("list-wrapper"); // pega a section id="list-wrapper" do HTML
  const ul = document.createElement("ul");                      // cria dinamicamente um elemento ul
  ul.id = "todo-list";                                          // dá um id para a ul
  listWrapper.appendChild(ul);                                  // coloca a ul como filha dentro do wrapper

  // 2) No listener de click no botão de Adicionar, capturar o valor de input e criar mais um <li> abaixo da lista de tarefas.

  function createListItem(text) {                               // função reutilizável que monta um li completo a partir de um texto
    const li = document.createElement("li");                    // cria o li que vai na lista

    const span = document.createElement("span");                // cria um span para conter o texto da tarefa
    span.innerText = text;                                      // define o texto visível do <pan

    const delBtn = document.createElement("button");            // cria o botão de deletar
    delBtn.type = "button";                                     // evita comportamento de "submit" se estiver dentro de um <form>
    delBtn.className = "delete-btn";                            // adiciona classe 
    delBtn.innerText = "Deletar";                               // texto que aparece no botão

    // 4) Listener que remove o <li> pai
    delBtn.addEventListener("click", () => {                    // quando clicar no botão...
      li.remove();                                              // ...remove o li do DOM (para apagar a tarefa visualmente)
    });

    li.appendChild(span);                                       // coloca o span texto dentro do li
    li.appendChild(delBtn);                                     // coloca o botão dentro do li
    return li;                                                  // devolve o li montado para quem chamou a função
  }

 
  toDos.forEach(todo => {                                       // percorre cada item do array toDos
    ul.appendChild(createListItem(todo));                       // cria um li para cada tarefa e adiciona na ul
  });


  // Tenta pegar um input com id 'todo-input'; se não existir, usa o primeiro <input> da página
  const input =
    document.getElementById("todo-input") || document.querySelector("input"); // busca o #todo-input; se não houver, pega o primeiro <input> que encontrar

  // Função que adiciona a partir do input
  function addFromInput() {                                     // encapsula a lógica de adicionar nova tarefa
    const value = (input?.value || "").trim();                  // lê o texto do input com segurança (?.) e remove espaços das pontas
    if (!value) {                                               // se estiver vazio depois do trim...
      input?.focus();                                           // ...só dá foco no input e sai
      return;                                                   // não adiciona nada
    }
    ul.appendChild(createListItem(value));                      // cria e adiciona um novo li com o texto digitado
    if (input) {                                                // se o input existir...
      input.value = "";                                         // ...limpa o campo
      input.focus();                                            // ...e volta o foco para digitar a próxima tarefa
    }
  }

  // 4) Listener do botão "Adicionar"
  buttonListAddElement.addEventListener("click", (event) => {   // quando clicar no botão de adicionar...
    event.preventDefault();                                     // evita, por exemplo, recarregar a página se estiver dentro de um <form>
    addFromInput();                                             // chama a função que adiciona a tarefa
  });

  
});
