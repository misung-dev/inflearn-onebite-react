// 1. Date 객체를 생성하는 방법
let date1 = new Date(); // 생성자 (지금 시간)
// 특정날짜를 생성하고 싶다면
let date2 = new Date("1997-01-07"); // 점, 대쉬, 슬래쉬로 작성해도 동일한 출력 나옴

// 2. 타임 스탬프
// 특정 시간이 "1970.01.01 00시 00분 00초"로 부터 몇 ms가 지났는지를 의미하는 숫자값
let ts1 = date1.getTime();
let date4 = new Date(ts1);
// console.log(date1, date4); // 결과: Sun Jan 05 2025 16:15:12 GMT+0900 (한국 표준시) Sun Jan 05 2025 16:15:12 GMT+0900 (한국 표준시)

// 3. 시간 요소들을 추출하는 방법
let year = date1.getFullYear();
let month = date1.getMonth() + 1; // 1월부터 시작할 수 있도록
let date = date1.getDate();

let hour = date1.getHours();
let minute = date1.getMinutes();
let seconds = date1.getSeconds();
// console.log(year, month, date, hour, minute, seconds); // 결과: 2025 1 5 16 23 17

// 4. 시간 수정하기
date1.setFullYear(2023);
date1.setMonth(2);
date1.setDate(30);
date1.setHours(23);
date1.setMinutes(59);
date1.setSeconds(59);
// console.log(date1); // 결과: Thu Mar 30 2023 23:59:59 GMT+0900 (한국 표준시)

// 5. 시간을 여러 포맷으로 출력하기
console.log(date1.toDateString()); // Thu Mar 30 2023
console.log(date1.toLocaleDateString()); // 2023. 3. 30.
