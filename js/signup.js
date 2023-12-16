let firstPage = document.querySelector(".first-page")
let firstNextBtn = document.querySelector(".first-next")
let secondNextBtn = document.querySelector(".next-1")
let firstpreviousBtn = document.querySelector(".prev-1")
let thirdNextBtn = document.querySelector(".next-2")
let secondpreviousBtn = document.querySelector(".prev-2")
let submitBtn = document.querySelector(".submitBtn")
let thirdpreviousBtn = document.querySelector(".prev-3")
let formOuter = document.querySelector(".form-outer")
let progressBar = document.querySelector(".progress-bar")
let steps = document.querySelectorAll(".step")
let bullets = document.querySelectorAll(".bullet")
let checks = document.querySelectorAll(".check")
let stapsSpan = document.querySelectorAll(".step .bullet span")
let max = 4;
let current = 1;

firstNextBtn.addEventListener("click", function (){
  firstPage.style.marginLeft = "-25%"
  bullets[current - 1].classList.add("active")
  checks[current - 1].classList.add("active")
  current += 1;
})
secondNextBtn.addEventListener("click", function (){
  firstPage.style.marginLeft = "-50%"
  bullets[current - 1].classList.add("active")
  checks[current - 1].classList.add("active")
  current += 1;
})
thirdNextBtn.addEventListener("click", function (){
  firstPage.style.marginLeft = "-75%"
  bullets[current - 1].classList.add("active")
  checks[current - 1].classList.add("active")
    current += 1
})

firstpreviousBtn.addEventListener("click", function () {
  firstPage.style.marginLeft = "0"
  bullets[current - 2].classList.remove("active")
  checks[current - 2].classList.remove("active")
  current -= 1;
})
secondpreviousBtn.addEventListener("click", function (){
  firstPage.style.marginLeft = "-25%"
  bullets[current - 2].classList.remove("active")
  checks[current - 2].classList.remove("active")
  current -= 1;
})
thirdpreviousBtn.addEventListener("click", function (){
  firstPage.style.marginLeft = "-50%"
  bullets[current - 1].classList.remove("active")
  checks[current - 1].classList.remove("active")
  current -= 1;
})
//////////////////////////////////////////////

let alertHide = document.getElementById("alertHide")
let alert = document.querySelector(".alert")
let alertMsg = document.querySelector("#alertMsg")
let alertIcon = document.querySelector(".alertIcon")



alertHide.addEventListener("click", () => {
  alert.classList.remove("show")
  alert.classList.add("hide")
})


////////////////////////////////////////////////
let firstName = document.getElementById("fName")
let lastName = document.getElementById("lName")
let userName = document.getElementById("user")
let password = document.getElementById("password")
let mail = document.getElementById("Email")
let gender = document.getElementById("gender")
let birthDate = document.getElementById("bDate")
let phone = document.getElementById("phone")





submitBtn.addEventListener("click", function () {
  alert.classList.remove("hide")
  alert.classList.add("show")

  if (firstName.value == '' || lastName.value == '' || userName.value == '' || password.value == '' || mail.value == '' || phone.value == '') {
    alert.classList.remove("hide")
    alert.classList.add("show")
    alertMsg.innerHTML = 'Complete The Form'
    alertIcon.classList.add("fa-grin-beam-sweat")


  }  else {

    
    bullets[current - 1].classList.add("active")
    checks[current - 1].classList.add("active")
    let users = []
    let user = {
      userName: userName.value,
      password: password.value,
      Email: mail.value,
      firstName: firstName.value,
      lastName: lastName.value,
      phone: phone.value,
      gender: gender.value,
      birthDate: birthDate.value
    }
    users.push(user)
    localStorage.setItem("users", JSON.stringify(users))
    alertMsg.innerHTML = 'Acount Is Created'
    alertIcon.classList.add("fa-grin-beam-sweat")
    setTimeout(() => {
      window.location = "index.html"
    }, 3000)
  }
}
)

//////////////////////////////////////////////
const pwHideShow = document.querySelector(".pwHide")


pwHideShow.addEventListener("click", () => {
  if (password.type === 'password') {
    password.type = 'text'
    pwHideShow.classList.replace("fa-eye-slash", "fa-eye")
    pwHideShow.classList.replace("text-gray-400", "text-main")
  } else {
    password.type = 'password'
    pwHideShow.classList.replace("fa-eye", "fa-eye-slash")
    pwHideShow.classList.replace("text-main", "text-gray-400")
  }
})
