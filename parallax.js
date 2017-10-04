console.log("js connected")

window.requestAnimationFrame = window.requestAnimationFrame
  || window.mozRequestAnimationFrame
  || window.webkitRequestAnimationFrame
  || window.msRequestAnimationFrame
  || function(f){setTimeout(f, 1000/60)}

var denver1 = document.getElementById('denver1')
var denver2 = document.getElementById('denver2')
var denver3 = document.getElementById('denver3')
var denver4 = document.getElementById('denver4')
var denver5 = document.getElementById('denver5')
var logoNav = document.getElementById('logoNav')
var mainDiv = document.getElementById('mainContent')


function parallaxDenver () {
  // get number of pixels document has scrolled vertically
  var scrollTop = window.pageYOffset

  denver1.style.top = -scrollTop * .08 + 'px'

  denver2.style.top = -scrollTop * .06 + 'px'

  denver3.style.top = -scrollTop * .04 + 'px'

  denver4.style.top = -scrollTop * .03 + 'px'

  denver5.style.top = -scrollTop * .02 + 'px'

  logoNav.style.top = -scrollTop * .02 + 'px'
  mainDiv.style.top = 550 - (scrollTop * .2) + 'px'
}

 // on page scroll
window.addEventListener('scroll', function(){
  console.log(window.pageYOffset)
  // call parallaxbubbles() on next available screen paint
 requestAnimationFrame(parallaxDenver)
}, false)
