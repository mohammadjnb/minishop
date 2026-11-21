// value's

const products = [
  {
    id: "brasb",
    sticker: "popular",
    name: "Wireless Headphone",
    image: "./assets/headPhones.webp",
    price: 50,
    upTitle: "AUDIO",
    subTitle: "Rich Sound, all-day comfort",
    quantity: 0,
  },
  {
    id: "zkjyv",
    sticker: "new",
    name: "Everyday Sneakers",
    image: "./assets/snekers.webp",
    price: 80,
    upTitle: "FOOT WEAR",
    subTitle: "Fresh steps, effortless style",
    quantity: 0,
  },
  {
    id: "czcqw",
    name: "Clasic Wriswatch",
    image: "./assets/watch.webp",
    price: 120,
    upTitle: "ACCSESORIES",
    subTitle: "Timeless Looks For Everyday",
    quantity: 0,
  },
  {
    id: "qobuz",
    name: "Urban Backpack",
    image: "./assets/images.webp",
    price: 35,
    upTitle: "LIFESTYLE",
    subTitle: "Made For Wherever You Go",
    quantity: 0,
  },
];

const cart = []

// function's

// product selector function

function productSelctor (selctor){
  const selctedProduct = products.find(product => {
    return product.id == selctor;
  });
  return selctedProduct
}

// product card in shopping cart genrator function

function renderCart (productInCart){
  cart.forEach(selected => {
    if (selected.quantity === 0){
      const productInCartCard = document.createElement("div")
      const productInCartName = document.createElement("p")
      const productInCartCountainer = document.createElement("div")
      const productInCartCount = document.createElement("p")
      const productInCartPrice = document.createElement("p")
      const productInCartRemove = document.createElement("button")
  
      const card = productInCart.appendChild(productInCartCard)
      card.className = "cart-card m-16"
      card.id = selected.id
  
      const name = productInCartCard.appendChild(productInCartName)
      name.textContent = selected.name
      name.className = "product-cart-name p-8"
  
      const countainer = productInCartCard.appendChild(productInCartCountainer)
      countainer.className = "product-cart-countainer p-8"

      const count = productInCartCountainer.appendChild(productInCartCount);
      count.className = "product-count m-8";
      count.id = selected.id + "1";
      count.textContent = 1;
  
      const price = productInCartCountainer.appendChild(productInCartPrice)
      price.textContent = `$${selected.price}`;
      price.className = "product-cart-price m-8"
  
      const remove = productInCartCountainer.appendChild(productInCartRemove)
      remove.textContent = "remove"
      remove.id = selected.id
      remove.className = "remove-btn"

      selected.quantity ++;
      
      return productInCart;
    }
    else {
      const count = document.getElementById(selected.id + "1");
      count.textContent = selected.quantity;
    }
  });
}

// total price function

function totalPrice (){
  const total = cart.reduce((sum , selcted) =>{
    return sum = sum + (selcted.price * selcted.quantity)
  },0);
  return total;
};

// object remover from array function

function objectRemover (index){
  if (index !== -1){
    cart.splice(index , 1);
  };
};

// display changer function ------- for shoppig cart section

function displayChanger (){
  
}


// product genrator

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
    price.className = "m-8 price";

    const addToCartBtn = divCtn.appendChild(creatButton);
    addToCartBtn.textContent = "+ add to cart";
    addToCartBtn.className = "add-to-cart m-8";
    addToCartBtn.id = product.id

    container.appendChild(creatCards);
});

// product in cart's genrator

const addToCart = document.getElementsByClassName("add-to-cart");

Array.from(addToCart).forEach(button => {
    button.addEventListener("click", () => {
        const selected = productSelctor(button.id);
        
        if (selected.quantity === 0){
          cart.push(selected);
        }
        else{
          selected.quantity ++;
        }
        console.log(cart);

        

        const productInCart = document.getElementById("product-in-cart")
        const emptyState = document.getElementById("empty-state")
        if ( cart.length === 0){
          productInCart.style.display = "none"
        }
        else{
          emptyState.style.display = "none"
          productInCart.style.display = "block"
          
          renderCart(productInCart)
        }

        // total price

        const totalValue = document.getElementById("total-price")
        totalValue.textContent = `$${totalPrice(cart)}`
      });
});

// remove button's action ------ event deligation

const productInCart = document.getElementById("product-in-cart")

productInCart.addEventListener("click" , (event) =>{
  const remove = event.target.closest(".remove-btn");
  if (!remove) return;

  const index = cart.findIndex(product => product.id === remove.id)
  for (const product of cart){
    if(product.id === remove.id){
      product.quantity = 0;
    }
  }
  objectRemover(index)


  remove.closest(".cart-card").remove()

  const total = document.getElementById("total-price")
  total.textContent = `$${totalPrice(cart)}`

  if( cart.length === 0){
    productInCart.style.display = "none";

    const emptyState = document.getElementById("empty-state")
    emptyState.style.display = "flex"
  };
});

// claer cart button action
{
  const claerBtn = document.getElementById("clear-btn");
  
  claerBtn.addEventListener("click" ,() => {
    cart.length = 0;
    productInCart.innerHTML = "";

    const totalValue = document.getElementById("total-price")
    totalValue.textContent = `$${totalPrice(cart)}`

    if (cart.length === 0){
    productInCart.style.display = "none";

    const emptyState = document.getElementById("empty-state")
    emptyState.style.display = "flex"
    }
  });
}



