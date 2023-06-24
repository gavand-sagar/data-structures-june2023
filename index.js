// function sum(x, y) {
//     return x + y
// }

// // Number of variables  -- 2 units


// function sum(n) {
//     let sum = 0;
//     for (let i = 1; i <= n; i++) {
//         sum = sum + i;
//     }
//     return sum;
// }

// addition from 1 to n   ie. sum(5)  ==  1 + 2 + 3 + 4 + 5 = 15
// Space complexity is 3 units



// to display all even numbers from 1 to n
// ie  even(5) ==>     2 , 4
// ie  even(10)  ==>   2 , 4 , 6 , 8 , 10
// even ==>   number % 2 == 0 

// function even(n) {
//     for (let i = 1; i <= n; i++) {
//         if (i % 2 == 0) {
//             console.log(i)
//         }
//     }
// }

// function even(n) {
//     let total = 0
//     for (let i = 1; i <= n; i++) {
//         if (i % 2 == 0) {
//             total++
//         }
//     }
//     console.log(total)
// }

// function even(n) {
//     console.log(Math.floor(n / 2))
// }

// even(8)


// let n = 10
// let sum = 0;

// let mid = Math.floor(n / 2);

// for (let i = 1; i <= mid; i++) {
//     sum = sum + i;
// }

let counter = 0;

let limit = 3;

let sum = 0
for (let i = 1; i <= limit; i++) {
    for (let j = 1; j <= limit; j++) {
        counter++
    }
}


console.log(counter)




