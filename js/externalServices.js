
export default class ExternalServices {
    constructor() {
        this.path = `https://jdevoldemort.github.io/indigotm/json/pokeReducedList2.json`;


    }

    getData() {
        return fetch(this.path)
        //   .then(convertToJson)
          .then((data) => data);
      }

      async findProductById(id) {
        // const response = await fetch(baseURL + `product/${id}`);
        // const data = await convertToJson(response);
        // return data.Result;
        const pokemonById = await this.getData();
        console.log(pokemonById);
        return pokemonById.find((item) => item.Id === id);
      }

    }
    async function convertToJson(res) {
        let jsonResponse = await  res.json();
        if (res.ok) {
          return jsonResponse;
        } else {
          throw { name: "servicesError", message: jsonResponse };
        }
      }
    export async function getData(path) {
        return fetch(path)
          .then(convertToJson)
          .then((data) => data);
      }
   export async function findProductById(id, path) {
        // const response = await fetch(baseURL + `product/${id}`);
        const response = await fetch(path);
        const data = await convertToJson(response);
        // console.log(pokemonById);

        return data.results.id;
        // const pokemonById = await getData(path);
        // return pokemonById.find((item) => item.Id === id);

   }