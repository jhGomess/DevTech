function logar() {
  var usuario = document.getElementById("usuario").value
  var senha = document.getElementById("senha").value

  if (usuario == "admin" && senha == "admin") {
    alert("sucesso")
    window.location.href = "../html/menu.html"
  } else {
    alert("usuario ou senha incorretos")
  }
}

const form = document.querySelector("#form")
const usuarioinput = document.querySelector("#usuario")
const emailinput = document.querySelector("#email")
const senhainput = document.querySelector("#senha")
const tipousarioSelect = document.querySelector("#tipoUsuario")

form.addEventListener("submit", (event) => {
  event.preventDefault()

  //verifica de o nome esta vazio

  if (usuarioinput.value === "") {
    alert("por favor, preencha seu nome")
    return
  }
})
