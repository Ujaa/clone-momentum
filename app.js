const title = document.querySelector("h1");

function handleMouseClick() {
  const clickedClass = "active";
  title.classList.toggle(clickedClass);
}

title.addEventListener("click", handleMouseClick);
