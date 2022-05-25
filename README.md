# Boas vindas ao repositório do projeto movie cards library crud!


Este projeto foi desenvolvido por [MarcusVMendes](http://www.linkedin.com/in/marcusvmendes-dev) enquanto estudante de Desenvolvimento Web Full Stack na [Trybe](https://www.linkedin.com/school/betrybe/) no periodo 2021/2022, como requisito parcial para aprovação de módulo.  #vqv 🚀

A proposta do projeto é desenvolver uma single-page application utilizando componentes React com estado e ciclo, realizando um CRUD (Create, Read, Update e Delete) com os dados dos cards.


# Habilidades

- Utilizar o componentDidMount para executar uma ação após o componente ser inserido no DOM;
- Utilizar o shouldComponentUpdate para avaliar se uma atualização do componente deve ou não acontecer naquele momento;
- Utilizar o componentDidUpdate para executar uma ação após o componente ser atualizado;
- Utilizar o componentWillUnmount para realizar uma ação antes de o componente ser desmontado;
- Utilizar o props.children para acessar os filhos de um componente React e interagir com eles;
- Utilizar o componente BrowserRouter corretamente;
- Criar links de navegação na aplicação com o componente Link ;
- Criar rotas, mapeando o caminho da URL com o componente correspondente, via Route ;
- Estruturar e organizar as rotas da sua aplicação com o componente Switch ;
- Usar o componente Redirect pra alternar entre rotas.<br><br>


# Instalação do projeto localmente

Após cada um dos passos, haverá um exemplo do comando a ser digitado para fazer o que está sendo pedido, caso tenha dificuldades e o exemplo não seja suficiente, não hesite em me contatar em _marcus.mendes89@gmail.com_.
<br>
<br>

<div style="text-align: left">1. Abra o terminal e crie um diretório no local de sua preferência com o comando <b>mkdir</b>:</div><br>

```javascript
mkdir projetos
```
<br>
<div style="text-align: left">2. Entre no diretório que acabou de criar e depois clone o projeto:<div><br>


```javascript
cd projetos
git clone git@github.com:MarcusVMendes/trybe-movie-cards-library-crud.git
```
<br>
<div style="text-align: left">3. Acesse o diretório do projeto e depois utilize o comando <b>npm install</b> para instalar todas as dependências necessárias:<div><br>

```javascript
cd trybe-movie-cards-library-crud
npm install
```

<br>
<div style="text-align: left">4. Na raiz do repositório, executar o comando <b>npm start</b> para inicializar a execução do projeto:<div><br>

```javascript
npm start
```
<br>

# Sumário


- [Requisitos do Projeto](#requisitos-do-projeto)

    `Requisitos do projeto:`
    - [1 - Renderize BrowserRouter no componente App usando rotas](#1-renderize-browserrouter-no-componente-app-usando-rotas)
    - [2 - Faça uma requisição para buscar e mostrar a lista de filmes quando MovieList for montado](#2-faça-uma-requisição-para-buscar-e-mostrar-a-lista-de-filmes-quando-movielist-for-montado)
    - [3 - Insira um link para a página de detalhes de um filme dentro de MovieCard](#3-insira-um-link-para-a-página-de-detalhes-de-um-filme-dentro-de-moviecard)
    - [4 - Faça uma requisição para buscar o filme que deverá ser renderizado dentro de Movie Details](#4-faça-uma-requisição-para-buscar-o-filme-que-deverá-ser-renderizado-dentro-de-movie-details)
    - [5 - Realize uma requisição para buscar o filme que será editado em EditMovie](#5-realize-uma-requisição-para-buscar-o-filme-que-será-editado-em-editmovie)
    - [6 - Insira um link na página inicial para NewMovie para criar novos cartões](#6-insira-um-link-na-página-inicial-para-newmovie-para-criar-novos-cartões)
    - [7 - Adicione um link para deletar um cartão em MovieDetails](#7-adicione-um-link-para-deletar-um-cartão-em-moviedetails)