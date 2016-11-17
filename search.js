
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
