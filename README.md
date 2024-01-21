-- landing page one health


------------------------------------------------ setup pakage

yarn

------------------------------------------------ setup db

docker-compose up -d

yarn knex migrate:latest


------------------------------------------------- run project

yarn dev
