function make(
  paramId,
  paramContent,
  headingText,
  paramHeading,
  beforeElementId,
  borderRadius,
  borderColor,
  shadowColor
) {
  // document
  //   .getElementById("branchname")
  //   .style.setProperty("--i", "1s")
  //   .console.log("i");

  const elem = document.createElement("section");
  elem.id = paramId;
  elem.classList.add("bx");

  const heading = document.createElement("div");
  heading.classList.add("heading");

  heading.innerHTML = paramHeading;

  const content = document.createElement("div");
  content.classList.add("content");

  const para = document.createElement("p");
  para.innerHTML = paramContent;

  content.appendChild(para);
  elem.append(heading, content);
  const container = document.querySelector(".container");

  //creating li element

  const elemLi = document.createElement("li");
  // scrolling animation

  let s = elemLi.addEventListener("click", function () {
    var section = document.getElementById(paramId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  });

  ///

  elemLi.innerText = headingText;
  elemLi.classList.add("btn-slide");
  elemLi.id = `${paramId}-li`;
  const liContainer = document.querySelector(".side-bar ul");

  const beforeElement = document.getElementById(beforeElementId);
  const beforeLiElement = document.getElementById(`${beforeElementId}-li`);
  if (beforeElement) {
    container.insertBefore(elem, beforeElement);
    console.log(beforeElement);
    console.log(beforeLiElement, "this is ");
    console.log(liContainer.insertBefore(elemLi, beforeLiElement));
  } else {
    container.appendChild(elem);
    liContainer.appendChild(elemLi);
  }

  //other special attributes

  if (borderRadius) {
    elem.style.borderRadius = borderRadius;
    elem.style.borderColor = borderColor;
  }
  if (shadowColor) {
    elem.addEventListener("mouseover", function () {
      elem.style.boxShadow =
        "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)";
    });

    elem.addEventListener("mouseout", function () {
      elem.style.boxShadow = "none";
    });
  }
}

function makeSections(arr) {
  for (let obj of arr) {
    make(
      obj.id,
      obj.content,
      obj.headingText,
      obj.heading,
      obj.before,
      obj.brdrRd,
      obj.brdrClr,
      obj.shadowColor
    );
  }
}

// make(
//   "test",
//   "content<br>how<br>nice<p style='width=50%; color:red; font-weight:bolder;'>hi my name is parth but it is coollorem loremhi my name is parth but it is coollorem loremhi my name is parth but it is coollorem loremhi my name is parth but it is coollorem loremhi my name is parth but it is coollorem loremhi my name is parth but it is coollorem loremhi my name is parth but it is coollorem loremhi my name is parth but it is coollorem loremhi my name is parth but it is coollorem loremhi my name is parth but it is coollorem lorem</p><br><img src ='mechanical-lab.jpg' style='width:100%; height:20rem; objec-position:center; object-fit:cover; border-radius:2rem;'></img><pre>hello this        this is <span style = 'color:green; font-size:1.25rem; font-weight:bolder;  '>nice   </pre>",
//   "THIS IS DONE FOR TESTING"
// );

//function to create a image in background

function createImage(src, scale, top, right, bottom, left) {
  const img = document.createElement("img");

  img.classList.add("bg");
  img.src = src;

  img.style.top = top;
  img.style.right = right;
  img.style.bottom = bottom;
  img.style.left = left;
  img.style.transform = `scale(${scale})`;
  document.querySelector("body").appendChild(img);
}

function jou() {
  window.addEventListener("beforeunload", function () {
    window.scrollTo(0, 0);
  });
  document.querySelector("body").style.overflowY = "scroll";
}

function happen(time, param) {
  if (param) {
    return;
  }
  setTimeout(jou, time);
}
function profileCards(profileId, faculty) {
  const node = document.getElementById(profileId);
  for (let i = 0; i < node.childElementCount; i++) {
    var key = faculty[i];

    if (key.src) {
      node.children[i].children[0].src = key.src;
    }

    node.children[i].children[1].innerHTML =
      `<span class="b">${key.name}</span>` +
      "<br>" +
      `<span style = 'font-size:0.8rem; opacity:0.6;'>${key.position}</span>`;
  }
}

function scrollBarMobile() {
  let elem = document.querySelector(".div-1");
  let elem2 = document.querySelector(".div-2");

  elem.addEventListener("click", () => {
    console.log("button is click", elem2, elem);

    if (!elem2 || elem2.style.display === "none") {
      elem2.style.display = "block";
      console.log(elem2.style.display);
      // elem2.style.animation = "side-mob 0.15s";

      return;
    }

    return (elem2.style.display = "none");
  });
}
try {
  scrollBarMobile();
} catch (er) {
  console.log(er);
}

export default makeSections;
export { happen, createImage, profileCards };
