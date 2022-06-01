// npm install -g typescript <- 타입스크립트 컴파일러
// tsc app.ts <- 컴파일 (tsc ts파일명)
// tsc --init <- tscconfig.json생성
// tsc -w app.ts <- 실시간 컴파일
// string, number, bollenan, object, void
var test = "홍길동";
// test = 55; // 오류 string타입의 변수에 number타입의 값이 들어갔으므로 오류가 남
function calc(lost) {
    return lost + "홍길동"; // 마우스를 function위에 올려보면 lost파라미터에 자동으로 string타입이 정의되어있음
}
function getStudent(studentId) {
    console.log('테스트');
}
function getStudent2(studentId2) {
    return { test1: "테스트" };
}
// 인터페이스 미사용
function getStudent3(studentId) {
    return null;
}
// enum , 연관된 아이템들을 함께 묶어서 표현할수 있는 수단
var GenderType;
(function (GenderType) {
    GenderType["Male"] = "mail";
    GenderType["Female"] = "female";
    GenderType["genderNeutral"] = "genderNeutral";
})(GenderType || (GenderType = {}));
function getStudent4(studentId) {
    return {
        studentId: 12345,
        studentName: "Mark Jacobs",
        gender: GenderType.Male,
        subject: "수학",
        courseCompleted: true,
        addComment: function (test) { return test + "테스트"; }
    };
}
// 인터페이스 재사용
function saveStu(stu) {
}
var StuO = {
    studentId: 12345,
    studentName: "Mark Jacobs",
    gender: GenderType.Female,
    // 객체를 변수로 지정하여 파라미터로 넣을시 리터럴값이 에러가 남
    courseCompleted: true,
    addComment: function (test) { return test + "테스트"; }
};
saveStu(StuO);
// readonly 
function saveStu2(student) {
    // student.studentId = 111222;  // interface에서의 studentId가 readonly이므로 읽기전용 이므로 값을 할당할수 없다.
}
