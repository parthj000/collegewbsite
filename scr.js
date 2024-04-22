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
      elem.style.boxShadow = "0.7rem 0.7rem 0 " + shadowColor;
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

function createImage(src, top, right, bottom, left) {
  const img = document.createElement("img");

  img.classList.add("bg");
  img.src = src;

  img.style.top = top;
  img.style.right = right;
  img.style.bottom = bottom;
  img.style.left = left;
  document.querySelector("body").appendChild(img);
}

function jou() {
  window.addEventListener("beforeunload", function () {
    window.scrollTo(0, 0);
  });
  document.querySelector("body").style.overflowY = "scroll";
}

function happen(time) {
  setTimeout(jou, time);
}

export default makeSections;
export { happen, createImage };
