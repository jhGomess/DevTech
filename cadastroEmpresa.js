let company = document.getElementById("company")
let labelCompany = document.getElementById("labelCompany")
let validCompany = false

let cnpj = document.getElementById("cnpj")
let labelCnpj = document.getElementById("labelCnpj")
let validCnpj = false

let id = document.getElementById("id")
let labelId = document.getElementById("labelId")
let validId = false

let phone = document.getElementById("phone")
let labelPhone = document.getElementById("labelPhone")
let validPhone = false

let emailCompany = document.getElementById("emailCompany")
let labelEmailCompany = document.getElementById("labelEmailCompany")
let validEmailCompany = false

let address = document.getElementById("address")
let labelAddress = document.getElementById("labelAddress")
let validAddress = false

let city = document.getElementById("city")
let labelCity = document.getElementById("labelCity")
let validCity = false

let state = document.getElementById("state")
let labelState = document.getElementById("labelState")
let validState = false

let msgError = document.getElementById("msgError")
let msgSucess = document.getElementById("msgSucess")

let submitCompany = document.getElementById("createdCompany")
let consultCompany = document.getElementById("consultCompany")
let alterCompany = document.getElementById("alterCompany")

company.addEventListener("keyup", () => {
  if (company.value.length == 0) {
    labelCompany.setAttribute("style", "color: red")
    labelCompany.innerHTML = "Nome da Empresa *Insira um nome"
    company.setAttribute("style", "outline:1px solid red")
    validCompany = false
  } else {
    labelCompany.setAttribute("style", "color: #c4c4cc")
    labelCompany.innerHTML = "Nome da Empresa"
    company.setAttribute("style", "outline-color: 1px solid white")
    validCompany = true
  }
})

cnpj.addEventListener("keyup", () => {
  if (cnpj.value.length != 18) {
    labelCnpj.setAttribute("style", "color: red")
    labelCnpj.innerHTML = "CNPJ *CNPJ incorreto"
    cnpj.setAttribute("style", "outline:1px solid red")
    validCnpj = false
  } else {
    labelCnpj.setAttribute("style", "color: #c4c4cc")
    labelCnpj.innerHTML = "CNPJ"
    cnpj.setAttribute("style", "outline-color: 1px solid white")
    validCnpj = true
  }
})

id.addEventListener("keyup", () => {
  if (id.value.length === 0) {
    labelId.setAttribute("style", "color: red")
    labelId.innerHTML = "id *Insira um id válido"
    id.setAttribute("style", "outline:1px solid red")
    validId = false
  } else {
    labelId.setAttribute("style", "color: #c4c4cc")
    labelId.innerHTML = "id"
    id.setAttribute("style", "outline-color: 1px solid white")
    validId = true
  }
})

phone.addEventListener("keyup", () => {
  if (phone.value.length != 11) {
    labelPhone.setAttribute("style", "color: red")
    labelPhone.innerHTML = "Telefone *Insira um telefone válido"
    phone.setAttribute("style", "outline:1px solid red")
    validPhone = false
  } else {
    labelPhone.setAttribute("style", "color: #c4c4cc")
    labelPhone.innerHTML = "Telefone"
    phone.setAttribute("style", "outline-color: 1px solid white")
    validPhone = true
  }
})

emailCompany.addEventListener("keyup", () => {
  if (emailCompany.value.length <= 1) {
    labelEmailCompany.setAttribute("style", "color: red")
    labelEmailCompany.innerHTML = "E-mail *Insira um e-mail válido"
    emailCompany.setAttribute("style", "outline:1px solid red")
    validEmailCompany = false
  } else {
    labelEmailCompany.setAttribute("style", "color: #c4c4cc")
    labelEmailCompany.innerHTML = "Email"
    emailCompany.setAttribute("style", "outline-color: 1px solid white")
    validEmailCompany = true
  }
})

address.addEventListener("keyup", () => {
  if (address.value.length <= 1) {
    labelAddress.setAttribute("style", "color: red")
    labelAddress.innerHTML = "Endereço *Insira um endereço válido"
    address.setAttribute("style", "outline:1px solid red")
    validAddress = false
  } else {
    labelAddress.setAttribute("style", "color: #c4c4cc")
    labelAddress.innerHTML = "Endereço"
    address.setAttribute("style", "outline-color: 1px solid white")
    validAddress = true
  }
})

city.addEventListener("keyup", () => {
  if (city.value.length <= 1) {
    labelCity.setAttribute("style", "color: red")
    labelCity.innerHTML = "Cidade *Insira uma cidade válido"
    city.setAttribute("style", "outline:1px solid red")
    validCity = false
  } else {
    labelCity.setAttribute("style", "color: #c4c4cc")
    labelCity.innerHTML = "Cidade"
    city.setAttribute("style", "outline-color: 1px solid white")
    validCity = true
  }
})

state.addEventListener("keyup", () => {
  if (state.value.length <= 1) {
    labelState.setAttribute("style", "color: red")
    labelState.innerHTML = "Estado *Insira uma Estado válido"
    state.setAttribute("style", "outline:1px solid red")
    validState = false
  } else {
    labelState.setAttribute("style", "color: #c4c4cc")
    labelState.innerHTML = "Estado"
    state.setAttribute("style", "outline-color: 1px solid white")
    validState = true
  }
})

function cadastrarEmpresa() {
  if (
    validCompany &&
    validCnpj &&
    validId &&
    validPhone &&
    validEmailCompany &&
    validAddress &&
    validCity &&
    validState
  ) {
    //implementando o localStorage se o cadastro foi sucesso, cadastro correto

    let listaCompany = JSON.parse(localStorage.getItem("listaCompany") || "[]")

    let newListaCompany = {
      companyCad: company.value,
      cnpjCad: cnpj.value,
      idCad: id.value,
      phoneCad: phone.value,
      emailCompanyCad: emailCompany.value,
      addressCad: address.value,
      cityCad: city.value,
      stateCad: state.value,
    }

    listaCompany.push(newListaCompany)

    localStorage.setItem("listaCompany", JSON.stringify(listaCompany))

    msgSucess.setAttribute("style", "display: block")
    msgSucess.innerHTML = "<strong>Cadastrando Empresa...</strong>"

    msgError.setAttribute("style", "display: none")
    msgError.innerHTML = ""

    submitCompany.disabled = true

    setTimeout(() => {
      submitCompany.disabled = false
      location.reload()
    }, 3000)
  } else {
    // cadastro incorreto

    msgError.setAttribute("style", "display: block")
    msgError.innerHTML =
      "<strong>Preencha todos os campos corretamente</strong>"

    msgSucess.setAttribute("style", "display: none")
    msgSucess.innerHTML = ""
  }
}

function consultarEmpresa(idCad) {
  consultCompany.disabled = true

  msgSucess.setAttribute("style", "display: block")
  msgSucess.innerHTML = "<strong>Consultando Empresa...</strong>"

  setTimeout(() => {
    consultCompany.disabled = false
    msgSucess.setAttribute("style", "display: none")
    msgSucess.innerHTML = ""
  }, 3000)

  msgError.setAttribute("style", "display: none")
  msgError.innerHTML = ""

  let listaCompany = JSON.parse(localStorage.getItem("listaCompany"))

  if (listaCompany && listaCompany.length > 0) {
    listaCompany.forEach((lista) => {
      company.value = `${lista.companyCad}`
      cnpj.value = `${lista.cnpjCad}`
      id.value = `${lista.idCad}`
      phone.value = `${lista.phoneCad}`
      emailCompany.value = `${lista.emailCompanyCad}`
      address.value = `${lista.addressCad}`
      city.value = `${lista.cityCad}`
      state.value = `${lista.stateCad}`
    })
  } else {
    // cadastro incorreto

    msgError.setAttribute("style", "display: block")
    msgError.innerHTML = "<strong>Empresa não encontrada</strong>"

    msgSucess.setAttribute("style", "display: none")
    msgSucess.innerHTML = ""
  }
}

function alterarEmpresa(
  companyCad,
  cnpjCad,
  idCad,
  phoneCad,
  emailCompanyCad,
  addressCad,
  cityCad,
  stateCad
) {
  let companyEdit = JSON.parse(localStorage.getItem("listaCompany"))

  companyEdit.push({
    companyCad: company.value,
    cnpjCad: cnpj.value,
    idCad: id.value,
    phoneCad: phone.value,
    emailCompanyCad: emailCompany.value,
    addressCad: address.value,
    cityCad: city.value,
    stateCad: state.value,
  })

  localStorage.setItem("listaCompany", JSON.stringify(companyEdit))

  alterCompany.disabled = true

  setTimeout(() => {
    alterCompany.disabled = false

    location.reload()
  }, 3000)
}

function excluirEmpresa() {
  localStorage.removeItem("listaCompany")
}
