function sendGreeting(message, userName) {
    console.log("".concat(message, ", ").concat(userName));
}
sendGreeting('Hello', 'Mark');
//선택적 매개변수 사용
sendGreeting('Hello'); //  타입스크립트는 매개변수 갯수를 맞춰야 하므로 선택적 매개변수를 사용
// function 함수이름 (param1:string, param2?:string, param3?:string, param4?:string ) 
// 선택적 매개변수는 항상 끝에 위치해야하며 한번 사용하면 그 뒤는 전부 선택적 매개변수를 사용해야 한다.
// Default parameter
function sendGreeting2(message, userName) {
    if (userName === void 0) { userName = "there"; }
    console.log("".concat(message, ", ").concat(userName));
}
sendGreeting2('Hello'); // 파라미터가 전달되지 않을때 기본값으로 there가 출력
sendGreeting2('Hello', 'Jenny'); // there가 아닌 Jenny가 출력
// 에로우함수
var sendGreeting3 = function (message, userName) {
    if (userName === void 0) { userName = "there"; }
    console.log("".concat(message, ", ").concat(userName));
};
var sendGreeting4 = function (message, userName) {
    if (userName === void 0) { userName = "there"; }
    return console.log("".concat(message, ", ").concat(userName));
}; // {}생략
