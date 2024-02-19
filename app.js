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
