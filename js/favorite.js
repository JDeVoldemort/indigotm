import { getLocalStorage, setLocalStorage } from "./utils.mjs";


// add local storage item in on region pages with json to store a fav field
// also local storage item to store favorites which will iterate through the pokemon info 
// and save info if the fav field is included.
// field to include in local item user-fav: {user: username { pokemon.name.type1 and if 2 then 2, image link, fav, on team 1 true 0 false }
// code to remove fav from users local storage fav item

// teams for pokemon in fav if on team then add element with phone icon to pokemon listed in fav 

// code to display favs from local storage with on team icon and fav removal icon.
// possible display alert when added or removed

addFavorite() {
    let fav_list = [];
    let needsAdded = 1;
    // iflocalstorage `${username}-fav`
      if (localStorage.getItem("so-cart")) {
        cart_list = getLocalStorage("so-cart");
        cart_list.forEach(item => setQuantity.bind(this)(item));;
      }
      function setQuantity(item) {
          if(item.Id == this.productId) {
            needsAdded = 0;
            if (item.quantity) {
              item.quantity += 1;
            }else
            {
              item.quantity = 1;
            }
          } 
      
    }
    if (needsAdded == 1) {
      this.product.quantity = 1;
      cart_list.push(this.product);
    }
      setLocalStorage("so-cart", cart_list);
  
      // updates cart totals for superscipt on backpack icon
      cartTotals();
      // Adds shake animation to cart when items are being added to the cart
      const cartIcon = document.getElementById("cart-icon");
      cartIcon.classList.add("shake");
      // The animation will shake the cart for 0.5seconds
      setTimeout(function() {
        // After the animation is done removes the shake class
        cartIcon.classList.remove("shake");
      }, 500)
        // Show the success message
        const successMessage = document.createElement("div");
        successMessage.innerHTML = "Item successfully added to cart!";
        successMessage.style.backgroundColor = "green";
        successMessage.style.color = "white";
        successMessage.style.padding = "20px";
        successMessage.style.position = "fixed";
        successMessage.style.borderRadius = "5px"
        // successMessage.style.transform = "translate(-50%, -50%)";
        successMessage.style.top = "0";
        successMessage.style.right = "0";
        document.body.appendChild(successMessage);
        setTimeout(() => {
          successMessage.remove();
        }, 3000);
  }