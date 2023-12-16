const carousel = document.querySelector(".carousel")
const angelBtns = document.querySelectorAll(".angels")
const firstCardWidth = carousel.querySelector(".card").offsetWidth;



let isDragging = false, startX, startScrllLeft;

angelBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    carousel.scrollLeft += btn.id === "left" ? -firstCardWidth: firstCardWidth
  })
})
const dragStop = () => {
  isDragging = false;
  carousel.classList.remove("drag");
}
const dragStart = (dragE) => {
  isDragging = true;
  carousel.classList.add("drag");
  startX = dragE.pageX;
  startScrllLeft = carousel.scrollLeft;
}
const dragging = (dragE) => {
  if (!isDragging) return;
  carousel.scrollLeft = startScrllLeft - (dragE.pageX - startX);
}
carousel.addEventListener("mousedown" , dragStart)
carousel.addEventListener("mousemove" , dragging)
document.addEventListener("mouseup", dragStop)


//////////////////////////////////////////////////////////
// let topBtn = document.getElementById("topBtn")
//  if (window.screenTop > 300) {
//   topBtn.style.opacity = '1'
//   topBtn.style.pointerEvents = 'auto'
// } else {
// topBtn.style.opacity = '0'
//    topBtn.style.pointerEvents = 'none'
//  }
// window.addEventListener("scroll", () => {
//   console.log(window.screenTop)
// })
/////////////////////////////////////////////////////////////
const openForm = document.getElementById("openForm")
const form = document.querySelector(".form")
const forms = document.querySelector(".forms")
const closeForm = document.querySelector(".formClose")
const logIn = document.querySelector(".logIn")
let goToCart = document.getElementById("goToCart")
const pwHideShow = document.querySelector(".pwHide")
const logInBtn = document.getElementById("logIn")
const userNameInput = document.getElementById("userNameInput")
const emailInput = document.getElementById("email")
const pwInput = document.getElementById("password")
const logOutBtn = document.getElementById("logOutBtn")
let usersForm = document.getElementById('users')
let userName = document.getElementById('userName')
let userEmail = document.getElementById('userEmail')
let userSign = document.getElementById('userSign')
let closeUser = document.querySelector('.closeUser')
let products = document.querySelectorAll(".products .product")
let shopCart = document.getElementById("shopList")
let shopList = document.getElementById("shopListe")
let counted = document.querySelector(".counted")
let cart = document.getElementById("cartBag")
let inCart = document.querySelector("#inCart span")
let inLove = document.querySelector("#inLove span")
let alertHide = document.getElementById("alertHide")
let alert = document.querySelector(".alert")
let alertMsg = document.querySelector("#alertMsg")
let alertIcon = document.querySelector(".alertIcon")
let logInVar = false;
let items;
let loves;
let user;
let users;


openForm.addEventListener("click",()=> form.classList.add("show"))
closeForm.addEventListener("click", () => form.classList.remove("show"))



alertHide.addEventListener("click", () => {
  alert.classList.remove("show")
  alert.classList.add("hide")
})


pwHideShow.addEventListener("click" , () => {
  if (pwInput.type === 'password') {
    pwInput.type = 'text'
    pwHideShow.classList.replace("fa-eye-slash", "fa-eye")
    pwHideShow.classList.replace("text-gray-400" , "text-main") 
  } else {
        pwInput.type = 'password'
    pwHideShow.classList.replace("fa-eye" , "fa-eye-slash")
    pwHideShow.classList.replace("text-main" , "text-gray-400")
  }
}
)
if (localStorage.getItem("users")) {
  users = JSON.parse(localStorage.getItem("users"))
  user = users[0]
}
logInBtn.addEventListener("click", () => {
  if (userNameInput.value == user.userName && pwInput.value == user.password) {
    logInVar = true;
    openForm.style.display = 'none'
    usersForm.style.display = 'block'
    userName.innerHTML = user.userName
    userEmail.innerHTML = user.Email
    form.classList.remove("show")
    alertMsg.innerHTML = `Welcome Back ${user.firstName + ' ' + user.lastName}`
    alert.classList.remove("hide")
    alert.classList.add("show")
    setTimeout(() => {
    alert.classList.add("hide")
    alert.classList.remove("show")
    } , 3000)
    alertIcon.classList.add("fa-kiss-wink-heart")
  } else {
    alertMsg.innerHTML = `User name or Password Is Uncorrect`
    alert.classList.remove("hide")
    alert.classList.add("show")
    alertIcon.classList.add("fa-kiss-wink-heart")
    setTimeout(() => {
    alert.classList.add("hide")
    alert.classList.remove("show")
    } , 3000)
  }
})
logOutBtn.addEventListener("click", () => {
  localStorage.removeItem("user")
  openForm.style.display = 'block'
  usersForm.style.display = 'none'

})

///////////////////////////////////////////////////////////////


goToCart.addEventListener(('click'), () => {
  if (logInVar === false) {
    shopCart.style.display = 'none'
    alert.classList.remove("hide")
    alert.classList.add("show")
    alertMsg.innerHTML = `Log In first`
    alertIcon.classList.add("fa-grin-beam-sweat")
    setTimeout(() => {
    alert.classList.add("hide")
    alert.classList.remove("show")
    } , 5000)
  }
  else {
    window.location = ("../cart.html")
  }
})

usersForm.addEventListener("click", () => {
  if (userSign.style.display === 'none') {
    userSign.style.display = 'block'
    shopCart.style.display = "none"
    usersForm.style.color = 'var(--main)'
    shopCart.style.color = 'black'
  }
  else {
    userSign.style.display = 'none'
    usersForm.style.color = 'black'
  }
})

/////////////////////////////////////////////////////////////


cart.addEventListener("click", () => {
if (shopCart.style.display === 'none') {
  shopCart.style.display = "block"
  userSign.style.display = "none"
  cart.style.color = 'var(--main)'
  userSign.style.color = 'black'
} else {
  shopCart.style.display = 'none'
  cart.style.color = 'black'
  }
})

products.forEach((product) => {
  const productName = product.querySelector(".description h4").innerHTML
  const productimg = product.querySelector("img").getAttribute("src")
  const productBrand = product.querySelector(".description h6").innerHTML
  const productPrice = product.querySelector(".description h3 span").innerHTML

  let buyBtn = product.querySelector("i.fa-shopping-cart")
  let loveBtn = product.querySelector("i.heartBtn")

  
  loveBtn.addEventListener("click", () => {
    
    if (localStorage.loves != null) {
      loves = JSON.parse(localStorage.loves)
    } else {
      loves = []
    }
    let loveProduct = {
      name:productName,
      brand:productBrand,
      price:productPrice,
      imgSrc:productimg
    }
    loves.push(loveProduct)
    inLove.innerHTML = loves.length
    localStorage.setItem("loves" , JSON.stringify(loves))
  })
  buyBtn.addEventListener("click", () => {
    
    shopList.innerHTML += `<li> ${productName} </li>`
    if (localStorage.products != null) {
      items = JSON.parse(localStorage.products)
    } else {
      items = []
    }
    let item = {
      name:productName,
      brand:productBrand,
      price:productPrice,
      imgSrc:productimg
    }
    items.push(item)
      if (counted.innerHTML !== '') {
    counted.style.display = 'flex'
  }
    inCart.innerHTML = items.length
    counted.innerHTML = items.length
    localStorage.setItem("products" , JSON.stringify(items))
  })
})
