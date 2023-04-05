import { preloadImages } from "./imageCache.mjs";
import { getParam, loadHeaderFooter } from "./utils.mjs";
import { getPokemonList } from "./regionDetail.js";
import favoriteManagment from "./favorite.mjs";

loadHeaderFooter();
let userName = "AshKetchum";

const pokeReducedList2 = "https://jdevoldemort.github.io/indigotm/json/pokeReducedList2.json";
// Kanto region Pokemon list number 1-151
const urlListTest = "https://pokeapi.co/api/v2/pokemon?limit=10&offset=0";

const urlListkanto = "https://pokeapi.co/api/v2/pokemon?limit=151&offset=0";
// Johto region Pokemon list number 152-251

const urlListjohto = "https://pokeapi.co/api/v2/pokemon?offset=151&limit=100";
// Hoenn region Pokemon list number 251-386

const urlListhoenn = "https://pokeapi.co/api/v2/pokemon?offset=251&limit=135";

// Pull to create redueced list of data to store in JSON pokeReducedList
// Next lookup how to json.parse the reducedList
const urlListFullTestPull = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=386";

const favManagment = new favoriteManagment(userName, ".fav-list", pokeReducedList2);

async function geturlList(dataSource) {
    let dataSources = {
        urlListkanto: "https://pokeapi.co/api/v2/pokemon?limit=151&offset=0",
        urlListjohto: "https://pokeapi.co/api/v2/pokemon?offset=151&limit=100",
        urlListhoenn: "https://pokeapi.co/api/v2/pokemon?offset=251&limit=135",
        urlListTest: "https://pokeapi.co/api/v2/pokemon?limit=10&offset=0",
        urlListFullTestPull: "https://pokeapi.co/api/v2/pokemon?offset=0&limit=386"
    };
    return dataSources.dataSource;
    

}
// getPokemonList(urlListTest);
// getPokemonList(urlListFullTestPull);
// getPokemonList(urlListKanto);
// getPokemonList(urlListJohto);
// getPokemonList(urlListHoenn);
let region = getParam("region");
console.log(region);
let dataSource = `urlList${region}`;
console.log(dataSource);
let selectedDataSource = geturlList(dataSource);
console.log(selectedDataSource);
getPokemonList(selectedDataSource);

// maybe turn these into an array
// or read from jsons setup instead
// then store pokemon info from calls for region in local storage stringified
// favorites will be like a cart and teams will do the same 


