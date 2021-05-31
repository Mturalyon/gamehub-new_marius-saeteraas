const xboxSlider = document.querySelector(".xbox-slider");
const playstationSlider = document.querySelector(".ps-slider");
const nintendoSlider = document.querySelector(".nintendo-slider");
const pcSlider = document.querySelector(".pc-slider");

const sliderContainer = document.querySelector(".slider-container");

console.log(xboxSlider, playstationSlider, nintendoSlider, pcSlider);

const url = "https://api.saeteraas.one/wp-json/wc/store/products?per_page=100";

async function callApis() {

    try {

        const response = await fetch(url);
        const json = await response.json();

        createHtml(json);

    }

    catch (error) {
        sliderContainer.innerHTML = ` 
        <div class="error-container">
            <div>
                <i class="fas fa-exclamation-circle fa-lg"></i>
                <h3>WOOPS! There seems to be an error</h3>
            </div>
        </div>`;
    };
};

function createHtml(data) {
    for (let i = 0; i < data.length; i++) {

        if (data[i].categories[0].name.toLowerCase() === "xbox") {
            xboxSlider.innerHTML = `
        <a href="/html/games_xbox-main.html" class="games-main_btn">XBOX</a>
                <section>
                    <i class="fas fa-chevron-left fa-3x left"></i>
                    <a href="/html/games.html?id=${data[i].id}"><img src="${data[i].images[0].src}"
                            alt="a picture of the game at sale"></a>
                    <div>
                        <h2>${data[i].name}</h2>
                        <h3>${data[i].categories[0].name.toUpperCase()}</h3>
                        <div>
                            <p>Lorem ipsum dolor sit amet consectetur,</p>
                            <p>adipisicing elit.</p>
                            <p> Sequi dicta mollitia ipsam aut
                                dolores</p> itaque repudiandae sint.<p>Dolore, fugiat veniam!</p>
                        </div>
                        <h4>${data[i].prices.price} NOK</h4>
                    </div>
                    <i class="fas fa-chevron-right fa-3x right"></i>
                </section>`;
        };

        if (data[i].categories[0].name.toLowerCase() === "playstation") {
            playstationSlider.innerHTML = `
            <a href="/html/games_ps-main.html" class="games-main_btn">PLAYSTATION</a>
                <section>
                    <i class="fas fa-chevron-left fa-3x left"></i>
                    <a href="/html/games.html?id=${data[i].id}"><img src="${data[i].images[0].src}"
                            alt="a picture of the game at sale"></a>
                    <div>
                        <h2>${data[i].name}</h2>
                        <h3>${data[i].categories[0].name.toUpperCase()}</h3>
                        <div>
                            <p>Lorem ipsum dolor sit amet consectetur,</p>
                            <p>adipisicing elit.</p>
                            <p> Sequi dicta mollitia ipsam aut
                                dolores</p> itaque repudiandae sint.<p>Dolore, fugiat veniam!</p>
                        </div>
                        <h4>${data[i].prices.price} NOK</h4>
                    </div>
                    <i class="fas fa-chevron-right fa-3x right"></i>
                </section>`;
        };

        if (data[i].categories[0].name.toLowerCase() === "nintendo") {
            nintendoSlider.innerHTML = `
            <a href="/html/games_nintendo-main.html" class="games-main_btn">NINTENDO</a>
                <section>
                    <i class="fas fa-chevron-left fa-3x left"></i>
                    <a href="/html/games.html?id=${data[i].id}"><img src="${data[i].images[0].src}"
                            alt="a picture of the game at sale"></a>
                    <div>
                        <h2>${data[i].name}</h2>
                        <h3>${data[i].categories[0].name.toUpperCase()}</h3>
                        <div>
                            <p>Lorem ipsum dolor sit amet consectetur,</p>
                            <p>adipisicing elit.</p>
                            <p> Sequi dicta mollitia ipsam aut
                                dolores</p> itaque repudiandae sint.<p>Dolore, fugiat veniam!</p>
                        </div>
                        <h4>${data[i].prices.price} NOK</h4>
                    </div>
                    <i class="fas fa-chevron-right fa-3x right"></i>
                </section>`;
        };

        if (data[i].categories[0].name.toLowerCase() === "pc") {
            pcSlider.innerHTML = `
            <a href="/html/games_pc-main.html" class="games-main_btn">PC</a>
                <section>
                    <i class="fas fa-chevron-left fa-3x left"></i>
                    <a href="/html/games.html?id=${data[i].id}"><img src="${data[i].images[0].src}"
                            alt="a picture of the game at sale"></a>
                    <div>
                        <h2>${data[i].name}</h2>
                        <h3>${data[i].categories[0].name.toUpperCase()}</h3>
                        <div>
                            <p>Lorem ipsum dolor sit amet consectetur,</p>
                            <p>adipisicing elit.</p>
                            <p> Sequi dicta mollitia ipsam aut
                                dolores</p> itaque repudiandae sint.<p>Dolore, fugiat veniam!</p>
                        </div>
                        <h4>${data[i].prices.price} NOK</h4>
                    </div>
                    <i class="fas fa-chevron-right fa-3x right"></i>
                </section>`;
        };

    };
};

callApis();