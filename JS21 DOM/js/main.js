const view1 = document.getElementById("view1");
console.log(view1);
const view2 = document.querySelector("#view2");
console.log(view2);
view1.style.display = "flex";
view2.style.display = "flex";

const views = document.getElementsByClassName("view");
console.log(views);
const sameViews = document.querySelectorAll(".view");
console.log(sameViews);

const divs = view1.querySelectorAll("div");
console.log(divs);

const sameDivs = view1.getElementsByTagName("div");
console.log(sameDivs);

const evenDivs = view1.querySelectorAll("div:nth-of-type(2n)");
console.log(evenDivs);
for (let i = 0; i < evenDivs.length; i++) {
  evenDivs[i].style.backgroundColor = "blue";
  // evenDivs[i].style.width = "150px";
  // evenDivs[i].style.height = "150px";
}

const navText = document.querySelector("nav h1");
console.log(navText);
navText.textContent = "Hello its NAV";
const navbar = document.querySelector("nav");
navbar.innerHTML = `<h1>Hi!!!</h1> <p>its paragraph</p>`;
console.log(navbar);

console.log(evenDivs[0]);
console.log(evenDivs[0].parentElement);
console.log(evenDivs[0].parentElement.children); // childElements SHOULD BE!!!
console.log(evenDivs[0].parentElement.childNodes); // все узлы - даже неочевидные
console.log(evenDivs[0].parentElement.hasChildNodes());
console.log(evenDivs[0].parentElement.firstChild); // firstNodeChild SHOULD BE pidarasy!!!
console.log(evenDivs[0].parentElement.firstElementChild);
console.log(evenDivs[0].parentElement.lastChild);
console.log(evenDivs[0].parentElement.lastElementChild);
console.log("Теперь сиблинги");
console.log(evenDivs[0].nextSibling); //Node!!!
console.log(evenDivs[0].nextElementSibling);
console.log(evenDivs[0].previousSibling); //Node!!!
console.log(evenDivs[0].previousElementSibling);

console.log("Теперь поудаляем \\ повводим ноды");
view1.style.display = "none";
view2.style.display = "flex";
view2.style.flexDirection = "row";
view2.style.flexWrap = "wrap";
view2.style.margin = "10px";

while (view2.lastChild) {
  // Node!!!
  view2.lastChild.remove();
}

const createDiv = (parent, text) => {
  const newDiv = document.createElement("div");
  newDiv.textContent = text;
  newDiv.style.backgroundColor = "black";
  newDiv.style.width = "100px";
  newDiv.style.height = "100px";
  newDiv.style.margin = "10px";
  newDiv.style.display = "flex";
  newDiv.style.justifyContent = "center"; /// pidory alignHorizontal
  newDiv.style.alignItems = "center"; //!!! pidory - alignVertical
  parent.append(newDiv);
};

// createDiv(view2, "10");
for (let i = 1; i <= 8; i++) {
  createDiv(view2, i);
}
