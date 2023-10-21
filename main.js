function logar() {
  var usuario = document.getElementById("usuario").value
  var senha = document.getElementById("senha").value

  if (usuario == "admin" && senha == "admin") {
    alert("sucesso")
    window.location.href = "./html/menu.html"
  } else {
    alert("usuario ou senha incorretos")
  }
}
