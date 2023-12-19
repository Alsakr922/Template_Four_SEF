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
let alertHide = document.getElementById("alertHide")
let alert = document.querySelector(".alert")
let alertMsg = document.querySelector("#alertMsg")
let alertIcon = document.querySelector(".alertIcon")
let firstNameinput = document.getElementById("fName")
let lastNameinput = document.getElementById("lName")
let userNameinput = document.getElementById("user")
let passwordinput = document.getElementById("password")
let pwHideShow = document.querySelector(".pwHide")
let mailinput = document.getElementById("Email")
let genderinput = document.getElementById("gender")
let birthDateinput = document.getElementById("bDate")
let phoneinput = document.getElementById("phone")
let users;
let max = 4;
let current = 1;

firstNextBtn.addEventListener("click", function (){
  firstPage.style.marginLeft = "-25%"
bullCheck1()
})
secondNextBtn.addEventListener("click", function (){
  firstPage.style.marginLeft = "-50%"
bullCheck1()
})
thirdNextBtn.addEventListener("click", function (){
  firstPage.style.marginLeft = "-75%"
bullCheck1()
})

firstpreviousBtn.addEventListener("click", function () {
  firstPage.style.marginLeft = "0"
bullCheck1()


})
secondpreviousBtn.addEventListener("click", function (){
  firstPage.style.marginLeft = "-25%"
bullCheck2()

})
thirdpreviousBtn.addEventListener("click", function (){
  firstPage.style.marginLeft = "-50%"
bullCheck2()
})
//////////////////////////////////////////////





alertHide.addEventListener("click", () => {
  alert.classList.remove("show")
  alert.classList.add("hide")
})


////////////////////////////////////////////////

submitBtn.addEventListener("click", function () {
  if (localStorage.getItem("users")) {
    users = JSON.parse(localStorage.getItem("users"))
    for (let i = 0; i <= users.length; i++) {
      if (userNameinput.value === users[i].userName) {
        alertMsg.innerHTML = `The User Name Or Mail Is Already Declared`
        alertIcon.classList.add("fa-grin-beam-sweat")
        alertAll()
      }
    }
  } else {
    users = []
    makeUser()
  }
  if (firstNameinput.value == '' || lastNameinput.value == '' || userNameinput.value == '' || passwordinput.value == '' || mailinput.value == '' || phoneinput.value == '') {
    alertMsg.innerHTML = 'Complete The Form'
    alertIcon.classList.add("fa-grin-beam-sweat")
    alertAll()
  } else {
    bullets[current - 1].classList.add("active")
    checks[current - 1].classList.add("active")
  } }
)
function makeUser() {
  let user = {
      userName: userNameinput.value,
      password: passwordinput.value,
      Email: mailinput.value,
      firstName: firstNameinput.value,
      lastName: lastNameinput.value,
      phone: phoneinput.value,
      gender: genderinput.value,
      birthDate: birthDateinput.value
    }
    users.push(user)
  localStorage.setItem("users", JSON.stringify(users))
    alertMsg.innerHTML = 'Acount Is Created'
    alertIcon.classList.add("fa-smile-beam")
    alertAll()
    setTimeout(() => {
      window.location = "index.html"
    }, 3000)
}

//////////////////////////////////////////////

pwHideShow.addEventListener("click", () => {
  if (passwordinput.type === 'password') {
    passwordinput.type = 'text'
    pwHideShow.classList.replace("fa-eye-slash", "fa-eye")
    pwHideShow.classList.replace("text-gray-400", "text-main")
  } else {
    passwordinput.type = 'password'
    pwHideShow.classList.replace("fa-eye", "fa-eye-slash")
    pwHideShow.classList.replace("text-main", "text-gray-400")
  }
})

function alertAll() {
alert.classList.remove("hide")
alert.classList.add("show")
setTimeout(() => {
  alert.classList.add("hide")
  alert.classList.remove("show")
}, 3000)
}
function bullCheck1() {
  bullets[current - 1].classList.add("active")
  checks[current - 1].classList.add("active")
    current += 1;
}
function bullCheck2() {
  bullets[current - 2].classList.add("active")
  checks[current - 2].classList.add("active")
    current -= 1;
}