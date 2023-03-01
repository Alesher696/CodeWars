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
//============================================================================


// function remove(string) {
//     let arr = string.split('')
//     let newArr = []
//
//     if(arr[arr.length -1] ==='!'){
//         arr.pop()
//         return arr.join('')
//     } else  return arr.join('')
// }
//
// console.log(remove('!Hi!!!'));


//============================================================================

// function addFive(num) {
//
//     let total = 0
//     total < 0 ? total = 0 : total = num + 5
//     return total
// }
// console.log(addFive(10));

//============================================================================


// function positiveSum(arr) {
//     let initialValue = 0
//     return arr.length === 0 ? 0 : arr.reduce((sum, el) => el >= 0 ? (sum + el, initialValue) : sum)
//
// }
//
// console.log(positiveSum([0,1,2,3,4]));
// assert.strictEqual(positiveSum([1,2,3,4,5]),15);
// assert.strictEqual(positiveSum([1,-2,3,4,5]),13);
// assert.strictEqual(positiveSum([]),0);
// assert.strictEqual(positiveSum([-1,-2,-3,-4,-5]),0);
// assert.strictEqual(positiveSum([-1,2,3,4,-5]),9);

//============================================================================
//
// function strCount(str, letter){
//    let arr = str.split('').filter( el=> el === letter)
//     return arr.length
// }
// console.log(strCount('Hello', 'l'));

//============================================================================


// function count(){
//     let count=0
//     //???????
// }
//
// count().inc()
// console.log(count().getCount())

//============================================================================

// try{
//     if(console.log(1)){
//         console.log(2)
//     }else{
//         throw new Error()
//     }
//
// }catch(error){
//     console.log(3)
//     try{
//         var a=5
//         change(a)
//     }finally{
//         console.log(a)
//     }
// }finally{
//     console.log(4)
// }
// function change(a) {a++}


//============================================================================

// function powersOfTwo(n) {
//     let arr = []
//     arr.length = n
//     for (let i = 0; i < arr.length; i++) {
//         arr[i] = i + 1
//     }
//
//     if( arr.length === 0){
//         return arr = [1]
//     } else return arr.filter(el => el % 2 === 0 || el === 1)
//
// }
//
// console.log(powersOfTwo(1));

//============================================================================

// function check(a, x) {
// let total = []
//     for( let i = 0; i < a.length; i++){
//         if (a[i] === x){
//            total +=  a[i]
//         }
//     }
//     return total.length !== 0 ? true : false
// }
//
//
// // лучше всего использовать a.includes(x)
//
// console.log(check([101, 45, 75, 105, 99, 107], 107));

// assert.strictEqual(check([66, 101], 66), true);
// assert.strictEqual(check([101, 45, 75, 105, 99, 107], 107), true);
// assert.strictEqual(check(['t', 'e', 's', 't'], 'e'), true);
// assert.strictEqual(check(['what', 'a', 'great', 'kata'], 'kat'), false);

//============================================================================

// function mouthSize(animal) {
//    return animal.toLowerCase() === 'alligator' ? 'small' : 'wide'
// }
// console.log(mouthSize("toucan"));

// assert.strictEqual(mouthSize("ant bear"),"wide")
// assert.strictEqual(mouthSize("alligator"),"small")

//============================================================================