
let age = 25; 

function displayAge() {
  console.log("Current Age:", age);
}

function changeAge() {
  age = 30;      
  console.log("Age updated inside changeAge function.");
}

displayAge();   
changeAge();    
displayAge(); 
