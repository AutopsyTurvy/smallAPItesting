const apiURLbase = "https://game-hub-kittyalicecase.no";

const productURL = "/wp-json/wc/store/products";
const storeURL = "https://game-hub-kittyalicecase.no/wp-json/wc/store/products";

const imageURL = "https://game-hub-kittyalicecase.no/wp-content/uploads/2024/01/4-assassin-324x324.jpg";


async function fetchProducts(){
    try{
        const response = await fetch(storeURL);
        const getResults = await response.json();
        for(var i = 0; i < getResults.length; i++) {
            console.log(getResults[i].images[0].src)
        }
    }

    catch(error){
        console.log(error);
    }
}


fetchProducts();


// (getResults[2].tags[1].slug