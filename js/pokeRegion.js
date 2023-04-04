import { preloadImages } from "./imageCache.mjs";
import { loadHeaderFooter } from "./utils.mjs";
import { getPokemonList } from "./regionDetail.mjs";
import favoriteManagment from "./favorite.mjs";

loadHeaderFooter();
let userName = "AshKetchum";

const pokeReducedList2 = "https://jdevoldemort.github.io/indigotm/json/pokeReducedList2.json";
// Kanto region Pokemon list number 1-151
const urlListTest = "https://pokeapi.co/api/v2/pokemon?limit=10&offset=0";

const urlListKanto = "https://pokeapi.co/api/v2/pokemon?limit=151&offset=0";
// Johto region Pokemon list number 152-251

const urlListJohto = "https://pokeapi.co/api/v2/pokemon?offset=151&limit=100";
// Hoenn region Pokemon list number 251-386

const urlListHoenn = "https://pokeapi.co/api/v2/pokemon?offset=251&limit=135";

// Pull to create redueced list of data to store in JSON pokeReducedList
// Next lookup how to json.parse the reducedList
const urlListFullTestPull = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=386";

const favManagment = new favoriteManagment(userName, ".fav-list", pokeReducedList2);

getPokemonList(urlListTest);
// getPokemonList(urlListFullTestPull);
// getPokemonList(urlListKanto);
// getPokemonList(urlListJohto);
// getPokemonList(urlListHoenn);


// maybe turn these into an array
// or read from jsons setup instead
// then store pokemon info from calls for region in local storage stringified
// favorites will be like a cart and teams will do the same 


