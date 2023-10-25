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

let form = document.querySelector("#form")
let createUser = document.querySelector("#usuario")
let email = document.querySelector("#email")
let createPassword = document.querySelector("#senha")
let typeUser = document.querySelector("#tipoUsuario")

form.addEventListener("submit", (event) => {
  event.preventDefault()

  //verifica de o nome esta vazio

  if (usuarioinput.value === "") {
    alert("por favor, preencha seu nome")
    return
  }

  if (emailinput.value === "" || !isEmailvalid(email.value)) {
    alert("por favor, preencha seu email")
    return
  }

  if (!validatePassword(senhainput.value)) {
    alert("A senha precisa ser no mínimo 6 digitos")
    return
  }

  if (tipousarioSelect.value === "") {
    alert("Por favor, preencha seu tipo de usuario")
    return
  }

  // se todos os campos estiverem preechidos, envie o form
  form.submit()
})

function isEmailvalid(email) {
  // cria uma regex para validar o email
  const emailRegex = new RexExp(
    /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
  )

  if (emailRegex.test(email)) {
    return true
  }
  return false
}

function validatePassword(senhainput, minDigits) {
  if (senhainput.length >= minDigits) {
    return true
  }
  return false
}
