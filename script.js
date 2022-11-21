const carrouselOrder = document.getElementsByClassName("products__carrousel");
const carrousel1 = document.getElementById(`carrousel1`);
const carrousel2 = document.getElementById(`carrousel2`);
const leftClick = document.querySelectorAll(".button--left");
const rightClick = document.querySelectorAll(".button--right");

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

productsArray[0].forEach((el) => {
  let image = document.createElement("img");
  let dot = document.createElement("span");

  image.setAttribute("src", el);
  image.setAttribute("alt", "image produit");
  image.setAttribute("class", "products__img");
  dot.setAttribute("class", "dot");
  console.log(image, dot);
  carrousel1.append(image);
});
productsArray[1].forEach((el) => {
  let image = document.createElement("img");
  let dot = document.createElement("span");

  image.setAttribute("src", el);
  image.setAttribute("alt", "image produit");
  image.setAttribute("class", "products__img");
  dot.setAttribute("class", "dot");
  console.log(image, dot);
  carrousel2.append(image);
});

/* -----------------CLICK GAUCHE -------------- */
leftClick.forEach((click) => {
  const index = Array.from(leftClick).indexOf(click);
  click.addEventListener("click", () => {
    carrousel(productsArray[index], index + 1, -1);
  });
});

/* -----------------CLICK DROIT -------------- */
rightClick.forEach((click) => {
  const index = Array.from(rightClick).indexOf(click);
  click.addEventListener("click", () => {
    carrousel(productsArray[index], index + 1, 1);
  });
});

const carrousel = (array, order, direction) => {
  const productsCarrousel = document.getElementById(`carrousel${order}`);

  productsCarrousel.style.transform += `translateX(${
    direction * productsCarrousel.clientWidth
  }px)`;
  productsCarrousel.style.transition = `transform 0.2s`;
};
