function testFunc(goalBox) {
  let image = goalBox.children[0].style.visibility
  console.log(image)
  if (image == "hidden") {
    goalBox.children[0].style.visibility = "visible";
    goalBox.classList.add("animateOne");
  } else {
    goalBox.children[0].style.visibility = "hidden";
    goalBox.classList.remove("animateOne");
  }
  console.log('success')
}
const goalBoxes = document.querySelectorAll(".goalBoxes");
goalBoxes.forEach(item => {
  item.addEventListener('click', () => testFunc(item));
});