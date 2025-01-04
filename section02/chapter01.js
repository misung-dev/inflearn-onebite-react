// 1. Falsy한 값
let f1 = undefined;
let f2 = null;
let f3 = 0;
let f4 = -0;
let f5 = NaN;
let f6 = "";
let f7 = 0n;

if (!f4) {
  console.log("falsy"); // 참이므로 console에 출력 잘 됨
}

// 2. Truthy한 값
// -> 7가지 Falsy한 값들 제외한 나머지 모든 값
let t1 = "hello";
let t2 = 123;
let t3 = [];
let t4 = {};
let t5 = () => {};

if (t1) {
  console.log("truthy");
}

// 3. 활용 사례
function printName(person) {
  // 매개변수로 객체를 받음
  if (person === undefined) {
    // 값이 undefined가 아니라는 것을 확인
    console.log("person의 값이 없음");
    return;
  }
  console.log(person.name); // "이정환"
}

let person = { name: "이정환" };
printName(person);
