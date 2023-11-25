let initial_dt = document.getElementById("initial_dt")
let final_dt = document.getElementById("final_dt")

let initial = document.getElementById("initial")
let final = document.getElementById("final")
let emission = document.getElementById("emission")

let processRel = document.getElementById("processRel")
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
let departmentFunc2 = document.getElementById("departmentFunc2")
let departmentFunc3 = document.getElementById("departmentFunc3")
let departmentFunc4 = document.getElementById("departmentFunc4")
let departmentFunc5 = document.getElementById("departmentFunc5")
let departmentFunc6 = document.getElementById("departmentFunc6")
let departmentFunc7 = document.getElementById("departmentFunc7")
let departmentFunc8 = document.getElementById("departmentFunc8")
let departmentFunc9 = document.getElementById("departmentFunc9")
let departmentFunc10 = document.getElementById("departmentFunc10")
let validDepartmentFunc = false

let func = document.getElementById("func")
let func2 = document.getElementById("func2")
let func3 = document.getElementById("func3")
let func4 = document.getElementById("func4")
let func5 = document.getElementById("func5")
let func6 = document.getElementById("func6")
let func7 = document.getElementById("func7")
let func8 = document.getElementById("func8")
let func9 = document.getElementById("func9")
let func10 = document.getElementById("func10")
let validFunc = false

let baseSalary = document.getElementById("baseSalary")
let baseSalary2 = document.getElementById("baseSalary2")
let baseSalary3 = document.getElementById("baseSalary3")
let baseSalary4 = document.getElementById("baseSalary4")
let baseSalary5 = document.getElementById("baseSalary5")
let baseSalary6 = document.getElementById("baseSalary6")
let baseSalary7 = document.getElementById("baseSalary7")
let baseSalary8 = document.getElementById("baseSalary8")
let baseSalary9 = document.getElementById("baseSalary9")
let baseSalary10 = document.getElementById("baseSalary10")
let validBaseSalary = false

let transportation = document.getElementById("transportation")
let transportation7 = document.getElementById("transportation7")
let transportation8 = document.getElementById("transportation8")
let transportation9 = document.getElementById("transportation9")
let transportation10 = document.getElementById("transportation10")
let validTransportation = false

let food = document.getElementById("food")
let food7 = document.getElementById("food7")
let food8 = document.getElementById("food8")
let food9 = document.getElementById("food9")
let food10 = document.getElementById("food10")
let validFood = false

let inss = document.getElementById("inss")
let inss7 = document.getElementById("inss7")
let inss8 = document.getElementById("inss8")
let inss9 = document.getElementById("inss9")
let inss10 = document.getElementById("inss10")
let validInss = false

let fgts = document.getElementById("fgts")
let fgts7 = document.getElementById("fgts7")
let fgts8 = document.getElementById("fgts8")
let fgts9 = document.getElementById("fgts9")
let fgts10 = document.getElementById("fgts10")
let validFgts = false

let irrf = document.getElementById("irrf")
let validIrrf = false

let netSalary = document.getElementById("netSalary")
let netSalary2 = document.getElementById("netSalary2")
let netSalary3 = document.getElementById("netSalary3")
let netSalary4 = document.getElementById("netSalary4")
let netSalary5 = document.getElementById("netSalary5")
let netSalary6 = document.getElementById("netSalary6")
let netSalary7 = document.getElementById("netSalary7")
let netSalary8 = document.getElementById("netSalary8")
let netSalary9 = document.getElementById("netSalary9")
let netSalary10 = document.getElementById("netSalary10")
let validNetSalary = false

let salaries = document.getElementById("salaries")
let salaries2 = document.getElementById("salaries2")
let salaries3 = document.getElementById("salaries3")
let salaries4 = document.getElementById("salaries4")
let salaries5 = document.getElementById("salaries5")

let discounts = document.getElementById("discounts")
let discounts2 = document.getElementById("discounts2")
let discounts3 = document.getElementById("discounts3")
let discounts4 = document.getElementById("discounts4")
let discounts5 = document.getElementById("discounts5")

let msgError = document.getElementById("msgError")
let msgSucess = document.getElementById("msgSucess")

function processarRelatorio() {
  let listaCalc = JSON.parse(localStorage.getItem("listaCalc"))
  let listaCompany = JSON.parse(localStorage.getItem("listaCompany"))

  let initialConsult = initial_dt.value != 0
  let finalConsult = final_dt.value != 0

  if (initialConsult && finalConsult) {
    processRel.disabled = true

    initial.value = initial_dt.value
    final.value = final_dt.value

    let dataAtual = new Date()

    let ano = dataAtual.getFullYear()
    let mes = ("0" + (dataAtual.getMonth() + 1)).slice(-2)
    let dia = ("0" + dataAtual.getDate()).slice(-2)

    let dataFormatada = ano + "-" + mes + "-" + dia
    emission.value = dataFormatada

    if (listaCompany && listaCompany.length > 0) {
      company.value = listaCompany[0].companyCad
      cnpj.value = listaCompany[0].cnpjCad
      address.value = listaCompany[0].addressCad
      city.value = listaCompany[0].cityCad
      state.value = listaCompany[0].stateCad
    }

    if (listaCalc && listaCalc.length > 0) {
      if (listaCalc[0]) {
        let foodValue = parseFloat(listaCalc[0].foodCad.replace("R$ ", ""))
        let transportationValue = parseFloat(
          listaCalc[0].transportationCad.replace("R$ ", "")
        )
        let inssValue = parseFloat(listaCalc[0].inssCad.replace("R$ ", ""))
        let fgtsValue = parseFloat(listaCalc[0].fgtsCad.replace("R$ ", ""))
        let irrfValue = parseFloat(listaCalc[0].irrfCad.replace("R$ ", ""))

        departmentFunc.value = listaCalc[0].departmentFuncCad
        func.value = listaCalc[0].funcCad
        baseSalary.value = listaCalc[0].baseSalaryCad
        salaries.value = "R$ " + (foodValue + transportationValue)
        discounts.value = "R$ " + (inssValue + fgtsValue + irrfValue)
        netSalary.value = listaCalc[0].netSalaryCad

        departmentFunc6.value = listaCalc[0].departmentFuncCad
        func6.value = listaCalc[0].funcCad
        baseSalary6.value = listaCalc[0].baseSalaryCad
        transportation.value = listaCalc[0].transportationCad
        food.value = listaCalc[0].foodCad
        inss.value = listaCalc[0].inssCad
        fgts.value = listaCalc[0].fgtsCad
        netSalary6.value = listaCalc[0].netSalaryCad
      }

      if (listaCalc[1]) {
        let foodValue2 = parseFloat(listaCalc[1].foodCad.replace("R$ ", ""))
        let transportationValue2 = parseFloat(
          listaCalc[1].transportationCad.replace("R$ ", "")
        )
        let inssValue2 = parseFloat(listaCalc[1].inssCad.replace("R$ ", ""))
        let fgtsValue2 = parseFloat(listaCalc[1].fgtsCad.replace("R$ ", ""))
        let irrfValue2 = parseFloat(listaCalc[1].irrfCad.replace("R$ ", ""))

        departmentFunc2.value = listaCalc[1].departmentFuncCad
        func2.value = listaCalc[1].funcCad
        baseSalary2.value = listaCalc[1].baseSalaryCad
        salaries2.value = "R$ " + (foodValue2 + transportationValue2)
        discounts2.value = "R$ " + (inssValue2 + fgtsValue2 + irrfValue2)
        netSalary2.value = listaCalc[1].netSalaryCad

        departmentFunc7.value = listaCalc[1].departmentFuncCad
        func7.value = listaCalc[1].funcCad
        baseSalary7.value = listaCalc[1].baseSalaryCad
        transportation7.value = listaCalc[1].transportationCad
        food7.value = listaCalc[1].foodCad
        inss7.value = listaCalc[1].inssCad
        fgts7.value = listaCalc[1].fgtsCad
        netSalary7.value = listaCalc[1].netSalaryCad
      }

      if (listaCalc[2]) {
        let foodValue3 = parseFloat(listaCalc[2].foodCad.replace("R$ ", ""))
        let transportationValue3 = parseFloat(
          listaCalc[2].transportationCad.replace("R$ ", "")
        )
        let inssValue3 = parseFloat(listaCalc[2].inssCad.replace("R$ ", ""))
        let fgtsValue3 = parseFloat(listaCalc[2].fgtsCad.replace("R$ ", ""))
        let irrfValue3 = parseFloat(listaCalc[2].irrfCad.replace("R$ ", ""))

        departmentFunc3.value = listaCalc[2].departmentFuncCad
        func3.value = listaCalc[2].funcCad
        baseSalary3.value = listaCalc[2].baseSalaryCad
        salaries3.value = "R$ " + (foodValue3 + transportationValue3)
        discounts3.value = "R$ " + (inssValue3 + fgtsValue3 + irrfValue3)
        netSalary3.value = listaCalc[2].netSalaryCad

        departmentFunc8.value = listaCalc[2].departmentFuncCad
        func8.value = listaCalc[2].funcCad
        baseSalary8.value = listaCalc[2].baseSalaryCad
        transportation8.value = listaCalc[2].transportationCad
        food8.value = listaCalc[2].foodCad
        inss8.value = listaCalc[2].inssCad
        fgts8.value = listaCalc[2].fgtsCad
        netSalary8.value = listaCalc[2].netSalaryCad
      }

      if (listaCalc[3]) {
        let foodValue4 = parseFloat(listaCalc[3].foodCad.replace("R$ ", ""))
        let transportationValue4 = parseFloat(
          listaCalc[3].transportationCad.replace("R$ ", "")
        )
        let inssValue4 = parseFloat(listaCalc[3].inssCad.replace("R$ ", ""))
        let fgtsValue4 = parseFloat(listaCalc[3].fgtsCad.replace("R$ ", ""))
        let irrfValue4 = parseFloat(listaCalc[3].irrfCad.replace("R$ ", ""))

        departmentFunc4.value = listaCalc[3].departmentFuncCad
        func4.value = listaCalc[3].funcCad
        baseSalary4.value = listaCalc[3].baseSalaryCad
        salaries4.value = "R$ " + (foodValue4 + transportationValue4)
        discounts4.value = "R$ " + (inssValue4 + fgtsValue4 + irrfValue4)
        netSalary4.value = listaCalc[3].netSalaryCad

        departmentFunc9.value = listaCalc[3].departmentFuncCad
        func9.value = listaCalc[3].funcCad
        baseSalary9.value = listaCalc[3].baseSalaryCad
        transportation9.value = listaCalc[3].transportationCad
        food9.value = listaCalc[3].foodCad
        inss9.value = listaCalc[3].inssCad
        fgts9.value = listaCalc[3].fgtsCad
        netSalary9.value = listaCalc[3].netSalaryCad
      }

      if (listaCalc[4]) {
        let foodValue5 = parseFloat(listaCalc[4].foodCad.replace("R$ ", ""))
        let transportationValue5 = parseFloat(
          listaCalc[4].transportationCad.replace("R$ ", "")
        )
        let inssValue5 = parseFloat(listaCalc[4].inssCad.replace("R$ ", ""))
        let fgtsValue5 = parseFloat(listaCalc[4].fgtsCad.replace("R$ ", ""))
        let irrfValue5 = parseFloat(listaCalc[4].irrfCad.replace("R$ ", ""))

        departmentFunc5.value = listaCalc[4].departmentFuncCad
        func5.value = listaCalc[4].funcCad
        baseSalary5.value = listaCalc[4].baseSalaryCad
        salaries5.value = "R$ " + (foodValue5 + transportationValue5)
        discounts5.value = "R$ " + (inssValue5 + fgtsValue5 + irrfValue5)
        netSalary5.value = listaCalc[4].netSalaryCad

        departmentFunc10.value = listaCalc[4].departmentFuncCad
        func10.value = listaCalc[4].funcCad
        baseSalary10.value = listaCalc[4].baseSalaryCad
        transportation10.value = listaCalc[4].transportationCad
        food10.value = listaCalc[4].foodCad
        inss10.value = listaCalc[4].inssCad
        fgts10.value = listaCalc[4].fgtsCad
        netSalary10.value = listaCalc[4].netSalaryCad
      }
    }

    msgSucess.setAttribute("style", "display: block")
    msgSucess.innerHTML = "<strong>Processando Relatórios...</strong>"

    msgError.setAttribute("style", "display: none")
    msgError.innerHTML = ""

    setTimeout(() => {
      processRel.disabled = false

      msgSucess.setAttribute("style", "display: none")
      msgSucess.innerHTML = ""

      msgError.setAttribute("style", "display: none")
      msgError.innerHTML = ""
    }, 3000)
  } else {
    // cadastro incorreto
    processRel.disabled = true

    msgError.setAttribute("style", "display: block")
    msgError.innerHTML = "<strong>Erro ao processar Relatórios</strong>"

    msgSucess.setAttribute("style", "display: none")
    msgSucess.innerHTML = ""

    setTimeout(() => {
      processRel.disabled = false

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
