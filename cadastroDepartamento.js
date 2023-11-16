let department = document.getElementById("department")
let labelDepartment = document.getElementById("labelDepartment")
let validDepartment = false

let responsible = document.getElementById("responsible")
let labelResponsible = document.getElementById("labelResponsible")
let validResponsible = false

let idDepartment = document.getElementById("idDepartment")
let labelIdDepartment = document.getElementById("labelIdDepartment")
let validIdDepartment = false

let phoneDepartment = document.getElementById("phoneDepartment")
let labelPhoneDepartment = document.getElementById("labelPhoneDepartment")
let validPhoneDepartment = false

let emailDepartment = document.getElementById("emailDepartment")
let labelEmailDepartment = document.getElementById("labelEmailDepartment")
let validEmailDepartment = false

let description = document.getElementById("description")
let labelDescription = document.getElementById("labelDescription")
let validDescription = false

let msgError = document.getElementById("msgError")
let msgSucess = document.getElementById("msgSucess")

let registerDepartment = document.getElementById("createdDepartment")
let consultDepartment = document.getElementById("consultDepartment")
let alterDepartment = document.getElementById("alterDepartment")
let deleteDepartment = document.getElementById("deleteDepartment")

// function performSearch() {
//   var searchInput = document.getElementById("searchDepartament").value
//   // Aqui você pode adicionar a lógica para processar a pesquisa, por exemplo, redirecionar para uma página de resultados.
//   var searchInput = document.getElementById("searchDepartament")
//   searchInput.focus()
// }

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
    validResponsible = false
  } else {
    labelResponsible.setAttribute("style", "color: #c4c4cc")
    labelResponsible.innerHTML = "Nome do Responsável"
    responsible.setAttribute("style", "outline-color: 1px solid white")
    validResponsible = true
  }
})

idDepartment.addEventListener("keyup", () => {
  if (idDepartment.value.length === 0) {
    labelIdDepartment.setAttribute("style", "color: red")
    labelIdDepartment.innerHTML = "id *Insira um id válido"
    idDepartment.setAttribute("style", "outline:1px solid red")
    validIdDepartment = false
  } else {
    labelIdDepartment.setAttribute("style", "color: #c4c4cc")
    labelIdDepartment.innerHTML = "id"
    idDepartment.setAttribute("style", "outline-color: 1px solid white")
    validIdDepartment = true
  }
})

phoneDepartment.addEventListener("keyup", () => {
  if (phoneDepartment.value.length != 11) {
    labelPhoneDepartment.setAttribute("style", "color: red")
    labelPhoneDepartment.innerHTML = "Telefone *Insira um telefone válido"
    phoneDepartment.setAttribute("style", "outline:1px solid red")
    validPhoneDepartment = false
  } else {
    labelPhoneDepartment.setAttribute("style", "color: #c4c4cc")
    labelPhoneDepartment.innerHTML = "Telefone"
    phoneDepartment.setAttribute("style", "outline-color: 1px solid white")
    validPhoneDepartment = true
  }
})

emailDepartment.addEventListener("keyup", () => {
  if (emailDepartment.value.length <= 1) {
    labelEmailDepartment.setAttribute("style", "color: red")
    labelEmailDepartment.innerHTML = "E-mail *Insira um e-mail válido"
    emailDepartment.setAttribute("style", "outline:1px solid red")
    validEmailDepartment = false
  } else {
    labelEmailDepartment.setAttribute("style", "color: #c4c4cc")
    labelEmailDepartment.innerHTML = "E-mail"
    emailDepartment.setAttribute("style", "outline-color: 1px solid white")
    validEmailDepartment = true
  }
})

description.addEventListener("keyup", () => {
  if (description.value.length == 0) {
    labelDescription.setAttribute("style", "color: red")
    labelDescription.innerHTML =
      "Descrição do Departamento *Insira uma breve descrição"
    description.setAttribute("style", "outline:1px solid red")
    validDescription = false
  } else {
    labelDescription.setAttribute("style", "color: #c4c4cc")
    labelDescription.innerHTML = "Descrição do Departamento"
    description.setAttribute("style", "outline-color: 1px solid white")
    validDescription = true
  }
})

function cadastrarDepartamento() {
  if (
    validDepartment &&
    validResponsible &&
    validIdDepartment &&
    validPhoneDepartment &&
    validEmailDepartment &&
    validDescription
  ) {
    //implementando o localStorage se o cadastro foi sucesso, cadastro correto

    let listaDepartment = JSON.parse(
      localStorage.getItem("listaDepartment") || "[]"
    )

    let newListaDepartment = {
      departmentCad: department.value,
      responsibleCad: responsible.value,
      idDepartmentCad: idDepartment.value,
      phoneDepartmentCad: phoneDepartment.value,
      emailDepartmentCad: emailDepartment.value,
      descriptionCad: description.value,
    }

    listaDepartment.push(newListaDepartment)

    localStorage.setItem("listaDepartment", JSON.stringify(listaDepartment))

    msgSucess.setAttribute("style", "display: block")
    msgSucess.innerHTML = "<strong>Cadastrando Departamento...</strong>"

    msgError.setAttribute("style", "display: none")
    msgError.innerHTML = ""

    registerDepartment.disabled = true

    window.scrollTo({
      top: 0,
      behavior: "smooth", // Comportamento de rolagem suave
    })

    setTimeout(() => {
      registerDepartment.disabled = false
      location.reload()
    }, 3000)
  } else {
    // cadastro incorreto
    registerDepartment.disabled = true

    msgError.setAttribute("style", "display: block")
    msgError.innerHTML =
      "<strong>Preencha todos os campos corretamente</strong>"

    msgSucess.setAttribute("style", "display: none")
    msgSucess.innerHTML = ""

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })

    setTimeout(() => {
      registerDepartment.disabled = false
      location.reload()
    }, 3000)
  }
}

function consultarDepartamento() {
  let searchDepartment = document
    .getElementById("searchDepartment")
    .value.trim()
    .toLowerCase()

  consultDepartment.disabled = true

  msgSucess.setAttribute("style", "display: block")
  msgSucess.innerHTML = "<strong>Consultando Departamento...</strong>"

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  })

  setTimeout(() => {
    consultDepartment.disabled = false

    msgSucess.setAttribute("style", "display: none")
    msgSucess.innerHTML = ""
  }, 3000)

  msgError.setAttribute("style", "display: none")
  msgError.innerHTML = ""

  let listaDepartment = JSON.parse(localStorage.getItem("listaDepartment"))

  if (listaDepartment && listaDepartment.length > 0) {
    let departamentoConsultado = listaDepartment.find(
      (departamento) =>
        departamento.idDepartmentCad === searchDepartment ||
        departamento.departmentCad.toLowerCase() === searchDepartment
    )

    if (departamentoConsultado) {
      department.value = departamentoConsultado.departmentCad
      responsible.value = departamentoConsultado.responsibleCad
      idDepartment.value = departamentoConsultado.idDepartmentCad
      phoneDepartment.value = departamentoConsultado.phoneDepartmentCad
      emailDepartment.value = departamentoConsultado.emailDepartmentCad
      description.value = departamentoConsultado.descriptionCad
    }
  } else {
    // cadastro incorreto

    msgError.setAttribute("style", "display: block")
    msgError.innerHTML = "<strong>Departamento não encontrada</strong>"

    msgSucess.setAttribute("style", "display: none")
    msgSucess.innerHTML = ""
  }
}

function alterarDepartamento() {
  let searchDepartment = document
    .getElementById("searchDepartment")
    .value.trim()
    .toLowerCase()

  let departmentEdit = JSON.parse(localStorage.getItem("listaDepartment"))

  let indexDepartamento = departmentEdit.findIndex(
    (departamento) =>
      departamento.idDepartmentCad === searchDepartment ||
      departamento.departmentCad.toLowerCase() === searchDepartment
  )

  if (indexDepartamento !== -1) {
    // Aqui você pode alterar os dados do departamento
    departmentEdit[indexDepartamento].departmentCad = department.value
    departmentEdit[indexDepartamento].responsibleCad = responsible.value
    departmentEdit[indexDepartamento].idDepartmentCad = idDepartment.value
    departmentEdit[indexDepartamento].phoneDepartmentCad = phoneDepartment.value
    departmentEdit[indexDepartamento].emailDepartmentCad = emailDepartment.value
    departmentEdit[indexDepartamento].descriptionCad = description.value

    localStorage.setItem("listaDepartment", JSON.stringify(departmentEdit))

    alterDepartment.disabled = true

    msgSucess.setAttribute("style", "display: block")
    msgSucess.innerHTML = "<strong>Alterando Dados do Departamento...</strong>"

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })

    setTimeout(() => {
      alterDepartment.disabled = false
      location.reload()
    }, 3000)
  }
}

function excluirDepartamento() {
  deleteDepartment.disabled = true

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  })

  setTimeout(() => {
    deleteDepartment.disabled = false
    location.reload()
  }, 3000)

  let searchDepartment = document
    .getElementById("searchDepartment")
    .value.trim()
    .toLowerCase()
  let departmentList = JSON.parse(localStorage.getItem("listaDepartment")) || []

  let indexDepartamento = departmentList.findIndex(
    (departamento) =>
      departamento.idDepartmentCad === searchDepartment ||
      departamento.departmentCad.toLowerCase() === searchDepartment
  )

  if (indexDepartamento !== -1) {
    // Remove o departamento da lista pelo índice encontrado
    departmentList.splice(indexDepartamento, 1)

    // Atualiza o localStorage sem o departamento excluído
    localStorage.setItem("listaDepartment", JSON.stringify(departmentList))

    // Mensagem de sucesso ou outras ações após a exclusão
    msgSucess.setAttribute("style", "display: block")
    msgSucess.innerHTML = "<strong>Excluindo Departamento...</strong>"
  } else {
    // Mensagem se o departamento não for encontrado
    msgError.setAttribute("style", "display: block")
    msgError.innerHTML =
      "<strong>Departamento não encontrado para exclusão</strong>"
  }
}

// listaDepartment.forEach((lista) => {
//   department.value = `${lista.departmentCad}`
//   responsible.value = `${lista.responsibleCad}`
//   idDepartment.value = `${lista.idDepartmentCad}`
//   phoneDepartment.value = `${lista.phoneDepartmentCad}`
//   emailDepartment.value = `${lista.emailDepartmentCad}`
//   description.value = `${lista.descriptionCad}`
// })

// departmentCad,
//   responsibleCad,
//   idDepartmentCad,
//   phoneDepartmentCad,
//   emailDepartmentCad,
//   descriptionCad

// departmentEdit.push({
//   departmentCad: department.value,
//   responsibleCad: responsible.value,
//   idDepartmentCad: idDepartment.value,
//   phoneDepartmentCad: phoneDepartment.value,
//   emailDepartmentCad: emailDepartment.value,
//   descriptionCad: description.value,
// })
