/**
 * [05_03_js_object_array - 3단계] 배열 + 객체로 장바구니 구조 만들기
 *
 * 실행 방법:
 * node 01_javascript/05_03_object_array/cart.js
 */

console.log('=== 3단계: 장바구니 배열 & 객체 조작 ===');

// TODO: cartItems 배열 선언 (3개 이상의 { name, price, quantity } 객체 포함)

const cartItems = [
  { name: '기계식 키보드', price: 120000, quantity: 1 },
  { name: '무선 마우스', price: 45000, quantity: 2 },
  { name: '모니터 암', price: 68000, quantity: 1 },
];

// TODO: 반복문(for or reduce)으로 전체 금액(price * quantity) 계산

// 2. 총 금액 집계 함수 (반복문 & reduce)
function calculateTotal(items) {
  return items.reduce((acc, item) => acc + item.price * item.quantity, 0);
}

console.log(`현재 총 결제 금액: ${calculateTotal(cartItems).toLocaleString()}원`);

// 3. 아이템 추가 (push)
cartItems.push({ name: '장패드', price: 15000, quantity: 2 });
console.log('아이템 추가 후 총액:', `${calculateTotal(cartItems).toLocaleString()}원`);

// 4. 특정 아이템 수량 수정 (find)
const mouseItem = cartItems.find(item => item.name === '무선 마우스');
if (mouseItem) {
  mouseItem.quantity = 3; // 수량 변경
  console.log('무선 마우스 수량 3개로 변경 완료');
}

// 5. 특정 아이템 삭제 (splice or filter)
const targetIndex = cartItems.findIndex(item => item.name === '모니터 암');
if (targetIndex !== -1) {
  cartItems.splice(targetIndex, 1); // 1개 삭제
  console.log('모니터 암 삭제 완료');
}

console.log('\n--- 최종 장바구니 내역 ---');
cartItems.forEach((item, idx) => {
  console.log(`${idx + 1}. ${item.name} | 단가: ${item.price.toLocaleString()}원 | 수량: ${item.quantity}개`);
});
console.log(`최종 결제 금액: ${calculateTotal(cartItems).toLocaleString()}원`);
