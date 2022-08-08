//1 부터 N 까지 합 출력
// 첫 번째 줄에 20이하의 자연수 n 입력하고 n 까지 합 출력
function sol(N){
    let i, answer= 0;
    for(i=0; i<=N; i++){
        answer += i;
    }

    return answer;
}
console.log(sol(6));

