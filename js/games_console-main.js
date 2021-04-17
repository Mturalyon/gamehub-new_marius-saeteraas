const container = document.querySelector(".games-many_container");

const url = "https://saeteraas.one/wp-json/wc/store/products";

async function callApis() {

    try {

        const response = await fetch(url);
        const json = await response.json();

        console.log(json);

        container.innerHTML = "";

        for (let i = 0; i < json.length; i++) {
            container.innerHTML += `<a href="games.html?id=${json[i].id}"><img src="${json[i].images[0].src}"
            alt="picture link to video game site"></a>`;
        };
    }
    catch (error) {
        container.innerHTML = "an error has occured";
    }

};

callApis();