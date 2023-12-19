let carousel = document.querySelector(".carousel")
let angelBtns = document.querySelectorAll(".angels")
let firstCardWidth = carousel.querySelector(".card").offsetWidth;



let isDragging = false, startX, startScrllLeft;

angelBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    carousel.scrollLeft += btn.id === "left" ? -firstCardWidth: firstCardWidth
  })
})
let dragStop = () => {
  isDragging = false;
  carousel.classList.remove("drag");
}
let dragStart = (dragE) => {
  isDragging = true;
  carousel.classList.add("drag");
  startX = dragE.pageX;
  startScrllLeft = carousel.scrollLeft;
}
let dragging = (dragE) => {
  if (!isDragging) return;
  carousel.scrollLeft = startScrllLeft - (dragE.pageX - startX);
}
carousel.addEventListener("mousedown" , dragStart)
carousel.addEventListener("mousemove" , dragging)
document.addEventListener("mouseup", dragStop)


//////////////////////////////////////////////////////////
let topBtn = document.getElementById("topBtn")

window.addEventListener("scroll", () => {
if (window.scrollY > 300) {
  topBtn.style.display = 'block'
  topBtn.style.pointerEvents = 'auto'
} else {
  topBtn.style.display = 'none'
  topBtn.style.pointerEvents = 'none'
  }
  topBtn.addEventListener("click", () => {
  window.scrollTo(0,0)
  })
}
)


/////////////////////////////////////////////////////////////
let openForm = document.getElementById("openForm")
let form = document.querySelector(".form")
let forms = document.querySelector(".forms")
let closeForm = document.querySelector(".formClose")
let logIn = document.querySelector(".logIn")
let goToCart = document.getElementById("goToCart")
let pwHideShow = document.querySelector(".pwHide")
let logInBtn = document.getElementById("logIn")
let userNameInput = document.getElementById("userNameInput")
let emailInput = document.getElementById("email")
let pwInput = document.getElementById("password")
let logOutBtn = document.getElementById("logOutBtn")
let usersForm = document.getElementById('users')
let userNameWrite = document.getElementById('userName')
let fullNameWrite = document.getElementById('fullName')
let userEmailWrite = document.getElementById('userEmail')
let genderWrite = document.getElementById('gender')
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

logInBtn.addEventListener("click", () => {
  if (localStorage.getItem("users")) {
    users = JSON.parse(localStorage.getItem("users"))
    console.log(users[0])
    for (let i = 0; i <= users.length; i++) {
      if (userNameInput.value === users[i]['userName'] &&emailInput.value === users[i]['Email'] && pwInput.value === users[i]['password']) {
        logInVar = true;
        openForm.style.display = 'none'
        usersForm.style.display = 'block'
        userNameWrite.innerHTML = users[i].userName
        fullNameWrite.innerHTML =         alertMsg.innerHTML = users[i].firstName + ' ' + users[i].lastName
        userEmailWrite.innerHTML = users[i].Email
        genderWrite.innerHTML = users[i].gender
        form.classList.remove("show")
        alertMsg.innerHTML = `Welcome Back ${users[i].firstName + ' ' + users[i].lastName}`
        alertIcon.classList.add("fa-kiss-wink-heart")
      } else {
        alertMsg.innerHTML = `User name or Password Is Uncorrect`
        alertIcon.classList.add("fa-grin-beam-sweat")
        alertAll()
      }
    }
  } else {
        alertMsg.innerHTML = `Make A User First`
        alertIcon.classList.add("fa-grin-beam-sweat")
        alertAll()
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
    alertMsg.innerHTML = `Log In first`
    alertIcon.classList.add("fa-grin-beam-sweat")
    alertAll()
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
  let productName = product.querySelector(".description h4").innerHTML
  let productimg = product.querySelector("img").getAttribute("src")
  let productBrand = product.querySelector(".description h6").innerHTML
  let productPrice = product.querySelector(".description h3 span").innerHTML

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

function alertAll() {
        alert.classList.remove("hide")
      alert.classList.add("show")
      setTimeout(() => {
        alert.classList.add("hide")
        alert.classList.remove("show")
      }, 3000)
}