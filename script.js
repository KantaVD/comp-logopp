// const age= 23;
// const isFemale= true;
// const driverStatus="bob";
// const firstName="Bram";
// const totalAmount=15;


const age= 14;
const isFemale= false;
const driverStatus="drunk";
const firstName="Freek";
const totalAmount=40;

//leeftijdscheck
if (age>18) {
    console.log("Welkom in de kroeg");
 } else {
    console.log("Helaas ben je te jong om binnen te komen");

 }
// gendercheck
 if (isFemale) {
    console.log("Je bent een vrouw");
 } else {
     console.log("Je hebt geen toegang tot de ladiesnight");
 }

//bob-check
 if (driverStatus==="bob") {
     console.log("Je krijgt gratis fris om je vriendinnen veilig thuis te brengen");
 } else {
     console.log("Zorg dat je met de BOB mee naar huis gaat");
 }

 console.log("Verdere acties die van toepassing zijn op jou:");

 //jongerentrek
 if (age>18 && age<25) {
    console.log("Je krijgt 50% korting!");
 } else if (age>25) {
     console.log("Helaas ben je te oud voor studentenkorting");
 } else {
     console.log("We zien je graag als je 18 bent");
 }

 //50jaars korting
 if (firstName==="Bram" ||firstName==="Sarah") {
    console.log("Je krijgt een gratis biertje van ons");
 } else {
     console.log("Heb je een vriend die Bram of Sarah heet? neem ze mee voor een gratis biertje van ons");
 }

 //extra cadeautjes
 if (totalAmount<=25) {
     console.log("Geen extra cadeautjes");
 } else if (totalAmount>25 && totalAmount<=50) {
     console.log("Je krijgt gratis (vega) bitterballen");
 } else if (totalAmount>50 &&totalAmount<=100) {
    console.log("Je krijgt gratis een portie nacho's");
 } else if (totalAmount>100) {
    console.log("Je krijgt gratis een flesje champagne");
 }