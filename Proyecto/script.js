let listaPersonas = [];

const Button = document.getElementById("personButton");
const Table = document.getElementById("personTable");

Button.addEventListener("click",addPerson);

function Person(name,lastName,email,numberPhone,image){
    this.name=name;
    this.lastName=lastName;
    this.email=email;
    this.numberPhone=numberPhone;
    this.image=image;
}
function addPerson(){
    let tPerson = new Person(
        document.getElementById("name").value,
        document.getElementById("lastName").value,
        document.getElementById("email").value,
        document.getElementById("numberPhone").value,
        document.getElementById("image").value
    );
    listaPersonas.push(tPerson);
    printPerson(tPerson);    
}
function printPerson(person){
    personValues = Object.values(person);  
    let row = document.createElement("tr");
    for (let i = 0; i < personValues.length-1; i++) {
        let text = document.createElement("th");
        text.textContent = personValues[i];
        row.appendChild(text);
    }
    let text = document.createElement("th");
        let img = document.createElement("img");
        img.src = personValues.at(-1);
    text.appendChild(img);
    row.appendChild(text);
    Table.appendChild(row);
}