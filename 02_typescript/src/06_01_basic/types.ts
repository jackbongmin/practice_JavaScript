/**
 * [06_01_ts_basic - 3~4단계] 기본 타입과 리터럴 타입 & strict 모드
 *
 * 실행 방법:
 * npx tsx 02_typescript/src/06_01_basic/types.ts
 */

console.log('=== 06_01: 기본 타입 & 리터럴 타입 & 타입 추론 ===');

// TODO: 3단계 - 원시 타입(number, string, boolean, null, undefined) 변수 선언
// TODO: 3단계 - 숫자 리터럴 타입(let num: 10 = 10), 문자열 리터럴 타입 작성
// TODO: 3단계 - API 응답 상태 리터럴 유니온 (type Status = "success" | "error") 정의
// TODO: 4단계 - 타입 주석 없이 변수 선언하여 타입 추론(Inference) 동작 확인
// TODO: 4단계 - null/undefined 할당 시 strictNullChecks 동작 확인

let num: number = 100;
let str: string = "TypeScript";
let bool: boolean = true;
let nullVal: null = null;
let undefinedVal: undefined = undefined;

let exactTen: 10 = 10; // 숫자 리터럴 타입
let greetingLiteral: "Hello" = "Hello"; // 문자열 리터럴 타입

type ApiStatus = "success" | "error" | 'loading';

let currentStatus: ApiStatus = 'loading';

currentStatus = 'success'; // OK
// currentStatus = "failed"; // ❌ 오타 방지! Type '"failed"' is not assignable to type 'ApiStatus'.
console.log('현재 API 상태:', currentStatus);

// 4. 타입 추론(Type Inference)
let inferredNum = 50; // number로 자동 추론됨
// inferredNum = "fifty"; // ❌ 컴파일러가 number로 추론했으므로 에러

// 5. null 안전성 (strictNullChecks)
// string | null 유니온으로 명시해야만 null을 안전하게 수용 가능
let nullableString: string | null = null;
nullableString = '안전한 문자열';
console.log('nullableString:', nullableString);