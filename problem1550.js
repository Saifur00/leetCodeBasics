var threeConsecutiveOdds = function (arr) {
  let sum = 0;
  let array = arr;
  //   arr.forEach((element) => {
  //     //find whether the element is odd or even
  //     if (element % 2 !== 0) {
  //       sum++;
  //       if (sum === 3) {
  //         console.log(sum);
  //         return true;
  //       }
  //     } else {
  //       sum = 0;
  //     }
  //   });

  console.log(array.length);
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
      sum++;
      if (sum === 3) {
        return true;
      }
    } else {
      sum = 0;
    }
  }
  return false;
};

const value = threeConsecutiveOdds([2, 6, 4, 1, 3, 6, 3, 1, 7]);
console.log(value);
// threeConsecutiveOdds([1, 2, 34, 3, 4, 5, 7, 23, 12]);
