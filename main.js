function logar() {
  let user = document.getElementById("user")
  let userLabel = document.getElementById("userLabel")
  let password = document.getElementById("password")
  let passwordLabel = document.getElementById("passwordLabel")

  let msgError = document.getElementById("msgError")
  let msgSucess = document.getElementById("msgSucess")

  let listaUser = []

  let userValid = {
    user: "",
    password: "",
    typeUser: "",
  }

  listaUser = JSON.parse(localStorage.getItem("listaUser"))

  listaUser.forEach((item) => {
    if (
      user.value == item.createUserCad &&
      password.value == item.createPasswordCad
    ) {
      userValid = {
        user: item.createUserCad,
        password: item.createPasswordCad,
        typeUser: item.typeUserCad,
      }
    }
  })

  if (
    user.value == userValid.user &&
    password.value == userValid.password &&
    userValid.typeUser == "adm"
  ) {
    enter.disabled = true

    msgSucess.setAttribute("style", "display: block")
    msgSucess.innerHTML = "Logando..."

    user.setAttribute("style", "outline: 1px solid green")
    userLabel.setAttribute("style", "color: #c4c4cc")
    password.setAttribute("style", "outline: 1px solid green")
    passwordLabel.setAttribute("style", "color: #c4c4cc")

    msgError.setAttribute("style", "display: none")
    msgError.innerHTML = ""

    setTimeout(() => {
      enter.disabled = false
      window.location.href = "./html/menu.html"
    }, 2000)
  } else if (
    user.value == userValid.user &&
    password.value == userValid.password &&
    userValid.typeUser == "func"
  ) {
    enter.disabled = true

    msgSucess.setAttribute("style", "display: block")
    msgSucess.innerHTML = "Logando..."

    user.setAttribute("style", "outline: 1px solid green")
    userLabel.setAttribute("style", "color: #c4c4cc")
    password.setAttribute("style", "outline: 1px solid green")
    passwordLabel.setAttribute("style", "color: #c4c4cc")

    msgError.setAttribute("style", "display: none")
    msgError.innerHTML = ""

    setTimeout(() => {
      enter.disabled = false
      window.location.href = "./html/menuFunc.html"
    }, 2000)
  } else {
    enter.disabled = true

    setTimeout(() => {
      enter.disabled = false
    }, 1000)

    user.setAttribute("style", "outline:1px solid red")
    userLabel.setAttribute("style", "color: red")
    password.setAttribute("style", "outline:1px solid red")
    passwordLabel.setAttribute("style", "color: red")

    msgError.setAttribute("style", "display: block")
    msgError.innerHTML = "Usuário ou senha incorretos"

    user.focus()
  }
}
