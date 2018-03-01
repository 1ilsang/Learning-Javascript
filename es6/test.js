'use strict';
//es6 기능 : 블록 스코프 변수 선언
const sentences = [
    { subject: 'JavaScript', verb: 'is', object: 'great' },
    { subject: '1ilsang.', verb: 'blog.', object: 'me' }
];
//ES6 기능 : 객체 분해
function say({ subject, verb, object }) {
    //es6 : 템플릿 문자열
    //아래 사용한 것은 따옴표가 아니라 백틱(`)
    console.log(`${subject} ${verb} ${object}`);
}
//es6 : for..of
for (let s of sentences) {
    say(s);
}