# API - Locadora de Veículo

## Login do Usuário

### Rotas Públicas

- **Cadastrar Login**
  - Método: `POST`	
  - Endpoint: `/cadastrar_login`
  - Descrição: Rota para cadastrar um novo login de usuário.
-{
-“nome”:”Fraulano de Tal”, 
-“email”:fulano@domino.com,
-“senha”:”12345”
-}


- **Login**
  - Método: `POST`
  - Endpoint: `/login`
  - Descrição: Rota para realizar o login do usuário.
{
“email”:fulano@domino.com,
		“senha”:”12345”
}


- **Consultar Logins Geral**
  - Método: `GET`
  - Endpoint: `/consultar_geral_login`
  - Descrição: Rota para consultar todos os logins de usuários cadastrados.
{
“email”:fulano@domino.com,
		“senha”:”12345”
}


### Rotas Protegidas
Essas rotas requerem que o usuário esteja autenticado (Deve ser informado o Token. Obtido com o login).

- **Consultar Login**
  - Método: `GET`
  - Endpoint: `/consultar_login`
  - Descrição: Rota para consultar os dados do login do usuário autenticado.
	-Não necessita informar nada no Body, apenas enviar o Token.
- **Atualizar Login**
  - Método: `POST`
  - Endpoint: `/atualizar_login`
  - Descrição: Rota para atualizar os dados do login do usuário autenticado.
-- Informar os campos a serem alterados.
{
“nome”:”Fraulano de Tal”, 
“email”:fulano@domino.com,
		“senha”:”12345”
}
- **Deletar Login**
  - Método: `DELETE`
  - Endpoint: `/deletar_login/:id`
  - Descrição: Rota para deletar o login do usuário especificado pelo `id`.
-- Informar no caminho da URL o dia do usuário.
