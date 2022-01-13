## APLICAÇÃO DE NOTAS

- [Descrição](#descrição)
- [Instalação](#instalação)
- [Utilização](#utilização)
- [Termos de uso](#termos-de-uso)

<br>

# Descrição

<p><b>Aplicação de notas</b> é uma aplicação simples que se propõe a realizar o CRUD (cadastro, visualização, atualização e deleção) de usuários assim como o de suas anotações e assim gerenciá-las. Esta aplicação utiliza os frameworks Node.js e Express.js</p>
<br>

# Instalação

<p>0. Primeiramente, é necessário já ter instalado na própria máquina:

<p> Um <b>editor de código</b>, conhecido também como <b>IDE</b>. Por exemplo, o <b>Visual Studio Code (VSCode)</b>.</p>

<p> Uma <b>ferramenta cliente de API REST</b>. Por exemplo, o <b>Insomnia</b> ou o <b>Postman</b>.</p>

<p>1. Fazer o clone do reposítório <b>Aplicação de notas</b> na sua máquina pelo terminal do computador ou pelo do IDE:</p>

```
git@gitlab.com:ABKURA/aplicacao-de-notas.git
```

<p>Entrar na pasta criada:</p>

```
cd aplicacao-de-notas
```

<p>E rodar a aplicação:</p>

```
code .
```

<p>2. Feita a clonagem, instalar no terminal:</p>

O gerenciador de pacotes <b>yarn</b>:

```
npm install --global yarn
```

O ambiente de execução <b>Node.js</b>. Disponível em https://nodejs.org/en/.

O framework <b>Express.js</b>:

```
yarn add express
```

A biblioteca <b>Nodemon</b>:

```
yarn add nodemon -D
```

O compilador <b>Sucrase</b>:

```
yarn add nodemon sucrase
```

E a biblioteca <b>UUID</b>:

```
yarn add uuid
```

# Utilização

<p>Antes de passarmos para o API Client precisamos rodar o CLI</p>

```
yarn aplicacao-de-notas
```

<p>A aplicação rodará com o <b>localhost:3000</b>. Adicionar depois deste as rotas e suas terminações, ou <b>endpoints</b>, que veremos a seguir.</p>

<p>Após o CLI rodar de modo bem sucedido com o API Client aberto vamos utilizar as seguintes rotas:</p>

<h3>Rota <b>/users</b></h3>

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
{
  "id": "gt545re8-9aff-4024-b786-d2cfa25c9839",
  "name": "Patrick",
  "cpf": "98765432100",
  "notes": []
}
```

Leitura dos usuários cadastrados (Método GET): <b>/users</b>(ou localhost:3000/users)

Exemplo a ser colocado no body da requisição:

```
(Requisição feita sem body)
```

E a resposta esperada:

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

Deleção de usuário cadastrado (Método DELETE): <b>/users/cpf</b>(ou localhost:3000/users/cpf)

Exemplo a ser colocado no body da requisição:

```
(Requisição feita sem body)
```

E a resposta esperada:

```
{
  "message": "User is deleted",
  "users": []
}
```

<h3>Rota <b>/users/cpf**/notes</b></h3>

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
```
