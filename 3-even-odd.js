function evenOddChk (num){
    if(num % 2 == 0){
        return true;
    }else{
        return false;
    }
}
const numInput = 98;
const numCheck = evenOddChk(numInput);
console.log(numCheck);