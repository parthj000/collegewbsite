function scrollToSection(sectionId) {
  var section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}

var elem = document.querySelector(".side-bar-mob .div-2 ul");
console.log(elem, "this is the elem");
const kapa = document.querySelectorAll(".side-bar ul li");
console.log(kapa, "this is kapa");
var allSection = document.querySelectorAll("section");

for (let i = 0; i < kapa.length; i++) {
  const newElem = document.createElement("li");

  newElem.innerText = kapa[i].innerText;
  newElem.addEventListener("click", () => {
    scrollToSection(`${allSection[i].id}`);
  });

  newElem.classList.add("btn-slide");

  elem.append(newElem);
}

console.log(elem, "this is the element");
