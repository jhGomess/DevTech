let initial_dt = document.getElementById("initial_dt")
let final_dt = document.getElementById("final_dt")

let initial = document.getElementById("initial")
let final = document.getElementById("final")
let emission = document.getElementById("emission")

let processHol = document.getElementById("processHol")
const download = document.getElementById("download")

let company = document.getElementById("company")
let validCompany = false

let cnpj = document.getElementById("cnpj")
let validCnpj = false

let address = document.getElementById("address")
let validAddress = false

let city = document.getElementById("city")
let validCity = false

let state = document.getElementById("state")
let validState = false

let departmentFunc = document.getElementById("departmentFunc")
let validDepartmentFunc = false

let func = document.getElementById("func")
let validFunc = false

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

let inss = document.getElementById("inss")
let validInss = false

let fgts = document.getElementById("fgts")
let validFgts = false

let irrf = document.getElementById("irrf")
let validIrrf = false

let netSalary = document.getElementById("netSalary")
let validNetSalary = false

let msgError = document.getElementById("msgError")
let msgSucess = document.getElementById("msgSucess")

function processarHolerite() {
  let searchFunc = document
    .getElementById("searchFunc")
    .value.trim()
    .toLowerCase()

  let listaFunc = JSON.parse(localStorage.getItem("listaFunc"))
  let listaCalc = JSON.parse(localStorage.getItem("listaCalc"))
  let listaCompany = JSON.parse(localStorage.getItem("listaCompany"))

  if (listaFunc && listaFunc.length > 0 && listaCalc && listaCalc.length > 0) {
    processHol.disabled = true
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
      baseSalary.value = funcConsultado.baseSalaryCad
      dayWorked.value = funcConsultado.dayWorkedCad
      workedHours.value = funcConsultado.workedHoursCad * dayWorked.value
      transportation.value = funcConsultado.transportationCad
      food.value = funcConsultado.foodCad

      let calcConsultado = listaCalc.find(
        (calc) =>
          calc.idFuncCad === funcConsultado.idFuncCad ||
          calc.funcCad === funcConsultado.funcCad
      )

      if (calcConsultado) {
        inss.value = calcConsultado.inssCad
        fgts.value = calcConsultado.fgtsCad
        irrf.value = calcConsultado.irrfCad
        netSalary.value = calcConsultado.netSalaryCad
      }

      if (listaCompany && listaCompany.length > 0) {
        company.value = listaCompany[0].companyCad
        cnpj.value = listaCompany[0].cnpjCad
        address.value = listaCompany[0].addressCad
        city.value = listaCompany[0].cityCad
        state.value = listaCompany[0].stateCad
      }

      initial.value = initial_dt.value
      final.value = final_dt.value

      let dataAtual = new Date()

      let ano = dataAtual.getFullYear()
      let mes = ("0" + (dataAtual.getMonth() + 1)).slice(-2)
      let dia = ("0" + dataAtual.getDate()).slice(-2)

      let dataFormatada = ano + "-" + mes + "-" + dia
      emission.value = dataFormatada

      msgSucess.setAttribute("style", "display: block")
      msgSucess.innerHTML = "<strong>Processando Holerite...</strong>"

      msgError.setAttribute("style", "display: none")
      msgError.innerHTML = ""

      setTimeout(() => {
        processHol.disabled = false

        msgSucess.setAttribute("style", "display: none")
        msgSucess.innerHTML = ""

        msgError.setAttribute("style", "display: none")
        msgError.innerHTML = ""
      }, 3000)
    } else {
      // cadastro incorreto
      processHol.disabled = true

      msgError.setAttribute("style", "display: block")
      msgError.innerHTML = "<strong>Erro ao processar Holerite</strong>"

      msgSucess.setAttribute("style", "display: none")
      msgSucess.innerHTML = ""

      setTimeout(() => {
        processHol.disabled = false

        msgSucess.setAttribute("style", "display: none")
        msgSucess.innerHTML = ""

        msgError.setAttribute("style", "display: none")
        msgError.innerHTML = ""
      }, 3000)
    }
  } else {
    // cadastro incorreto
    processHol.disabled = true

    msgError.setAttribute("style", "display: block")
    msgError.innerHTML = "<strong>Erro ao processar Holerite</strong>"

    msgSucess.setAttribute("style", "display: none")
    msgSucess.innerHTML = ""

    setTimeout(() => {
      processHol.disabled = false

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

// download.addEventListener("click", () => {
//   const holerite = document.getElementById("holerite")

//   const options = {
//     margin: [10, 10, 10, 10],
//     image: { type: "jpeg", quality: 0.98 },
//     Filename: "arquivo.pdf",
//     html2canvas: { scale: 2 },
//     jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
//   }

//   html2pdf().set(options).from(holerite).save()
// })

download.addEventListener("click", () => {
  const holerite = document.getElementById("holerite").innerHTML

  let janela = window.open("", "", "width=1200, heigth=1200")
  janela.document.write("<html> <head>")
  janela.document.write("<title>DevTech </title> ")
  janela.document.write("<link> </head>")
  janela.document.write("<body>")
  janela.document.write(holerite)
  janela.document.write("</body> </html>")
  janela.document.close()
  janela.print()
})
