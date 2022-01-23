Segue alguns feedbacks sobre seu desenvolvimento:

4. No seu PATCH /users/:cpf/notes/:id irá acontecer uma perca de dados caso o usuário não informe algum valor no body, pois o PATCH aceita atualizações parciais, nesse caso, seria bom fazer uma verificação na sua rota ou utilizar algum método que atualize parcialmente como Object.assign ou o spread operator.
