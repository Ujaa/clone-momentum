## **2.0 Your First JS Project**

브라우저는 HTML을 열고, HTML은 javascript와 css를 가져온다.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="style.css" />
    <title>Momentum</title>
  </head>
  <body>
    <script src="app.js"></script>
  </body>
</html>
```

```css
body {
  background-color: beige;
}
```

```jsx
alert("hi");
```

## **2.1 Basic Data Types**

javascript는 타입을 자동으로 추론한다.

```jsx
// [Data Types]

// 1. number
// 1-1. integer
2 + 2;
// 1-2. float
1.5 + 2.3;

// 2. String(Text)
("hello");
"hello" + " I'm yujin"; // "Hello I'm yujin"
```

## **2.2 Variables**

```jsx
// javascript read file from top to bottom

console.log(54); // printing the value in the console
console.log(5 + 2);
console.log(5 * 2);
console.log(5 / 2);

// if I dont want to replace all the value, then we can use variable

// How to create variable
// [syntax] [name] = [value];
const a = 5;

// javascript에서는 변수명을 카멜케이스로 작성한다.
// 변수명에는 공백이 들어갈 수 없다.
```

## **2.3 const and let**

```jsx
// how to make variable

// const: constant는 바뀔 수 없다.
const a = 10;

// let : 변수를 업데이트할 수 있다.
let b = 2;
b = 4;

// const가 기본이다!

// 예전에는 var를 사용했다. (legacy)
// var는 어디에서 변수를 업데이트해도 상관없었다.
```

## **2.4 Booleans**

```jsx
// boolean

const amIFat = false;
console.log(amIFat);

const amIThin = null; // null은 없다라는 뜻이다.
let amISomething = undefined; // undefiend는 variable는 존재하지만 값이 비어있다는 뜻이다.
```

## **2.5 Arrays**

```jsx
// array: 데이터를 정리하고, 검색이나 삽입을 빠르게 할 수 있다.

const mon = "mon";
const tue = "tue";
const wed = "wed";
const thu = "thu";
const fri = "fri";
const sat = "sat";

const daysOfWeek = [mon, tue, wed, thu, fri, sat];
const nonsense = [1, 2, "hello", true, undefined, null];

// Get Item from Array
daysOfWeek[0];

// Add one more day to the array
daysOfWeek.push("sun");
```

## **2.6 Objects**

```jsx
// 게임을 만들고 있다고 상상해보기
const playerName = "yujin";
const playerPoints = 1212;
const playerHandsome = true;
const playerFat = "little bit";

const player = {
  name: "yujin",
  points: 1212,
};

//access
player.name;

// change value
player.points = 123;

// add value
player.lastName = "lee";

// const로 object를 선언했어도 object 안의 값을 바꾸는 것은 괜찮다.
```

## 2.7 **Functions part One**

```jsx
// FUNCTION: 코드를 캡슐화해서 실행을 여러 번 할 수 있다.

function sayHello() {
  console.log("hello! my name is yujin");
}

sayHello();
```

## **2.8 Functions part Two**

```jsx
function sayHello(nameOfPerson, age) {
  // 인수는 함수 안에서만 살아있다.
  console.log(
    "hello! my name is" + nameOfPerson + " and I'm " + age + " years old."
  );
}

sayHello("yujin", 12);

const player = {
  name: "nco",
  sayHello: function (otherPersonsName) {
    console.log(otherPersonsName);
  },
};

player.sayHello();
```

## **2.9 Recap**

```jsx
// 데이터의 종류 = 자바스크립트가 이해할 수 있는 데이터의 종류

// String
"hello";
// number
5;
// boolean
true;
false;
// null(비어있음을 의미)
null;
// undefined(변수가 존재하지만 아무 것도 넣지 않은 상태)
undefined;
// variable(const, let)
const a = 5;
let isFact = true;
isFact = false;
// array
const nums = [1, 2, 3];
const everyhings = ["tomato", "pizza", 1, null];
everyhings[0]; // 'tomato
everyhings[0] = "potato";
everyhings.push("meat");
```

## **2.10 Recap II**

```jsx
// 의미있는 프로퍼티 저장하기
const player = {
  name: "yujin",
  age: 23,
};

player.name;

console.log(player, console); // console도 object다

function plus(number1, number2) {
  console.log(number1 + number2);
}

// 원하는 코드를 캡슐화한 다음에 재사용 가능

plus(2, 4);
```

## **2.11 Returns**

```jsx
const calculator = {
  plus: function (a, b) {
    return a + b;
  },
  minus: function (a, b) {
    return a - b;
  },
  times: function (a, b) {
    return a * b;
  },
  divide: function (a, b) {
    return a / b;
  },
  power: function (a, b) {
    return a ** b;
  },
};
```

## **2.12 Recap**

```jsx
const calculator = {
  plus: function (a, b) {
    return a + b;
  },
  minus: function (a, b) {
    return a - b;
  },
  times: function (a, b) {
    return a * b;
  },
  divide: function (a, b) {
    return a / b;
  },
  power: function (a, b) {
    return a ** b;
  },
};

const plusResult = calculator.plus(2 + 3);

console.log(plusResult);
```

## **2.13 Conditionals**

```jsx
// 조건문

const age = prompt("How old are you?");

console.log(typeof age); // 타입 확인
console.log(typeof parseInt(age));

age = parseInt(age);
```

## **2.14 Conditionals part Two**

```jsx
// 조건문

const age = prompt("How old are you?");

console.log(typeof age); // 타입 확인
console.log(typeof parseInt(age));

age = parseInt(age);

if (isNaN(age)) {
  console.log("숫자로 적어주세요.");
} else {
  console.log(`${age}를 적어주셨습니다.`);
}
```

## **2.15 Conditionals part Three**

```jsx
// 조건문

const age = prompt("How old are you?");

console.log(typeof age); // 타입 확인
console.log(typeof parseInt(age));

age = parseInt(age);

if (isNaN(age)) {
  console.log("숫자로 적어주세요.");
} else if (age < 18) {
  console.log(`${age}세는 너무 어려요.`);
} else if (age > 18 && age < 80) {
  console.log(`${age}세는 운동을 하는 게 ...`);
} else {
  console.log(`${age}는 술을 마실 수 있어요.`);
}
```

## **2.16 Recap**

```jsx
// 조건문

const age = prompt("How old are you?");

console.log(typeof age); // 타입 확인
console.log(typeof parseInt(age));

age = parseInt(age);

if (isNaN(age) || age > 0) {
  console.log("나이를 올바르게 입력해 주세요");
} else if (age < 18) {
  console.log(`${age}세는 너무 어려요.`);
} else if (age > 18 && age < 80) {
  console.log(`${age}세는 운동을 하는 게 ...`);
} else if (age === 100) {
  console.log(`${age}세라니!`);
} else {
  console.log(`${age}는 술을 마실 수 있어요.`);
}
```

## **The Document Object**

```jsx
// document는 HTML 정보를 객체에 담아 javascript에서 사용할 수 있도록 돕는다.
console.log(document.title);
```

## **HTML in Javascript**

```jsx
const title = document.getElementById("title");
console.dir(title); //element를 자세히 살펴볼 수 있음

title.innerText = "GRAB ME!";
```

## **Searching For Elements**

```jsx
const title = document.getElementsByClassName("title");
console.log(title);

const h1 = document.getElementsByTagName("h1");
console.log(h1);

// element를 CSS처럼 검색할 수 있음(CSS selector를 파라미터로 전달)
const h1InDiv = document.querySelector(".hello h1"); // 1개만 return
console.log(h1InDiv);

const h1ListInDiv = document.querySelectorAll(".hello h1"); // 모두 찾아서 return
console.log(h1ListInDiv);
```

## **Events**

```jsx
const title = document.querySelector(".hello h1");

function handleTitleClick() {
  console.log("title was clicked!");
  title.style.color = "blue";
}

console.dir(title);

// click 이벤트를 리슨하겠다고 알려주고, click가 발생하면 함수가 실행됨
title.addEventListener("click", handleTitleClick);
```

## **Events part Two**

```jsx
const title = document.querySelector(".hello h1");

function handleTitleClick() {
  console.log("title was clicked!");
  title.style.color = "blue";
}

function handleMouseEnter() {
  console.log("Mouse was Entered!");
  title.style.color = "red";
}

function handleMouseLeave() {
  console.log("Mouse was Leaved!");
  title.style.color = "black";
}

console.dir(title);

title.addEventListener("click", handleTitleClick);
title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);
```

## **More Events**

```jsx
const title = document.querySelector(".hello h1");

function handleTitleClick() {
  console.log("title was clicked!");
  title.style.color = "blue";
}

function handleMouseEnter() {
  console.log("Mouse was Entered!");
  title.style.color = "red";
}

function handleMouseLeave() {
  console.log("Mouse was Leaved!");
  title.style.color = "black";
}

function handleWindowResize() {
  console.log("Window is Resized");
  document.body.style.background = "tomato";
}

function handleCopy() {
  alert("Copier");
}

console.dir(title);

title.onclick = handleTitleClick;
title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleCopy);
```

## **CSS in Javascript**

```jsx
const title = document.querySelector("h1");

function handleMouseClick() {
  const currentColor = h1.style.color;
  let newColor;

  if (currentColor === "red") {
    newColor = "yellow";
  } else {
    newColor = "red";
  }

  h1.style.color = newColor;
}

title.addEventListener("click", handleMouseClick);
```

## **CSS in Javascript part Two**

```jsx
const title = document.querySelector("h1");

function handleMouseClick() {
  const clickedClass = "active";
  if (title.className === clickedClass) {
    title.className = "";
  } else {
    title.className = clickedClass;
  }
}

title.addEventListener("click", handleMouseClick);
```

## **CSS in Javascript part Three**

```jsx
const title = document.querySelector("h1");

function handleMouseClick() {
  const clickedClass = "active";
  if (title.classList.contains(clickedClass)) {
    title.classList.remove(clickedClass);
  } else {
    title.classList.add(clickedClass);
  }
}

title.addEventListener("click", handleMouseClick);
```

```jsx
const title = document.querySelector("h1");

function handleMouseClick() {
  const clickedClass = "active";
  title.classList.toggle(clickedClass);
}

title.addEventListener("click", handleMouseClick);
```
