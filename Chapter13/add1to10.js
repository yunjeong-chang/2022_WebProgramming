let sum = 0;
for(let i=1; i<=10; i++){
    sum += i;
}
//합을 메세지로 전송
postMessage(sum);