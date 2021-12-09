/* 
1. Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. Do some googling to figure this out if you forget how conditionals work.
*/

maxOfTwoNumbers = (a,b) => {
  // ADD YOUR CODE HERE
  if (a > b) {
    return a; }
    else {
      return b;      
    }
};

console.log(maxOfTwoNumbers(11,9));

/*
2. Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.
*/
maxOfThree = (x,y,z) => {
    // ADD YOUR CODE HERE
    if(x > y && x > z )
    {return x;}
    else if(y > x && y > z)
    {return y;}
    else {return z;}
};

console.log(maxOfThree(51,95,75));
/*
3. Write a function isCharacterAVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
*/
isCharacterAVowel = (string) => {
  // ADD YOUR CODE HERE
  if( string === 'a' ||  string === 'e' ||  string === 'i' || string === 'o' || string === 'u')
        { return true;  }
  else  { return false;  }
  };

/*
4. Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.
*/


sumArray =(arrayX) =>
  // ADD YOUR CODE HERE
  { 
    let max = 0;
    for(let i = 0; i < arrayX.length; i++) {
      max += arrayX[i];  }
    return max;
  } 
const sum = sumArray([1,2,3,4,5]);
console.log(sum);

multiplyArray= (arrayA) =>{

  let multi = 1;
    for(let i = 0; i < arrayA.length; i++) {
      multi *= arrayA[i];  }
    return multi;
  } 
// const total = multiplyArray ([1,2,3,4,5]);
// console.log(total);
console.log(multiplyArray ([1,2,3,4,5]));

/*
5.Write a function that returns the number of arguments passed to the function when called.
*/
valueCount=()=>{ 
  return (arguments.length);}

console.log(valueCount(1,2,3,5));
/*
6. Define a function reverseString that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".
*/

reverseString = (str) => {
   // ADD YOUR CODE HERE
  let reverseStr = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reverseStr += str[i];
  }
  return reverseStr;
}

console.log(reverseString('palindromes'));

/*
7. Write a function findLongestWord that takes an array of words and returns the length of the longest one.
*/
findLongestWord = (wordArray) => {
  // ADD YOUR CODE HERE
let count=0;
let word='';
for (let i = 0; i< wordArray.length ; i++ ) 
  {
     if(count < wordArray[i].length)
     {
      count = wordArray[i].length;
      word= wordArray[i]
     }
  }
  return(word);
};

console.log (findLongestWord(['asb','erty','22','sdsd34']));
/*
8. Write a function filterLongWords that takes an array of words and a number i and returns the array of words that are longer than i characters long.
*/
filterLongWords = (wordArray,num) => {
    // ADD YOUR CODE HERE

   let word=[];
  for (let i = 0; i< wordArray.length ; i++ ) 
  {
     if(wordArray[i].length > num )
     {
      word.push(wordArray[i]);
     }
  }
  return(word);
};
const arrayZ= filterLongWords(['asb','erty','22','sdsd34'],3);
console.log(arrayZ);