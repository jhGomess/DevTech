function f() {
  document.getElementsByClassName("dropdown")[0].classList.toggle("down")
  document.getElementsByClassName("arrow")[0].classList.toggle("gone")
  if (
    document.getElementsByClassName("dropdown")[0].classList.contains("down")
  ) {
    setTimeout(function () {
      document.getElementsByClassName("dropdown")[0].style.overflow = "visible"
    }, 500)
  } else {
    document.getElementsByClassName("dropdown")[0].style.overflow = "hidden"
  }
}

function q() {
  document.getElementsByClassName("drop")[0].classList.toggle("down")
  document.getElementsByClassName("arrow2")[0].classList.toggle("gone")
  if (document.getElementsByClassName("drop")[0].classList.contains("down")) {
    setTimeout(function () {
      document.getElementsByClassName("drop")[0].style.overflow = "visible"
    }, 500)
  } else {
    document.getElementsByClassName("drop")[0].style.overflow = "hidden"
  }
}

function w() {
  document.getElementsByClassName("func")[0].classList.toggle("down")
  document.getElementsByClassName("arrow3")[0].classList.toggle("gone")
  if (document.getElementsByClassName("func")[0].classList.contains("down")) {
    setTimeout(function () {
      document.getElementsByClassName("func")[0].style.overflow = "visible"
    }, 500)
  } else {
    document.getElementsByClassName("func")[0].style.overflow = "hidden"
  }
}

function e() {
  document.getElementsByClassName("folha")[0].classList.toggle("down")
  document.getElementsByClassName("arrow4")[0].classList.toggle("gone")
  if (document.getElementsByClassName("folha")[0].classList.contains("down")) {
    setTimeout(function () {
      document.getElementsByClassName("folha")[0].style.overflow = "visible"
    }, 500)
  } else {
    document.getElementsByClassName("folha")[0].style.overflow = "hidden"
  }
}

function j() {
  document.getElementsByClassName("rel")[0].classList.toggle("down")
  document.getElementsByClassName("arrow5")[0].classList.toggle("gone")
  if (document.getElementsByClassName("rel")[0].classList.contains("down")) {
    setTimeout(function () {
      document.getElementsByClassName("rel")[0].style.overflow = "visible"
    }, 500)
  } else {
    document.getElementsByClassName("rel")[0].style.overflow = "hidden"
  }
}
