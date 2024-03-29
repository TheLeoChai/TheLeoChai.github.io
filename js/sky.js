
// Amount of stars
function createStars(i) {
    var i = i;
    while(i){
      drawStars();
      i-=1;
    }
}
// Create Stars
function drawStars(){
  var tmpStar = document.createElement('figure')
  tmpStar.className = "star";
  tmpStar.style.top = 100*Math.random()+'%';
  tmpStar.style.left = 100*Math.random()+'%';
  document.getElementById('sky').appendChild(tmpStar);
}
// Animate Stars
function selectStars() {
  stars = document.querySelectorAll(".star");
  console.log(stars)
}
function animateStars() {
    Array.prototype.forEach.call(stars, function(el, i){
      TweenMax.to(el, Math.random() * 0.5 + 0.5, {opacity: Math.random(), onComplete: animateStars});
    });
}

createStars(200);
selectStars();
animateStars();


    