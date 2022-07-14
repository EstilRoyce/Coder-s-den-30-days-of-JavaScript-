console.log(3>2)
console.log(3>=2)
console.log(NaN==NaN)
let isRaining=true
isRaining
? console.log('You need a rain coat')
: console.log('No need for a rain coat')


isRaining=false
?console.log('You need a rain coat')
: console.log('No need for a rain coat')
// const agree= confirm('Are you sure you like to delete? ')
// console.log(agree)



// 1. Declare firstName,lastName, country, city, age, isMarriaged, year variable and assign value to it and use the typeOf operator to check different data types.
let firstName="Esther"
let lastName="Okeniyi"
let country="Nigeria"
let city="Lagos"
let age= 56
let isMarried="No"
let year= 2022
 
console.log(typeof "Esther")
console.log(typeof "Okeniy")
console.log(typeof "Nigeria")
console.log(typeof "Lagos")
console.log(typeof 56)
console.log(typeof "No")
console.log(typeof 2022)
//2. check if type of '10' is equal to 10
let nnum=10
let numm= Number(nnum)
console.log(typeof Number(nnum))
//3. checkif parseInt('9.8') is equal to 10
let num="9.8"
let  parseInt= Number(num) 
console.log(Math.ceil(parseInt))
     //i. write three javaScript statement which provide truthy value.
   null==undefined
     '1'==[1]
    1=='1'
     1==[1]

    

     //ii. write three JavaScript statement which provide falsy value.
     null===undefined
     '1'===[1]
    1==='1'
     1===[1]
   
//5. figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
       //i. 4>3 
       //true
       console.log(4>3)
       //ii. 4>=3
       //true
       console.log(4>=3)
       //iii. 4<3
       //false  
        console.log(4<3)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
       //iv. 4<=3
      //false
       console.log(4<=3)
       //v. 4==4
       //true
       console.log(4==4)
       //vi. 4===4
       //true
       console.log(4===4)
       //vi. 4!=4
      //false
       console.log(4!=4)
       //viii. 4!==4
      //false
       console.log(4!==4)
       //ix. 4!= '4'
      // false
       console.log(4!='4')
      //x. 4 == '4'
      //true
      console.log(4=='4')
       //xi. 4 === '4'
       //false
       console.log(4==='4')
      //xii.Find the length of python and jargon and make a falsy comparison statement.
     //false
      let a="python"
      let b="jargon"
      console.log(a.length !== b.length)
//6.Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()
     //i. 4 > 3 && 10 < 12
     //true
     console.log(4 > 3 && 10 < 12)
     //ii. 4 > 3 && 10 > 12
     //false
     console.log(4 > 3 && 10 > 12)
     //iii. 4 > 3 || 10 < 12
     //true
     console.log(4 > 3 || 10 < 12)
     //iv. 4 > 3 || 10 > 12
    // true
     console.log(4 > 3 || 10 > 12)
    //v. !(4 > 3)
    //false
    console.log(!(4 > 3))
    //vi. !(4 < 3)
    //true
    console.log(!(4 < 3))
    //vii. !(false)
    //true
    console.log(!(false))
    //viii. !(4 > 3 && 10 < 12)
    //false
    console.log(!(4 > 3 && 10 < 12))
    //ix. !(4 > 3 && 10 > 12)
    //true
    console.log(!(4 > 3 && 10 > 12))
    //x. !(4 === '4')
    //rue
    console.log(!(4 === '4'))
    //xi.There is no 'on' in both dragon and python
    let ab="python"
    let bc="jargon"
    console.log(!(a.includes('on')))
    console.log(!(b.includes('on')))
//7.Use the Date object to do the following activities
      //i.What is the year today?
      const now= new Date()
      console.log(now.getFullYear())
     //ii.What is the month today as a number?
     
      console.log(now.getMonth())
     //iii.What is the date today?
    
      console.log(now)
     //iv.What is the day today as a number?
   
     console.log(now.getDate())
     //v.What is the hours now?
   
     console.log(now.getHours())
     //vi.What is the minutes now?
  
     console.log(now.getMinutes())
     //vii.Find out the numbers of seconds elapsed from January 1, 1970 to now.
     const allSeconds= Date.now(1970-2022)
     console.log(allSeconds)
   
//Exercises: Level 2
/*1.Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
Enter base: 20
Enter height: 10
The area of the triangle is 100*/
// let base=prompt("Enter base")
// let height=prompt("Enter height")
// let area = 0.5*base*height


// alert(`The area of the triangle is ${area}`)




/*2.Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)
Enter side a: 5
Enter side b: 4
Enter side c: 3
The perimeter of the triangle is 12  */

// let aSide=prompt("Enter side a")
// let bSide=prompt("Enter side b")
// let cSide=prompt("Enter side c")
// let perimeter= Number(aSide)+Number(bSide)+Number(cSide)
// alert(`The perimeter of the triangle is ${perimeter}`)
// console.log(perimeter)

//3.Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))
// let length= prompt("Enter a length")
// let width= prompt("Enter a width")
// let aarea= length * width
// let pperimeter= length+ width
// alert(`The area of the triangle is ${aarea} and the perimeter is ${pperimeter}`)

//4.Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
// let radius= prompt("Enter a radius")
// const PI=Math.PI
// let aareaa= Math.PI*radius*radius
// let circumference= 2*Math.PI*radius
// alert(`The area of the circle is ${aareaa} and the circumference of a circle ${circumference}`)
//5.Calculate the slope, x-intercept and y-intercept of y = 2x -2

//y=2x-2
// y=mx+c

let xx;
let y;
let x=5
y=(x*2)-2
console.log(y)

//6.Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)
let x1 =2
let x2 =6 
let y1=2
let y2= 10

// a=2
// b=6
// c=2
// d=10
m=(y2-y1)/(x2-x1)
console.log(m)

//7.Compare the slope of above two questions.

//8.Calculate the value of y (y = x2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.
// y=2*x + 6*x + 9
// let xo=prompt("enter value of xo")
let xo=-3
y=Math.pow(xo,2) + 6*xo + 9

console.log(y)

/*9.Writ a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?
Enter hours: 40
Enter rate per hour: 28
Your weekly earning is 1120 */
// let hours=prompt("enter hours")
// let ratePerHour=prompt("enter rate per hour")
// let pay= hours*ratePerHour
//  alert(`Your weekly earning is ${pay}`)

//10.If the length of your name is greater than 7 say, your name is long else say your name is short.
let namee="Esther"
namee.length>7
?console.log(`your name is long`)
:console.log(`your name is short`)

/*11.Compare your first name length and your family name length and you should get this output.
let firstName = 'Asabeneh'
let lastName = 'Yetayeh'
Your first name, Asabeneh is longer than your family name, Yetayeh */
let firstNamee = 'Asabeneh'
let lastNamee = 'Yetayeh'
firstName.length > lastName.length
?console.log(`Your first name,${firstNamee} is longer than your family name, ${lastNamee}`)
:console.log(`Your first name,${firstNamee} is longer not than your family name, ${lastNamee}`)

/*12.Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.
let myAge = 250
let yourAge = 25
I am 225 years older than you.*/

let myAge = 250
let yourAge = 25
let diff= myAge-yourAge
console.log(`I am ${diff} years older than you`)

/*13.Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.
Enter birth year: 1995
You are 25. You are old enough to drive

Enter birth year: 2005
You are 15. You will be allowed to drive after 3 years. */

// let user= prompt("Enter your year")
// user>=18
// ?console.log(`Allow the user to drive`)
// :console.log(`Wait a certain amount of years`)


/*14.Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years
Enter number of years you live: 100
You lived 3153600000 seconds. */

// let noww=100
// const second=Date. getSecond()
// let minute=noww.getMinutes()

// console.log(second*100)

/*15.Create a human readable time format using the Date time object
i.YYYY-MM-DD HH:mm
ii.DD-MM-YYYY HH:mm
iii.DD/MM/YYYY HH:mm
*/
let yeear=now.getFullYear()
let day=now.getDay()
let month=now.getMonth()
let hour=now.getHours()
let minutes=now.getMinutes()
let date=`${yeear}-${month}-${day} ${hour}: ${minutes}`
let date1=`${day}-${month}-${yeear} ${hour}:${minutes}`
let date2=`${day}/${month}/${yeear} ${hour}:${minutes}`
console.log(date)
console.log(date1)
console.log(date2)
   //Exercises: Level 3

/*1.Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )
YYY-MM-DD HH:mm eg. 20120-01-02 07:05  */
let year1=now.getFullYear()
let day1= now.getDay()
let month1=now.getMonth()
let hour1=now.getHours()
let minutes1=now.getMinutes()
let datee=`${year1}-${("00" + month1).slice(-2)}-${("00"+ day1).slice(-2)} ${("00"+ hour1).slice(-2)}: ${("00"+ minutes1).slice(-2)}`
console.log(datee)