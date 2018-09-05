console.log(window.location);

let color = prompt("What color would you like?");
document.body.style.backgroundColor = color;

color = prompt("What color for text do you want?");
const page = document.querySelector(".page");
page.style.color = color;

let name = prompt("Who inspires you?");
const spanName = document.querySelector("span.name");
spanName.innerText = name;

let imageSrc = prompt("What image would you like to see?");
const imageTag = document.querySelector(".imageBlock img");
imageTag.src = imageSrc;

let textBio = prompt("Write something about this person:");
const shortBioBlock = document.querySelector(".shortBio");
shortBioBlock.innerText = textBio;

shortBioBlock.className += " animated";