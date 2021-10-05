var cardProducts = []
var container = document.getElementById('container')
var productsData = [
    {
        id: '1',
        productName: 'Timberland',
        price: '₮300,000',
        productImg: './img/new_product/bast.webp',
    },
    {
        id: '2',
        productName: 'Nike',
        price: '₮300,000',
        productImg: './img/new_product/climbing.webp',
    },
    {
        id: '3',
        productName: 'Adidas',
        price: '₮300,000',
        productImg: './img/new_product/court.webp',
    },
    {
        id: '4',
        productName: 'vans',
        price: '₮300,000',
        productImg: './img/new_product/derby.webp',
    },
    {
        id: '5',
        productName: 'converse',
        price: '₮300,000',
        productImg: './img/new_product/diebetic.webp',
    },
]

function showProducts() {
    productsData.forEach(function(obj) {
        container.innerHTML += productHtmlTemplate(obj)
    })
}
showProducts()
function productHtmlTemplate(obj) {
   return  `<div class="swiper-slide">
   <img src="${obj.productImg}" alt="">
   <div class="new_product_footer">
     <h1>${obj.productName}</h1>
     <div class="price">
       <h2>${obj.price}</h2>
       <i class="fas fa-cart-arrow-down" onclick="addProduct(${obj.id})"></i>
     </div>
   </div>
 </div>`
}
var num = document.getElementById('num')
function addProduct(id) {
    let foundProduct = productsData.find(function(obj) {
        if(obj.id == id) {
            return true
        } else return false
    })
    foundProduct.removeId = Date.now()
    let foundProductCopy = {}
    foundProductCopy = Object.assign(foundProductCopy, foundProduct)
    console.log(foundProduct)
    cardProducts.push(foundProductCopy)
    num.innerHTML = parseInt(num.innerHTML) + 1;
}
function removeProduct(id) {
    console.log(id)
    console.log(cardProducts)
    cardProducts = cardProducts.filter(function(obj) {
         return obj.removeId !== id
    })
    num.innerHTML = parseInt(num.innerHTML)-1;
    showCardProducts()
    
}
function cardHtmlTemplate(obj) {
    return `<div class="new_product_footer">
    <h1>${obj.productName}</h1>
    <div class="price">
      <h2>${obj.price}</h2>
      <i class="fas fa-minus-circle" onclick="removeProduct(${obj.removeId})"></i>
    </div>
  </div>`
}
var showCardProduct = document.getElementById('contact_center')
function showCardProducts() {
    showCardProduct.innerHTML = ''
    cardProducts.forEach(function(obj) {
        showCardProduct.innerHTML += cardHtmlTemplate(obj)
    })
}
