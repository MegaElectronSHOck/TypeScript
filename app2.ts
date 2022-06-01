let someValue: any = '테스트' // any는 어떤 타입이든 다 할당 될수 있다. 타입체크 안하는것과 같음;

//유니언 타입
let price : number | string = 5;
price = 'free';


// Type Aliases

type StrOrNum = number | string;
let orderId : StrOrNum;
orderId ="free";

// 타입가드

type StringOrNum = string | number;
let itemPrice: number;


//type of operator

// 오류
const setItemPrice1 = (price : StringOrNum):void => {
     // itemPrice = price; // itemPrice가 number이므로 price가 string일경우때문에 string은 number에 할당할수없다는 오류가난다. 
    
}

setItemPrice1(50);
//해결법
const setItemPrice2 = (price : StringOrNum):void => {
    if(typeof price === 'string'){ // string일경우에는 price를 넣지 않는다.
        itemPrice = 0;
    }else{
    itemPrice = price; // 오류 사라짐
    }
}

setItemPrice2(50);