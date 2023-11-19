let func = document.getElementById("func")
let labelFunc = document.getElementById("labelFunc")
let validFunc = false

let idFunc = document.getElementById("idFunc")
let labelIdFunc = document.getElementById("labelIdFunc")
let validIdFunc = false

let phoneFunc = document.getElementById("phoneFunc")
let labelPhoneFunc = document.getElementById("labelPhoneFunc")
let validPhoneFunc = false

let cpf = document.getElementById("cpf")
let labelCpf = document.getElementById("labelCpf")
let validCpf = false

let rg = document.getElementById("rg")
let labelRg = document.getElementById("labelRg")
let validRg = false

let emailFunc = document.getElementById("emailFunc")
let labelEmailFunc = document.getElementById("labelEmailFunc")
let validEmailFunc = false

let addressFunc = document.getElementById("addressFunc")
let labelAddressFunc = document.getElementById("labelAddressFunc")
let validAddressFunc = false

let cityFunc = document.getElementById("cityFunc")
let labelCityFunc = document.getElementById("labelCityFunc")
let validCityFunc = false

let stateFunc = document.getElementById("stateFunc")
let labelStateFunc = document.getElementById("labelStateFunc")
let validStateFunc = false

let departmentFunc = document.getElementById("departmentFunc")
let labelDepartmentFunc = document.getElementById("labelDepartmentFunc")
let validDepartmentFunc = false

let office = document.getElementById("office")
let labelOffice = document.getElementById("labelOffice")
let validOffice = false

let baseSalary = document.getElementById("baseSalary")
let labelBaseSalary = document.getElementById("labelBaseSalary")
let validBaseSalary = false

let date_Ad = document.getElementById("date_Ad")
let labelDate_Ad = document.getElementById("labelDate_Ad")
let validDate_Ad = false

let dayWorked = document.getElementById("dayWorked")
let labelDayWorked = document.getElementById("labelDayWorked")
let validDayWorked = false

let workedHours = document.getElementById("workedHours")
let labelWorkedHours = document.getElementById("labelWorkedHours")
let validWorkedHours = false

let transportation = document.getElementById("transportation")
let labelTransportation = document.getElementById("labelTransportation")
let validTransportation = false

let food = document.getElementById("food")
let labelFood = document.getElementById("labelFood")
let validFood = false

let health = document.getElementById("health")
let labelHealth = document.getElementById("labelHealth")
let validHealth = false

let registerFunc = document.getElementById("registerFunc")
let consultFunc = document.getElementById("consultFunc")
let alterFunc = document.getElementById("alterFunc")
let deleteFunc = document.getElementById("deleteFunc")

func.addEventListener("keyup", () => {
  if (func.value.length == 0) {
    labelFunc.setAttribute("style", "color: red")
    labelFunc.innerHTML = "Nome do Funcionário *Insira um nome"
    func.setAttribute("style", "outline:1px solid red")
    validFunc = false
  } else {
    labelFunc.setAttribute("style", "color: #c4c4cc")
    labelFunc.innerHTML = "Nome do Funcionário"
    func.setAttribute("style", "outline-color: 1px solid white")
    validFunc = true
  }
})

idFunc.addEventListener("keyup", () => {
  if (idFunc.value.length === 0) {
    labelIdFunc.setAttribute("style", "color: red")
    labelIdFunc.innerHTML = "id *Insira um id válido"
    idFunc.setAttribute("style", "outline:1px solid red")
    validIdFunc = false
  } else {
    labelIdFunc.setAttribute("style", "color: #c4c4cc")
    labelIdFunc.innerHTML = "id"
    idFunc.setAttribute("style", "outline-color: 1px solid white")
    validIdFunc = true
  }
})

phoneFunc.addEventListener("keyup", () => {
  if (phoneFunc.value.length != 11) {
    labelPhoneFunc.setAttribute("style", "color: red")
    labelPhoneFunc.innerHTML = "Telefone *Insira um telefone válido com ddd"
    phoneFunc.setAttribute("style", "outline:1px solid red")
    validPhoneFunc = false
  } else {
    labelPhoneFunc.setAttribute("style", "color: #c4c4cc")
    labelPhoneFunc.innerHTML = "Telefone"
    phoneFunc.setAttribute("style", "outline-color: 1px solid white")
    validPhoneFunc = true
  }
})

cpf.addEventListener("keyup", () => {
  if (cpf.value.length != 14) {
    labelCpf.setAttribute("style", "color: red")
    labelCpf.innerHTML = "CPF *Insira um CPF válido"
    cpf.setAttribute("style", "outline:1px solid red")
    validCpf = false
  } else {
    labelCpf.setAttribute("style", "color: #c4c4cc")
    labelCpf.innerHTML = "CPF"
    cpf.setAttribute("style", "outline-color: 1px solid white")
    validCpf = true
  }
})

rg.addEventListener("keyup", () => {
  if (rg.value.length != 12) {
    labelRg.setAttribute("style", "color: red")
    labelRg.innerHTML = "RG *Insira um RG válido"
    rg.setAttribute("style", "outline:1px solid red")
    validRg = false
  } else {
    labelRg.setAttribute("style", "color: #c4c4cc")
    labelRg.innerHTML = "RG"
    rg.setAttribute("style", "outline-color: 1px solid white")
    validRg = true
  }
})

emailFunc.addEventListener("keyup", () => {
  if (emailFunc.value.length <= 1) {
    labelEmailFunc.setAttribute("style", "color: red")
    labelEmailFunc.innerHTML = "E-mail *Insira um e-mail válido"
    emailFunc.setAttribute("style", "outline:1px solid red")
    validEmailFunc = false
  } else {
    labelEmailFunc.setAttribute("style", "color: #c4c4cc")
    labelEmailFunc.innerHTML = "E-mail"
    emailFunc.setAttribute("style", "outline-color: 1px solid white")
    validEmailFunc = true
  }
})

addressFunc.addEventListener("keyup", () => {
  if (addressFunc.value.length <= 1) {
    labelAddressFunc.setAttribute("style", "color: red")
    labelAddressFunc.innerHTML = "Endereço *Insira um endereço válido"
    addressFunc.setAttribute("style", "outline:1px solid red")
    validAddressFunc = false
  } else {
    labelAddressFunc.setAttribute("style", "color: #c4c4cc")
    labelAddressFunc.innerHTML = "Endereço"
    addressFunc.setAttribute("style", "outline-color: 1px solid white")
    validAddressFunc = true
  }
})

cityFunc.addEventListener("keyup", () => {
  if (cityFunc.value.length <= 1) {
    labelCityFunc.setAttribute("style", "color: red")
    labelCityFunc.innerHTML = "Cidade *Insira uma cidade válido"
    cityFunc.setAttribute("style", "outline:1px solid red")
    validCityFunc = false
  } else {
    labelCityFunc.setAttribute("style", "color: #c4c4cc")
    labelCityFunc.innerHTML = "Cidade"
    cityFunc.setAttribute("style", "outline-color: 1px solid white")
    validCityFunc = true
  }
})

stateFunc.addEventListener("keyup", () => {
  if (stateFunc.value.length <= 1) {
    labelStateFunc.setAttribute("style", "color: red")
    labelStateFunc.innerHTML = "Estado *Insira uma Estado válido"
    stateFunc.setAttribute("style", "outline:1px solid red")
    validStateFunc = false
  } else {
    labelStateFunc.setAttribute("style", "color: #c4c4cc")
    labelStateFunc.innerHTML = "Estado"
    stateFunc.setAttribute("style", "outline-color: 1px solid white")
    validStateFunc = true
  }
})

departmentFunc.addEventListener("keyup", () => {
  if (departmentFunc.value.length <= 1) {
    labelDepartmentFunc.setAttribute("style", "color: red")
    labelDepartmentFunc.innerHTML =
      "Departamento *Insira um departamento válido"
    departmentFunc.setAttribute("style", "outline:1px solid red")
    validDepartmentFunc = false
  } else {
    labelDepartmentFunc.setAttribute("style", "color: #c4c4cc")
    labelDepartmentFunc.innerHTML = "Departamento"
    departmentFunc.setAttribute("style", "outline-color: 1px solid white")
    validDepartmentFunc = true
  }
})

office.addEventListener("keyup", () => {
  if (office.value.length <= 1) {
    labelOffice.setAttribute("style", "color: red")
    labelOffice.innerHTML = "Cargo *Insira um cargo válido"
    office.setAttribute("style", "outline:1px solid red")
    validOffice = false
  } else {
    labelOffice.setAttribute("style", "color: #c4c4cc")
    labelOffice.innerHTML = "Cargo"
    office.setAttribute("style", "outline-color: 1px solid white")
    validOffice = true
  }
})

baseSalary.addEventListener("keyup", () => {
  if (baseSalary.value.length < 1) {
    labelBaseSalary.setAttribute("style", "color: red")
    labelBaseSalary.innerHTML = "Salário Base *Insira um salário"
    baseSalary.setAttribute("style", "outline:1px solid red")
    validBaseSalary = false
  } else {
    labelBaseSalary.setAttribute("style", "color: #c4c4cc")
    labelBaseSalary.innerHTML = "Salário Base"
    baseSalary.setAttribute("style", "outline-color: 1px solid white")
    validBaseSalary = true
  }
})

date_Ad.addEventListener("keyup", () => {
  if (date_Ad.value.length == 0) {
    labelDate_Ad.setAttribute("style", "color: red")
    labelDate_Ad.innerHTML = "Data Admissão *Insira uma data"
    date_Ad.setAttribute("style", "outline:1px solid red")
    validDate_Ad = false
  } else {
    labelDate_Ad.setAttribute("style", "color: #c4c4cc")
    labelDate_Ad.innerHTML = "Data Admissão"
    date_Ad.setAttribute("style", "outline-color: 1px solid white")
    validDate_Ad = true
  }
})

dayWorked.addEventListener("keyup", () => {
  if (dayWorked.value.length < 1) {
    labelDayWorked.setAttribute("style", "color: red")
    labelDayWorked.innerHTML = "Dias Trabalhados *Insira os dias"
    dayWorked.setAttribute("style", "outline:1px solid red")
    validDayWorked = false
  } else {
    labelDayWorked.setAttribute("style", "color: #c4c4cc")
    labelDayWorked.innerHTML = "Dias Trabalhados"
    dayWorked.setAttribute("style", "outline-color: 1px solid white")
    validDayWorked = true
  }
})

workedHours.addEventListener("keyup", () => {
  if (workedHours.value.length < 1) {
    labelWorkedHours.setAttribute("style", "color: red")
    labelWorkedHours.innerHTML = "Horas por dia *Insira as horas"
    workedHours.setAttribute("style", "outline:1px solid red")
    validWorkedHours = false
  } else {
    labelWorkedHours.setAttribute("style", "color: #c4c4cc")
    labelWorkedHours.innerHTML = "Horas por dia"
    workedHours.setAttribute("style", "outline-color: 1px solid white")
    validWorkedHours = true
  }
})

transportation.addEventListener("keyup", () => {
  if (transportation.value.length < 1) {
    labelTransportation.setAttribute("style", "color: red")
    labelTransportation.innerHTML = "Vale Transporte *Insira o vale"
    transportation.setAttribute("style", "outline:1px solid red")
    validTransportation = false
  } else {
    labelTransportation.setAttribute("style", "color: #c4c4cc")
    labelTransportation.innerHTML = "Vale Transporte"
    transportation.setAttribute("style", "outline-color: 1px solid white")
    validTransportation = true
  }
})

food.addEventListener("keyup", () => {
  if (food.value.length < 1) {
    labelFood.setAttribute("style", "color: red")
    labelFood.innerHTML = "Vale Alimentação *Insira o vale"
    food.setAttribute("style", "outline:1px solid red")
    validFood = false
  } else {
    labelFood.setAttribute("style", "color: #c4c4cc")
    labelFood.innerHTML = "Vale Alimentação"
    food.setAttribute("style", "outline-color: 1px solid white")
    validFood = true
  }
})

health.addEventListener("keyup", () => {
  if (health.value.length < 1) {
    labelHealth.setAttribute("style", "color: red")
    labelHealth.innerHTML = "Plano de Saúde *Insira o plano de saúde"
    health.setAttribute("style", "outline:1px solid red")
    validHealth = false
  } else {
    labelHealth.setAttribute("style", "color: #c4c4cc")
    labelHealth.innerHTML = "Plano de Saúde"
    health.setAttribute("style", "outline-color: 1px solid white")
    validHealth = true
  }
})
