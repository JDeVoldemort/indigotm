import { preloadImages } from "./imageCache.mjs";
import { loadHeaderFooter } from "./utils.mjs";
import { getPokemonList } from "./regionDetail.mjs";

loadHeaderFooter();

// Kanto region Pokemon list number 1-151
const urlListTest = "https://pokeapi.co/api/v2/pokemon?limit=10&offset=0";
const urlListKanto = "https://pokeapi.co/api/v2/pokemon?limit=151&offset=0";
const urlListJohto = "https://pokeapi.co/api/v2/pokemon?offset=151&limit=100";
const urlListHoenn = "https://pokeapi.co/api/v2/pokemon?offset=251&limit=135";

getPokemonList(urlListTest);

// maybe turn these into an array
// or read from jsons setup instead
// then store pokemon info from calls for region in local storage stringified
// favorites will be like a cart and teams will do the same 


