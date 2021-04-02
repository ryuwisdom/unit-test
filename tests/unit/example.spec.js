import process from "@/assets/decimal-standard";

// 요구사항 정의
// cost의 current_price 단위를 분류하는 메서드에 대한 테스트

// 케이스 1 - 소수점 6자리까지 출력 > 1미만 (0.034087)
// 케이스 2 - 소수점 3자리까지 출력 > 100미만  (35.314, 3.896)
// 케이스 3 - 소수점 1자리까지 출력 > 100이상

// test 항목
// 1. cost의 type은 배열
// 2. current_price type이 숫자
// 3. current_price의 값의 소수점을 제외한 숫자의 길이가 2 이하이면서 값이 0인 경우 소수점 여자리까지 출력
// 4. 소수점을 제외한 숫자의 길이가 2 이하인 경우 소수점 자리까지 출력
// 5. 소수점을 제외한 숫자의 길이가 2 이상인 경우 소수점 첫쨰 자리까지 출력
/*
0.03408772054151
24.07845258390245
13.92718804189361
158.9856767330143
4.11871883045218
300.1234
500000
0
-79899
-0.6744
na
wrong
 */

describe("decimal-standard", () => {
  it("cost는 배열을 반환", () => {
    const cost = process();
    expect(Array.isArray(cost)).toBe(true);
  });

  it("cost배열 내 객체의 current_price type은 숫자", ()=> {
    const cost = process();
    const  =
  });


});



