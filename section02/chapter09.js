// 5가지 배열 변형 메서드
// 1. filter
// 기존 배열에서 조건문 만족하는 요소들만 필터링하여 새로운 배열로 반환

let arr1 = [
  { name: "이정환", hobby: "테니스" },
  { name: "김효빈", hobby: "테니스" },
  { name: "홍길동", hobby: "독서" },
];

const tennisPeople = arr1.filter((item) => item.hobby === "테니스");

// console.log(tennisPeople);

// 2. map
// 배열의 모든 요소를 순회하면서, 각각 콜백함수를 실행하고  그 결과값을 모아서 새로운 배열로 반환
let arr2 = [1, 2, 3];
const mapResult1 = arr2.map((item, idx, arr) => {
  return item * 2;
});

console.log(mapResult1); // 결과: [2, 4, 6]

let names = arr1.map((item) => item.name);
console.log(names); //  ['이정환', '김효빈', '홍길동']

// 3. sort
// 배열을 사전순으로 정렬하는 메서드
let arr3 = ["c", "d", "b"];
arr3.sort();
console.log(arr3); // ['b', 'c', 'd']

// 4. Sorted
// 정렬된 새로운 배열을 반환하는 메서드 (원본 배열을 변경X / 신기능)

// 5. join
// 배열의 모든 요소를 하나의 문자열로 합쳐서 반환하는 메서드
