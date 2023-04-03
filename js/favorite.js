import { getLocalStorage, setLocalStorage } from "./utils.mjs";
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
constructor(userName, dataSource) {
    this.userName = userName;
    this.currentUser = userName;
    this.fav = {};
    this.dataSource = dataSource;
    // this.pokemonId = pokemonId;
}


addFavorite(pokemonId) {
    let fav_list = [];
    let needsAdded = 1;
    // iflocalstorage `${username}-fav`
      if (localStorage.getItem(`${this.currentUser}-fav`)) {
        fav_list = getLocalStorage(`${this.currentUser}-fav`);
        // fav_list.forEach(item => setQuantity.bind(this)(item));;
      }

    if (needsAdded == 1) {
      fav_list.push(pokemonId);
    }
      setLocalStorage(`${this.currentUser}-fav`, fav_list);
  
        // Show the success message
        const successMessage = document.createElement("div");
        successMessage.innerHTML = "Favorite added to team!";
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

}