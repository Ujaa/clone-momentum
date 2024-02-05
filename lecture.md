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
