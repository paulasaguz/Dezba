var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("slides-background");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";  
    setTimeout(carousel, 6000); // Change image every 2 seconds
}
const navigateBar =document.getElementById('navigate');
window.addEventListener('scroll', () => {
  if (window.scrollY >= 75){
    navigateBar.classList.add('navigate-color');
  }
  else{
    navigateBar.classList.remove('navigate-color');
  }
})