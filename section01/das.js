//1다스 = 12자루 
// 인당 1자루 N명이 학생 수를 입력하면 필요한 연필 다스 수 는?
// 첫번째 줄에 100 이하의 자연수 n 입
function sol(N){
    let answer ;
    answer= parseInt( N / 12);
    if(N%12 !=0) answer ++;
    return answer;

}

console.log(sol(178));
//math.ceil : 올림 
//math.floor: 내림
//math.round: 반올림

function sol1(n){
    let answer = Math.ceil(n/12);
    
    return answer;

}
console.log(sol1(25));

