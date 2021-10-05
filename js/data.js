var container = document.getElementById('container')
var productsData = [
    {
        productName: 'Timberland',
        price: '₮300,000',
        productImg: './img/new_product/bast.webp',
    },
    {
        productName: 'Nike',
        price: '₮300,000',
        productImg: './img/new_product/climbing.webp',
    },
    {
        productName: 'Adidas',
        price: '₮300,000',
        productImg: './img/new_product/court.webp',
    },
    {
        productName: 'vans',
        price: '₮300,000',
        productImg: './img/new_product/derby.webp',
    },
    {
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
       <i class="fas fa-cart-arrow-down"></i>
     </div>
   </div>
 </div>`
}