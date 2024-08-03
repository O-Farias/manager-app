# Manager

Esta é uma aplicação Node.js que gerencia livros e usuários, com autenticação JWT.

## Instalação

1. Clone o repositório:
   ```sh
   git clone https://github.com/O-Farias/manager-app
   ```
2. Navegue até o diretório do projeto:
   ```sh
   cd Projeto-Final
   ```
3. Instale as dependências:
   ```sh
   npm install
   ```

## Configuração

Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

PORT=3000 JWT_KEY=a-very-secure-secret-key

## Executando o Projeto

Para iniciar o servidor, execute:

```sh
npm start
```

O servidor será iniciado em http://localhost:3000.

## Endpoints

### Autenticação

- POST /auth/register: Registra um novo usuário.
- POST /auth/login: Faz login de um usuário.

### Livros

- GET /api/books: Retorna todos os livros.
- GET /api/books/:id: Retorna um livro específico pelo ID.
- POST /api/books: Cria um novo livro.
- PUT /api/books/:id: Atualiza um livro existente pelo ID.
- DELETE /api/books/:id: Deleta um livro pelo ID.

### Middleware

- auth-middleware.js: Middleware para garantir que o usuário esteja autenticado.

### Modelos

- users-model.js: Modelo para gerenciar usuários.
- books-model.js: Modelo para gerenciar livros.

### Controladores

- auth-controllers.js: Controladores para autenticação.
- books-controller.js: Controladores para gerenciamento de livros.

### Dependências

- bcrypt: Para hashing de senhas.
- dotenv: Para carregar variáveis de ambiente.
- express: Framework web.
- jsonwebtoken: Para geração e verificação de tokens JWT.
- uuid: Para geração de IDs únicos.

## Licença

Este projeto está licenciado sob a MIT License.
