console.log(1);

// 비동기 작업들은 JS 엔진이 아닌 Web APIs에서 실행 됨
// 콜백함수
setTimeout(() => {
  console.log(2);
}, 3000); // 3초를 세는 타이머만 동작시킴 (비동기)

console.log(3);
