/**
 * [05_03_js_object_array - 1단계] 전역/지역 스코프 체험하기
 *
 * 실행 방법:
 * node 01_javascript/05_03_object_array/scope.js
 */

console.log('=== 1단계: 전역 스코프 vs 지역 스코프 ===');

// TODO: 전역 변수 선언

const globalVar = '전역 변수';


// TODO: 함수 내부 지역 변수 선언 및 외부/내부 접근 테스트

function testScop() {
    const locatVar = '지역 변수';
    const shadowVar = '지역 변수(전역 변수와 이름 동일)';

    console.log('함수 내부에서 접근:', globalVar); // 전역 변수 접근
    console.log('함수 내부에서 접근:', locatVar);
}

testScop();


// TODO: if/for 블록 스코프 변수(let/const) 접근 테스트

if(true) {

    const blockConst = '블록 안의 상수';
    var  blockVar = 'var로 선언한 변수(함수 스코프)';

}

console.log('[블록 외부] var 접근 가능 여부:' , blockVar);

try {
    console.log(blockConst);
} catch (error) {
    console.log('[블록 외부] const 접근 불가:', error.message);
}