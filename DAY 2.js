let word='Javascript'
word[0]='Y'
console.log(word)

let name= ["esther", "precious", "kudirat", "eunice"]
name[0]="bukola"
console.log(name)


let a= "   30 Days Of javaScript     "
console.log(a)
console.log(a.trim(""))

let b="30 Days Of javaScript"
console.log(b.includes("Days"))



let string="30 Days Of javaScript"
console.log(string.indexOf("javaScript"))
console.log(string.indexOf("D"))

console.log(string.lastIndexOf("javaScript"))


let letter="i"
console.log(letter.concat('love', "myself"))
let wordd="i Love mySelf"

console.log(wordd.startsWith("i Love mySelf"))
console.log(wordd.startsWith("Do i Love mySelf"))




//DAY 2 EXERCISES

// level 1


//1. declare a variable named challenged and assign it to an initial value '30 Days Of javaScript'.

let challenged="30 Days Of javaScript"

//2. Print the stringon the browser console using console.log()
console.log(challenged)

//3. Print the length of the string on the browser console using console.log()
console.log(challenged.length)

//4.change all the string characters to capital letters using toUpperCase() method
console.log(challenged.toUpperCase())

//5. change all the string characters to capital letters using toLowerCase() method
console.log(challenged.toLowerCase())

//6. cut (slice) out the first word of the string using substr() or substring() method
console.log(challenged.substr(2))


// 7. slice out the phrase Days of javaScript fron 30 Days of javaScript.
console.log(challenged.substr(0,2))


//8. check if the string contains a word Script using includes() method
console.log(challenged.includes("Script"))

//9. Split the string into an array using split() method
console.log(challenged.split())

//10.Split the string 30 Days Of javaScript at the space using split() method
console.log(challenged.split())

//11. 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
let socialMedia="Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon"
console.log(socialMedia.split(","))


//12. Change 30 Days Of javaScript to 30 Days Of Python using replace() method
console.log(challenged.replace("javaScript", "python"))

//13. What is the character at index 15 in '30 Days Of javaScript' string? use charAt() method
console.log(challenged.charAt(15))

//14.  What is the character code of j in '30 Days Of javaScript' string use charCodeAt() method
console.log(challenged.charCodeAt('j'))

//15. use indexof to determine the position of the first occurrence of 'a' in 30 Days Of javaScript
console.log(challenged.indexOf("a"))

//16. use lastIndexOf to determine the position of the last occurence of 'a' in 30 Days Of javaScript
console.log(challenged.lastIndexOf("a"))

//17. use of indexOf to find the position of the first occurrence of the word 'because' in the following sentence:'You cannot end a sentence with because because is a conjuction'
let sentence="You cannot end a sentence with because because is a conjuction"
console.log(sentence.indexOf("because"))

//18. use lastIndexOf to find the position of the last occurrence of the word 'because' in the following sentence:'You cannot end a sentence with because because is a conjuction'
console.log(sentence.lastIndexOf("because"))

//19. use search to find the position of the first occurrence of the word 'because' in the following sentence:'You cannot end a sentence with because because is a conjuction'
console.log(sentence.search("because"))

//20. use trim() to remove any trailing whitespace at the beginning and the end of a string. E.g '30 Days Of javaScript'
console.log(challenged.trim('30 Days Of javaScript'))

//21. use startsWith() method with the string 30 Days Of javaScript and make the result true
console.log(challenged.startsWith('30 Days Of javaScript'))

//22. use endsWith() method with the string 30 Days Of javaScript and make the result true
console.log(challenged.endsWith('30 Days Of javaScript'))

//23. use match() method to find all the "a's" in 30 Days Of javaScript
console.log(challenged.match(/a/gi))

//24. use concat() and merge '30 Days of ' and 'javaScript' to a single string, '30 Days Of javaScript'
let look="30 Days of"
console.log(look.concat(" javaScript"))

//25. use repeat() method to print 30 Days Of javaScript 2 times
console.log(challenged.repeat(2))

//Exercise: level 2

//1. using console.log() print out the following statement: The quote 'There is no exercise better for the heart than reaching down and lifting people up. ' by John Holmes teaches us to help one another.
console.log('The quote There is no exercise better for the heart than reaching down and lifting people up.  by John Holmes teaches us to help one another.')

//2. using console.log() print out the following quote by Mother Teresa: "Love is not patronizing and charity isn't about pity. it is about love. Charity and love are the same-- with charity you give love, so don't just give money but reach out your hand instead."
console.log('quote by Mother Teresa: Love is not patronizing and charity isnt about pity. it is about love. Charity and love are the same-- with charity you give love, so dont just give money but reach out your hand instead.')

//3. check if typeof '10' is exactly equal to 10. if not make it exactly equal.
let num=10
let numInt= Number(num)
console.log(numInt)

//4. check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10
let num1=9.8
let parseFloat=Number(Math.floor(Math.ceil(num1)))
console.log(parseFloat)

//5. check if 'on' is found in both python and jargon
let language="python"
let language2="jargon"
console.log(language.endsWith("on") )
console.log(language2.endsWith("on") )

//6. i hope this course is not full of jargon. check if jargon is in the sentence.
let course= "i hope this course is not full of jargon"
console.log(course.includes("jargon"))

//7. Generate a random number between 0 and 100 inclusively.
console.log(Math.floor(Math.random()*101))

//8. generate a random number between 50 and 100 inclusively.
let min=50
let max=100

console.log(Math.floor(Math.random()*(max-min)+1) + min)


//9. generate a random number between 0 and 255 inclusively.

console.log(Math.floor(Math.random()*256))


//10. Access the 'JavaScript' string character using a random number.
let character_string='JavaScript'
let characterLength= character_string.length
console.log(character_string.charAt(Math.floor(Math.random('JavaScript')*characterLength)))

/*11. use console.log() and escape characters to print the following pattern.
 2 1 2 4 8
 3 1 3 9 27
 4 1 4 16 64
 1 1 1 1 1
 5 1 5 25 125


 let c='2 1 2 4 8'
console.log(...c)
let d='1 3 9 27'
console.log(...d)
let e='4 1 4 16 64'
console.log(...e)
 let f='1 1 1 1 1'
 console.log(...f)
 let g='5 1 5 25 125'
 console.log(...g)
 */


console.log('2 1 2 4 8\n 3 1 3 9 27\n 4 1 4 16 64\n 1 1 1 1 1\n 5 1 5 25 125')


// 12 use substr to slice out the phrase because because because from the following sentece: 'You cannot end a sentence with because because is a conjuction'
let sent="You cannot end a sentence with because because because is a conjuction"
console.log(sent.indexOf('b'))
let characterI=sent.indexOf('b')
let character=sent.lastIndexOf('i')
console.log(sent.substr(characterI,character))


//execrises:level 3
 
//1. 'Love is the best thing in this world. Some found their love and some found their love and some are still looking for their love.' Count the number of word 'love' in this sentence.
 let feelings='Love is the best thing in this world. Some found their love and some found their love and some are still looking for their love.' 
 console.log(feelings.match(/love/gi))

 //2. use match() to count the number of all because in the following sentence:'You cannot end a sentence with because because because is a conjuction'

console.log(sent.match('because'))


/*3. clean the following text and find the most frequent word (hint, use replace and regular expresssions).
const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%ore interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfjavaScript &is al@so $the $resu@lt of &love& of tea&ching'*/
let sente='%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%ore interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfjavaScript &is al@so $the $resu@lt of &love& of tea&ching'
console.log(sente.replace(/[?$%!@#&;]/gi, ""))

console.log(sente.replace(/[^a-z0-9. ]/gi, ""))


//4.calculate the total annual incomeofthe person by extracting the numbers from the followinh text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'

let annual='He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
let regEx=/\d+/gi

console.log(annual.match(regEx))
let arr=[5000, 10000, 15000]

let first= arr[0]
let second= arr[1]
let third = arr[2]

console.log(first + second + third)

/*let sum=0;
for(let i =0; i<3; i++){
    sum+= arr[i]
}*/

