function testFunc(goalBox) {
  let image = goalBox.children[0].style.visibility
  console.log(image)
  if (image == "hidden") {
    goalBox.children[0].style.visibility = "visible"
    goalBox.classList.add("animate")
    
  } else  {
    goalBox.children[0].style.visibility = "hidden";
    goalBox.classList.remove("animate")
  }
  console.log('success')
}
const goalBoxes = document.querySelectorAll(".goalBoxes");
goalBoxes.forEach(item => {
   item.addEventListener('click', () => testFunc(item));
});