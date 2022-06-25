function testFunc(goalBox) {
  let image = goalBox.children[0].style.visibility
  console.log(image)
  if (image == "hidden") {
    goalBox.children[0].style.visibility = "visible"
  } else  {
    goalBox.children[0].style.visibility = "hidden";
  }
  console.log('success')
}
const goalBoxes = document.querySelectorAll(".goalBoxes");
goalBoxes.forEach(item => {
   item.addEventListener('click', () => testFunc(item));
});
/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function toggleNav() {
  let width = document.getElementById("mySidebar").style.width
  if(width == "250px") {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.querySelector(".openbtn").style.transform = 'rotate(360deg)'//FIXME: just doesn't work
    console.log('success1')
  } else {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.querySelector(".openbtn").style.transform = 'rotate(360deg)'//FIXME: only works once
    console.log('success2')
  }
}
document.querySelector('.openbtn').addEventListener('click', toggleNav);

/*==================== SHOW NAVBAR ====================*/
const showMenu = (headerToggle, navbarId) =>{
  const toggleBtn = document.getElementById(headerToggle),
  nav = document.getElementById(navbarId)
  // Validate that variables exist
  if(headerToggle && navbarId){
      toggleBtn.addEventListener('click', ()=>{
          // We add the show-menu class to the div tag with the nav__menu class
          nav.classList.toggle('show-menu')
          // change icon
          toggleBtn.classList.toggle('bx-x')
      })
  }
}
showMenu('header-toggle','navbar')
/*==================== LINK ACTIVE ====================*/
const linkColor = document.querySelectorAll('.nav__link')
function colorLink(){
  linkColor.forEach(l => l.classList.remove('active'))
  this.classList.add('active')
}
linkColor.forEach(l => l.addEventListener('click', colorLink))