// ---------------------------
// The Arrays You Will Work With
// ---------------------------
var numbers = [1,12,4,18,9,7,11,3,101,5,6];
var strings = ['this','is','a','collection','of','words'];
var instructors = [
    { firstname : 'JD', teaches : 'JavaScript'},
    { firstname : 'Tim', teaches : 'JavaScript'},
    { firstname : 'Brit', teaches : 'Ruby'},
    { firstname : 'Joe', teaches : 'iOS'},
    { firstname : 'Jake', teaches : 'JavaScript'},
    { firstname : 'Will', teaches : 'JavaScript'},
    { firstname : 'Calvin', teaches : 'JavaScript'},
    { firstname : 'James', teaches : 'Ruby'}
];



// ---------------------------
// 1. Find largest number
// ---------------------------
var largestNumber = 0

numbers.forEach(function(value){
	if(value > largestNumber){
		largestNumber = value
	}
})
console.log(largestNumber)
// ---------------------------
// 2. Find longest string
// ---------------------------
var longestString = ""

strings.forEach(function(value){
	if(value.length > longestString.length){
		longestString = value
	}
})
console.log(longestString)
// ---------------------------
// 3. Find even numbers
// ---------------------------
var evenNumbers = numbers.filter(function(value){
	return value % 2 == 0
})
console.log(evenNumbers)
// ---------------------------
// 4. Find odd numbers
// ---------------------------
var oddNumbers = numbers.filter(function(value){
	return value % 2 == 1
})
console.log(oddNumbers)
// ---------------------------
// 5. Find words that contain `is`
// ---------------------------
var isContained = strings.filter(function(value){
	return value.indexOf("is") + 1
})
console.log(isContained)
// ---------------------------
// 5. Join Both Arrays Together
// ---------------------------
var joined = numbers.concat(strings)
console.log(joined)
// ---------------------------
// 6. Use the Instructors array and find all that teach JavaScript, 
//    then sort them alphabetically
// ---------------------------
var teachesJS = instructors.filter(function(value){
	return value.teaches.indexOf("JavaScript") + 1
})
var namesOnly =[]

for (i = 0 ; i < teachesJS.length ; i++ ){
	namesOnly.push(teachesJS[i].firstname.toLowerCase())
}
namesOnly.sort()
console.log(namesOnly)
