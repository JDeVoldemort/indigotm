import { preloadImages } from "./imageCache.mjs";
import { getLocalStorage, setLocalStorage } from "./utils.mjs";
import { favoriteAdd, getFavorite, favoriteRemove } from "./favorite.mjs";
import  favoriteManagment  from "./favorite.mjs";
// add function to check for fav so on load the heart can be swapped
let url = 0;

// export default class regionDetails {
//     constructor(username, urlList)
    
// }
// export async function insertResultsFromJson(data) {
//     console.log(data);
//     // reset();
//     const pokeListElement = document.querySelector(".outputList");
//     let pokeList = data.results;
//     let imgArray = [];
//     let pokeToJson = [];

//     pokeList.forEach(async(currentItem) => {
//       let url = currentItem.url;
      

//       const pokedetails = await getPokemon(url);
      

//       const pokemon = pokedetails;

//           // console.log(pokemon);
//         imgArray.push(pokemon.sprites.front_default);
//         let number = pokemon.id;
//         let name = pokemon.name;
//         let sprite = pokemon.sprites.front_default;
//         let types = pokemon.types;
//         let pokeReduceList = {
//           id: number,
//           name: name,
//           sprite: sprite,
//           types: types
//         };
//         let pokeToList = JSON.stringify(pokeReduceList);
//         if (localStorage.getItem('pokeList')) {
//           pokeToJson = getLocalStorage('pokeList');
//           pokeToJson.push(pokeToList);
//           // pokeToJson.push(pokeReduceList);
//           console.log(`poketoJson: ${pokeToJson}`);
//           setLocalStorage('pokeList', pokeToJson);


//         }
//         else {
//           setLocalStorage('pokeList', pokeToJson);
//           pokeToJson = getLocalStorage('pokeList');

//         }


//         //   📲🤍💚
//         let html = `<div><img src='${pokemon.sprites.front_default}' alt='image of ${pokemon.name}'><span class="fav">🤍</span><p class="name">${pokemon.name} Types: ${pokemon.types[0].type.name} `;
//         if (pokemon.types[1] != undefined) {
//         html += `, ${pokemon.types[1].type.name}`;
//         }
//         html += `</p></div>`;
//         pokeListElement.innerHTML += html;
//         // save results to array here with added parameter of fav $$$$$$$$$$$$$$$$$$$$
//     //   }

//     });
//     // place results in localstorage with $$$$$$$$$$$$$$$$$$

//     preloadImages(imgArray, true);
//     // console.log(pokeToJson);
//     setLocalStorage('pokeList', pokeToJson);
//     // let pokeJson = JSON.parse(pokeToJson);
//     // console.log(pokeJson);

//   }
export async function insertResults(data) {
    console.log(data);
    // reset();
    const pokeListElement = document.querySelector(".outputList");
    let pokeList = data.results;
    let imgArray = [];
    let pokeToJson = [];

    pokeList.forEach(async(currentItem) => {
      let url = currentItem.url;
      

      const pokedetails = await getPokemon(url);
      

      const pokemon = pokedetails;

          // console.log(pokemon);
        imgArray.push(pokemon.sprites.front_default);
        let number = pokemon.id;
        let name = pokemon.name;
        let sprite = pokemon.sprites.front_default;
        let type = pokemon.types[0].type.name;
        let pokeReduceList = {};
        if (pokemon.types[1] != undefined) {
        let type2 = pokemon.types[1].type.name;
        pokeReduceList = {
          id: number,
          name: name,
          sprite: sprite,
          type: type,
          type2: type2
        };
      } else {
        pokeReduceList = {
          id: number,
          name: name,
          sprite: sprite,
          type: type
          }
        };

        let pokeToList = JSON.stringify(pokeReduceList);
        if (localStorage.getItem('pokeList')) {
          pokeToJson = getLocalStorage('pokeList');
          pokeToJson.push(pokeToList);
          // pokeToJson.push(pokeReduceList);
          // console.log(`poketoJson: ${pokeToJson}`);
          setLocalStorage('pokeList', pokeToJson);


        }
        else {
          setLocalStorage('pokeList', pokeToJson);
          pokeToJson = getLocalStorage('pokeList');

        }


        //   📲🤍💚
        let html = `<div class="pokemon"><img class="pokeImg" src='${pokemon.sprites.front_default}' alt='image of ${pokemon.name}'><span class="fav" id="${pokemon.id}">🤍</span> <p class="name">${pokemon.id} ${pokemon.name}</p>`;
        html += `<p class='types'> Types: ${pokemon.types[0].type.name} `;

        if (pokemon.types[1] != undefined) {
        html += `, ${pokemon.types[1].type.name}`;
        }
        html += `</p></div>`;
        // pokeListElement.innerHTML += html;
        pokeListElement.insertAdjacentHTML('beforeend', html);
        // save results to array here with added parameter of fav $$$$$$$$$$$$$$$$$$$$
    //   }
        let favelement = document.getElementById(`${pokemon.id}`);
        // event listener calling method on click
        // favelement.addEventListener('click', function(){favoriteManagment.addFavorite(pokemon.id)});
        // 3rd or fourth attempt to get the event listener to take using the function
        favelement.onclick = function(event) {
        if (favelement.innerHTML = "🤍") {
          favoriteAdd(`${pokeReduceList.id}`,`${pokeReduceList.name}`, `${pokeReduceList.sprite}`,`${pokeReduceList.type}`,`${pokeReduceList.type2}`);
          favelement.innerHTML = "💚"
          favelement.classList.add("grow");
          setTimeout(function() {
            favelement.classList.remove("grow");
          }, 900)
        } 
      }
    
        // make a function to get pokemon by id from the pokeReducedList2.json
    });
    // place results in localstorage with $$$$$$$$$$$$$$$$$$

    preloadImages(imgArray, true);
    // console.log(pokeToJson);
    setLocalStorage('pokeList', pokeToJson);
    // let pokeJson = JSON.parse(pokeToJson);
    // console.log(pokeJson);

  }
  
  // asyc fetch function including if.ok and send to a .json
 export async function getPokemonList(urlList) {
    const response = await fetch(urlList);
    if (response.ok) {
      const dataA = await response.json();
      insertResults(dataA);
    }
  }
  
export  async function getPokemon(url) {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      // console.log(data);
      return data;
      // getSprite(data);
    }
   }
  
//   function callPokemonList() {
//       getPokemonList(urlList);
//   }
//   getPokemonList(urlListKanto)
//   const button = document.querySelector('.filterButton');
//   header = document.querySelector('.input');
//   console.log(button);
//   button.addEventListener('click', callPokemonList);

