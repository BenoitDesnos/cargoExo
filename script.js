const carrouselOrder = document.getElementsByClassName("products__carrousel");
const carrousel1 = document.getElementById(`carrousel1`);
const carrousel2 = document.getElementById(`carrousel2`);
const dotsWrapper1 = document.getElementById(`dots__wrapper__1`);
const dotsWrapper2 = document.getElementById(`dots__wrapper__2`);
const leftClick = document.querySelectorAll(".button--left");
const rightClick = document.querySelectorAll(".button--right");
const searchButtonCity = document.querySelector(
  "#findStore > div > div.search__bar__city > button"
);
const searchButtonAround = document.querySelector(
  "#findStore > div > div.search__bar__around"
);
const productsArray = [
  [
    "./img/packshots/Bouteille_iso_01.png",
    "./img/packshots/Bouteille_iso_02.png",
    "./img/packshots/Bouteille_iso_03.png",
    "./img/packshots/Bouteille_iso_04.png",
    "./img/packshots/Bouteille_iso_05.png",
    "./img/packshots/Bouteille_iso_06.png",
    "./img/packshots/Bouteille_iso_07.png",
  ],
  [
    "./img/packshots/Fauteuil_Patchwork-01.png",
    "./img/packshots/Fauteuil_Patchwork-02.png",
  ],
];
let countBottles = 0;
let countChairs = 0;

/* ----------------creation des elements dynamiques-------------- */

for (let i = 0; i < productsArray.length; i++) {
  const carrousel = document.getElementById(`carrousel${i + 1}`);
  const dotsWrapper = document.getElementById(`dots__wrapper__${i + 1}`);
  productsArray[i].forEach((el) => {
    let image = document.createElement("img");
    let dot = document.createElement("span");

    image.setAttribute("src", el);
    image.setAttribute("alt", "image produit");
    image.setAttribute("class", "products__img");
    dot.setAttribute("class", "dot");

    carrousel.append(image);
    dotsWrapper.append(dot);
  });
}

/* main fonction qui gere les carroussels */
// array = tableau que l'ont veut itérer,
// order = permet de choisir l'ordre d'apparition
// direction >> -1 = images vers la gauche, +1 = valeur vers la droite
function carrousel(array, order, direction) {
  dotStateHandler(order);
  arrowDisplayHandler(array, order);
  imageDisplayHandler(order, direction);
}

// on lance les deux carroussels au chargement
carrousel(productsArray[0], 1, 0);
carrousel(productsArray[1], 2, 0);

/*--------------- ADDEVENTLISTENERS ---------------- */
// eventlisteners qui determinent de quel carroussel il s'agit et lance la fucntion carroussel avec les arguments qui conviennent
/* -----------------CLICK GAUCHE -------------- */
leftClick.forEach((click) => {
  // index permettant de determiner de quel carroussel il s'agit
  const index = Array.from(leftClick).indexOf(click);

  click.addEventListener("click", () => {
    if (index === 0) {
      countBottles--;
    } else if (index === 1) {
      countChairs--;
    }
    carrousel(productsArray[index], index + 1, 1);
  });
});

/* -----------------CLICK DROIT -------------- */
rightClick.forEach((click) => {
  // index permettant de determiner de quel carroussel il s'agit
  const index = Array.from(rightClick).indexOf(click);
  click.addEventListener("click", () => {
    if (index === 0) {
      countBottles++;
    } else if (index === 1) {
      countChairs++;
    }
    carrousel(productsArray[index], index + 1, -1);
  });
});

// alert recherche ok car pas d'api fourni

searchButtonCity.addEventListener("click", () => {
  alert("Merci pour votre recherche");
});
searchButtonAround.addEventListener("click", () => {
  alert("Merci pour votre recherche");
});

/* --------------------- FUNCTIONS  ------------------- */
//gère l'affichage des images et la direction apres click sur les fleches

function imageDisplayHandler(order, direction) {
  const productsCarrousel = document.getElementById(`carrousel${order}`);
  productsCarrousel.style.transform += `translateX(${
    direction * productsCarrousel.clientWidth
  }px)`;
  productsCarrousel.style.transition = `transform 0.2s`;
}

//gère l'affichage des flèche de defilement des carroussels
function arrowDisplayHandler(array, order) {
  if (countBottles === 0 && order === 1) {
    leftClick[0].style.display = "none";
  } else if (
    countBottles !== 0 &&
    countBottles !== array.length - 1 &&
    order === 1
  ) {
    leftClick[0].style.display = "block";
    rightClick[0].style.display = "block";
  } else if (countBottles === array.length - 1 && order === 1) {
    rightClick[0].style.display = "none";
  }
  if (countChairs === 0 && order === 2) {
    leftClick[1].style.display = "none";
    rightClick[1].style.display = "block";
  } else if (
    countChairs !== 0 &&
    countChairs !== array.length - 1 &&
    order === 2
  ) {
    leftClick[1].style.display = "block";
  } else if (countChairs === array.length - 1 && order === 2) {
    rightClick[1].style.display = "none";
    leftClick[1].style.display = "block";
  }
}

//gère l'affichage des points de defilement des carroussels
function dotStateHandler(order) {
  const dots = document.querySelectorAll(`#dots__wrapper__${order} > .dot`);

  for (let i = 0; i < dots.length; i++) {
    switch (order) {
      case 1:
        i === countBottles
          ? dots[countBottles].classList.add("is-active")
          : dots[i].classList.remove("is-active");
        break;
      case 2:
        i === countChairs
          ? dots[countChairs].classList.add("is-active")
          : dots[i].classList.remove("is-active");
        break;
      default:
        break;
    }
  }
}
