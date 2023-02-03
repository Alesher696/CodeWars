// console.log('hello');
//
//Среднее значение и сравнение со средним числом

// function getGrade(s1, s2, s3) {
//     let score = (s1 + s2 + s3) / 3;
//     return (score >= 90 && score <= 100) ? "A" : (score >= 80 && score < 90) ? "B" : (score >= 70 && score < 80) ? "C" :
//         (score >= 60 && score < 70) ? 'D' : (score >= 0 && score < 60) ? 'F' : 'Empty'
// }
//
// console.log(getGrade(50, 50, 50));


//Функ сортирующая массив и вывыод первого эл массива со звездочками

// function twoSort(s) {
// let newArr = s.sort();
// return newArr[0].split('').join("***")
//
// }
// console.log(twoSort(["turns", "out", "random", "test", "cases", "are", "easier", "than", "writing", "out", "basic", "ones"]));
// console.log(typeof (twoSort(["turns", "out", "random", "test", "cases", "are", "easier", "than", "writing", "out", "basic", "ones"])));







// assert.deepEqual(countBy(1,10), [1,2,3,4,5,6,7,8,9,10], "Array does not match")
// assert.deepEqual(countBy(2,5), [2,4,6,8,10], "Array does not match")

// function countBy(x, n) {
// let c = x
//     let z = []
//     for (let i = x ; z.length < n ; i ){
//         z.push(i)
//     }
//  return z
//
// }
//
// console.log(countBy(2,5));


//============================================================================
// function findMultiples(integer, limit) {
//     //your code here
//     let newArr = []
//     newArr.push(integer)
//     if(limit >= integer){
//         return newArr
//     } else if (limit < integer){
//         if(integer*2 > limit){
//             return newArr
//         } else if (integer < limit)
//         {for (let i = integer; i< limit; i *2){
//
//         }
//         }
//
//     }
// }
//
// console.log(findMultiples(5,25));
//==============================================================================