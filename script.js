//Question:1(a) - Print odd numbers in an array
//Using Anonymous Function
let odd_num = function (arr_odd) {
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
  `Output for Print odd numbers in an array using Anonymous Function\n`
);
console.log(res_odd);

/*------------------------------------------------------------------------------------------------------*/

//Question:1(b) - Convert all the strings to title caps in a string array
//Using Anonymous Function
let title_caps = function (txt) {
  let caps_step1 = txt.split(" ");
  let caps_step2 = caps_step1.map(function (word) {
    return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
  });
  let caps_step3 = caps_step2.join(" ");
  return caps_step3;
};

const msg = title_caps("example of title caps");
console.log(
  `\nOutput for Convert all the strings to title caps in a string array using Anonymous Function\n`
);
console.log(msg);

/*------------------------------------------------------------------------------------------------------*/

//Question:1(c) - Sum of all numbers in an array
//Using Anonymous Function
let sum_num = function (arr_sum) {
  let count = 0;
  for (let i = 0; i < arr_sum.length; i++) {
    count += arr_sum[i];
  }
  return count;
};

let res_sum = sum_num([1, 2, 3, 4, 5]);
console.log(
  `\nOutput of Sum of all numbers in an array using Anonymous Function\n`
);
console.log(res_sum);

/*------------------------------------------------------------------------------------------------------*/

//Question:1(d) - Return all the prime numbers in an array
//Using Anonymous Function
let prime_num = function (arr_prime) {
  let temp_prime = [];
  for (let i = 0; i < arr_prime.length; i++) {
    let num = arr_prime[i];
    if (isPrime(num)) {
      temp_prime.push(num);
    }
  }
  return temp_prime;
};
let isPrime = function (num) {
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
  `\nOutput of Return all the prime numbers in an array using Anonymous Function\n`
);
console.log(res_prime);

/*------------------------------------------------------------------------------------------------------*/

//Question:1(e) - Return all the palindromes in an array
//Using Anonymous Function
function isPalin(str) {
  str = str.toLowerCase();
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[str.length - 1 - i]) {
      return true;
    }
  }
  return false;
}
function getPalin(arr) {
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
  `\nOutput of Return all the palindromes in an array using Anonymous Function\n`
);
console.log(palindromes);

/*------------------------------------------------------------------------------------------------------*/

//Question:1(f) - Return median of two sorted arrays of the same size
//Using Anonymous Function

let median_arr = function (arr1, arr2) {
  let new_arr = arr1.concat(arr2);
  let sorted_arr = new_arr.sort();
  let med;
  if (sorted_arr.length % 2 == 0) {
    med =
      (sorted_arr[sorted_arr.length / 2 - 1] +
        sorted_arr[sorted_arr.length / 2]) /
      2;
  } else {
    med = sorted_arr[sorted_arr.length / 2 - 1 + 0.5];
  }
  return med;
};

let ar1 = [1, 3, 4, 2];
let ar2 = [5, 7, 6, 8];
console.log(
  `\nOutput of Return median of two sorted arrays of the same size using Anonymous Function\n`
);
console.log(median_arr(ar1, ar2));

/*------------------------------------------------------------------------------------------------------*/

//Question:1(f) - Remove duplicates from an array
//Using Anonymous Function

let NoDups = function (arr) {
  let arrNoDups = [];
  for (let i = 0; i < arr.length; i++) {
    if (arrNoDups.indexOf(arr[i]) === -1) {
      arrNoDups.push(arr[i]);
    }
  }
  return arrNoDups;
};

console.log(
  `\nOutput of Remove duplicates from an array using Anonymous Function\n`
);
console.log(NoDups([1, 1, 2, 2, 2, 3, 4, 4, 5, 6, 7, 7, 8]));

/*------------------------------------------------------------------------------------------------------*/

//Question:1(g) - Rotate an array by k times
//Using Anonymous Function

let rotate = function (arr, k) {
  for (let i = 0; i < k; i++) {
    arr.unshift(arr.pop());
  }
  return arr;
};

console.log(
  `\nOutput of Rotate an array by k times using Anonymous Function\n`
);
console.log(rotate([1, 2, 3, 4, 5, 6, 7, 8], 3));

/*------------------------------------------------------------------------------------------------------*/
