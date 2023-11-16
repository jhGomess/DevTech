let department = document.getElementById("department")
let labelDepartment = document.getElementById("labelDepartment")
let validDepartment = false

let responsible = document.getElementById("responsible")
let labelResponsible = document.getElementById("labelResponsible")
let validResponsible = false

let idDepartament = document.getElementById("idDepartament")
let labelIdDepartament = document.getElementById("labelIdDepartament")
let validIdDepartament = false

let phoneDepartament = document.getElementById("phoneDepartament")
let labelPhoneDepartament = document.getElementById("labelPhoneDepartament")
let validPhoneDepartament = false

let emailDepartament = document.getElementById("emailDepartament")
let labelEmailDepartament = document.getElementById("labelEmailDepartament")
let validEmailDepartament = false

let description = document.getElementById("description")
let labelDescription = document.getElementById("labelDescription")
let validDescription = false

let msgError = document.getElementById("msgError")
let msgSucess = document.getElementById("msgSucess")

let registerDepartament = document.getElementById("createdDepartament")

department.addEventListener("keyup", () => {
  if (department.value.length == 0) {
    labelDepartment.setAttribute("style", "color: red")
    labelDepartment.innerHTML = "Nome do Departamento *Insira um nome"
    department.setAttribute("style", "outline:1px solid red")
    validDepartment = false
  } else {
    labelDepartment.setAttribute("style", "color: #c4c4cc")
    labelDepartment.innerHTML = "Nome do Departamento"
    department.setAttribute("style", "outline-color: 1px solid white")
    validDepartment = true
  }
})

responsible.addEventListener("keyup", () => {
  if (responsible.value.length == 0) {
    labelResponsible.setAttribute("style", "color: red")
    labelResponsible.innerHTML = "Nome do Responsável *Insira um nome"
    responsible.setAttribute("style", "outline:1px solid red")
    validDepartment = false
  } else {
    labelResponsible.setAttribute("style", "color: #c4c4cc")
    labelResponsible.innerHTML = "Nome do Responsável"
    responsible.setAttribute("style", "outline-color: 1px solid white")
    validDepartment = true
  }
})

idDepartament.addEventListener("keyup", () => {
  if (idDepartament.value.length === 0) {
    labelIdDepartament.setAttribute("style", "color: red")
    labelIdDepartament.innerHTML = "id *Insira um id válido"
    idDepartament.setAttribute("style", "outline:1px solid red")
    validId = false
  } else {
    labelIdDepartament.setAttribute("style", "color: #c4c4cc")
    labelIdDepartament.innerHTML = "id"
    idDepartament.setAttribute("style", "outline-color: 1px solid white")
    validId = true
  }
})

phoneDepartament.addEventListener("keyup", () => {
  if (phoneDepartament.value.length != 11) {
    labelPhoneDepartament.setAttribute("style", "color: red")
    labelPhoneDepartament.innerHTML = "Telefone *Insira um telefone válido"
    phoneDepartament.setAttribute("style", "outline:1px solid red")
    validPhone = false
  } else {
    labelPhoneDepartament.setAttribute("style", "color: #c4c4cc")
    labelPhoneDepartament.innerHTML = "Telefone"
    phoneDepartament.setAttribute("style", "outline-color: 1px solid white")
    validPhone = true
  }
})

emailDepartament.addEventListener("keyup", () => {
  if (emailDepartament.value.length <= 1) {
    labelEmailDepartament.setAttribute("style", "color: red")
    labelEmailDepartament.innerHTML = "E-mail *Insira um e-mail válido"
    emailDepartament.setAttribute("style", "outline:1px solid red")
    validEmailCompany = false
  } else {
    labelEmailDepartament.setAttribute("style", "color: #c4c4cc")
    labelEmailDepartament.innerHTML = "E-mail"
    emailDepartament.setAttribute("style", "outline-color: 1px solid white")
    validEmailCompany = true
  }
})

description.addEventListener("keyup", () => {
  if (description.value.length == 0) {
    labelDescription.setAttribute("style", "color: red")
    labelDescription.innerHTML =
      "Descrição do Departamento *Insira uma breve descrição"
    description.setAttribute("style", "outline:1px solid red")
    validDepartment = false
  } else {
    labelDescription.setAttribute("style", "color: #c4c4cc")
    labelDescription.innerHTML = "Descrição do Departamento"
    description.setAttribute("style", "outline-color: 1px solid white")
    validDepartment = true
  }
})
