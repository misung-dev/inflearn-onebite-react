// 스코프
// -> 전역 스코프 / 지역 스코프
// -> 전역스코프: 전체 영역에서 접근 가능
// -> 지역 스코프: 특정 영역에서만 접근이 가능

let a = 1; // 전역 스코프

function funcA() {
  let b = 2; // 지역 스코프 (함수 외부에서 접근 불가)
}

funcA();

if (true) {
  let c = 1;
}

for (let i = 0; i < 10; i++) {
  let d = 1;
}

console.log(d);
