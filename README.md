# ignite-mod3-challenge

API para consultar games e usuários utilizando filtros da biblioteca typeorm de três formas : Usando ORM, Query Builder e  Raw Query. 

Desafio foi proposto no módulo 3 do Ignite Backend e realizado em poucas horas.

## Funcionalidades 

<ul>
  <li>Listagem de todos os games por usuário </li>
  <li>Listagem de usuários em ordem aufabética </li>
  <li>Busca de usuário por nome e sobrenome ignorando o case sensitive </li>
  <li>Listagem de jogos filtrando por nome ou parte do nome do game , ignorando o case sensitive </li>
  <li>Funcionalidade para retornar a contagem de games cadastrados no banco </li>
  <li> Listagem de usuários associados a um game cadastrado </li>
 </ul>
 
  # Como executar o projeto
 
 Pré-requisitos: npm / yarn

```bash
# clonar repositório
git clone https://github.com/italocc-git/ignite-mod3-challenge.git

# entrar na pasta do projeto ignite-mod3-challenge
cd ignite-template-database-queries

# instalar dependências
yarn install / npm install

# executar o projeto (Apenas testes)
yarn test / npm run test
```
 
# Autor

Italo Costa Cavalcante

https://www.linkedin.com/in/italo-costa-cavalcante/
