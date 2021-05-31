const xboxContainer = document.querySelector(".index-xbox");
const playstationContainer = document.querySelector(".index-playstation");
const nintendoContainer = document.querySelector(".index-nintendo");
const pcContainer = document.querySelector(".index-pc");

const container = document.querySelector(".index-main");

const url = "https://api.saeteraas.one/wp-json/wc/store/products?per_page=100";

async function callAips() {

    try {

        const response = await fetch(url);
        const json = await response.json();

        xboxContainer.innerHTML = ``;
        playstationContainer.innerHTML = ``;
        nintendoContainer.innerHTML = ``;
        pcContainer.innerHTML = ``;

        createHtml(json);

    }

    catch (error) {
        container.innerHTML = ` 
        <div class="error-container">
            <div>
                <i class="fas fa-exclamation-circle fa-lg"></i>
                <h3>WOOPS! There seems to be an error</h3>
            </div>
        </div>`;
    };
};

function createHtml(json) {
    for (let i = 0; i < json.length; i++) {

        if (json[i].categories[0].name.toLowerCase() === "xbox") {
            xboxContainer.innerHTML += `<a href="/html/games.html?id=${json[i].id}"><img src="${json[i].images[0].src}"
            alt="picture link to video game site"></a>`;
        };

        if (json[i].categories[0].name.toLowerCase() === "playstation") {
            playstationContainer.innerHTML += `<a href="/html/games.html?id=${json[i].id}"><img src="${json[i].images[0].src}"
            alt="picture link to video game site"></a>`;
        };

        if (json[i].categories[0].name.toLowerCase() === "nintendo") {
            nintendoContainer.innerHTML += `<a href="/html/games.html?id=${json[i].id}"><img src="${json[i].images[0].src}"
            alt="picture link to video game site"></a>`;
        };

        if (json[i].categories[0].name.toLowerCase() === "pc") {
            pcContainer.innerHTML += `<a href="/html/games.html?id=${json[i].id}"><img src="${json[i].images[0].src}"
            alt="picture link to video game site"></a>`;
        };
    };
};

callAips();