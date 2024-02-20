const title = document.querySelector(".hello h1");

function handleTitleClick() {
  console.log("title was clicked!");
  title.style.color = "blue";
}

console.dir(title);

// click 이벤트를 리슨하겠다고 알려주고, click가 발생하면 함수가 실행됨
title.addEventListener("click", handleTitleClick);
