API - Locadora de Veículo
Login do Usuário
Rotas Públicas
•	Cadastrar Login
o	Método: POST
o	Endpoint: /cadastrar_login
o	Descrição: Rota para cadastrar um novo login de usuário.
o	Exemplo de Body
{
  "nome": "Fraulano de Tal",
  "email": "fulano@dominio.com",
  "senha": "12345"
}

Login
•	Método: POST
•	Endpoint: /login
•	Descrição: Rota para realizar o login do usuário.
•	Exemplo de Body
{
  "email": "fulano@dominio.com",
  "senha": "12345"
}
Consultar Logins Geral
•	Método: GET
•	Endpoint: /consultar_geral_login
•	Descrição: Rota para consultar todos os logins de usuários cadastrados.
•	Exemplo de Body:

{
  "email": "fulano@dominio.com",
  "senha": "12345"
}
Rotas Protegidas
Essas rotas requerem que o usuário esteja autenticado (deve ser informado o Token, obtido com o login).
•	Consultar Login
o	Método: GET
o	Endpoint: /consultar_login
o	Descrição: Rota para consultar os dados do login do usuário autenticado.
o	Não necessita informar nada no Body, apenas enviar o Token.
•	Atualizar Login
o	Método: POST
o	Endpoint: /atualizar_login
o	Descrição: Rota para atualizar os dados do login do usuário autenticado.
o	Informar os campos a serem alterados.
o	Exemplo de Body
{
  "nome": "Fraulano de Tal",
  "email": "fulano@dominio.com",
  "senha": "12345"
}
Deletar Login
•	Método: DELETE
•	Endpoint: /deletar_login/:id
•	Descrição: Rota para deletar o login do usuário especificado pelo id.
•	Informar o id do usuário no caminho da URL.



