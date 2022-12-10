# Instalação e Configurações

_O projeto está configurado para ser executado através do docker, para começar você deve criar um arquivo .env na raiz da pasta backend. O arquivo .env deve conter as seguintes variáveis:_

**_Obs: Mantenha as variáveis NODE_ENV, PORT e DATABASE_URL conforme o exemplo abaixo. Você pode alterar as variáveis JWT_SECRET, ENCRYPT_JWT_SECRET e JWT_EXPIRATION se preferir._**

```
//.env


NODE_ENV=development
PORT=3000
DATABASE_URL="postgresql://postgres:matheus@db:5432/m6?schema=public"


JWT_SECRET=!SKUJIK$MNO/
ENCRYPT_JWT_SECRET=$UKMN*
JWT_EXPIRATION=1d

```

**_Atenção_**:
_O docker irá utilizar 3 portas locais para conseguir executar o projeto, certifique-se de não estar utilizando as portas abaixo_:

_backend -> 3001_

_frontend_ -> 8081

_db_ -> 5432

## Inicializando o projeto

_Após concluir as configurações descritas acima, execute o seguinte comando a partir da pasta raiz do projeto:_

```
docker-compose up --build
```

_Após levantar os containers você deve executar as migrações do prisma, para que as tabelas e seus relacionamentos sejam gerados. Execute o comando abaixo a partir da pasta raiz do projeto para acessar o terminal do container backend:_

```
docker-compose exec backend bash
```

_Logo em seguida, execute as migrações com o comando:_

```
npx prisma migrate dev --name init
```

_Após concluir as configurações citadas acima, a aplicação estará em execução na porta 8081:_

```
localhost:8081
```
