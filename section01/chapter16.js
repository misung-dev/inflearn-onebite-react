// 1. 상수 객체 (상수에 저장된 객체도 추가/삭제/수정 가능)
// 어떻게? 새로운 값을 할당하지 못하는 것이 상수임.
// 아예 새로운 값을 할당하는 것은 문제이지만, 저장되어있는 객체값의 프로퍼티를 수정하는건 문제되지X
const animal = {
  type: "고양이",
  name: "나비",
  color: "black",
};

animal.age = { a: 1 }; // 추가
animal.name = "까망이"; // 수정
delete animal.color; // 삭제

console.log(animal);

// 2. 메서드
// -> 값이 함수인 프로퍼티를 말함

const person = {
  name: "이정환",
  // 메서드
  sayHi: function () {
    // 익명함수
    console.log("안녕");
  },

  sayBye() {
    console.log("바이");
  },
};

person.sayBye();
