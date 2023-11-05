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

let createUser = document.getElementById("createUser")
let labelCreateUser = document.getElementById("labelCreateUser")
let validCreateUser = false

let createPassword = document.getElementById("password")
let labelPassword = document.getElementById("labelPassword")
let validCreatePassword = false

let confirmPassword = document.getElementById("confirmPassword")
let labelConfirmPassword = document.getElementById("labelConfirmPassword")
let validConfirmPassword = false

let typeUser = document.getElementById("typeUser")
let labelTypeUser = document.getElementById("labelTypeUser")
let validTypeUser = false

let optionFirst = document.getElementById("first")

let msgError = document.getElementById("msgError")
let msgSucess = document.getElementById("msgSucess")

createUser.addEventListener("keyup", () => {
  if (createUser.value.length <= 5) {
    labelCreateUser.setAttribute("style", "color: red")
    labelCreateUser.innerHTML = "Usuário *Insira no minimo 6 caracteres"
    createUser.setAttribute("style", "outline:1px solid red")
    validCreateUser = false
  } else {
    labelCreateUser.setAttribute("style", "color: #c4c4cc")
    labelCreateUser.innerHTML = "Usuário"
    createUser.setAttribute("style", "outline-color: 1px solid white")
    validCreateUser = true
  }
})

createPassword.addEventListener("keyup", () => {
  if (createPassword.value.length <= 5) {
    labelPassword.setAttribute("style", "color: red")
    labelPassword.innerHTML = "Senha *Deve possuir no minimo 6 caracteres"
    createPassword.setAttribute("style", "outline:1px solid red")
    validCreatePassword = false
  } else {
    labelPassword.setAttribute("style", "color: #c4c4cc")
    labelPassword.innerHTML = "Senha"
    createPassword.setAttribute("style", "outline-color:1px solid white")
    validCreatePassword = true
  }
})

confirmPassword.addEventListener("keyup", () => {
  if (confirmPassword.value != createPassword.value) {
    labelConfirmPassword.setAttribute("style", "color: red")
    labelConfirmPassword.innerHTML = "Confirmar Senha *As senhas não conferem"
    confirmPassword.setAttribute("style", "outline:1px solid red")
    validConfirmPassword = false
  } else {
    labelConfirmPassword.setAttribute("style", "color: #c4c4cc")
    labelConfirmPassword.innerHTML = "Confirmar Senha"
    confirmPassword.setAttribute("style", "outline-color:1px solid white")
    validConfirmPassword = true
  }
})

typeUser.addEventListener("click", () => {
  if (typeUser.value == optionFirst.value) {
    labelTypeUser.setAttribute("style", "color: red")
    labelTypeUser.innerHTML = "Tipo do Usuário *Selecione uma das opções"
    typeUser.setAttribute("style", "outline:1px solid red")
    validTypeUser = false
  } else {
    labelTypeUser.setAttribute("style", "color: #c4c4cc")
    labelTypeUser.innerHTML = "Tipo so Usuário"
    typeUser.setAttribute("style", "outline-color:1px solid white")
    validTypeUser = true
  }
})

function cadastrar() {
  if (
    validCreateUser &&
    validCreatePassword &&
    validConfirmPassword &&
    validTypeUser
  ) {
    msgSucess.setAttribute("style", "display: block")
    msgSucess.innerHTML = "<strong>Cadastrando Usuário...</strong>"

    msgError.setAttribute("style", "display: none")
    msgError.innerHTML = ""
  } else {
    msgError.setAttribute("style", "display: block")
    msgError.innerHTML =
      "<strong>Preencha todos os campos corretamente</strong>"

    msgSucess.setAttribute("style", "display: none")
    msgSucess.innerHTML = ""
  }
}

// form.addEventListener("submit", (event) => {
//   event.preventDefault()
//   if (createUser.value === "") {
//     alert("por favor, preencha seu nome")
//     return
//   }

//   if (validatorEmail(email.value) !== true) {
//     alert("email deve possuir @ e .com")
//     return
//   }

//   if (validatorPassword(createPassword.value) !== true) {
//     alert("senha deve possuir no minimo 6 caracteres")
//     return
//   }

//   // se todos os campos estiverem preechidos, envie o form
//   form.submit()
// })

// function validatorEmail(email) {
//   let emailPattern =
//     /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/

//   return emailPattern.test(email)
// }

// function validatorPassword(createPassword) {
//   if (createPassword.length >= 6) {
//     return true
//   } else {
//     return false
//   }
// }
