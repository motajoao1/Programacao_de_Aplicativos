function gerarBotao(){
  const idadeImput = document.getElementById('idadeInput');
  const idade = parseInt(idadeImput.value);

  const resultadoDiv = document.getElementById('resultado');
  resultadoDiv.innerHTML = '';


  if (idade < 16) {
    resultadoDiv.innerHTML='<p>Você não pode votar.</p>';
  elif (idade >= 16 && idade < 18) 
    resultadoDiv.innerHTML='<p>Voto opcional.</p>';
  elif (idade >= 18) 
    resultadoDiv.innerHTML='<p>Você pode votar.</p>';
  }
}