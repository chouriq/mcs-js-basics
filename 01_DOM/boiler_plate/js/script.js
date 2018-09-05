let cash = parseFloat(prompt('How much cash do you have?'));
let number_apples = parseInt(prompt('How many apples do you want to buy?'));
let number_loaves = parseInt(prompt('How many loaves do you want to buy?'));
let price_apple = parseFloat(prompt('What is the price of an apple?'));
let price_loaf = parseFloat(prompt('What is the price of the loaf?'));
let sum_apples = price_apple*number_apples;
let sum_loaves = price_loaf*number_loaves;
let is_it_enough = cash>=(sum_apples+sum_loaves);
document.body.innerHTML = "<h1>"+String(is_it_enough)+"</h1>";