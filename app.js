/*
Uppgift 1: 
Använd variabeln blue för att "toggla" bakrgrundsfärgen mellan blå och vit
för diven med id answer-one när man klickar på knappen
*/
let blue = false;
function taskOne() {

  if (blue == false) {
      document.getElementById("answer-one").style.background = "blue";   // sätter färgen till blue om taskOne knappen inte är blue dvs false
      blue = true                                                        // färgen är ändrat till blue och är true
      
      
  } else {                                                               // om taskOne knappen är blå så är blue true. då körs koden under
      document.getElementById("answer-one").style.background = "white";  // sätter färgen till från blue till white
      blue = false                                                       // koden upprepas då blå är false igen och knappen blir blå.
  }

}

  
  
/*
Uppgift 2: 
Varje gång man klickar på knappen ska ett nytt random-värde 
läggas till i numbers-arrayen, innan arrayen renderas ut i diven med id answer-two
*/

const numbers = [234, 986, 784];

function taskTwo() {
 let randomNumber = Math.random() *100;                     // multiplicerar med 100 eller 10 för att få kommatecknet flytta sig till vänster
 numbers.push(Math.floor(randomNumber));                    // använder math.floor för att göra talet till hel tal och ta bort komma tecknet
  console.log(numbers)

  alert(" A random number have been added to the array")
}

/*
Uppgift 3: 
Identifiera vilken dag i veckan det är, ifall det är helg (lördag eller söndag) 
ska du trigga en alert med meddelandet "Woohooo it's weekend" annars om det 
inte är helg ska du trigga en alert med meddelandet "FML"
*/


function taskThree() {
 const date = new Date() 
 const day = date.getDay()

 if(day == 6 || day == 0 ){
   alert("Woohooo it's weekend")
 } else{
   alert("FML")
 }
  
}

/*
Uppgift 4: 
Anropa funktionen multiplier och förse den med två argument (värden), multiplier ska sedan 
undersöka om dessa värden är nummer, om så är fallet ska värdena multipliceras och resultatet 
ska sedan visas i en alert-box utefter följande: Produkten är: [RESULTATET], annars om ett av 
eller båda värdena inte är ett nummer ska en alertbox med meddelandet "Jag kan bara multiplicera numer" triggas
*/

function multiplier(valueOne, valueTwo) {
console.log(valueOne,valueTwo) 
if(typeof valueOne === "number" && typeof valueTwo === "number"){      // skriver att typen ska vara nummer så att det ej går skriva strängar i funktionen

  alert("Produkten är: " + valueOne * valueTwo)                        // skriver ut i alert boxen produkten är value1 * value2
 
}else{
  alert("Skriv in ett nummer tack")                                    // skriver att de angivna värdena inte är numbers, triggas bara om man skriver något annat än nummer.
}



}

function taskFour() {
  multiplier(9,32);         // Anropar funktionen multiplier ovan, skriv in två tal som ersätter value1 och value och multipliceras med varann 

}

/*
Uppgift 5: 
Börja med att iterera över arrayen fruits, om värdet är "apelsin" eller "päron" 
ska du pusha värdet till trash-arrayen, annars ska du pusha värdet till eatable-arrayen, 
du ska sedan rendera ut båda arrayerna i diven "answer-five", där eatable arrayen ska 
prefixas av "Ätligt:" i bold och trash-arrayens värden ska prefixas av "Skräp:" i bold

Det kommer alltså att se ut såhär
Ätligt: banan, äpple, citron
Skräp: apelsin, päron
*/

const fruits = ["banan", "äpple", "citron", "apelsin", "päron"];
const eatable = [];
const trash = [];


function taskFive() {
  for(let i = 0; i < fruits.length; i++) {
    if(fruits[i] === "apelsin" || fruits[i] === "päron") {
      trash.push(fruits[i]);
    } else{
      eatable.push(fruits[i]);
    }
  }
  
  console.log(trash);
  console.log(eatable);
  document.getElementById("answer-five").innerHTML =  `<p> <strong> ${eatable} </strong> </p> <p> <strong> ${trash} </strong> </p>`
  
}

/*
Uppgift 6: 
Börja med att iterera över arrayen persons, om personens age-attribut är över eller lika med 30
ska du pusha personens namn till overThirty-arrayen, annars ska du pusha värdet till underThirty-arrayen,
du ska sedan kolla om personens married-attribut är true eller false, är det true ska du pusha personens 
namn till married-arrayen, annars ska du pusha personens namn till notMarried-arrayen.

Du ska sedan rendera ut alla arrayerna i diven "answer-six", där overThirty arrayens värden ska 
prefixas av "Över 30:" i bold, underThirty-arrayens värden ska prefixas av "Under 30:" i bold, 
married-arrayens värden ska prefixas av "Gift:" i bold och notMarried-arrayens värden ska prefixas av "Ogift:" i bold

Det kommer alltså att se ut såhär
Över 30: Christian
Under 30: Diana,Carl,Karin
Gift: Christian,Diana
Ogift: Carl,Karin
*/

const persons = [
  { name: "Christian", age: 31, married: true },
  { name: "Diana", age: 29, married: true },
  { name: "Carl", age: 28, married: false },
  { name: "Karin", age: 29, married: false },
];

const married = [];
const notMarried = [];
const overThirty = [];
const underThirty = [];


function taskSix() {
  
  for(let a = 0; a < persons.length; a++ ){
    if(persons[a].married == false) {
      notMarried.push(persons[a].name);
    } else{
      married.push(persons[a].name);
    }

  }  
  for(let a = 0; a <persons.length; a++){
    if(persons[a].age > 30){
      overThirty.push(persons[a].name);
    } else{
      underThirty.push(persons[a].name);
    }
  }
  console.log(notMarried)
  console.log(married)
  console.log(underThirty)
  console.log(overThirty)
  document.getElementById("answer-six").innerHTML =  `<p>  <strong> Ogift: ${notMarried} </strong> </p> <p> Gift: <strong> ${married} </strong> </p> <p> <strong> Under 30: ${underThirty}</strong> </p> <p> <strong> Över 30: ${overThirty} </strong> </p> ` 
  
}


  

/*
Uppgift 7: 
Dela upp strängen addMeSomeLineBreaks vid varje komma och skriv 
ut texten på en ny rad i diven "answer-seven"
*/

const addMeSomeLineBreaks =
  "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?";

function taskSeven() {
  addMeSomeLineBreaksFormatted = "";
  for (let val of addMeSomeLineBreaks){
    if("," === val) {
      addMeSomeLineBreaksFormatted += ", <br>";
    } else{
      addMeSomeLineBreaksFormatted += val;
    }
  }
  document.getElementById("answer-seven").innerHTML =
  addMeSomeLineBreaksFormatted
}

/*
Uppgift 8: 
Dölj diven med id card-eight i 3 sekunder efter att du klickat på knappenn,
efter att tre sekunder har gått ska diven visas som vanligt igen
*/

function taskEight() {
  document.getElementById("card-eight").style.display = "none";  // När knappen trycks så gömms den genom style.display = "none"
  setTimeout(function(){
    document.getElementById("card-eight").style.display = "unset";  // seTimeout funktionen körs och knappen visas igen efter 3 sekunder

  }
  ,3000);
}

/*
Uppgift 9: 
Om klockan är över 17.00 ska bakgrundsfärgen ändras på alla divar med klassen 
answer-container till blå, annars ska den ändras till röd
*/

function taskNine() { 
  
 const date = new Date()
 const hours = date.getHours()
 const card = document.getElementsByClassName("answer-container");

 if(hours > 17){
  for(let U = 0; U < card.length; U++){
    card[U].style.background = "blue";
  }
 
  } else{
  for( let U = 0; U < card.length; U++) {
  card[U].style.background = "red";
  }
 
  }


}




/*
Uppgift 10: 
Sista uppgiften är att bygga en miniräknare genom att anropa och förse 
calculator-funktionen med tre argument (se taskTen-funktionen), 
i calculator-funktionen ska du sedan göra olika beräkningar (plus, minus, gånger, delat med) på de två 
första parametrarna beroende av vad den tredje parametern är satt till ("add", "subtract", "multiply", "divide"). 
När resultatet har beräknats ska detta visas i en alert-box. 

Ytterligare så ska du innan beräkningen görs kontrollera att argument 1 och 2 är satta till nummer 
och att argument nummer tre antingen är satt till "add", "subtract", "multiply" eller "divide", 
om någon av dessa conditions inte uppfylls ska du visa en alertbox med texten "Något är fel"
*/


function calculator(valueOne, valueTwo, operator) {
  try{
   if (
     typeof valueOne !== "number" ||
     typeof valueTwo !== "number" ||
     (operator !== "add" &&
      operator !== "substract" &&
      operator !== "divide" &&
      operator !== "multi")
    ) {
      throw "något stämmer inte här";
  }  else {
    switch (operator) {
      case "add":
        sum = valueOne + valueTwo;
        alert(sum);
        break;
      case "substract":
        difference = valueOne - valueTwo;
        alert(difference);
        break;
      case "divide":
        quotient = valueOne / valueTwo;
        alert(quotient);
        break;
      case "multi":
        product = valueOne * valueTwo;
        alert(product);
        break;
        default:
        alert(" Det är något fel här");
      }
   }
  }  catch (error) {
        alert (error);
    }
  }

function taskTen() {
  //första och andra argumentet ska vara nummer, tredje argumentet ska
  //vara en sträng med något av värdena "add", "subtract", "multiply", "divide"
  calculator(10, 7, "add");
  calculator(13, 9, "substract");
  calculator(15, 3, "divide");
  calculator(5, 7 , "multi");
  
}
