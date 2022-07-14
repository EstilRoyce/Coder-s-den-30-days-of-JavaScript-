// Exercises: Level 1
// 1.Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.
// Enter your age: 30
// You are old enough to drive.
// Enter your age:15
// // You are left with 3 years to drive.
let user=prompt("Enter your Age")
if(user>=18){console.log(`${user}, you are old enough to drive`)}
else{console.log(`${user}, you are not old enough to drive. Wait till ${18-user} year time`)}
// //2. Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.
// // Enter your age: 30
// // You are 5 years older than me.
let myAge=prompt("Enter MY Age")
let yourAge=prompt("Enter Your Age")
if (myAge>yourAge){console.log(`I am ${myAge-yourAge} year older than you`)}
else{console.log(`You are ${yourAge-myAge} year older than i am`)}


// 3. If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways
// using if else
// ternary operator.
  let a = 4
  let b = 3
//   4 is greater than 3
if(a>b){console.log(`${a} is greater than ${b}`)}
else{console.log(`${a} is less than ${b}`)}

(a>b)?console.log(`${a} is greater than ${b}`) :console.log(`${a} is less than ${b}`)
// 4. Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?
//  a number: 2
// 2 is an even number
// 
// Enter a number: 9
// 9 is is an odd number.
// let number=prompt("Enter Number")
// if(number%2==0){console.log(`${number}, is an even Number`)}
// else{console.log(`${number}, is an odd number`)}
// Exercises: Level 2
// 1.Write a code which can give grades to students according to theirs scores:
// 80-100, A
// 70-79, B
// 60-69, C
// 50-59, D
// 0-49, F
let num=prompt("Enter grade Number")
if(num>=80){console.log(`${num}, grade A`)}
else if(num>=70){console.log(`${num}, grade B`)}
else if(num>=60){console.log(`${num}, grade c`)}
else if(num>=50){console.log(`${num}, grade D`)}
else if(num>=0){console.log(`${num}, grade f`)}
else{console.log(`${num} is not a grade number`)}
// 2.Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
// September, October or November, the season is Autumn.
// December, January or February, the season is Winter.
// March, April or May, the season is Spring
// June, July or August, the season is Summer
let month= prompt('Enter Month in lowerCase')
if(month==='september'){console.log(`${month} is Autum`)}
else if(month==='october'){console.log(`${month} is Autum`)}
else if(month==='november'){console.log(`${month} is Autum`)}
else if(month==='december'){console.log(`${month} is Winter`)}
else if(month==='january'){console.log(`${month} is Winter`)}
else if(month==='february'){console.log(`${month} is Winter`)}
else if(month==='march'){console.log(`${month} is Spring`)}
else if(month==='april'){console.log(`${month} is Spring`)}
else if(month=== 'may'){console.log(`${month} is Spring`)}
else if(month==='june'){console.log(`${month} is Summer`)}
else if (month==='july'){console.log(`${month} is Summer`)}
else if (month==='august'){console.log(`${month} is Summer`)}
else {console.log(`${month} is not part of season`)}
// 3.Check if a day is weekend day or a working day. Your script will take day as an input.
//     What is the day  today? Saturday
//     Saturday is a weekend.

//     What is the day today? saturDaY
//     Saturday is a weekend.

//     What is the day today? Friday
//     Friday is a working day.

//     What is the day today? FrIDAy
//     Friday is a working day.
let day= prompt("Enter Day in loweCase")
if(day=='saturday'){console.log(`${day}, ia a weekend`)}
else if(day=='sunday'){console.log(`${day}, is a weekend`)}
else if(day=='friday'){console.log(`${day}, is a working day`)}
else if(day=='thursday'){console.log(`${day}, is a working day`)}
else if(day=='wednesday'){console.log(`${day}, is a working day`)}
else if(day=='tuesday'){console.log(`${day}, is a working day`)}
else if(day=='monday'){console.log(`${day}, is a working day`)}
else{console.log(`${day}, is not day`)}
// Exercises: Level 3
// 1.Write a program which tells the number of days in a month.
//   Enter a month: January
//   January has 31 days.

//   Enter a month: JANUARY
//   January has 31 day

//   Enter a month: February
//   February has 28 days.

//   Enter a month: FEbruary
//   February has 28 days.
let month1=prompt("Enter Month in LowerCase")
if(month1=='january'){console.log(`${month1} is 31 days`)}
else if(month1=='march'){console.log(`${month1} is 31 days`)}
else if(month1=='may'){console.log(`${month1} is 31 days`)}
else if(month1=='july'){console.log(`${month1} is 31 days`)}
else if(month1=='august'){console.log(`${month1} is 31 days`)}
else if(month1=='october'){console.log(`${month1} is 31 days`)}
else if(month1=='december'){console.log(`${month1} is 31 days`)}
else if(month1=='september'){console.log(`${month1} is 30 days`)}
else if(month1=='april'){console.log(`${month1} is 30 days`)}
else if(month1=='june'){console.log(`${month1} is 30 days`)}
else if(month1=='november'){console.log(`${month1} is 30 days`)}
else if(month1=='febuary'){console.log(`${month1} is 28 days`)}
else{console.log(`${month1} is not a month`)}
// 1.Write a program which tells the number of days in a month, now consider leap year.
let year=prompt("Enter Year")
if(year%4==0){console.log(`${year}, is a leap year`)}
else if(year%400==0){console.log(`${year}, is a leap year`)}
else{console.log(`${year}, is not a leap year`)}