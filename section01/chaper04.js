// 1. 변수
let age = 27; // let을 통한 선언은 한 번만 가능
console.log(age);

age = 30;
console.log(age);

// 2. 상수
const birth = "1997.01.07";
birth = "123";

// 3. 변수 명명규칙 (네이밍 규칙)
// 3-1. $, _ 제외한 기호는 사용할 수 없다.
// ex. name# (X)

// 3-2. 숫자로 시작할 수 없다.
// let name1 (O);
// let 2name1 (X);
// let $2name (O);

// 3-3. 예약어를 사용할 수 없다.
// let if (X)
// let let (X)

// 4. 변수 명명 가이드 (시멘틱하게 작성하기)
// let a = 1 (X);
// let b = 2 (X);
// let c = a - b (X);
