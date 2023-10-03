const characters = document.getElementById("characters");

async function* getData() {
    for(let page=0;page<42;page++){
        try {
            const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}`);
            const data = await response.json();
            yield data;
          } catch (error) {
            console.log(error);
          }
    }
}
const itera = getData();
async function printData() {
  let data1 = await itera.next();
  console.log("data1",data1);
  data = data1.value.results;
  console.log("data1",data);
  for (let i=0;i<data.length;i++) {
    const card = document.createElement("div");
    card.classList.add("card");

        const figure = document.createElement("figure");
            const img = document.createElement("img");
            img.setAttribute("src", data[i].image);
        figure.appendChild(img);

        const h1 = document.createElement("h1");
        h1.textContent = data[i].name;

        const p = document.createElement("p");
        p.textContent = data[i].location.name;

    card.append(figure, h1, p);
    characters.appendChild(card);
  }
}

printData();

window.addEventListener("scroll", () => {
    // Verifica si el usuario ha llegado al final de la página
    const scrollY = window.scrollY;
    const documentHeight = document.body.offsetHeight;  
    if (scrollY >= documentHeight - window.innerHeight) {
      // Carga más contenido
      printData();
    }
});