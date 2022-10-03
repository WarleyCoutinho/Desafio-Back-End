# Desafio-Back-End

# VUTTR (Very Useful Tools to Remember - Ferramentas muito úteis para lembrar)

Sua tarefa é construir uma API e banco de dados para a aplicação VUTTR (Very Useful Tools to Remember).A aplicação é um simples repositório para gerenciar ferramentas com seus respectivos nomes, links, descrições e tags.

## Requisitos para executar a aplicação

### Requisitos

Ter instalado pelo menos um gerenciador de pacotes do Node,

- [Node.js](https://nodejs.org/)
  [Npm](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/).

## Para utilizar o projeto ## 🏁 Iniciando

1. Faça o seguinte [comando](https://yarnpkg.com/getting-started/install) após instalar o node, para executar o projeto com o gerenciador de pacotes [Yarn](https://yarnpkg.com/)
2. Após isso poderá fazer o download do projeto através do zip: https://github.com/WarleyCoutinho/Desafio-Back-End ou então realizando o clone do repositório https://github.com/WarleyCoutinho/Desafio-Back-End.git
3. Acessar a pasta onde salvou os arquivos e executar o comando abaixo para executar o projeto. Esse comando ira baixar todas as dependenias da aplicação.

```
yarn
```

4.Depois execulta esse comando para iniciar o prisma com suas dependenias para configurar
um banco de dados Postgres com 1 tabelas: A de ferramentas.

```
yarn prisma gerenete
```

5.Cria um arquivo .env na raiz do projeto com as sequintes informações abaixo.

```
DATABASE_URL="postgresql://postgres:Avl@2023@127.0.0.1:5432/vuttr/?schema=public"
```

obs: Atualizar variaveis de abientes conforme as que estao no seu banco de bados.
6- depois abrir o docker onde esta seu banco de dados ou na sua maquinha onde esta
o seu banco e criar a nome do banco ex: vuttr ou simplesmente execultar o sequinte comando
que automaticamente ele conecta ao seu banco e e ja cria o banco com a tabela se tiver
passado todos os parametos na variavel de anbiente .env

```
yarn prisma migrate dev
```

## 🎈 Rodar o projeto

```
yarn start:dev
```

## Rotas da aplicação

- A aplicação executa em http://localhost/3000
- `/tools?tag=TypeScript -> utilizando o método GET nessa rota irá listar todas ferramentas que tem a tag 'TypeScript'`

  ° GET http://localhost:3000/tools/tags - Listar por tags
  {
  "getTagsTool": {
  "id": 2,
  "title": "TypeScript é JavaScript com sintaxe para tipos.",
  "links": "https://www.prisma.io",
  "descriptions": "TypeScript é uma linguagem de programação fortemente tipada que se baseia em JavaScript, oferecendo melhores ferramentas em qualquer escala.",
  "tags": [
  "TypeScript"
  ],
  "createdAt": "2022-10-02T00:02:43.292Z",
  "updatedAt": "2022-10-02T00:02:43.292Z"
  }
  }

- `/tools -> utilizando o método POST nessa rota irá criar uma ferramenta `
  ° POST http://localhost:3000/tools - Criar Ferramentas
  {
  "title":"Node.js e TypeScript ORM de última geração",
  "links":"https://www.prisma.io",
  "descriptions":"O Prisma desbloqueia um novo nível de experiência do desenvolvedor ao trabalhar com bancos de dados graças ao seu modelo de dados intuitivo, migrações automatizadas, segurança de tipo e preenchimento automático.",
  "tags":["Node.js","TypeScript","PostgreSQL","Next-generation ","ORM"]
  }
- `/tools -> utilizando o método GET nessa rota irá listar todas as ferramentas `
  ° GET http://localhost:3000/tools - Listar todas as ferramentas cadastradas no banco.
  [
  {
  "id": 1,
  "title": "Node.js e TypeScript ORM de última geração",
  "links": "https://www.prisma.io",
  "descriptions": "O Prisma desbloqueia um novo nível de experiência do desenvolvedor ao trabalhar com bancos de dados graças ao seu modelo de dados intuitivo, migrações automatizadas, segurança de tipo e preenchimento automático.",
  "tags": [
  "Node.js",
  "TypeScript",
  "PostgreSQL",
  "Next-generation ",
  "ORM"
  ],
  "createdAt": "2022-10-02T00:00:21.445Z",
  "updatedAt": "2022-10-02T00:00:21.445Z"
  },
  {
  "id": 2,
  "title": "TypeScript é JavaScript com sintaxe para tipos.",
  "links": "https://www.prisma.io",
  "descriptions": "TypeScript é uma linguagem de programação fortemente tipada que se baseia em JavaScript, oferecendo melhores ferramentas em qualquer escala.",
  "tags": [
  "TypeScript"
  ],
  "createdAt": "2022-10-02T00:02:43.292Z",
  "updatedAt": "2022-10-02T00:02:43.292Z"
  },
  {
  "id": 3,
  "title": "Node.js.",
  "links": "https://www.prisma.io",
  "descriptions": "Como um tempo de execução JavaScript assíncrono orientado a eventos, o Node.js foi projetado para criar aplicativos de rede escaláveis.",
  "tags": [
  "Node.js"
  ],
  "createdAt": "2022-10-02T00:05:39.405Z",
  "updatedAt": "2022-10-02T00:05:39.405Z"
  },
  {
  "id": 4,
  "title": "PostgreSQL.",
  "links": "https://www.prisma.io",
  "descriptions": "O PostgreSQL é um poderoso sistema de banco de dados relacional de objeto de código aberto que usa e estende a linguagem SQL combinada com muitos recursos que armazenam e dimensionam com segurança as cargas de trabalho de dados mais complicadas. As origens do PostgreSQL remontam a 1986 como parte do projeto POSTGRES na Universidade da Califórnia em Berkeley e tem mais de 30 anos de desenvolvimento ativo na plataforma principal.",
  "tags": [
  "PostgreSQL"
  ],
  "createdAt": "2022-10-02T00:07:05.643Z",
  "updatedAt": "2022-10-02T00:07:05.643Z"
  }
  ]
- `/tools/1 -> utilizando o método GET nessa rota irá listar a ferramenta de acordo com o id que foi informado`

° GET http://localhost:3000/tools/4 - Listar ferramenta por Id.

{
"getIdTool": {
"id": 4,
"title": "PostgreSQL.",
"links": "https://www.prisma.io",
"descriptions": "O PostgreSQL é um poderoso sistema de banco de dados relacional de objeto de código aberto que usa e estende a linguagem SQL combinada com muitos recursos que armazenam e dimensionam com segurança as cargas de trabalho de dados mais complicadas. As origens do PostgreSQL remontam a 1986 como parte do projeto POSTGRES na Universidade da Califórnia em Berkeley e tem mais de 30 anos de desenvolvimento ativo na plataforma principal.",
"tags": [
"PostgreSQL"
],
"createdAt": "2022-10-02T00:07:05.643Z",
"updatedAt": "2022-10-02T00:07:05.643Z"
}
}

- `/tools/1 -> utilizando o método PUT nessa rota irá alterar uma ferramenta de acordo com o id que foi informado`
  ° PUT http://localhost:3000/tools/1 - Atualizar a ferramenta conforme o campo que desejar
  {
  "updateTool": {
  "id": 1,
  "title": "Node.js e TypeScript ORM de última geração",
  "links": "https://www.prisma.io",
  "descriptions": "O Prisma desbloqueia um novo nível de experiência do desenvolvedor ao trabalhar com bancos de dados graças ao seu modelo de dados intuitivo, migrações automatizadas, segurança de tipo e preenchimento automático.",
  "tags": [
  "Node.js",
  "TypeScript",
  "PostgreSQL"
  ],
  "createdAt": "2022-10-02T00:00:21.445Z",
  "updatedAt": "2022-10-02T00:14:52.063Z"
  }
  }
  nesse explo acima so atualizei as tags!

- `/tools/1 -> utilizando o método DELETE nessa rota irá excluir a ferramenta de acordo com o id que foi informado`

° DELETE http://localhost:3000/tools/:1 - Apagarar a ferramaenta conforme o id que passar.
Para mais informaçoes de como utilizar essas rotas e quais parâmetros utilizar, tem a documentação da API, que se encontra dentro da pasta do projeto, no arquivo de **api.apib**

## 🔧 Executando os testes

```sh
yarn test
```

### Sobre os testes

Para essa aplicação, implementei os seguintes testes:

- **`should be able to create a new tool`**: Para que esse teste passe, a aplicação deve permitir que uma ferramenta seja criada, e retorne um json com a ferramenta criada.
- **`should be able to list the tools`**: Para que esse teste passe, a aplicação deve permitir que seja retornado um array contendo todas as ferramentas.
- **`should be able to list tools with tag filter`**: Para que esse teste passe, sua aplicação deve permitir que seja retornado um objeto contendo todas as ferramentas que contém a tag passada na rota.
- **`should be able to delete a tool`**: Para que esse teste passe, a aplicação deve permitir deletar uma ferramenta.
- **`should not be able to delete a nonexistent tool`**: Para que esse teste passe, a aplicação não deve permitir deletar uma ferramenta que não exista.

### ⛏️ Tecnologias utilizadas na aplicação

- [Node.js](https://nodejs.org/en/)
- [Visual Studio Code](https://code.visualstudio.com/)
- [nestjs](https://docs.nestjs.com/)
- [prisma](https://www.prisma.io/)
- [postgresql](https://www.postgresql.org/)
- [typescript](https://www.typescriptlang.org/)
- [ts-node](https://www.npmjs.com/package/ts-node)
