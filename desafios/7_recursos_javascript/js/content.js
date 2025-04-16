const method = document.querySelectorAll(".methods");
const container = document.querySelector(".container");

const resources = [
  {
    contents: [
      { type: "h2", text: "Promises" },
      {
        type: "p",
        text: "Uma promessa é um objeto que representa a eventual conclusão (ou falha) de uma operação assíncrona e seu valor resultante.",
      },
      { type: "p", text: "Data:" },
      {
        type: "code",
        text: "{ id: 123, name: 'Algum dado' }",
      },
      { type: "p", text: "Resultado:" },
      {
        type: "code",
        text: "Dados carregados com sucesso: {id: 123, name: 'Algum dado'}",
      },
    ],
  },
  {
    contents: [
      { type: "h2", text: "Arrow Functions" },
      {
        type: "p",
        text: "Arrow functions são uma forma mais curta de escrever funções em JavaScript. Elas não têm seu próprio this, o que significa que elas herdam o this do contexto em que foram definidas.",
      },
      { type: "p", text: "Função tradicional:" },
      { type: "code", text: "{ function soma(a, b) { return a + b; } } " },
      { type: "p", text: "Arrow function:" },
      { type: "code", text: "{ const soma = (a, b) => a + b;}" },
      { type: "p", text: "Resultado:" },
      {
        type: "code",
        text: "5",
      },
    ],
  },
  {
    contents: [
      { type: "h2", text: "Destructuring" },
      {
        type: "p",
        text: "Destructuring permite extrair valores de arrays ou propriedades de objetos em variáveis distintas.",
      },
      { type: "p", text: "Data:" },
      {
        type: "code",
        text: "const usuario = { nome: 'João', idade: 30, email: 'joao@example.com' }",
      },
      {
        type: "p",
        text: "Extrai o nome e o email do objeto usuario em variáveis separadas:",
      },
      { type: "code", text: "const { nome, email } = usuario;" },
      { type: "p", text: "Resultado:" },
      { type: "code", text: "console.log(nome, email);" },
      {
        type: "code",
        text: "João joao@example.com",
      },
      {
        type: "p",
        text: "Em arrays.",
      },
      { type: "p", text: "Data:" },
      {
        type: "code",
        text: "const numerosB = [1, 2, 3];",
      },
      {
        type: "p",
        text: "Extrai os elementos do array em variáveis separadas:",
      },
      { type: "code", text: "const [a, b, c] = numerosB;" },
      { type: "p", text: "Resultado:" },
      {
        type: "code",
        text: "console.log(a); = 1, console.log(b); = 2, console.log(c); = 3. ",
      },
      {
        type: "p",
        text: "Em funções.",
      },
      {
        type: "p",
        text: "Deve passar no parâmetro da função o nome da key exatamente igual do dicionário/array object:",
      },
      {
        type: "code",
        text: "function exibeDadosUsuario({ nome, email }) {   console.log(`Nome: ${nome}`);   console.log(`E-mail: ${email}`); }",
      },
      {
        type: "p",
        text: "Chama a função com o objeto usuario como argumento:",
      },
      { type: "code", text: "exibeDadosUsuario(usuarioB);" },
      { type: "p", text: "Resultado:" },
      {
        type: "code",
        text: "Nome: João, E-mail: joao@example.com",
      },
    ],
  },
  {
    contents: [
      { type: "h2", text: "Template literals" },
      {
        type: "p",
        text: "Template literals são strings que permitem interpolação de variáveis e expressões.",
      },
      { type: "p", text: "Data:" },
      {
        type: "code",
        text: "const nomeUsuario = 'João'; const idade = 30;",
      },
      {
        type: "p",
        text: "Cria uma string usando um template literal",
      },
      {
        type: "code",
        text: "const mensagem = `Olá, meu nome é ${nomeUsuario} e eu tenho ${idade} anos.`;",
      },
      { type: "p", text: "Resultado:" },
      {
        type: "code",
        text: "Olá, meu nome é João e eu tenho 30 anos.",
      },
      {
        type: "p",
        text: "Com if ternário.",
      },
      { type: "p", text: "Data:" },
      {
        type: "code",
        text: "const saldo = 1000;",
      },
      {
        type: "p",
        text: "Cria uma string usando um template literal e uma expressão ternária",
      },
      {
        type: "code",
        text: "const mensagemB = `Seu saldo atual é ${saldo > 0 ? `$${saldo}` : 'negativo'}.`;",
      },
      { type: "p", text: "Resultado:" },
      {
        type: "code",
        text: "Seu saldo atual é $1000.",
      },
    ],
  },
  {
    contents: [
      { type: "h2", text: "Rest e spread" },
      {
        type: "p",
        text: "Rest e spread são operadores que permitem trabalhar com arrays e objetos de forma mais flexível.",
      },
      { type: "p", text: "Rest:" },
      {
        type: "code",
        text: "function somaC(...numeros) {  return numeros.reduce((total, numero) => total + numero);}",
      },
      { type: "p", text: "Resultado:" },
      {
        type: "code",
        text: "console.log(somaC(1, 2, 3, 4, 5)); = 15",
      },
      {
        type: "p",
        text: "Spread:",
      },
      { type: "p", text: "Data:" },
      {
        type: "code",
        text: "const numeros1 = [1, 2, 3]; const numeros2 = [4, 5, 6];",
      },
      {
        type: "p",
        text: "Combina os dois arrays usando o operador spread.",
      },
      {
        type: "code",
        text: "const numerosCombinados = [...numeros1, ...numeros2];",
      },
      { type: "p", text: "Resultado:" },
      {
        type: "code",
        text: "console.log(numerosCombinados); = [1, 2, 3, 4, 5, 6]",
      },
      {
        type: "p",
        text: "Também combina objetos:",
      },
      { type: "p", text: "Data:" },
      {
        type: "code",
        text: "const usuarioC = { nome: 'Pedro', idade: 30, };",
      },
      {
        type: "p",
        text: "Copia o objeto usuario e adiciona uma nova propriedade.",
      },
      {
        type: "code",
        text: "const usuarioComEndereco = { ...usuario, endereco: 'Rua 1, nº 123' };",
      },
      { type: "p", text: "Resultado:" },
      {
        type: "code",
        text: "console.log(usuarioComEndereco);",
      },
      {
        type: "code",
        text: "{ nome: 'Pedro', idade: 30, endereco: 'Rua 1, nº 123' }",
      },
    ],
  },
  {
    contents: [
      { type: "h2", text: "Classes" },
      {
        type: "p",
        text: "Classes são uma forma de criar objetos e definir seu comportamento em JavaScript.",
      },
      { type: "p", text: "Estrutura:" },
      {
        type: "code",
        text: "class Pessoa { constructor(nome, idade) { this.nome = nome; this.idade = idade; } apresenta() { console.log(`Meu nome é ${this.nome} e eu tenho ${this.idade} anos.`); }}",
      },
      { type: "p", text: "Criando novos objetos:" },
      {
        type: "code",
        text: "const pessoa1 = new Pessoa('João', 30); const pessoa2 = new Pessoa('Maria', 25);",
      },
      {
        type: "p",
        text: "Resultado:",
      },
      {
        type: "code",
        text: "pessoa1.apresenta(); = 'Meu nome é João e eu tenho 30 anos.'",
      },
      {
        type: "code",
        text: "pessoa2.apresenta(); = 'Meu nome é Maria e eu tenho 25 anos.'",
      },
      {
        type: "p",
        text: "Criando herança entre classes:",
      },
      {
        type: "code",
        text: "class Funcionario extends Pessoa { constructor(nome, idade, salario) { super(nome, idade); this.salario = salario; } apresenta() { console.log( `Meu nome é ${this.nome}, eu tenho ${this.idade} anos e meu salário é ${this.salario}.` );}",
      },
      { type: "p", text: "Criando novos objetos:" },
      {
        type: "code",
        text: "const funcionario1 = new Funcionario('Pedro', 35, 5000); const funcionario2 = new Funcionario('Ana', 28, 4000);",
      },
      {
        type: "p",
        text: "Resultado:",
      },
      {
        type: "code",
        text: "funcionario1.apresenta(); = 'Meu nome é Pedro, eu tenho 35 anos e meu salário é 5000.'",
      },
      {
        type: "code",
        text: "funcionario2.apresenta(); = 'Meu nome é Ana, eu tenho 28 anos e meu salário é 4000.'",
      },
    ],
  },
  {
    contents: [
      { type: "h2", text: "Métodos de Array" },
      {
        type: "p",
        text: "Os métodos de array, como map, filter, reduce, find e forEach, ajudam a manipular arrays de forma funcional.",
      },
      { type: "p", text: "Map:" },
      { type: "p", text: "Data:" },
      { type: "code", text: "const numerosC = [1, 2, 3];" },
      { type: "p", text: "Dobra os valores do array:" },
      {
        type: "code",
        text: "const numerosDobrados = numerosC.map((numero) => numero * 2);",
      },
      { type: "p", text: "Resultado:" },
      { type: "code", text: "[2, 4, 6]" },

      { type: "p", text: "Filter:" },
      { type: "p", text: "Data:" },
      { type: "code", text: "const numerosD = [1, 2, 3, 4, 5];" },
      { type: "p", text: "Filtra apenas os números ímpares:" },
      {
        type: "code",
        text: "const numerosImpares = numerosD.filter((numero) => numero % 2 === 1);",
      },
      { type: "p", text: "Resultado:" },
      { type: "code", text: "[1, 3, 5]" },

      { type: "p", text: "Reduce:" },
      { type: "p", text: "Data:" },
      { type: "code", text: "const numerosE = [1, 2, 3, 4, 5];" },
      { type: "p", text: "Soma todos os números do array:" },
      {
        type: "code",
        text: "const somaNumeros = numerosE.reduce((total, numero) => total + numero, 0);",
      },
      { type: "p", text: "Resultado:" },
      { type: "code", text: "15" },

      { type: "p", text: "Find:" },
      { type: "p", text: "Data:" },
      { type: "code", text: "const numerosF = [1, 2, 3, 4, 5];" },
      { type: "p", text: "Encontra o número 3 no array:" },
      {
        type: "code",
        text: "const numero3 = numerosF.find((numero) => numero === 3);",
      },
      { type: "p", text: "Resultado:" },
      { type: "code", text: "3" },

      { type: "p", text: "ForEach:" },
      { type: "p", text: "Data:" },
      { type: "code", text: "const nomes = ['Pedro', 'Paulo', 'Jeferson'];" },
      { type: "p", text: "Itera sobre cada nome no array:" },
      { type: "code", text: "nomes.forEach((nome) => console.log(nome));" },
      { type: "p", text: "Resultado:" },
      { type: "code", text: "Pedro, Paulo, Jeferson" },
    ],
  },
];

// Cria as sections dinamicamente
function createSection() {
  resources.forEach((resource) => {
    const section = document.createElement("section");
    section.classList.add("section-methods");

    resource.contents.forEach((content) => {
      const element = document.createElement(content.type);
      element.innerText = content.text;
      section.appendChild(element);
    });

    container.appendChild(section);
  });
}

createSection();
