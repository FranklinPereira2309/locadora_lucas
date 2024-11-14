# API - Locadora de Veículo

## Login do Usuário

### Rotas Públicas

- **Cadastrar Login**
  - Método: `POST`
  - Endpoint: `/cadastrar_login`
  - Descrição: Rota para cadastrar um novo login de usuário.

- **Login**
  - Método: `POST`
  - Endpoint: `/login`
  - Descrição: Rota para realizar o login do usuário.

- **Consultar Logins Geral**
  - Método: `GET`
  - Endpoint: `/consultar_geral_login`
  - Descrição: Rota para consultar todos os logins de usuários cadastrados.

### Rotas Protegidas

Essas rotas requerem que o usuário esteja autenticado.

- **Consultar Login**
  - Método: `GET`
  - Endpoint: `/consultar_login`
  - Descrição: Rota para consultar os dados do login do usuário autenticado.

- **Atualizar Login**
  - Método: `POST`
  - Endpoint: `/atualizar_login`
  - Descrição: Rota para atualizar os dados do login do usuário autenticado.

- **Deletar Login**
  - Método: `DELETE`
  - Endpoint: `/deletar_login/:id`
  - Descrição: Rota para deletar o login do usuário especificado pelo `id`.

 
