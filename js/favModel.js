import favoriteManagment from "./favorite.mjs";
import { loadHeaderFooter } from "./utils.mjs";
loadHeaderFooter();

const pokeReducedList2 = "https://jdevoldemort.github.io/indigotm/json/pokeReducedList2.json";

let favorite = new favoriteManagment("AshKetchum", ".fav-list", pokeReducedList2);

favorite.init();