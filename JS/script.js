document.getElementById("botaoEnviar").addEventListener("click" , validaFormulario )

function validaFormulario (){
  if(document.getElementById("nome").value != '' && document.getElementById("telefone").value != '' && document.getElementById("email").value != ''){
    alert("Prontinho! Você receberá as novidades por e-mail!")
  }else{
    alert("Por favor, preencha todos os campos do formulário!")
  }
}

