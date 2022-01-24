## APLICAÇÃO DE NOTAS

- [Descrição](#descrição)
- [Instalação](#instalação)
- [Utilização](#utilização)
- [Termos de uso](#termos-de-uso)
- [Referências](#referências)

<br>

# Descrição

<p><b>Aplicação de notas</b> é uma aplicação simples que se propõe a realizar o CRUD (cadastro, visualização, atualização e deleção) de usuários assim como o de suas anotações e assim gerenciá-las. Esta aplicação utiliza o ambiente de execução Node.js e o framework Express.js</p>
<br>

# Instalação

<h5>0. Primeiramente, é necessário já ter instalado na própria máquina:</h5>

- <p> Um <b>editor de código</b>, conhecido também como <b>IDE</b>. Por exemplo, o <b>[Visual Studio Code (VSCode)](https://code.visualstudio.com/)</b>.</p>

- <p> Uma <b>ferramenta cliente de API REST</b>. Por exemplo, o <b>[Insomnia](https://insomnia.rest/download)</b> ou o <b>[Postman](https://www.postman.com/product/rest-client/)</b>. Utilizaremos neste README o Insomnia como base.</p>

- <p> E versionar o diretório para receber o clone da aplicação:</p>

```
git init
```

<h5>1. Fazer o clone do repositório <b>Aplicação de notas</b> na sua máquina pelo terminal do computador ou pelo do IDE:</h5>

```
git clone git@gitlab.com:ABKURA/aplicacao-de-notas.git
```

<p>Entrar na pasta criada:</p>

```
cd aplicacao-de-notas
```

<p>Instalar as dependências:</p>

```
yarn
```

<p><b>Obs:</b> caso não tenha o gerenciador de pacotes <b>yarn</b> instalar desta maneira:</p>

```
npm install --global yarn
```

<p>E rodar a aplicação:</p>

```
code .
```

# Utilização

<p>Antes de passarmos para o API Client precisamos rodar o CLI. Ou seja, a aplicação em si.</p>

```
yarn aplicacao-de-notas
```

<p>A aplicação rodará com o <b>localhost:3000</b>. Adicionar depois deste as rotas e suas terminações, ou <b>endpoints</b>, que veremos a seguir.</p>

<p>Após o CLI rodar de modo bem sucedido com o API Client aberto vamos utilizar as seguintes rotas:</p>

<h3>Rota <b>/users</b></h3>

<h4>Cadastro</h4>

Cadastro de usuários (Método POST): <b>/users</b>(ou localhost:3000/users)

Exemplo a ser colocado no body da requisição:

```
{
  "name": "Patrick",
  "cpf": "98765432100"
}
```

E a resposta esperada:

```
Status: 201 CREATED
```

```
{
  "id": "gt545re8-9aff-4024-b786-d2cfa25c9839",
  "name": "Patrick",
  "cpf": "98765432100",
  "notes": []
}
```

Caso o mesmo CPF seja registrado novamente a resposta deverá ser a seguinte:

```
Status: 409 CONFLICT
```

```
{
  "error": "CPF already registered!"
}
```

<h4>Listagem</h4>

Leitura dos usuários cadastrados (Método GET): <b>/users</b>(ou localhost:3000/users)

Exemplo a ser colocado no body da requisição:

```
(Requisição feita sem body)
```

E a resposta esperada:

```
Status: 200 OK
```

```
[
  {
    "id": "gt545re8-9aff-4024-b786-d2cfa25c9839",
    "name": "Patrick",
    "cpf": "98765432100",
    "notes": []
  }
]
```

<h4>Atualização:</h4>

Atualização de usuário cadastrado (Método PATCH): <b>/users/cpf**</b>(ou localhost:3000/users/cpf**)

\*\*preencher com o cpf do usuário anteriormente cadastrado.

Exemplo a ser colocado no body da requisição:

```
{
  "name": "Patrick da Silva",
  "cpf": "98765432100"
}
```

E a resposta esperada:

```
Status: 200 OK
```

```
{
  "message": "User is updated",
  "users": [
    {
      "id": "gt545re8-9aff-4024-b786-d2cfa25c9839",
      "name": "Patrick da Silva",
      "cpf": "98765432100",
      "notes": []
    }
  ]
}
```

<h4>Deleção de usuário:</h4>

Deleção de usuário cadastrado (Método DELETE): <b>/users/cpf</b>(ou localhost:3000/users/cpf)

Exemplo a ser colocado no body da requisição:

```
(Requisição feita sem body)
```

E a resposta esperada:

```
Status: 200 OK
```

```
{
  "message": "User is deleted",
  "users": []
}
```

<h3>Rota <b>/users/cpf**/notes</b></h3>

<h4>Criação</h4>

Criação de anotação (Método POST): <b>/users/cpf/notes</b>

Exemplo a ser colocado no body da requisição:

```
{
  "title": "Dica",
  "content": "Organizar meu dia"
}
```

E a resposta esperada:

```
{
  "message": "Dica was added into Patrick da Silva's notes"
}
```

<h4>Listagem</h4>

Listagem das anotações (Método GET): <b>/users/cpf/notes</b>

Exemplo a ser colocado no body da requisição:

```
(Requisição feita sem body)
```

E a resposta esperada:

```
[
  {
    "id": "bf526ce8-9aff-4024-b786-d2cfa25c9839",
    "created_at": "2021-11-24T17:10:41.253Z",
    "title": "Dica",
    "content": "Organizar meu dia pela manhã"
  }
]
```

<h4>Atualização</h4>

Atualização de anotação (Método PATCH): <b>/users/cpf/notes/id\*\*\*</b>

\*\*\*preencher com o id da anotação cadastrada.

Exemplo a ser colocado no body da requisição:

```
{
  "title": "Dica 1",
  "content": "Organizar meu próximo dia no final da tarde"
}
```

E a resposta esperada:

```
[
  {
    "id": "bf526ce8-9aff-4024-b786-d2cfa25c9839",
    "created_at": "2021-11-24T17:10:41.253Z",
    "title": "Dica 1",
    "content": "Organizar meu próximo dia no final da tarde",
    "updated_at": "2021-11-24T17:13:21.281Z"
  }
]
```

<h4>Deleção</h4>

Deleção da anotação (Método DELETE): <b>/users/cpf/notes/id</b>

Exemplo a ser colocado no body da requisição:

```
(Requisição feita sem body)
```

E a resposta esperada:

```
[]
```

# Termos de uso

<p>Esta aplicação atende a fins exclusivamente didáticos e não possui qualquer intuito comercial.</p>

# Referências

- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/en/4x/api.html)
- [Nodemon](https://nodemon.io/)
- [Sucrase](https://dev.to/evandersonvasconcelos/how-to-use-the-syntax-import-export-on-nodejs-o5b)
