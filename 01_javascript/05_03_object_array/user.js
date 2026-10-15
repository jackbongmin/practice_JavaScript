/**
 * [05_03_js_object_array - 2단계] 객체로 사용자 정보 표현하기
 *
 * 실행 방법:
 * node 01_javascript/05_03_object_array/user.js
 */

console.log('=== 2단계: 객체 다루기 & 메서드 ===');

// TODO: user 객체 생성 (name, age, email, address 등)

const user = {
    name: "백종민",
    age: 30,
    email: 'baekjongmin@example.com',
    address: '서울시 성북구',
    // 메서드 정의
    printInfo() {
        console.log(`[회원정보] ${this.name}(${this.age}세), 이메일: ${this.email}, 주소: ${this.address}`);
    },
};
// TODO: 점 표기법(user.name)과 대괄호 표기법(user["email"]) 접근

console.log('[점 표기법] 이름:', user.name);
console.log('[대괄호 표기법] 이메일:', user["email"]);

// TODO: 프로퍼티 추가, 수정, 삭제(delete), in 연산자 확인

user.job = '백앤드 개발자';
user.age = 31;
console.log('[추가/수정 후] 직업:', user.job, ', 나이:', user.age);

// TODO: 객체 메서드 정의 및 호출 (예: printInfo())

// in 연산자로 프로퍼티 존재 확인
console.log('"email" in user:', 'email' in user);       // true
console.log('"phoneNumber" in user:', 'phoneNumber' in user); // false

// 프로퍼티 삭제
delete user.address;
console.log('address 삭제 후 user:', user);

// 메서드 호출
user.printInfo();

