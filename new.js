function scrollToSection(sectionId) {
  var section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}

var elem = document.querySelector(".side-bar-mob .div-2 ul");
console.log(elem, "this is the elem");
const kapa = document.querySelectorAll("section");
console.log(kapa, "this is kapa");
for (let key of kapa) {
  const newElem = document.createElement("li");

  if (!key.querySelector(".heading")) {
    newElem.innerText = key.id;
  } else {
    newElem.innerText = key.querySelector(".heading").innerText;
  }

  newElem.classList.add("btn-slide");

  newElem.addEventListener("click", () => {
    scrollToSection(key.id);
  });
  elem.append(newElem);
}
console.log(elem, "this is the element");
