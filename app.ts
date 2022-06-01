// npm install -g typescript <- 타입스크립트 컴파일러
// tsc app.ts <- 컴파일 (tsc ts파일명)
// tsc --init <- tscconfig.json생성
// tsc -w app.ts <- 실시간 컴파일
// string, number, bollenan, object, void

let test = "홍길동";
// test = 55; // 오류 string타입의 변수에 number타입의 값이 들어갔으므로 오류가 남

function calc(lost){
    return lost + "홍길동"; // 마우스를 function위에 올려보면 lost파라미터에 자동으로 string타입이 정의되어있음
}

function getStudent(studentId:number)
:void { // 아무런 값을 return하지 않을때에는 void
    console.log('테스트')
}

function getStudent2(studentId2:number)
:object{ //object 이므로 반드시 객체타입이 return 되어야 함
    return  {test1:"테스트"}
}


// 인터페이스 미사용
function getStudent3(studentId:number):{ // 코드가 복잡해지므로 아래처럼 interface를 사용한다.
    studentId : number; 
    studentName : string;
    age: number;
    gender: string;
    subject : string;
    courseCompleted: boolean;
}{
    return null;
}



// enum , 연관된 아이템들을 함께 묶어서 표현할수 있는 수단
enum GenderType{ //enum은 존재되는 실제 객체 이므로 컴파일 되도 존재 한다. 
    Male = "mail",
    Female = "female",
    genderNeutral = "genderNeutral"
}

// 인터페이스 사용 
interface Student{ //컴파일 되면 js파일에서 지워버림
    readonly studentId : number; 
    studentName : string;
    age?: number;
    gender: GenderType; // enum사용
    subject? : '과학' | "수학" | "영어"; // 리터럴타입
    courseCompleted: boolean;
    //addComment ( comment : string) : string; // 메소드
     addComment: (comment : string) => string; // 위에꺼와 둘다 같다.
}

function getStudent4(studentId:number):Student 
{
    return { // 반드시 interface에 사용된 반환값 전체를 모두 사용해야 하지만 ?표를 붙이면 그것은 사용하지 않아도 된다. 
        studentId : 12345,
        studentName : "Mark Jacobs",
        gender: GenderType.Male, // enum사용
        subject : "수학",
        courseCompleted: true,
        addComment: function (test){return test + "테스트"}
    } 
}

// 인터페이스 재사용

function saveStu(stu : Student):void
{ 

}

let StuO = { 
    studentId : 12345,
    studentName : "Mark Jacobs",
    gender: GenderType.Female, // enum사용
    // 객체를 변수로 지정하여 파라미터로 넣을시 리터럴값이 에러가 남
    courseCompleted: true,
    addComment: function (test){return test + "테스트"}
} 
saveStu(StuO)

// readonly 
function saveStu2(student:Student): void{
    // student.studentId = 111222;  // interface에서의 studentId가 readonly이므로 읽기전용 이므로 값을 할당할수 없다.
}


