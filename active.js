var navbar = document.getElementById('nav')
var navbar_btns = document.getElementsByClassName('li')
var collections = document.getElementsByClassName('collection_area')
var hamburgers = document.querySelectorAll('#hamburger div')
var hamburger_text = document.getElementById("nav_btns_hamburger")
var hamburger = document.getElementById("hamburger")
var navbar_text = document.querySelector('#nav a h1')

onscroll = function () {
    hamburger_text.style.display = 'none'
    hamburger.classList.remove('hamburger')
    var scroller = document.documentElement.scrollTop
    var width = document.documentElement.scrollWidth
    if(scroller > 0) {
      navbar.classList.add('nav_bg')
      navbar.classList.add('animate__fadeInDown')
    } else {
      navbar.classList.remove('nav_bg')
      navbar.classList.remove('animate__fadeInDown')
    }
  }
var hamburger = document.getElementById('hamburger')
var hamburger_btns = document.getElementById("nav_btns_hamburger")

hamburger.addEventListener('click', () => {
  if(hamburger_btns.style.display == 'flex') {
    hamburger_display_off()
  }
  else {
    hamburger_display_on()
  }
})

hamburger_btns.addEventListener('click', () => {
    hamburger_display_off()
  })
  function hamburger_display_on() {
    hamburger_btns.style.display = 'flex'
  }
  function hamburger_display_off() {
    hamburger_btns.style.display = 'none'
  }
  hamburger_btns.onclick = hamburger_btn_display;
  function hamburger_btn_display() {
    hamburger_btns.style.display = 'none'
    hamburger.classList.remove('hamburger')
  }

function navbar1(x) {
    x.classList.toggle('hamburger')
  }
  


var new_arrival = document.getElementById('new_arrival')
var bestseller = document.getElementById('bestseller')
var featured_products = document.getElementById('featured_products')
var __new = document.getElementById('new')
var  trend = document.getElementById('trend')
var feature = document.getElementById('feature')

function new_arrivals() {
  new_arrival.style.display = 'flex'
  bestseller.style.display = 'none'
  featured_products.style.display = 'none'
  __new.classList.add('title_color')
  trend.classList.remove('title_color')
  feature.classList.remove('title_color')
}
function bestsellers() {
  new_arrival.style.display = 'none'
  bestseller.style.display = 'flex'
  featured_products.style.display = 'none'
  __new.classList.remove('title_color')
  trend.classList.add('title_color')
  feature.classList.remove('title_color')
}
function featured_product() {
  featured_products.style.display = 'flex'
  new_arrival.style.display = 'none'
  bestseller.style.display = 'none'
  __new.classList.remove('title_color')
  trend.classList.remove('title_color')
  feature.classList.add('title_color')
}
var next = document.getElementsByClassName('swiper-button-next')
var prev = document.getElementsByClassName('swiper-button-prev')
function mouse_hover() {
  next[0].style.display = 'block'
  prev[0].style.display = 'block'
}
function mouse_unhover() {
  next[0].style.display = 'none'
  prev[0].style.display = 'none'
}
function mouse_hover1() {
  next[1].style.display = 'block'
  prev[1].style.display = 'block'
}
function mouse_unhover1() {
  next[1].style.display = 'none'
  prev[1].style.display = 'none'
}
function mouse_hover2() {
  next[2].style.display = 'block'
  prev[2].style.display = 'block'
}
function mouse_unhover2() {
  next[2].style.display = 'none'
  prev[2].style.display = 'none'
}