// 함수 선언

function greeting() {
  console.log("안녕하세요");
}
greeting();

// 반환값을 변수에 담아서 활용 가능
let area1 = getArea(10, 20); // 10, 20을 인수라고 함
let area2 = getArea(30, 20);

// 호이스팅 -> 끌어올리다라는 뜻
// 내부적으로 알아서 끌어올려서 실행
// 바닥에 있는 선언문을 호출문보다 아래에 두어도 내부적으로 알아서 끌어올려서 실행해줌
function getArea(width, height) {
  function another() {
    // 중첩함수 (함수 안에 또다른 함수 넣을 수 있음)
    console.log("another");
  }

  // width, height을 매개변수라고 함
  let area = width * height;
  another();
  console.log(area);
  return area; // area를 반환값이라고 함
  console.log(area); // return문 이후는 실행되지 않음
}
