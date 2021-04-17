const container = document.querySelector(".games-many_container");          //targeting the container for the games that will be loaded

const url = "https://saeteraas.one/wp-json/wc/store/products";              //targeting url for products

async function callApis() {                                                 //function to call API and create html

    try {

        const response = await fetch(url);                                  //fetching url
        const json = await response.json();                                 //targeting JSON

        console.log(json);

        container.innerHTML = "";                                           //resetting container from loader

        for (let i = 0; i < json.length; i++) {                             //looping through array items and loading them up to the container
            container.innerHTML += `<a href="games.html?id=${json[i].id}"><img src="${json[i].images[0].src}"
            alt="picture link to video game site"></a>`;
        };
    }
    catch (error) {                                                         //catching and displaying error message
        container.innerHTML = "an error has occured";
    }

};

callApis();                                                                 //calling function