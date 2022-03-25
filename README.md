# IgniteOffice
Microserviço responsável por executar toda a regra de negócio de usuários e espaços de coworking.

## Como Iniciar a Aplicação
- Execute o comando `yarn` ou `npm i`.
- Execute os scripts abaixo (cada script em um terminal diferente).

### Scripts
- `yarn start` ou `npm run start`: Inicia servidor com hot reload em http://localhost:3000.
- `yarn start-database` ou `npm run start-database`: Inicia o banco de dados em http://localhost:3001.

## Rotas
### CRUD Usuário
**Consultar todos os usuários cadastrados.**
```  
GET - /users
```

**Criar um usuário no banco de dados.**
```
POST - /users
body {
  "name": "Alexa Rodrigues",
  "email": "samuelfreitas_03@hotmail.com",
  "password": "disadia2323"
}
```

**Atualizar um usuário no banco de dados.**
```
PUT - /users/{id}
body {
  "name": "Alexa Rodrigues",
  "email": "samuelfreitas_03@hotmail.com",
  "password": "disadia2323"
}
```
**Deletar um usuário cadastrado.**
```  
DELETE - /users/{id}
```

### CRUD Coworking
**Consultar todos os espaços de coworking cadastrados.**
```  
GET - /coworking
```

**Criar um espaço de coworking no banco de dados.**
```
POST - /coworking
body {
  "name": "Nome do Coworking"
}
```

**Atualizar um espaço de coworking no banco de dados.**
```
PUT - /coworking/{id}
body {
  "name": "Nome do coworking"
}
```
**Deletar um espaço de coworking cadastrado.**
```  
DELETE - /coworking/{id}
```