# Task Management API

Esta é uma API simples de gerenciamento de tarefas construída com Node.js, Express e Mongoose. A API permite criar, ler, atualizar e excluir tarefas.

## Pré-requisitos

- Node.js (versão 12 ou superior)
- MongoDB

## Instalação

1. Clone o repositório:
    ```sh
    git clone https://github.com/seu-usuario/seu-repositorio.git
    cd seu-repositorio
    ```

2. Instale as dependências:
    ```sh
    npm install
    ```

3. Configure o banco de dados MongoDB no arquivo `.env` (crie um se não existir):
    ```sh
    MONGO_URI=mongodb://localhost:27017/nome-do-banco
    ```

## Uso

1. Inicie o servidor:
    ```sh
    npm start
    ```

2. Acesse a API em `http://localhost:3000`.

## Endpoints

### Obter todas as tarefas

- **URL**: `/tasks`
- **Método**: `GET`
- **Resposta de Sucesso**:
  - **Código**: `200 OK`
  - **Conteúdo**: Lista de todas as tarefas

### Obter uma tarefa por ID

- **URL**: `/tasks/:id`
- **Método**: `GET`
- **Parâmetros de URL**: `id` - ID da tarefa
- **Resposta de Sucesso**:
  - **Código**: `200 OK`
  - **Conteúdo**: Detalhes da tarefa

- **Resposta de Falha**:
  - **Código**: `404 Not Found`
  - **Conteúdo**: `Task not found`

### Criar uma nova tarefa

- **URL**: `/tasks/`
- **Método**: `POST`
- **Corpo da Requisição**: JSON com os dados da tarefa
- **Resposta de Sucesso**:
  - **Código**: `201 Created`
  - **Conteúdo**: Detalhes da tarefa criada

### Atualizar uma tarefa (campo `isCompleted`)

- **URL**: `/tasks/:id`
- **Método**: `PATCH`
- **Parâmetros de URL**: `id` - ID da tarefa
- **Corpo da Requisição**: JSON com o campo `isCompleted`
- **Resposta de Sucesso**:
  - **Código**: `200 OK`
  - **Conteúdo**: Detalhes da tarefa atualizada

- **Respostas de Falha**:
  - **Código**: `400 Bad Request`
  - **Conteúdo**: `Is not possible to update task description` ou `Invalid value for isCompleted`
  - **Código**: `404 Not Found`
  - **Conteúdo**: `Task not found`

### Deletar uma tarefa

- **URL**: `/tasks/:id`
- **Método**: `DELETE`
- **Parâmetros de URL**: `id` - ID da tarefa
- **Resposta de Sucesso**:
  - **Código**: `200 OK`
  - **Conteúdo**: Detalhes da tarefa deletada

- **Resposta de Falha**:
  - **Código**: `404 Not Found`
  - **Conteúdo**: `Task not found`

## Estrutura do Projeto

```plaintext
.
├── models
│   └── Task.js
├── routes
│   └── tasks.js
├── .env
├── app.js
├── package.json
└── README.md
