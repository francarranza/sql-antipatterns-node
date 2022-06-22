# Antipatterns code examples and analysis

## Tech stack

- typescript
- node 16.13
- yarn package manager
- postgresql database
- No ORM is used, for this time I'm trying out the [postgres](https://www.npmjs.com/package/postgres)
package together with [ley](https://www.npmjs.com/package/ley) for managing db migrations.
- docker and docker compose

## Setup

1. Install dependencies with
`yarn install`

2. Have the postgres db running with
`docker-compose up -d;`

3. Configure the `.env` file

```sh
NODE_ENV=dev
DB_HOST=localhost
DB_PORT=5442
DB_USER=user
DB_PASSWORD=password
DB_NAME=db
```

4. Run the database migrations
`yarn run db:migrate`

5. Run all the tests
`yarn run test`


## Chapters index

- [Chapter 3: Naive Trees](/src/modules/03-naive-trees/README.md)
