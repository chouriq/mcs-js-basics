const byTag = document.getElementsByTagName("div");
const byClass = document.getElementsByClassName("myClass");
const byId = document.getElementById("myId");

console.log(byTag);
console.log(byClass);
console.log(byId);

const allBySelector = document.querySelectorAll(".coolClass.mine");

const firstBySelector = document.querySelector(".coolClass.mine");

console.log(allBySelector, firstBySelector);

const quest = prompt("And who are you?");

byId.innerHTML = quest;