function logar() {
  let usuario = document.getElementById("usuario").value
  let senha = document.getElementById("senha").value

  if (usuario == "admin" && senha == "admin") {
    alert("sucesso")
    window.location.href = "./html/menu.html"
  } else if (usuario == "func" && senha == "func") {
    alert("sucesso")
    window.location.href = "./html/menuFunc.html"
  } else {
    alert("usuario ou senha incorretos")
  }
}

let form = document.getElementById("form")
let createUser = document.getElementById("user")
let email = document.getElementById("email")
let createPassword = document.getElementById("password")
let typeUser = document.getElementById("typeUser")

form.addEventListener("submit", (event) => {
  event.preventDefault()
  if (createUser.value === "") {
    alert("por favor, preencha seu nome")
    return
  }

  if (validatorEmail(email.value) !== true) {
    alert("email deve possuir @ e .com")
    return
  }

  if (validatorPassword(createPassword.value) !== true) {
    alert("senha deve possuir no minimo 6 caracteres")
    return
  }

  // se todos os campos estiverem preechidos, envie o form
  form.submit()
})

function validatorEmail(email) {
  let emailPattern =
    /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/

  return emailPattern.test(email)
}

function validatorPassword(createPassword) {
  if (createPassword.length >= 6) {
    return true
  } else {
    return false
  }
}
