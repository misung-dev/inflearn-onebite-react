// 1. Number Type
let num1 = 27;
let num2 = 1.5;
let num3 = -20;

// console.log(num1 + num2);
// console.log(num1 - num2);
// console.log(num1 * num2);
// console.log(num1 / num2);
// console.log(num1 % num2); // 모듈러 연산

let inf = Infinity;
let mInf = -Infinity;

let nan = NaN;

// console.log(1 * "hello"); // 결과: NaN

// 2. String Type
let myName = "이정환";
let myLocation = "목동";
let introduce = myName + myLocation;

let introduceText = `${myName}은 ${myLocation}에 거주합니다.`; // 템플릿 리터럴 문법
console.log(introduceText);

// 3. Boolean Types
let isSwitchOn = true;
let isEmpty = false;

// 4. Null Type (아무것도 없다!)
let empty = null;

// 5. Undefined Type
let none;
console.log(none);

// null과 undefined 의미는 같지만 차이 있음
// undefined?
// - 진짜 변수를 선언하고 아무런 값도 할당하지 않았을때 자동으로 들어가는 값
// - 미처 초기화 하지 못했거나 존재하지 않는 값을 불러오려고 할때
// null?
// - 명시적으로 변수에 할당해줘야하는 값
