# Correios Tracker

Correios Tracker é uma aplicação simples **não oficial** criada para realizar o monitoramento de encomendas dos Correios. A aplicação utiliza a API dos Correios do site [API Grátis](https://apigratis.com.br/documentacoes) para ter acesso a base de dados dos Correios.

Foi criado um backend para realizar as chamdas API e armazená-las em cache por alguns segundos, além de limitar a quantidade de requests.

### Tecnologias

- NodeJS
- Express
- ReactJS + Typescript
- Styled Components

A aplicação foi retirada do ar por problemas na API. Mas você pode rodar na sua máquina fazendo apenas a inserção do link da API como uma variável ambiente.
Nome da variável: API_URL.
