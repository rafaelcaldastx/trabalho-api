# Trabalho Final - 19MOB / DESENVOLVIMENTO DE APIS COM NODE.JS / LEANDRO FERREIRA DE FARIA

- [x]  Criação/Validação do Token deverá ser usado JWT;
- [x]  O token deve ter validade de 12 horas;
- [x]  Endpoint para criação de Token de autenticação;
- [x]  Todas as rotas precisam possuir um middleware de validação do Token;
- [x]  Tratamento de error 500 em qualquer rota/
- [x]  Rota de 404;
- [x]  Deverá ser criado dois recursos, um deverá ser de usuários e outro a sua escolha (ex.: produtos);
- [x]  Deverá existir uma organização no projeto, por exemplo, MVC (Model View Controller);
- [x]  Deverá existir integração com base de dados, por exemplo, firebase;
- [x]  Deverá estar disponível no Heroku, igual fizemos em sala de aula;
- [x]  Além dos arquivos que realizamos testes unitários na sala de aula, o arquivo de verifyToken deverá possuir testes.

[link do heroku](https://trabalho-api.herokuapp.com/): https://trabalho-api.herokuapp.com/

**(Leandro, não esquece de acessar o link do heroku e esperar retornar a mensagem da api, os apps gratuitos do heroku entram em modo sleep automaticamente após 30 minutos de inatividade precisando ser chamados pra acordarem)**

## Funções disponiveis:
### Auth:
| **Verbo**  |  **Rota**  | **Função** |
| --- | --- | --- |
|  **POST**  |  **/auth**  |  - autenticação pra receber o token | 

 (use o objeto a baixo)

```javascript
{
    "email": "leandroffaria@gmail.com",
    "password": "123456"
}
```
### Users:
| **Verbo**  |  **Rota**  | **Função** |
| --- | --- | --- |
| **GET** |  **/users/:id** | recuperar usuário (id válido pra teste: IxF425tsgV8DTPPLHdUF) |
| **POST** | **/users** | gravar usuário |
| **PATCH** | **/users/:id** | atualizar usuário (passar um objeto válido, pode também usar o id IxF425tsgV8DTPPLHdUF) |

exemplo de objeto pra passar uma atualização:
```javascript
{
    "nome": "Leando F Faria atualizado",
    "email": "leandroffaria@gmail.com",
    "password": "123456"
}
```
### Produtos:
| **Verbo**  |  **Rota**  | **Função** |
| --- | --- | --- |
| **GET** | **/produtos/:id** | recuperar usuário (id válido pra teste: kTZiKc3LV9X9j3LN7HFE)
| **POST** | **/produtos** | gravar produto
exemplo de objeto para inserir um produto:
```javascript
{
    "descricao": "Avaliação API",
    "valor": "10",
    "nome": "Avaliação"
}
```

**Tratamento 404** - recurso não encontrado

**Tratamento 500** - Varia dependendo do que foi executado
    
O teste realizado no verify token pensamos em realizar um post direto em alguma função usando um token valido, ou gerar um antes e posteriormente realizar uma requisição em outra função, mas pra isso estariamos envolvendo outras funções no teste e perderia um pouco a idéia de que cada teste é realizado em sua própria função, sendo assim geramos um token válido e manipulamos um retorno especifico dentro do verifyToken que só é respondido quando oriundo de um teste.
