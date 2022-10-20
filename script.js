const buttonTgl = document.getElementById("toggle-btn");
const dark = document.getElementsByClassName("dark-theme");
const darkItem = document.getElementsByClassName('item');
const card = document.getElementsByClassName("card");
let darkMode = localStorage.getItem("dark-mode");


// const mouseOverButton = () => {
//   for(let i = 0; i < dark.length; i++){
//     dark[i].classList.add("dark")
//   };
//   for(let i = 0; i < card.length; i++){
//     card[i].classList.add("dark-card")
//   };
//   for(let i = 0; i < darkItem.length; i++){
//     darkItem[i].classList.add("dark-item")
//   };
//   buttonTgl.innerHTML = "DARK-MODE";

// };

// const mouseOutButton = () => {
//   for(let i = 0; i < dark.length; i++){
//     dark[i].classList.remove("dark")
//   };
//   for(let i = 0; i < card.length; i++){
//     card[i].classList.remove("dark-card")
//   };
//   for(let i = 0; i < darkItem.length; i++){
//     darkItem[i].classList.remove("dark-item")
//   };
//   buttonTgl.innerHTML = "LIGHT-MODE";
// };

// buttonTgl.addEventListener("mouseover", (e) => {
//   mouseOverButton();
// });

// buttonTgl.addEventListener("mouseout", (e) =>{
//   mouseOutButton();
// });

const enableDarkTheme = () => {
  for(let i = 0; i < dark.length; i++){
    dark[i].classList.add("dark")
  };
  for(let i = 0; i < card.length; i++){
    card[i].classList.add("dark-card")
  };
  for(let i = 0; i < darkItem.length; i++){
    darkItem[i].classList.add("dark-item")
  };
  buttonTgl.innerHTML = "DARK-MODE";
  localStorage.setItem("dark-mode", "enabled");

};

const disableDarkTheme = () => {
  for(let i = 0; i < dark.length; i++){
    dark[i].classList.remove("dark")
  };
  for(let i = 0; i < card.length; i++){
    card[i].classList.remove("dark-card")
  };
  for(let i = 0; i < darkItem.length; i++){
    darkItem[i].classList.remove("dark-item")
  };
  buttonTgl.innerHTML = "LIGHT-MODE";
  localStorage.setItem("dark-mode", "disabled");
};

if (darkMode === "enabled") {
  enableDarkTheme(); 
}

buttonTgl.addEventListener("click", (e) => {
  darkMode = localStorage.getItem("dark-mode"); // update darkMode when clicked
  if (darkMode === "disabled") {
    enableDarkTheme();
  } else {
    disableDarkTheme();
  }
});