let initial_dt = document.getElementById("initial_dt")
let final_dt = document.getElementById("final_dt")

let process = document.getElementById("process")
let close = document.getElementById("close")

let func = document.getElementById("func")
let validFunc = false

let departmentFunc = document.getElementById("departmentFunc")
let validDepartmentFunc = false

let office = document.getElementById("office")
let validOffice = false

let idFunc = document.getElementById("idFunc")
let validIdFunc = false

let baseSalary = document.getElementById("baseSalary")
let validBaseSalary = false

let dayWorked = document.getElementById("dayWorked")
let validDayWorked = false

let workedHours = document.getElementById("workedHours")
let validWorkedHours = false

let transportation = document.getElementById("transportation")
let validTransportation = false

let food = document.getElementById("food")
let validFood = false

let thirteenth = document.getElementById("thirteenth")
let validThirteenth = false

let inss = document.getElementById("inss")
let validInss = false

let fgts = document.getElementById("fgts")
let validFgts = false

let irrf = document.getElementById("irrf")
let validIrrf = false

let health = document.getElementById("health")
let validHealth = false

let overTime = document.getElementById("overTime")
let validOverTime = false

let fouls = document.getElementById("fouls")
let validFouls = false

let netSalary = document.getElementById("netSalary")
let validNetSalary = false

let msgError = document.getElementById("msgError")
let msgSucess = document.getElementById("msgSucess")

let dadosProcessados = {}

function processarFolha() {
  let searchFunc = document
    .getElementById("searchFunc")
    .value.trim()
    .toLowerCase()

  let listaFunc = JSON.parse(localStorage.getItem("listaFunc"))

  if (listaFunc && listaFunc.length > 0) {
    process.disabled = true
    let funcConsultado = listaFunc.find(
      (funcionario) =>
        funcionario.idFuncCad === searchFunc ||
        funcionario.funcCad.toLowerCase() === searchFunc
    )

    let initialConsult = initial_dt.value != 0
    let finalConsult = final_dt.value != 0

    if (funcConsultado && initialConsult && finalConsult) {
      func.value = funcConsultado.funcCad
      idFunc.value = funcConsultado.idFuncCad
      departmentFunc.value = funcConsultado.departmentFuncCad
      office.value = funcConsultado.officeCad
      baseSalary.value = "R$ " + funcConsultado.baseSalaryCad
      dayWorked.value = funcConsultado.dayWorkedCad
      workedHours.value = funcConsultado.workedHoursCad * dayWorked.value
      transportation.value = "R$ " + funcConsultado.transportationCad
      food.value = "R$ " + funcConsultado.foodCad
      health.value = funcConsultado.healthCad

      const baseSalaryValue = parseFloat(
        funcConsultado.baseSalaryCad.replace("R$ ", "")
      )
      const transportationValue = parseFloat(
        funcConsultado.transportationCad.replace("R$ ", "")
      )
      const foodValue = parseFloat(funcConsultado.foodCad.replace("R$ ", ""))

      const percentualINSS = 0.08
      const percentualFGTS = 0.11
      const percentualIRRF = 0.15

      const descontoINSS = baseSalaryValue * percentualINSS
      const descontoFGTS = baseSalaryValue * percentualFGTS

      let descontoIRRF = 0
      // Implementação básica do desconto do IRRF, considere melhorias de acordo com a legislação vigente
      if (baseSalaryValue > 2000) {
        descontoIRRF = baseSalaryValue * percentualIRRF
      }

      salarioLiquido =
        baseSalaryValue +
        transportationValue +
        foodValue -
        descontoINSS -
        descontoFGTS -
        descontoIRRF

      inss.value = "R$ " + descontoINSS + ",00"
      fgts.value = "R$ " + descontoFGTS + ",00"
      irrf.value = "R$ " + descontoIRRF + ",00"

      netSalary.value = "R$ " + salarioLiquido.toFixed(2)

      msgSucess.setAttribute("style", "display: block")
      msgSucess.innerHTML = "<strong>Processando Folha de Pagamento...</strong>"

      msgError.setAttribute("style", "display: none")
      msgError.innerHTML = ""

      setTimeout(() => {
        process.disabled = false

        msgSucess.setAttribute("style", "display: none")
        msgSucess.innerHTML = ""

        msgError.setAttribute("style", "display: none")
        msgError.innerHTML = ""
      }, 3000)

      dadosProcessados = {
        funcCad: func.value,
        idFuncCad: idFunc.value,
        departmentFuncCad: departmentFunc.value,
        officeCad: office.value,
        baseSalaryCad: baseSalary.value,
        dayWorkedCad: dayWorked.value,
        workedHoursCad: workedHours.value,
        transportationCad: transportation.value,
        foodCad: food.value,
        inssCad: inss.value,
        fgtsCad: fgts.value,
        irrfCad: irrf.value,
        netSalaryCad: netSalary.value,
      }
    } else {
      // cadastro incorreto
      process.disabled = true

      msgError.setAttribute("style", "display: block")
      msgError.innerHTML =
        "<strong>Erro ao processar Folha de Pagamento</strong>"

      msgSucess.setAttribute("style", "display: none")
      msgSucess.innerHTML = ""

      setTimeout(() => {
        process.disabled = false

        msgSucess.setAttribute("style", "display: none")
        msgSucess.innerHTML = ""

        msgError.setAttribute("style", "display: none")
        msgError.innerHTML = ""
      }, 3000)
    }
  } else {
    // cadastro incorreto
    process.disabled = true

    msgError.setAttribute("style", "display: block")
    msgError.innerHTML = "<strong>Erro ao processar Folha de Pagamento</strong>"

    msgSucess.setAttribute("style", "display: none")
    msgSucess.innerHTML = ""

    setTimeout(() => {
      process.disabled = false

      msgSucess.setAttribute("style", "display: none")
      msgSucess.innerHTML = ""

      msgError.setAttribute("style", "display: none")
      msgError.innerHTML = ""
    }, 3000)
  }

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  })
}

function encerrarFolha() {
  if (Object.keys(dadosProcessados).length > 0) {
    //implementando o localStorage se o cadastro foi sucesso, cadastro correto

    let listaCalc = JSON.parse(localStorage.getItem("listaCalc") || "[]")

    // let newListaCalc = {
    //   funcCad: func.value,
    //   idFuncCad: idFunc.value,
    //   departmentFuncCad: departmentFunc.value,
    //   officeCad: office.value,
    //   baseSalaryCad: baseSalary.value,
    //   dayWorkedCad: dayWorked.value,
    //   workedHoursCad: workedHours.value,
    //   transportationCad: transportation.value,
    //   foodCad: food.value,
    //   inssCad: inss.value,
    //   fgtsCad: fgts.value,
    //   irrfCad: irrf.value,
    //   netSalaryCad: netSalary.value,
    // }

    listaCalc.push(dadosProcessados)

    localStorage.setItem("listaCalc", JSON.stringify(listaCalc))

    msgSucess.setAttribute("style", "display: block")
    msgSucess.innerHTML = "<strong>Encerrando Folha de Pagamento...</strong>"

    msgError.setAttribute("style", "display: none")
    msgError.innerHTML = ""

    close.disabled = true

    window.scrollTo({
      top: 0,
      behavior: "smooth", // Comportamento de rolagem suave
    })

    setTimeout(() => {
      close.disabled = false
      location.reload()
    }, 3000)
  } else {
    // cadastro incorreto
    close.disabled = true

    msgError.setAttribute("style", "display: block")
    msgError.innerHTML = "<strong>Erro ao encerrar Folha de Pagamento</strong>"

    msgSucess.setAttribute("style", "display: none")
    msgSucess.innerHTML = ""

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })

    setTimeout(() => {
      close.disabled = false
      location.reload()
    }, 3000)
  }
}
