//Question:1(a) - Print odd numbers in an array
//Using Anonymous Function

let odd_num_AF = function (arr_odd_AF) {
  let temp_odd_AF = [];
  for (let i = 0; i < arr_odd_AF.length; i++) {
    if (arr_odd_AF[i] % 2 != 0) {
      temp_odd_AF.push(arr_odd_AF[i]);
    }
  }
  return temp_odd_AF;
};

let res_odd_AF = odd_num_AF([12, 13, 14, 15, 16, 17, 18, 19]);
console.log(
  `Output for Print odd numbers in an array using Anonymous Function\n`
);
console.log(res_odd_AF);

//Using Immediately Invoked Function Expressions

let odd_num_IIFE = (function (arr_odd_IIFE) {
  let temp_odd_IIFE = [];
  let l_odd_IIFE = arr_odd_IIFE.length;
  for (let i = 0; i < l_odd_IIFE; i++) {
    if (arr_odd_IIFE[i] % 2 != 0) {
      temp_odd_IIFE.push(arr_odd_IIFE[i]);
    }
  }
  return temp_odd_IIFE;
})([12, 13, 14, 15, 16, 17, 18, 19]);

console.log(
  "Output for Print odd numbers in an array using Immediately Invoked Function Expressions\n"
);
console.log(odd_num_IIFE);

/*------------------------------------------------------------------------------------------------------*/

//Question:1(b) - Convert all the strings to title caps in a string array
//Using Anonymous Function

let title_caps_AF = function (txt_AF) {
  let caps_step1_AF = txt_AF.split(" ");
  let caps_step2_AF = caps_step1_AF.map(function (word_AF) {
    return word_AF.charAt(0).toUpperCase() + word_AF.substr(1).toLowerCase();
  });
  let caps_step3_AF = caps_step2_AF.join(" ");
  return caps_step3_AF;
};

const msg_AF = title_caps_AF("example of title caps");
console.log(
  `\nOutput for Convert all the strings to title caps in a string array using Anonymous Function\n`
);
console.log(msg_AF);

//Using Immediately Invoked Function Expressions

let title_caps_IIFE = (function (txt_IIFE) {
  let caps_step1_IIFE = txt_IIFE.split(" ");
  let caps_step2_IIFE = caps_step1_IIFE.map(function (word_IIFE) {
    return (
      word_IIFE.charAt(0).toUpperCase() + word_IIFE.substr(1).toLowerCase()
    );
  });
  let caps_step3_IIFE = caps_step2_IIFE.join(" ");
  return caps_step3_IIFE;
})("example of title caps");

console.log(
  `\nOutput for Convert all the strings to title caps in a string array using Immediately Invoked Function Expressions\n`
);
console.log(title_caps_IIFE);

/*------------------------------------------------------------------------------------------------------*/

//Question:1(c) - Sum of all numbers in an array
//Using Anonymous Function

let sum_num_AF = function (arr_sum_AF) {
  let count_AF = 0;
  for (let i = 0; i < arr_sum_AF.length; i++) {
    count_AF += arr_sum_AF[i];
  }
  return count_AF;
};

let res_sum_AF = sum_num_AF([1, 2, 3, 4, 5]);
console.log(
  `\nOutput of Sum of all numbers in an array using Anonymous Function\n`
);
console.log(res_sum_AF);

//Using Immediately Invoked Function Expressions

let sum_num_IIFE = (function (arr_sum_IIFE) {
  let count_IIFE = 0;
  for (let i = 0; i < arr_sum_IIFE.length; i++) {
    count_IIFE += arr_sum_IIFE[i];
  }
  return count_IIFE;
})([1, 2, 3, 4, 5]);

console.log(
  `\nOutput of Sum of all numbers in an array using Using Immediately Invoked Function Expressions\n`
);
console.log(sum_num_IIFE);

/*------------------------------------------------------------------------------------------------------*/

//Question:1(d) - Return all the prime numbers in an array
//Using Anonymous Function

let prime_num_AF = function (arr_prime_AF) {
  let temp_prime_AF = [];
  for (let i = 0; i < arr_prime_AF.length; i++) {
    let num_AF = arr_prime_AF[i];
    if (isPrime_AF(num_AF)) {
      temp_prime_AF.push(num_AF);
    }
  }
  return temp_prime_AF;
};
let isPrime_AF = function (num_AF) {
  if (num_AF <= 1) {
    return false;
  }
  if (num_AF <= 3) {
    return true;
  }
  for (let i = 2; i * i <= num_AF; i++) {
    if (num_AF % i == 0) {
      return false;
    }
  }
  return true;
};

let start_num_AF = 1;
let end_num_AF = 10;
let arr_num_AF = [];
for (i = start_num_AF; i <= end_num_AF; i++) {
  arr_num_AF.push(i);
}
let res_prime_AF = prime_num_AF(arr_num_AF);
console.log(
  `\nOutput of Return all the prime numbers in an array using Anonymous Function\n`
);
console.log(res_prime_AF);

//Using Immediately Invoked Function Expression

let isPrime_IIFE = function (num_IIFE) {
  if (num_IIFE <= 1) {
    return false;
  }
  if (num_IIFE <= 3) {
    return true;
  }
  for (let i = 2; i * i <= num_IIFE; i++) {
    if (num_IIFE % i == 0) {
      return false;
    }
  }
  return true;
};

let prime_num_IIFE = (function (arr_prime_IIFE) {
  let temp_prime_IIFE = [];
  for (let i = 0; i < arr_prime_IIFE.length; i++) {
    let num = arr_prime_IIFE[i];
    if (isPrime_IIFE(num)) {
      temp_prime_IIFE.push(num);
    }
  }
  return temp_prime_IIFE;
})([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

console.log(
  `\nOutput of Return all the prime numbers in an array using Immediately Invoked Function Expressions\n`
);
console.log(prime_num_IIFE);

/*------------------------------------------------------------------------------------------------------*/

//Question:1(e) - Return all the palindromes in an array
//Using Anonymous Function

function isPalin_AF(str_AF) {
  str_AF = str_AF.toLowerCase();
  for (let i = 0; i < str_AF.length; i++) {
    if (str_AF[i] === str_AF[str_AF.length - 1 - i]) {
      return true;
    }
  }
  return false;
}
function getPalin_AF(arr_AF) {
  let palindromes_AF = [];
  for (let i = 0; i < arr_AF.length; i++) {
    if (isPalin_AF(arr_AF[i])) {
      palindromes_AF.push(arr_AF[i]);
    }
  }
  return palindromes_AF;
}
const words_AF = ["Zero", "Malayalam", "level", "madam", "noon", "full"];
const palindromes_AF = getPalin_AF(words_AF);
console.log(
  `\nOutput of Return all the palindromes in an array using Anonymous Function\n`
);
console.log(palindromes_AF);

//Using Immediately Invoked Function Expression

function isPalin_IIFE(str_IIFE) {
  str_IIFE = str_IIFE.toLowerCase();
  for (let i = 0; i < str_IIFE.length; i++) {
    if (str_IIFE[i] === str_IIFE[str_IIFE.length - 1 - i]) {
      return true;
    }
  }
  return false;
}
let palindromes_IIFE = (function getPalin_IIFE(arr_IIFE) {
  let palin_IIFE = [];
  for (let i = 0; i < arr_IIFE.length; i++) {
    if (isPalin_IIFE(arr_IIFE[i])) {
      palin_IIFE.push(arr_IIFE[i]);
    }
  }
  return palin_IIFE;
})(["Zero", "Malayalam", "level", "madam", "noon", "full"]);

console.log(
  `\nOutput of Return all the palindromes in an array using Immediately Invoked Function Expressions\n`
);
console.log(palindromes_IIFE);

/*------------------------------------------------------------------------------------------------------*/

//Question:1(f) - Return median of two sorted arrays of the same size
//Using Anonymous Function

let median_arr_AF = function (arr1_AF, arr2_AF) {
  let new_arr_AF = arr1_AF.concat(arr2_AF);
  let sorted_arr_AF = new_arr_AF.sort();
  let med_AF;
  if (sorted_arr_AF.length % 2 == 0) {
    med_AF =
      (sorted_arr_AF[sorted_arr_AF.length / 2 - 1] +
        sorted_arr_AF[sorted_arr_AF.length / 2]) /
      2;
  } else {
    med_AF = sorted_arr_AF[sorted_arr_AF.length / 2 - 1 + 0.5];
  }
  return med_AF;
};

let ar1_AF = [1, 3, 4, 2];
let ar2_AF = [5, 7, 6, 8];
console.log(
  `\nOutput of Return median of two sorted arrays of the same size using Anonymous Function\n`
);
console.log(median_arr_AF(ar1_AF, ar2_AF));

//Using Immediately Invoked Function Expression

let median_arr_IIFE = (function (arr1_IIFE, arr2_IIFE) {
  let new_arr_IIFE = arr1_IIFE.concat(arr2_IIFE);
  let sorted_arr_IIFE = new_arr_IIFE.sort();
  let med_IIFE;
  if (sorted_arr_IIFE.length % 2 == 0) {
    med_IIFE =
      (sorted_arr_IIFE[sorted_arr_IIFE.length / 2 - 1] +
        sorted_arr_IIFE[sorted_arr_IIFE.length / 2]) /
      2;
  } else {
    med_IIFE = sorted_arr_IIFE[sorted_arr_IIFE.length / 2 - 1 + 0.5];
  }
  return med_IIFE;
})([1, 3, 4, 2], [5, 7, 6, 8]);

console.log(
  `\nOutput of Return median of two sorted arrays of the same size using Immediately Invoked Function Expressions\n`
);
console.log(median_arr_IIFE);

/*------------------------------------------------------------------------------------------------------*/

//Question:1(f) - Remove duplicates from an array
//Using Anonymous Function

let NoDups_AF = function (arr_AF) {
  let arrNoDups_AF = [];
  for (let i = 0; i < arr_AF.length; i++) {
    if (arrNoDups_AF.indexOf(arr_AF[i]) === -1) {
      arrNoDups_AF.push(arr_AF[i]);
    }
  }
  return arrNoDups_AF;
};

console.log(
  `\nOutput of Remove duplicates from an array using Anonymous Function\n`
);
console.log(NoDups_AF([1, 1, 2, 2, 2, 3, 4, 4, 5, 6, 7, 7, 8]));

//Using Immediately Invoked Function Expression

let NoDups_IIFE = (function (arr_IIFE) {
  let arrNoDups_IIFE = [];
  for (let i = 0; i < arr_IIFE.length; i++) {
    if (arrNoDups_IIFE.indexOf(arr_IIFE[i]) === -1) {
      arrNoDups_IIFE.push(arr_IIFE[i]);
    }
  }
  return arrNoDups_IIFE;
})([1, 1, 2, 2, 2, 3, 4, 4, 5, 6, 7, 7, 8])

console.log(
  `\nOutput of Remove duplicates from an array using Immediately Invoked Function Expressions\n`
);
console.log(NoDups_IIFE);

/*------------------------------------------------------------------------------------------------------*/

//Question:1(g) - Rotate an array by k times
//Using Anonymous Function

let rotate_AF = function (arr_AF, k_AF) {
  for (let i = 0; i < k_AF; i++) {
    arr_AF.unshift(arr_AF.pop());
  }
  return arr_AF;
};

console.log(
  `\nOutput of Rotate an array by k times using Anonymous Function\n`
);
console.log(rotate_AF([1, 2, 3, 4, 5, 6, 7, 8], 3));

//Using Immediately Invoked Function Expression

let rotate_IIFE = (function (arr_IIFE, k_IIFE) {
  for (let i = 0; i < k_IIFE; i++) {
    arr_IIFE.unshift(arr_IIFE.pop());
  }
  return arr_IIFE;
})([1, 2, 3, 4, 5, 6, 7, 8], 3)

console.log(
  `\nOutput of Rotate an array by k times using Immediately Invoked Function Expression\n`
);
console.log(rotate_IIFE);

/*------------------------------------------------------------------------------------------------------*/