import { getLocalStorage, setLocalStorage } from "./utils.mjs";
import ExternalServices from "./externalServices.js";
import { findProductById } from "./externalServices.js";
// Sunday add favorite functionality done
// monday modify region code to work for region Code final enhancement/
// Tuesday Add team functionality / peer review 
// Wednesday lazy loading possiblilities/ styles 



// add local storage item in on region pages with json to store a fav field
// also local storage item to store favorites which will iterate through the pokemon info 
// and save info if the fav field is included.
// field to include in local item user-fav: {user: username { pokemon.name.type1 and if 2 then 2, image link, fav, on team 1 true 0 false }
// code to remove fav from users local storage fav item

// teams for pokemon in fav if on team then add element with phone icon to pokemon listed in fav 

// code to display favs from local storage with on team icon and fav removal icon.
// possible display alert when added or removed
export default class favoriteManagment {
constructor(userName, parentSelector, dataSource) {
    this.userName = userName;
    this.currentUser = "ashKetchum";
    this.key = `${this.currentUser}-fav`;
    this.fav = {};
    this.parentSelector = parentSelector;
    this.dataSource = dataSource;
    // this.pokemonId = pokemonId;
}
init() {
  // similar to render cart contents
  this.displayFavorites();
}

displayFavorites() {
  // Clear the contents of the parent selector
  document.querySelector(this.parentSelector).innerHTML = "";
  // Check if there's an item in the local storage with the key "so-cart"
  if (localStorage.getItem(`${this.currentUser}-fav`)) {
    // Get the cart items from local storage using the key
    const fav_list = getLocalStorage(this.key);
    // Check if the cart items array is empty
    if (fav_list.length === 0) {
      // If the fav_list array is empty, add the "hide" class to the cart footer
      // document.getElementById("fav-footer").classList.add("hide");
      // Render the message "You have no favorites selected" on the page
      document.querySelector(this.parentSelector).innerHTML = `<p id="empty-list-message">You have no favorites selected!</p>`;
      // Return from the function
      return;
    }

    // Get the HTML template for each cart item
    const htmlItems = fav_list.map((item) => this.favoritesTemplate(item));
    // Remove the "hide" class from the cart footer
    // document.getElementById("cart-footer").classList.remove("hide");
    // Iterate through the cart items and add their final prices to the total
    // fav_list.forEach((item) => (total += ((item.FinalPrice) * (item.quantity))));
    // Render the HTML templates for the cart items on the page
    document.querySelector(this.parentSelector).innerHTML = htmlItems.join("");
    // Render the total on the page
    // document.querySelector(".cart-total").innerHTML = `Total: $${total.toFixed(2)}`;

    // Add an event listener for the "click" event to all the elements with a "data-id" attribute
    // $$$$$$$$ fix here to match html
    document.querySelectorAll(`[data-id]`).forEach((item) => { 
      item.addEventListener(`click`, (event) => { 
        // Call the removeItem method when an element with a "data-id" attribute is clicked
        this.removeItem(event); 
      });
    });

    // Add an event listener for the "click" event to all the elements with a "data-id-add" attribute
    // $$$$ do something similar for add to team
    // document.querySelectorAll(`[data-id-add]`).forEach((item) => { 
    //   item.addEventListener(`click`, (event) => { 
    //     // Call the increase-quantity method when an element with a "data-id" attribute is clicked
    //     this.increase(event); 
    //   });
    // });
    // Add an event listener for the "click" event to all the elements with a "data-id-min" attribute
    // $$$$$ do something similar for remove from team
    // document.querySelectorAll(`[data-id-min]`).forEach((item) => { 
    //   item.addEventListener(`click`, (event) => { 
    //     // Call the decrease quantity method when an element with a "data-id-min" attribute is clicked
    //     this.decrease(event); 
    //   });
    // });

}
}

favoritesTemplate(pokemon) {
  // HTML template for a single cart item
 const newFav = `<div class="pokemon"><img class="pokeImg" src='${pokemon.sprites.front_default}' alt='image of ${pokemon.name}'><span class="fav" id="${pokemon.id}">🤍</span> <p class="name">${pokemon.id} ${pokemon.name}</p>`;
 html += `<p class='types'> Types: ${pokemon.types[0].type.name} `;

 if (pokemon.types[1] != undefined) {
 html += `, ${pokemon.types[1].type.name}`;
 }
 html += `</p></div>`;
// Return the generated HTML
 return newFav;
}

async addFavorite(pokemonId) {
    let fav_list = [];
    let needsAdded = 1;
    // iflocalstorage `${username}-fav`
      if (localStorage.getItem(`${this.key}`)) {
        fav_list = getLocalStorage(`${this.key}`);
        // fav_list.forEach(item => setQuantity.bind(this)(item));;
      }
    //  let pokemonById = getPokemonById(pokemonId);
    //  console.log(pokemonById);
    //  let pokemon = pokemonById.results;
    // if (needsAdded == 1) {
      fav_list.push(pokemonId);
      // fav_list.push(pokemonById);
      console.log(fav_list);
    // }
      setLocalStorage(`${this.key}`, fav_list);
  
        // Show the success message
        // const successMessage = document.createElement("div");
        // successMessage.innerHTML = "Favorite added to team!";
        // successMessage.style.backgroundColor = "green";
        // successMessage.style.color = "white";
        // successMessage.style.padding = "20px";
        // successMessage.style.position = "fixed";
        // successMessage.style.borderRadius = "5px"
        // // successMessage.style.transform = "translate(-50%, -50%)";
        // successMessage.style.top = "0";
        // successMessage.style.right = "0";
        // document.body.appendChild(successMessage);
        // setTimeout(() => {
        //   successMessage.remove();
        // }, 3000);
        // return;
  }
}
  export function favoriteAdd(pokemonId, pokemonName, pokemonSprite, pokemonTypes) {
    let fav_list = [];
    let pokeReduceList = {
      pokemonInfo: {
      id: pokemonId,
      name: pokemonName,
      sprite: pokemonSprite,
      types: pokemonTypes
      }
    };
    let needsAdded = 1;
    // iflocalstorage `${username}-fav`
      // if (localStorage.getItem(`${this.key}`)) {
      if (localStorage.getItem(`ashKetchum-fav`)) {
        // fav_list = getLocalStorage(`${this.key}`);
        fav_list = getLocalStorage(`ashKetchum-fav`);
        // fav_list.forEach(item => setQuantity.bind(this)(item));;
      }
      // let pokemonById = getFavorite(pokemonId);
      // console.log(pokemonById);
      // let pokemon = pokemonById.results.id;
     // if (needsAdded == 1) {
       fav_list.push(pokeReduceList);
      //  fav_list.push(pokemonById);
    // if (needsAdded == 1) {
      // fav_list.push(pokemonId);
      console.log(fav_list);
    // }
      // setLocalStorage(`${this.key}`, fav_list);
      setLocalStorage(`ashKetchum-fav`, fav_list);
  
    
  }
  // export function favoriteAdd(pokemonId) {
  //   let fav_list = [];

  //   let needsAdded = 1;
  //   // iflocalstorage `${username}-fav`
  //     // if (localStorage.getItem(`${this.key}`)) {
  //     if (localStorage.getItem(`ashKetchum-fav`)) {
  //       // fav_list = getLocalStorage(`${this.key}`);
  //       fav_list = getLocalStorage(`ashKetchum-fav`);
  //       // fav_list.forEach(item => setQuantity.bind(this)(item));;
  //     }
  //     // let pokemonById = getFavorite(pokemonId);
  //     // console.log(pokemonById);
  //     // let pokemon = pokemonById.results.id;
  //    // if (needsAdded == 1) {
  //      fav_list.push(pokemonId);
  //     //  fav_list.push(pokemonById);
  //   // if (needsAdded == 1) {
  //     // fav_list.push(pokemonId);
  //     console.log(fav_list);
  //   // }
  //     // setLocalStorage(`${this.key}`, fav_list);
  //     setLocalStorage(`ashKetchum-fav`, fav_list);
  
    
  // }
  export function favoriteRemove(pokemonId) {
    let fav_list = [];

    let needsAdded = 1;
    // iflocalstorage `${username}-fav`
      // if (localStorage.getItem(`${this.key}`)) {
      if (localStorage.getItem(`ashKetchum-fav`)) {
        // fav_list = getLocalStorage(`${this.key}`);
        fav_list = getLocalStorage(`ashKetchum-fav`);
        // fav_list.forEach(item => setQuantity.bind(this)(item));;
      }
      // let pokemonById = getFavorite(pokemonId);
      // console.log(pokemonById);
      // let pokemon = pokemonById.results.id;
     // if (needsAdded == 1) {
      //  fav_list.push(pokemonId);
      //  fav_list.push(pokemonById);
    // if (needsAdded == 1) {
      // fav_list.push(pokemonId);
      // console.log(fav_list);
    // }
      // setLocalStorage(`${this.key}`, fav_list);
      setLocalStorage(`ashKetchum-fav`, fav_list);
  
    
  }
  export async function getFavorite(pokemonId) {
    // retrieve from json by id
    let path = "https://jdevoldemort.github.io/indigotm/json/pokeReducedList2.json";
    let pokemonById = await findProductById(pokemonId, path);
    return pokemonById;
    
  }
  // renderRegionDetails(selector) {
  //   const element = document.querySelector(selector);
  //   // const breadcrumb = document.querySelector(".breadcrumb");
  //   // breadcrumb.innerHTML = `
  //   //     <a href="/">Home</a> >
  //   //     <a href="/region-listing/index.html?region=${this.region}">${this.region.charAt(0).toUpperCase() + this.region.slice(1)}</a> >
  //   //     <span>${this.region}</span>
  //   // `;
  //   element.insertAdjacentHTML(
  //     "afterBegin",
  //     regionDetailsTemplate(this.region)
  //   );
  // }

