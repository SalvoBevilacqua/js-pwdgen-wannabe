// Test
// alert("Ciao");

//chiendo le info all'utente

const user = prompt("Scrivi il tuo nome");
console.log(user, typeof user);

const surname = prompt("Scrivi il tuo cognome");
console.log(surname, typeof surname);

const color = prompt("Scrivi il tuo colore preferito");
console.log(color, typeof color);

//preparo la password

const password = user + surname + color + "21";
console.log(password);

//stampo la password

document.getElementById("result").innerHTML = password;