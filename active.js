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
    function nav_bg_on() {
        navbar.classList.add('nav_bg')
        navbar_text.style.color = 'black'
        Object.entries(navbar_btns).forEach(entry => {
            const [key, value] = entry;
            value.style.color = '#000';
          });
        Object.entries(hamburgers).forEach(entry => {
            const [key, value] = entry;
            value.style.backgroundColor = '#000'
        })
    }
    function nav_bg_off() {
        navbar.classList.remove('nav_bg')
        navbar_text.style.color = '#fff'
        Object.entries(hamburgers).forEach(entry => {
            const [key, value] = entry;
            value.style.backgroundColor = '#fff'
        })
        Object.entries(navbar_btns).forEach(entry => {
            const [key, value] = entry;
            value.style.color = '#fff'
          });
    }
    if(width > 1024) {
        if(scroller > 924) {
            nav_bg_on()
        } else {
            nav_bg_off()
        }
    } else if(width >= 768) {
        if(scroller > 924) {
            nav_bg_on()
        }
        else {
            nav_bg_off()
        }
    } else if(width < 768){
        if(scroller > 600) {
            nav_bg_on()
        }
        else {
            nav_bg_off()
        }
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
  