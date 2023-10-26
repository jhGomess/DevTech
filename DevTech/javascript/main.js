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

emailinput.addEventListener("keyup",() => {
  if(validatorEmail(emailpattern.value) !== true)

}

))

function validatorEmail(emailinput) {
  let emailpattern = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{
    return emailpattern.test(emailinput)
  })
}

const usuarioinput = document.querySelector("#usuario")
const tipousarioSelect = document.querySelector("#tipoUsuario")

// VALIDAÇÃO DE SENHA E EMAIL

let emailinput = document.getElementById("emailinput")
let senhainput = document.getElementById("senhainput")
let form = document.getElementById("form")

form.addEventListener("submit", (e) => {
  if (emailinput.value == "" && senhainput.value == "") {
  }
  console.log(emailinput.value)
  console.log(senhainput.value)
  e.preventDefault()
})


form.addEventListener("submit", (event) => {
  event.preventDefault()

  //verifica de o nome esta vazio

  if (usuarioinput.value === "") {
    alert("por favor, preencha seu nome")
    return
  }

  if (tipousarioSelect.value === "") {
    alert("Por favor, preencha seu tipo de usuario")
    return
  }

  // se todos os campos estiverem preechidos, envie o form
  form.submit()
})
