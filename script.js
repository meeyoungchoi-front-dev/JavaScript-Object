// 일급함수 
// 함수를 호출하는데 그 안에 인자로 함수가 들어가는 경우
var logText = () => {
	console.log('hi');
}

let logtText = () => 'hi';

let logNumber = (num) => {
	return num;
}

logNumer = num => {
	return num;
}

logNumer = num => num

logNumber(100);

// 향상된 객체 리터럴
let a = 10;
let obj = {
    a: a
};

obj = {
    a
};

// 일급함수는 객체에 변수처럼 들어갈 수 있다
// 객체 key의 속성함수를 실행한다
let josh = {
    coding: function() {
        console.log('코딩');
    }
}

let capt = {
    coding() {
        console.log('코딩');
    }
}