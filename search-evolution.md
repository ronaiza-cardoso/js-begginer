#Busca Em JavaScript

##Como tudo começou

Nesse artigo eu irei descrever alguns métodos de busca que tenho estudado. Será
uma série de artigos com várias formas de implementar buscas em sua aplicação.
Irei começar com a forma mais primitiva que conheço usando o JavaScript Vanila. Você que tem medo de lidar com essa linguagem por causa de suas libs e frameworks vai ficar mais tranquilo com esse código, a única letrinha da sopa que faz parte do ecosistema da linguagem é o próprio JS

##SHHHHOWWW MEEEE THE COOOOODEE!

O código fará uma busca estática em um array de frases.

Primeiramente fora bagunça, logo vamos criar dois arquivos, o primeiro será o index.html responsável por conter as entradas de nossa busca. É um arquivo bem simples com um input, um botão de busca e o span para exibir o resultado

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Lista Telefônica</title>

    <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" >

    <style>
      .jumbotron
      {
        width: 400px;
        text-align: center;
        margin-left: auto;
        margin-right: auto;
        margin-top: 20px;
      }
      .table{
        margin-top: 20px;
      }
      .form-control{
        margin-bottom: 5px;
      }
    </style>

  </head>
  <body>
    <div class="jumbotron">
      <div class="form-group">
        <h1>Hello World</h1>

        <input class="form-control" placeholder="Digite a sua busca" type="text" id="search"> <!-- local onde o texto será buscado  -->

        <button class="btn btn-primary btn-block" onclick="search();" >Busca</button> <!-- referencia para a função que será executada no arquivo serch.js -->

        <h3>Resultado:</h3>

        <span id="result"></span>

      <script src='search.js'> <!-- referencia para o arquivo que fará a busca -->

      </script>
      </div>
    </div>
  </body>
</html>

```

agora vamos construir a nossa busca. Vamos colocar o nosso código dentro de uma função, assim quando o usuário apertar o botão de busca o código dentro da nossa função será executada

		function search() {

		}

agora vamos escrever a função para fazer a busca em nosso array

```js
function search() {
var arr = ["wht is ec6?!","angular?! é de comer ou passar na testa?","manda node hehehe"]; // frases da nossa busca
var search = document.getElementById("search").value; // pega o que o usuário coloca no input
	var testKey = null;
	var result = "";
	for( var key in arr ) {
		var auxArr = arr[key].split(" ");
		for ( var keyTwo in auxArr){
			if ( auxArr.indexOf( search ) > -1 ){ // verifica se existe a palavra dentro do array
				if(testKey != key) { // verifica se testKey é diferente de key, testKey tem o valor nulo, logo esse if na primeira volta irá dar true
					testKey = key; //então o valor de testKey (null) será atribuito a essa variável para evitar que as frases sejam repetidas
					result += "<p>" + arr[key] + "</p>"; //e depois o resultado será atribuido a result
				}
			}
		}
	}
	document.getElementById("result").innerHTML = result;
}

```

Bom pessoal, isso é tudo. Espero que seja útil para vocês de alguma forma e que mexam no código, brinquem, estrague e depois concertem. Pretendo
continuar a fazer artigos nesse sentido mostrando a evolução da linguagem. Em caso de dúvidas, sugestões ou críticas podem entrar em contato
comigo por aqui ou pelo telegram @Ronaiza :)
