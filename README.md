# Desafio-Back-End

# VUTTR (Very Useful Tools to Remember - Ferramentas muito úteis para lembrar)

Sua tarefa é construir uma API e banco de dados para a aplicação VUTTR (Very Useful Tools to Remember).A aplicação é um simples repositório para gerenciar ferramentas com seus respectivos nomes, links, descrições e tags.

## Requisitos para executar a aplicação

### Requisitos

Ter instalado um gerenciador de pacotes do Node,

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

obs: Atualizar variáveis de ambientes conforme as que estão no seu banco de bados.

6- depois abrir o docker onde está seu banco de dados ou na sua máquina onde está
o seu banco e criar a nome do banco ex: vuttr ou simplesmente executar o seguinte comando abaixo,
que automaticamente ele conecta ao seu banco ele já cria o banco com a tabela se tiver
passado todos os parâmetros na variável de ambiente .env

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

  ° GET http://localhost:3000/tools/:tags - Listar por tags

- `/tools -> utilizando o método POST nessa rota irá criar uma ferramenta `
  ° POST http://localhost:3000/tools - Criar Ferramentas

- `/tools -> utilizando o método GET nessa rota irá listar todas as ferramentas `
  ° GET http://localhost:3000/tools - Listar todas as ferramentas cadastradas no banco.
- `/tools/:id -> utilizando o método GET nessa rota irá listar a ferramenta de acordo com o id que foi informado`

° GET http://localhost:3000/tools/:id - Listar ferramenta por Id.

- `/tools/:id -> utilizando o método PUT nessa rota irá alterar uma ferramenta de acordo com o id que foi informado`
  ° PUT http://localhost:3000/tools/:id - Atualizar a ferramenta conforme o campo que desejar
- `/tools/:id -> utilizando o método DELETE nessa rota irá excluir a ferramenta de acordo com o id que foi informado`

° DELETE http://localhost:3000/tools/:id - Apagarar a ferramaenta conforme o id que passar.

Para mais informaçoes de como utilizar essas rotas e quais parâmetros utilizar, tem a documentação da API, que se encontra dentro da pasta do projeto, no arquivo de **api.apib**

## 🔧 Executando os testes

```
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

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
