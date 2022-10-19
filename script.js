const buttonTgl = document.getElementById("toggle-btn");

console.log(buttonTgl);
const mouseOverButton = () => {
  buttonTgl.innerHTML = "Dark-Mode";
};

const mouseOutButton = () => {
  buttonTgl.innerHTML = "Light-Mode";
};

buttonTgl.addEventListener("mouseover", (e) => {
  mouseOverButton();
});

buttonTgl.addEventListener("mouseout", (e) =>{
  mouseOutButton();
});