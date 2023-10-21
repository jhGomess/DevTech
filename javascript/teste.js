function logar() {
  var usuario = document.getElementById("usuario").value
  var senha = document.getElementById("senha").value

  if (usuario == "admin" && senha == "admin") {
    alert("sucesso")
    window.location = "../html/cadastroEmpresa.html"
  } else {
    alert("usuario ou senha incorretos")
  }
}
