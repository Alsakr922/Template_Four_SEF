let homeCart = document.querySelector("#productscart")
let homeLove = document.querySelector(".productsLove")
let loveDescription = document.querySelector(".loveDescription")
let total = document.getElementById("total")
let ads = document.getElementById("ads")
let totals = document.getElementById("totals")
let removeAllCartBtn = document.querySelector(".removeCartBtn")
let removeAllLoveBtn = document.querySelector(".removeAllLoveBtn")
let removeLoveBtn = document.querySelector(".removeLoveBtn")
let tableSection = document.querySelector(".table-section")
let sectionCoupon = document.querySelector(".section-coupon")
let mainTitle = document.querySelector(".main-title")
let items;
let loves;





if (localStorage.getItem("products")) {
  items = JSON.parse(localStorage.products)
  removeAllCartBtn.style.display = 'block'
  tableSection.style.display = 'block'
  sectionCoupon.style.display = 'block'
  drawing()
} else {
  homeCart.innerHTML = ''
  removeAllCartBtn.style.display = 'none'
  tableSection.style.display = 'none'
  sectionCoupon.style.display = 'none'
  mainTitle.innerHTML = 'You Dont have Any Product'
}
function drawing() {
  homeCart.innerHTML = ''
for (let i = 0; i <= items.length; i++){
  homeCart.innerHTML += `
        <tr class="py-5 product">
        <td class="pt-5"><i id="removeBtn" onclick="removeCartItem(${i})" class="cursor-pointer fa-solid fa-times-circle rounded-full  h-10 text-2xl w-10 self-center"></i></td>
        <td class="pt-5" ><img src="${items[i].imgSrc}" class="w-32 m-auto" alt=""></td>
        <td class="pt-5">${items[i].name}</td>
        <td class="pt-5">${items[i].brand}</td>
        <td class="pt-5" id="price">${items[i].price}</td>
        <td class="pt-5" id="Prodectads">40%</td>
        </tr>
  `

  let price = document.querySelector("#price").innerHTML
  let Prodectads = document.querySelector("#Prodectads").innerHTML

  total.innerHTML = +price.innerHTML + +Prodectads.innerHTML
  ads.innerHTML = 10
  totals.innerHTML = +ads + +total
  
}
}
function removeCartItem(i) {
  items.splice(i, 1)
  localStorage.products = JSON.stringify(items)
  drawing()
}
function removeAllCartsProducts() {
  localStorage.removeItem("products")
  homeCart.innerHTML = ''
  removeAllCartBtn.style.display = 'none'
  tableSection.style.display = 'none'
  sectionCoupon.style.display = 'none'
  mainTitle.innerHTML = 'You Dont have Any Product'
}


if (localStorage.getItem("loves")) {
  loves = JSON.parse(localStorage.getItem("loves"))
  removeAllLoveBtn.style.display = 'block'
  drawingLoves()
} else {
  homeLove.innerHTML = ''
  removeAllLoveBtn.style.display = 'none'
  loveDescription.innerHTML = 'You Dont have Any Loves Product'
}
function drawingLoves() {
  homeLove.innerHTML = ''
for (let i = 0; i <= loves.length; i++){
  homeLove.innerHTML += `
      <div class="product relative p-4 border-gray-300 rounded-xl">
        <img src="${loves[i].imgSrc}" class="rounded-xl" alt="">
        <div class="description pt-10">
          <h6 class="text-gray-400">${loves[i].brand}</h6>
          <h4 class="">${loves[i].name}</h4>
          <div class="stars text-yellow-300 py-1">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
          </div> <!-- stars -->
          <h3 class="text-hover font-bold text-2xl product-price">$<span>${loves[i].price}</span></h3>
          <i class="fa-solid fa-shopping-cart absolute bottom-3 right-5 hover:bg-hover hover:text-white text-hover cursor-pointer transition-600 transition-all rounded-full fa-lg p-4"></i>
          <i class="fa-solid fa-heart removeLoveBtn absolute bottom-3 right-16 hover:bg-hover hover:text-white text-red-700 cursor-pointer transition-600 transition-all rounded-full fa-lg p-4" onclick="removeLoveItem(${i})"></i>
        </div> <!-- description -->
      </div> <!-- product -->
  `  
}
}
function removeLoveItem(i) {
  loves.splice(i, 1)
  localStorage.loves = JSON.stringify(loves)
  drawingLoves()
}

function removeAllLovesProducts() {
  localStorage.removeItem("loves")
  homeLove.innerHTML = ''
  loveDescription.innerHTML = 'You Dont have Any Love Product'
}
///////////////////////////////
// search
let search = document.getElementById("searchInput")
let searchIcon = document.getElementById("searchIconBtn")

searchIcon.addEventListener("click", () => {

  console.log(6)
  if (search.style.display == 'inline-block') {
    search.style.display = 'none'
        searchIcon.classList.add("fa-search")
    searchIcon.classList.remove("fa-times")
  } else {
    search.style.display = 'inline-block'
    searchIcon.classList.remove("fa-search")
    searchIcon.classList.add("fa-times")
  }
})
function searchFn (value){

  searchMood = 'name'
  if (searchMood === 'name') {
    for (let i = 0; i <= items.length; i++){
      if (items[i].name.includes(value)) {
        console.log(i)
  //       homeCart.innerHTML = ''
  //         homeCart.innerHTML += `
  //       <tr class="py-5 product">
  //       <td class="pt-5"><i id="removeBtn" onclick="removeCartItem(${i})" class="cursor-pointer fa-solid fa-times-circle rounded-full  h-10 text-2xl w-10 self-center"></i></td>
  //       <td class="pt-5" ><img src="${items[i].imgSrc}" class="w-32 m-auto" alt=""></td>
  //       <td class="pt-5">${items[i].name}</td>
  //       <td class="pt-5">${items[i].brand}</td>
  //       <td class="pt-5" id="price">${items[i].price}</td>
  //       <td class="pt-5" id="Prodectads">40%</td>
  //       </tr>
  // `
      }
    }
  }
}