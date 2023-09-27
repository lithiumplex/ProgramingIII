const Person = [
    document.getElementById("name"),
    document.getElementById("lastName"),
    document.getElementById("email"),
    document.getElementById("numberPhone")
];
const Button = document.getElementById("personButton");
const Table = document.getElementById("personTable")

Button.addEventListener("click",addPerson)
function addPerson(){
    let row = document.createElement("tr");
    console.log(Person);
    for (let i = 0; i < Person.length; i++) {
        const element = Person[i];
        let text = document.createElement("th");
        console.log(text);
        text.textContent = element.value;
        row.appendChild(text);
    }
    Table.appendChild(row);
}