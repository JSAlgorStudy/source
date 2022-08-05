function sol(a,b,c){
    //a+b>c 1. max 값 찾기
    //2. yes, no로 출력 
    let answer="Yes", max;
    let sum = a+b+c;
    if(a>b) max= a;
    else max = b;
    if(c>max) max= c;
    if(max<(sum-max)) answer = "Yes";
    else answer = "No";
    return answer;

}
console.log(sol(13,33,17));
