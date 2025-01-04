function funcA() {
  console.log("funcA");
}

let varA = funcA;
console.log(varA); // 함수 자체가 출력이 됨.
// JS에서는 함수도 문자나 숫자처럼 하나의 값처럼 취급하기때문에 변수에 담아둘 수 있음

let varB = function funcB() {
  // 선언식이 아님 (값으로서 변수가 생성됨)
  console.log("funcB");
};

varB();
// funcB(); // 호출 불가

// 따라서
// 1. 함수 표현식 (값으로서 함수를 생성하는 것)
// 호이스팅의 대상이 되지 않음
// 값으로서 취급이 됨
let varC = function () {
  // 익명 함수
  console.log("funcB");
};

// 2. 화살표 함수
let varD = (value) => {
  return value + 1;
};
console.log(varD(10)); // 결과: 11

let varE = () => 1; // 값을 반환하기만 한다면 중괄호와 return 문 생략 가능
