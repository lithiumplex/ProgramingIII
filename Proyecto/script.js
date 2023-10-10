let listaPersonas = [];

const Button = document.getElementById("personButton");
const ButtonE = document.getElementById("editPersonButton");
const Table = document.getElementById("personTable");
const Hidden = document.getElementsByClassName("hidden");
const update = document.getElementById("update");
const create = document.getElementById("create");

Button.addEventListener("click",addPerson);
ButtonE.addEventListener("click",editPerson);
update.addEventListener("click",removeHidden);
create.addEventListener("click",addHidden);

function chargePerson(index){
    console.log(index);
    document.getElementById("codeI").value=listaPersonas[index].code;
    document.getElementById("name").value=listaPersonas[index].name;
    document.getElementById("lastName").value=listaPersonas[index].lastName;
    document.getElementById("email").value=listaPersonas[index].email;
    document.getElementById("numberPhone").value=listaPersonas[index].numberPhone;
    document.getElementById("image").value=listaPersonas[index].image;
}
function addHidden(){
    ButtonE.classList.add("hidden");
    Button.classList.remove("hidden");
    document.getElementById("codeL").classList.add("hidden");
    document.getElementById("codeI").classList.add("hidden");
}
function removeHidden(){
    document.getElementById("codeL").classList.remove("hidden");
    document.getElementById("codeI").classList.remove("hidden");
    ButtonE.classList.remove("hidden");
    Button.classList.add("hidden");
}
function Person(name,lastName,email,numberPhone,image){
    this.code=listaPersonas.length;
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
    const personValues = Object.values(person);  
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
    row.addEventListener("click",()=>{
        removeHidden();
        chargePerson(personValues[0]);
    });
    Table.appendChild(row);
}
function editPerson(){ 
    for(let i=0;i<listaPersonas.length;i++){
        if(document.getElementById("codeI").value == listaPersonas[i].code){
            listaPersonas[i].name = document.getElementById("name").value;
            listaPersonas[i].lastName = document.getElementById("lastName").value;
            listaPersonas[i].email = document.getElementById("email").value;
            listaPersonas[i].numberPhone = document.getElementById("numberPhone").value;
            listaPersonas[i].image = document.getElementById("image").value;
        }
    }
    updateTable();
}
function updateTable(){
    Table.innerHTML=`<tr>
    <th>Code</th>
    <th>Name</th>
    <th>LastName</th>
    <th>Email</th>
    <th>numberPhone</th>
    <th>image</th>
    </tr>`;
    for(i of listaPersonas){
        printPerson(i);
    }
}