const container = document.querySelector(".games-specific-wrapper");
const header = document.querySelector(".game-header_green");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const url = "https://saeteraas.one/wp-json/wc/store/products/" + id;

async function callApi() {

    try {
        const response = await fetch(url);
        const json = await response.json();

        console.log(json);
        createHTML(json);
    }
    catch (error) {
        console.log(error);
    }

};

callApi()

function createHTML(details) {
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
    header.innerHTML = `${details.categories[0].name.toUpperCase()}`;
}