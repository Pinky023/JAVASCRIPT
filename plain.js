// function countdown(num){
//     console.log(num);
//     var newNum=num-1;
//     if(newNum>0)
//     {
//     countdown(newNum);
//     }
// }

// countdown(10);

// function input(num){
//     let bin=0;
//     let rem, i=1, step=1;
//     while(num !=0){
//         rem=num%2;
// console.log(

// )
//     }
// }

let hcf;
const num1=prompt('enter first number');
const num2=prompt('enter second number');
for(let i=1; i<=num1 && i<= num2;i++){
    if(num1 % i==0 && num2 % i==0){
        hcf=i;
    }
}
console.log(hcf);
hcf(20,30);