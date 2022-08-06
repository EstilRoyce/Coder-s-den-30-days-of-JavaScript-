// Exercise: Level 1
const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
]

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]
// 1.Declare an empty array;
let arr=Array()

// 2.Declare an array with more than 5 number of elements
let arr1=[1,2,3,4,5,6]
// 3.Find the length of your array
console.log(arr1.length)
// 4.Get the first item, the middle item and the last item of the array
//first item
console.log(arr1[0])
//middle item
if(arr1.length%2==0){
    let indexTwo=arr1[Math.floor(arr1.length/2)]
    let indexThree=arr1[Math.floor(arr1.length/2)-1]
    console.log((indexThree+indexTwo)/2)
    }
    else if(arr1.length%2!=0){
        console.log(arr1[Math.floor(arr1.length/2)])
    }
    
//last item
console.log(arr1[arr1.length-1])
// 5.Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
let mixedDataTypes=["Esther",1, true,Math.PI,"Nigeria"]
// 6.Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
let itsCompanies=['Facebook','Google', 'Microsoft', 'Apple', 'IBM', 'Oracle','Amazon']
// 7.Print the array using console.log()
console.log(itsCompanies)
// 8.Print the number of companies in the array
console.log(itsCompanies.length)
// 9.Print the first company, middle and last company
//first company
console.log(itsCompanies[0])
//last company
console.log(itsCompanies[itsCompanies.length-1])
//middle company
console.log(itsCompanies[Math.round(itsCompanies.length/2)-1])


// 10.Print out each company
//first array
console.log(itsCompanies[0])
//second array
console.log(itsCompanies[1])
// third array
console.log(itsCompanies[2])
//forth array
console.log(itsCompanies[itsCompanies.length-2])
// fifth array
console.log(itsCompanies[itsCompanies.length-1])
// 11.Change each company name to uppercase one by one and print them out
//first array
console.log(itsCompanies[0].toUpperCase())
//second array
console.log(itsCompanies[1].toUpperCase())
// third array
console.log(itsCompanies[2].toUpperCase())
//forth array
console.log(itsCompanies[itsCompanies.length-2].toUpperCase())
// fifth array
console.log(itsCompanies[itsCompanies.length-1].toUpperCase())

// 12.Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
console.log(`${itsCompanies} are big IT companies`)
// 13.Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
if(itsCompanies.includes('Apple')){
    console.log('it exist')
}
else{
    console.log('it doesnt esist')
}

// 14.Filter out companies which have more than one 'o' without the filter method,
console.log('microsoft'.split("o").length);
console.log('facebook'.split("o").length);
let NitCompanies=[]
if (itsCompanies[0].split("o").length>=2){
    NitCompanies.push(itsCompanies[0]);
}

if (itsCompanies[1].split("o").length>=2){
    NitCompanies.push (itsCompanies[1]);
}

if (itsCompanies[2].split("o").length>=2){
    NitCompanies.push(itsCompanies[2]);
}

if (itsCompanies[3].split("o").length>=2){
    NitCompanies.push(itsCompanies[3]);
}

if (itsCompanies[4].split("o").length>=2){
    NitCompanies.push(itsCompanies[4]);
}

if (itsCompanies[5].split("o").length>=2){
    NitCompanies.push(itsCompanies[5]);
}

if (itsCompanies[6].split("o").length>=2){
    NitCompanies.push(itsCompanies[6]);
}
console.log(NitCompanies)

let newC=[]
for(let i=0; i<itsCompanies.length; i++)
if(itsCompanies[i].split("o").length>2){
    newC.push(itsCompanies[i])
}
console.log(newC)
// 15.Sort the array using sort() method
console.log(itsCompanies.sort())
// 16.Reverse the array using reverse() method
console.log(itsCompanies.reverse())
// 17.Slice out the first 3 companies from the array
console.log(itsCompanies.slice(0,3))
// 18.Slice out the last 3 companies from the array
console.log(itsCompanies.slice(-3));
// 19.Slice out the middle IT company or companies from the array
console.log(itsCompanies.slice((itsCompanies.length-1)/2,(itsCompanies.length/2)+1))

// 20.Remove the first IT company from the array
console.log((itsCompanies.slice(0,1)))
// 21.Remove the middle IT company or companies from the array
// console.log(itsCompanies.splice(itsCompanies.length/2))
// 22.Remove the last IT company from the array
console.log(itsCompanies.slice())
// 23.Remove all IT companies
console.log(itsCompanies.splice())
// Exercise: Level 2
// 1.Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file
// import webTech from'./webTech'
// import countries from'./countries'
// 2.First remove all the punctuations and change the string to array and count the number of words in the array
let string =
'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
console.log (string)
console.log(string.replace())
let text=["I", "love", "teaching", "and", "empowering", "people", "I", "teach", "HTML", "CSS", "JS", "React", "Python"]
console.log(text.toString())
// 33.In the following shopping cart add, remove, edit items
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

// oadd 'Meat' in the beginning of your shopping cart if it has not been already added
shoppingCart.unshift('meat')
console.log(shoppingCart)
// oadd Sugar at the end of you shopping cart if it has not been already added
shoppingCart.push('Sugar')
console.log(shoppingCart)

// oremove 'Honey' if you are allergic to honey
let ssum=[]
for(let i=0; i<shoppingCart.length; i++){
    if(shoppingCart[i]=='Honey'){
    
        continue 
       
    }
    console.log(shoppingCart[i])
}

// omodify Tea to 'Green Tea'`${shoppingCart}`
shoppingCart[3]='Green Tea'

console.log(shoppingCart)

// 4.In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
for(const country of countries){
    if(country.includes('Ethiopia')){
        console.log(country.toUpperCase())
    }
}
// 5.In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.
for(const web of webTechs){
    if(web.includes('Sass')){
        console.log(`${web} is a CSS preprocess`)
    }
    else{console.log(webTechs.unshift('Sass'))}
}
// // Concatenate the following two variables and store it in a fullStack variable.
// // const frontEnd =  ['HTML', 'CSS', 'JS', 'React', 'Redux']
// // const backEnd=['Node', 'Express', 'MongoDB']

// // console.log([...frontEnd,...backEnd])
// // console.log(fullStack)
// // ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]
// // Exercise: Level 3
// // 1.The following is an array of 10 students ages:
// // const ages = [19, 22, 19,24,20, 25, 26, 24, 25, 24]

// // Sort the array and find the min and max age
// console.log(ages.sort())
// console.log(Math.min(...ages))
// console.log(Math.max(...ages))
// // Find the median age(one middle item or two middle items divided by two)
// if(ages.length%2==0){
// let indexTwo=ages[Math.floor(ages.length/2)]
// let indexThree=ages[Math.floor(ages.length/2)-1]
// console.log((indexThree+indexTwo)/2)
// }
// else if(ages.length%2!=0){
//     console.log(ages[Math.floor(ages.length/2)])
// }

// // Find the average age(all items divided by number of items)
// // let sum=0
// // for(const age of ages){
// //     sum+=age
// //     let ave=sum/ages.length
// // }console.log(ave)

// // Find the range of the ages(max minus min)
// console.log(Math.min(...ages)-Math.max(...ages))
// // Compare the value of (min - average) and (max - average), use abs() method 

// let minAve= Math.min(...ages)-ave
// let maxAve=
// //1.Slice the first ten countries from the countries array
// console.log(countries.slice(0,10))

// // 2.Find the middle country(ies) in the countries array
// // 3.Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.
//  let arr7=[]
// const countye=["iceland","finland", "norway"]
// countye.forEach((element,index,)=> arr7.push(countye[countye.length-1-index]);
// console.log(arr7)
