//Calling DOM

let generateButton = document.getElementById('generate');

let order = document.getElementById('order');

let forgot = document.getElementById('forgot')

const buttonPress = () => {
  generate.style.backgroundColor = 'white';
  generate.style.color = 'black';
}

const buttonRelease = () => {
  generate.style.backgroundColor = '';
  generate.style.color = '';
}


const starbucksSize = ["tall", "venti", "grande"]
const starbucksDrink = ["tea", "latte", "coffee", "cold brew", "espresso", "refresher", "hot chocolate", "flat white", "crème"]
const starbucksType = ["frappe", "mocha", "frappuccino", "kiwi starfruit", "mango dragonfruit"]
const starbucksAdjective = ["vanilla bean", "cinnamon", "salted caramel", "pumpkin spice", "Irish cream"]

const starbucksExtra = ["with extra whip", "with extra ice", "with less ice", "no foam", "half sweet"]

const starbucksForgot = ["ginger molasses cookie", "oat fudge bar", "cheese and fruit protein box", "butter croissant", "cake pop", "peanut butter cookie brownie", "snowman cookie", "gingerbread biscotti"]


const starbucksOrder = () => {
  let size = starbucksSize[Math.floor(Math.random() * starbucksSize.length)];
  let drink = starbucksDrink[Math.floor(Math.random() * starbucksDrink.length)];
  let type = starbucksType[Math.floor(Math.random() * starbucksType.length)];
  let adjective = starbucksAdjective[Math.floor(Math.random() * starbucksAdjective.length)];
  let extra = starbucksExtra[Math.floor(Math.random() * starbucksExtra.length)];  
  let ohforgot = starbucksForgot[Math.floor(Math.random() * starbucksForgot.length)];
  
order.innerHTML= ("Can I order a " + size + ' ' + adjective +' ' + type + ' ' + drink + ' '+ extra + '?'); 
  
forgot.innerHTML = (`Oh, and a ${ohforgot} too please🖤`);

}

generateButton.addEventListener("mousedown", buttonPress);


generateButton.addEventListener("mouseup", buttonRelease);


generateButton.addEventListener("click", starbucksOrder);










