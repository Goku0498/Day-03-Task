//Question:2(a) - Print odd numbers in an array Using Arrow Functions
let odd_num = (arr_odd) => {
    let temp_odd = [];
    for (let i = 0; i < arr_odd.length; i++) {
        if (arr_odd[i] % 2 != 0) {
            temp_odd.push(arr_odd[i]);
        }
    }
    return temp_odd;
};

let res_odd = odd_num([12, 13, 14, 15, 16, 17, 18, 19]);
console.log(
`Output for Print odd numbers in an array using Arrow Function\n`
);
console.log(res_odd);

/*------------------------------------------------------------------------------------------------------*/

//Question:2(b) - Convert all the strings to title caps in a string array Using Arrow Function

let title_caps = (txt) => {
    let caps_step1 = txt.split(" ");
    let caps_step2 = caps_step1.map(function (word) {
      return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
    });
    let caps_step3 = caps_step2.join(" ");
    return caps_step3;
  };
  
  const msg = title_caps("example of title caps");
  console.log(
    `\nOutput for Convert all the strings to title caps in a string array using Arrow Function\n`
  );
  console.log(msg);

/*------------------------------------------------------------------------------------------------------*/

//Question:2(c) - Sum of all numbers in an array Using Arrow Function

let sum_num = (arr_sum) => {
    let count = 0;
    for (let i = 0; i < arr_sum.length; i++) {
      count += arr_sum[i];
    }
    return count;
  };
  
  let res_sum = sum_num([1, 2, 3, 4, 5]);
  console.log(
    `\nOutput of Sum of all numbers in an array using Arrow Function\n`
  );
  console.log(res_sum);

/*------------------------------------------------------------------------------------------------------*/

//Question:2(d) - Return all the prime numbers in an array Using Arrow Function

  let prime_num = (arr_prime) => {
    let temp_prime = [];
    for (let i = 0; i < arr_prime.length; i++) {
      let num = arr_prime[i];
      if (isPrime(num)) {
        temp_prime.push(num);
      }
    }
    return temp_prime;
  };
  let isPrime = (num) => {
    if (num <= 1) {
      return false;
    }
    if (num <= 3) {
      return true;
    }
    for (let i = 2; i * i <= num; i++) {
      if (num % i == 0) {
        return false;
      }
    }
    return true;
  };
  
  let start_num = 1;
  let end_num = 10;
  let arr_num = [];
  for (i = start_num; i <= end_num; i++) {
    arr_num.push(i);
  }
  let res_prime = prime_num(arr_num);
  console.log(
    `\nOutput of Return all the prime numbers in an array using Arrow Function\n`
  );
  console.log(res_prime);

/*------------------------------------------------------------------------------------------------------*/

//Question:2(e) - Return all the palindromes in an array Using Arrow Function

let isPalin = (str) => {
    str = str.toLowerCase();
    for (let i = 0; i < str.length; i++) {
      if (str[i] === str[str.length - 1 - i]) {
        return true;
      }
    }
    return false;
  }
  let getPalin = (arr) => {
    let palindromes = [];
    for (let i = 0; i < arr.length; i++) {
      if (isPalin(arr[i])) {
        palindromes.push(arr[i]);
      }
    }
    return palindromes;
  }
  const words = ["Zero", "Malayalam", "level", "madam", "noon", "full"];
  const palindromes = getPalin(words);
  console.log(
    `\nOutput of Return all the palindromes in an array using Arrow Function\n`
  );
  console.log(palindromes);