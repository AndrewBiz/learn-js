// const doSomething = () => {
//   alert("working hard doing something!!!");
//   // h2.removeEventListener("click", doSomething, false);
// };

// h2.addEventListener("click", doSomething, false);

// h2.addEventListener("click", (event) => {
//   console.log(event.target.innerText);
//   event.target.innerText = "Tratata";
// });

document.addEventListener("readystatechange", (event) => {
  console.log(event.target.readyState);
  if (event.target.readyState === "complete") {
    initApp();
  }
});

const initApp = () => {
  const view = document.querySelector("#view2");
  const div = view.querySelector("div");
  const h2 = div.querySelector("h2");

  view.addEventListener(
    "click",
    (event) => {
      event.target.style.backgroundColor = "purple";
    },
    true
  );

  div.addEventListener(
    "click",
    (event) => {
      event.target.style.backgroundColor = "magenta";
      event.target.style.color = "yellow";
      // event.stopPropagation();
    },
    true
  );

  const textOriginal = h2.textContent;
  h2.addEventListener(
    "click",
    (event) => {
      event.target.style.backgroundColor = "black";
      event.target.style.color = "#990033";
      event.target.textContent === textOriginal
        ? (event.target.textContent = "ткнуто!")
        : (event.target.textContent = textOriginal);
      // event.stopPropagation();
    },
    true
  );

  const nav = document.querySelector("nav");

  nav.addEventListener("mouseover", (event) => {
    event.target.classList.add("height100");
  });

  nav.addEventListener("mouseout", (event) => {
    event.target.classList.remove("height100");
  });
};
