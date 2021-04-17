const container = document.querySelector(".games-specific-wrapper");                       //targeting container for the games info
const header = document.querySelector(".game-header_green");                               //targeting category header

const queryString = document.location.search;                                              //targeting querystring
const params = new URLSearchParams(queryString);                                           //searching parameters of querystring
const id = params.get("id");                                                               //catching the value of the "id" parameter

const url = "https://saeteraas.one/wp-json/wc/store/products/" + id;                       //targeting product with specific id

async function callApi() {                                                                 //calling API function

    try {
        const response = await fetch(url);                                                 //fetching URL
        const json = await response.json();                                                //fetching JSON from URL

        console.log(json);
        header.innerHTML = "";
        createHTML(json);                                                                  //calling a separate function that creates the HTML
    }
    catch (error) {                                                                        //catching and displaying errors
        console.log(error);
    }

};

callApi()                                                                                  //calling the API function

function createHTML(details) {                                                             //creating HTML with the JSON info
    container.innerHTML = `  
    <img src="${details.images[0].src}" alt="a picture of the game on sale" class="games-specific_game-img">
    <section>
        <div class="games-specific_container-2">
            <div>
                <h3>${details.name}</h3>
                <h4 class="games-specific_margin-h4">${details.categories[0].name.toUpperCase()}</h4>
                <p>${details.prices.price} kr</p>
                <h4>${details.tags[0].name}</h4>
                <h4>Disc</h4>
            </div>

            <div class="games-specific_profile-container">
                <img src="/images/profile-pictures/games-all.png"
                    alt="profile picture of owner of the game">
                <h4>SillaCard1</h4>
            </div>
        </div>

        <div class="games-specific_button-container">
            <a href="/html/cart.html" class="btn-add-cart_black">Add to cart</a>
            <a href="#" class="favourite_black"><i class="fas fa-heart fa-2x"></i></a>
        </div>
        <div class="games-description">
            <h5>Description</h5>
            <p>${details.description}</p>
        </div>
    </section>`;
    header.innerHTML = `${details.categories[0].name.toUpperCase()}`;                       //also changing category header accordingly
}