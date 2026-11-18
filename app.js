const products = [
  {
    id: "brasb",
    sticker: "popular",
    name: "Wireless Headphone",
    image: "./assets/headPhones.webp",
    price: 50,
    upTitle: "AUDIO",
    subTitle: "Rich Sound, all-day comfort",
  },
  {
    id: "zkjyv",
    sticker: "new",
    name: "Everyday Sneakers",
    image: "./assets/snekers.webp",
    price: 80,
    upTitle: "FOOT WEAR",
    subTitle: "Fresh steps, effortless style",
  },
  {
    id: "czcqw",
    sticker: "none",
    name: "Clasic Wriswatch",
    image: "./assets/watch.webp",
    price: 120,
    upTitle: "ACCSESORIES",
    subTitle: "Timeless Looks For Everyday",
  },
  {
    id: "qobuz",
    sticker: "none",
    name: "Urban Backpack",
    image: "./assets/images.webp",
    price: 35,
    upTitle: "LIFESTYLE",
    subTitle: "Made For Wherever You Go",
  },
];
let SubTotalPrice = [];
let productInCartBtn;
let addToCartBtn;
let cartCount = 0;

const container = document.getElementById("product-countainer");

products.forEach((product) => {
    const creatCards = document.createElement("div");
    const creatStciker = document.createElement("p");
    const creatImg = document.createElement("img");
    const creatUpperPragraph = document.createElement("p");
    const creatPragraph = document.createElement("p");
    const creatLowerPragraph = document.createElement("p");
    const creatDivCtn = document.createElement("div");
    const creatPrice = document.createElement("p");
    const creatButton = document.createElement("button");

    creatCards.className = "product-cards";

    const sticker = creatCards.appendChild(creatStciker);
    sticker.textContent = product.sticker;
    sticker.className = "sticker";

    const img = creatCards.appendChild(creatImg);
    img.src = product.image;

    const upperPragraph = creatCards.appendChild(creatUpperPragraph);
    upperPragraph.textContent = product.upTitle;
    upperPragraph.className = "upper-pragraph m-8";
    
    const paragraph = creatCards.appendChild(creatPragraph);
    paragraph.textContent = product.name;
    paragraph.className = "pragraph m-8";

    const lowerPragraph = creatCards.appendChild(creatLowerPragraph);
    lowerPragraph.textContent = product.subTitle;
    lowerPragraph.className = "lower-pragraph m-8";

    const divCtn = creatCards.appendChild(creatDivCtn);

    const price = divCtn.appendChild(creatPrice);
    price.textContent = `$${product.price}`;

    const button = divCtn.appendChild(creatButton);
    button.textContent = "+ add to cart";

    container.appendChild(creatCards);
});