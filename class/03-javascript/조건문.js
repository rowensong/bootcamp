const profile = {
    name : '철수',
    age : 17,
    school: '다람쥐초등학교'
}
// 에러핸들링도 중요함
if (profile.age >= 20) {
    console.log('성인입니다');
} else if (profile.age >= 8 && profile.age <= 19 ) {
    console.log('학생입니다')
} else if (profile.age <= 7) {
    console.log('어린이입니다')
} else {
    console.log('잘못된 값인것 같습니다 다시 확인부탁드립니다.');
}

