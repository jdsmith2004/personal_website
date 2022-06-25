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
