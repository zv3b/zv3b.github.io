let currentKrant = "fallback";

let fetchKrant = `../jsonFiles/${currentKrant}.json`;

fetch(fetchKrant)
            .then(response => response.json())
            .then(data => {
                //Titel van de pagina zelf, auteur en de titel op de pagina zelf
                document.title = data.title;
                document.getElementById("title").textContent = data.title;
                document.getElementById("author").textContent = `geschreven door: ${data.author}`;


            })
.catch(error => console.error("Error loading JSON:", error));
