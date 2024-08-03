//Print odd numbers in an array
//Using Anonymous Function
let odd_num=function(arr_odd){
    let temp_odd=[];
    for(let i=0;i<arr_odd.length;i++){
        if(arr_odd[i]%2!=0){
            temp_odd.push(arr_odd[i]);
        }
    }
    return temp_odd;
}

let res_odd=odd_num([12,13,14,15,16,17,18,19]);
console.log(res_odd);

//Convert all the strings to title caps in a string array
//Using Anonymous Function



//Sum of all numbers in an array
//Using Anonymous Function
let sum_num=function(arr_sum){
    let count=0;
    for(let i=0;i<arr_sum.length;i++){
        count+=arr_sum[i];
    }
    return count;
}

let res_sum=sum_num([1,2,3,4,5]);
console.log(res_sum);

//Return all the prime numbers in an array
//Using Anonymous Function
let prime_num=function(arr_prime){
    let temp_prime=[];
    for(let i=0;i<arr_prime.length;i++){
        for(let j=0;j<arr_prime.length;j++){
            if(arr_prime[i]%arr_prime[j]==0 && arr_prime[i]%1==0){
                temp_prime.push(arr_prime[i]);
            }
        }
    }
    return temp_prime;
}

let res_prime = prime_num([1,2,3,4,5,6,7,8,9,10]);
console.log(res_prime);