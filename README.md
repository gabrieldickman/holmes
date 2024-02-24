![image](https://github.com/gabrieldickman/holmes/assets/55303496/dd0920f4-90a0-4908-913a-77e8b2fd1fcd)

# HOLMES
Sistema de busca de cadastros

## 📌 Introdução
Este projeto foi criado com o intuito de facilitar a busca por cadastro de clientes. <br>
A ideia é unificar 3 sistemas diferentes com base de dados distintas e fazer com que uma consulta percorra as 3 bases em um único sistema deixando o processo mais rápido e prático. <br>
Ao pesquisar o CPF do cliente, o sistema irá validar em qual das 3 bases de dados o cadastro do cliente se encontra e informará ao usuário.

### ⚙️ Pré-requisitos

Necessário ter instalado o NodeJS na máquina local. <br>
Necessário ter instalado o GIT na máquina local. <br>
Necessário ter o projeto clonado na máquina local. <br>
Necessário ter um editor de código. <br>

### 🛠️ Guia de Instalação

Para executar o projeto na sua máquina, são necessários alguns passos.

Clone o projeto na sua máquina local no diretório de sua preferência: 
````
git clone https://github.com/gabrieldickman/holmes.git
````
````
Dica: matenha as pastas de front-end e back-end separadas

holmes 
    |
    - front-end
    - back-end
````
Entre na pasta front-end:
````
cd holmes/front-end
````
e execute a instalação do npm:
````
npm install
````
````
Dica: caso ocorra erro nos react-scripts, execute o comando npm install react-scripts --save
````
Após isso, navegue para a página do back-end:
````
cd holmes/back-end
````

E execute a instalação do npm novamente:
````
npm install
````
Você precisará também do express:
````
npm install express
````
E do dotenv:
````
npm install dotenv
````
Seguindo o que consta no .env.example, crie um arquivo contendo o seu token de acesso e a porta do servidor:
````
token=
port=
````
Após finalizar, execute o comando:
````
npm start
````
Tanto na pasta do front-end quanto na pasta do back-end para inicializar os servidores.

