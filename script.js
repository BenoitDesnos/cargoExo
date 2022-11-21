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

let count1 = 0;
let count2 = 0;

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

/* creation des elements dynamiques */

productsArray[0].forEach((el) => {
  let image = document.createElement("img");
  let dot = document.createElement("span");

  image.setAttribute("src", el);
  image.setAttribute("alt", "image produit");
  image.setAttribute("class", "products__img");
  dot.setAttribute("class", "dot");

  carrousel1.append(image);
  dotsWrapper1.append(dot);
});
productsArray[1].forEach((el) => {
  let image = document.createElement("img");
  let dot = document.createElement("span");

  image.setAttribute("src", el);
  image.setAttribute("alt", "image produit");
  image.setAttribute("class", "products__img");
  dot.setAttribute("class", "dot");

  carrousel2.append(image);
  dotsWrapper2.append(dot);
});

/* fonction qui gere les carroussels */

function carrousel(array, order, direction) {
  const productsCarrousel = document.getElementById(`carrousel${order}`);
  const dots = document.querySelectorAll(`#dots__wrapper__${order} > .dot`);

  for (let i = 0; i < dots.length; i++) {
    switch (order) {
      case 1:
        i === count1
          ? dots[count1].classList.add("is-active")
          : dots[i].classList.remove("is-active");
        break;
      case 2:
        i === count2
          ? dots[count2].classList.add("is-active")
          : dots[i].classList.remove("is-active");
        break;
      default:
        break;
    }
  }

  if (count1 === 0 && order === 1) {
    leftClick[0].style.display = "none";
  } else if (count1 !== 0 && count1 !== array.length - 1 && order === 1) {
    leftClick[0].style.display = "block";
    rightClick[0].style.display = "block";
  } else if (count1 === array.length - 1 && order === 1) {
    rightClick[0].style.display = "none";
  }
  if (count2 === 0 && order === 2) {
    leftClick[1].style.display = "none";
    rightClick[1].style.display = "block";
  } else if (count2 !== 0 && count2 !== array.length - 1 && order === 2) {
    leftClick[1].style.display = "block";
  } else if (count2 === array.length - 1 && order === 2) {
    rightClick[1].style.display = "none";
    leftClick[1].style.display = "block";
  }

  productsCarrousel.style.transform += `translateX(${
    direction * productsCarrousel.clientWidth
  }px)`;
  productsCarrousel.style.transition = `transform 0.2s`;
}

/* -----------------CLICK GAUCHE -------------- */
leftClick.forEach((click) => {
  const index = Array.from(leftClick).indexOf(click);

  click.addEventListener("click", () => {
    if (index === 0) {
      count1--;
    } else {
      count2--;
    }
    carrousel(productsArray[index], index + 1, 1);
  });
});
carrousel(productsArray[0], 1, 0);

/* -----------------CLICK DROIT -------------- */
rightClick.forEach((click) => {
  const index = Array.from(rightClick).indexOf(click);
  click.addEventListener("click", () => {
    if (index === 0) {
      count1++;
    } else {
      count2++;
    }
    carrousel(productsArray[index], index + 1, -1);
  });
});
carrousel(productsArray[1], 2, 0);

searchButtonCity.addEventListener("click", () => {
  alert("Merci pour votre recherche");
});
searchButtonAround.addEventListener("click", () => {
  alert("Merci pour votre recherche");
});
