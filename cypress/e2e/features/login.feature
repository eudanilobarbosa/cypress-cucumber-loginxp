#language: pt

    Funcionalidade: Login

    Como um usuário regular do sistema, eu quero poder fazer Login
    Para que eu possa acessar minhas informações e também os recursos exclusivos do sistema

    BDD (Behavior Driven Development) - Desenvolvimento guiado por comportamento

   Contexto:
        Dado que acesso a página de login

    Cenario: Login do usuário

        Quando submeto minhas credenciais:
            |username|qa       |
            |password|xperience|
        Então sou autenticado no sistema

    Esquema do Cenario: Tentativa de fazer login

        Quando submeto minhas credenciais:
            |username|<usuario>|
            |password|<senha>  |
        Então devo ver a notificação "<mensagem>"

        Exemplos:
        |usuario|senha |mensagem                      |
        |qa     |abc123|Oops! Credenciais inválidas :(|
        |teste  |abc123|Oops! Credenciais inválidas :(|
        |       |123456|Informe o seu nome de usuário!|
        |qa     |      |Informe a sua senha secreta!  |


