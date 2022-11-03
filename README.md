# Motors Shop Project - API

Motors Shop é uma aplicação fullStack que cria um e-commerce para anúncio, venda e compra de carros e motos.
Esta é a REST API da aplicação, que permite fazer o cadastro e login de usuários com dois tipos de perfis distintos (anunciante e comprador).
Permite o acesso as informações dos anuncios, mesmo para usuários que não estejam logados, para visualizarem e filtrarem os produtos disponíveis para venda.
Para os usuários logados, perfil de anunciante, é possível cadastrar um novo produto para anúncio, atualizar e deletar o mesmo.
Para os usuários com perfil de comprador, é possível fazer um comentário sobre o produto anunciado.
Entre outras funcionalidades.

## Instalação

Faça o clone deste repositório

```bash
  git clone git@github.com:Motors-Shop-FullStack/motors-shop-back-end.git
```

## Variáveis de Ambiente

Para rodar esse projeto, você vai precisar adicionar as seguintes variáveis de ambiente no seu .env

`DATABASE_URL="postgresql://your_postgres_user:your_postgres_password@localhost:5431/your_postgres_db?schema=public"`

`POSTGRES_USER= `

`POSTGRES_DB= `

`POSTGRES_PASSWORD= `

`SECRET_KEY= `

## Rodando a aplicação

Faça a conexão ao seu PostgreSQL e crie seu banco de dados SQL:

```bash
  CREATE DATABASE <NOMEDOBANCO>;
```

Execute sua aplicação via docker:

```bash
  docker compose up --build
```

Execute o Prisma:

```bash
  yarn prisma generate
```

Gerar/Rodar suas migrations:

```bash
  yarn prisma migrate dev --name createDb
```

## Autores

- [@Danilo Valério](https://github.com/danilovalerio89)
- [@Eliane Discacciati](https://github.com/discacciati)
- [@Hyan Lopes](https://github.com/hyanlopes)
