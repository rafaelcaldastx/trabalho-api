# Trabalho Final - 19MOB / DESENVOLVIMENTO DE APIS COM NODE.JS / LEANDRO FERREIRA DE FARIA

- Criação/Validação do Token deverá ser usado JWT;
- O token deve ter validade de 12 horas;
- Endpoint para criação de Token de autenticação;
- Todas as rotas precisam possuir um middleware de validação do Token;
- Tratamento de error 500 em qualquer rota/
- Rota de 404;
- Deverá ser criado dois recursos, um deverá ser de usuários e outro a sua escolha (ex.: produtos);
- Deverá existir uma organização no projeto, por exemplo, MVC (Model View Controller);
- Deverá existir integração com base de dados, por exemplo, firebase;
- Deverá estar disponível no Heroku, igual fizemos em sala de aula;
- Além dos arquivos que realizamos testes unitários na sala de aula, o arquivo de verifyToken deverá possuir testes.

Funções disponiveis:

    link do heroku: https://trabalho-api.herokuapp.com/
    
    post auth - autenticação pra receber o token
    (use o objeto a baixo)
    {
        "email": "leandroffaria@gmail.com",
        "password": "123456"
    }

    get   users/id recuperar usuário (id válido pra teste: IxF425tsgV8DTPPLHdUF)
    post  users    gravar usuário
    patch users/id atualizar usuário (passar um objeto válido, pode também usar o id IxF425tsgV8DTPPLHdUF)
    exemplo de objeto pra passar uma atualização:
    {
        "nome": "Leando F Faria atualizado",
        "email": "leandroffaria@gmail.com",
        "password": "123456"
    }

    get   produtos/id recuperar usuário (id válido pra teste: kTZiKc3LV9X9j3LN7HFE)
    post  produtos    gravar produto
    exemplo de objeto para inserir um produto:
    {
        "descricao": "Avaliação API",
        "valor": "10",
        "nome": "Avaliação"
    }

    Tratamento 404 - recurso não encontrado
    Tratamento 500 - Varia dependendo do que foi executado
    
    O teste realizado no verify token pensamos em realizar um post direto em alguma função usando um token valido, ou gerar um antes e posteriormente realizar uma requisição em outra função, mas pra isso estariamos envolvendo outras funções no teste e perderia um pouco a idéia de que cada teste é realizado em sua própria função, sendo assim geramos um token válido e manipulamos um retorno especifico dentro do verifyToken que só é respondido quando oriundo de um teste.
