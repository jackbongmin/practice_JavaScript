/**
 * [06_01_ts_basic - 1~2단계] TypeScript 환경 구축 및 첫 실행
 *
 * 실행 방법:
 * npx tsx 02_typescript/src/06_01_basic/index.ts
 */

console.log('=== 06_01: 첫 번째 TypeScript 코드 ===');

// TODO: console.log("Hello TypeScript") 작성
// TODO: number, string, boolean 원시 타입 변수 선언 및 타입 주석 추가

console.log("Hello TypeScript");

let age: number = 30;
let username: string = "백종민";
let isStudent: boolean = false;

console.log(`이름: ${username}, 나이: ${age}, 학생 여부: ${isStudent}`);
