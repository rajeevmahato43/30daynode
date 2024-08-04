function a(x){
    console.log("Hello",x);
}
a`hi`;  // Another way to call a function


// Array creation
let arr1 = [1, 2, 3, 4, 5]; // dense array=> full array
let arr2 = new Array(3)  // block the size of array to 3 // sparse array
// get length of array
console.log(arr2.length)

// check array type 
Array.isArray(arr1); // true 

for (const iterator in arr2) {
    console.log("value " + iterator)  // it will not print 
    // loop iterates over the enumerable properties of an object. In the case of an empty array, there are no properties to iterate over.
}

for (const iterator of arr2) {
    console.log("value " + iterator)  //it will prints "value undefined"  3 times.
    // it iterates over the elements of an array as it have 3 element with undefined value
}
arr2 = [1, 2, 3, 4]
console.log(arr2)

/* arrays are assigned by reference. When you reassign arr to a new array, 
 the reference to the old sparse array is lost, and it becomes garbage collected
 Using 
 new Array(n) 
 creates a sparse array with a length of n but no elements
 A sparse array is an array where most of the elements are empty or have a default value (usually 0 or null)
 */

let arr3 = new Array(1, 2, 3, 4)   // it create and assign the value [1,2,3,4]
console.log(arr3)

// access by index
console.log(arr3[1])

//Edit value by index
arr3[1]=3
console.log(arr3) // modified value of arr3 

// concatenate 2 array/ merged

let arr4=arr1.concat(arr2);   // concat function returns new array We combine 2 or more array
console.log(arr4)

arr4.sort(); //after calling array.sort(), the original array will be sorted, and the function will return a reference to this modified array.
//console.log(arr5)
console.log(arr4)

// remove element from last;
arr4.pop()  //Removes the last element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
console.log(arr4)

// Added element at last
let x=arr4.push(5)  //Appends new elements to the end of an array, and returns the new length of the array.
console.log(arr4)
console.log(x)

//Remove element from start
arr4.shift()   //Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
console.log(arr4)


//Add element at start
arr4.unshift(1)    //Inserts new elements at the start of an array, and returns the new length of the array.
console.log(arr4)

//Loop array
arr4.forEach((item, index, array )=>{
    console.log(item,index)
})

let arr5=arr4.map((item,i,array)=>{
    return 1+item
}) //return new arr
console.log(arr5)

let arr6=arr4.filter((item,index,array)=> item%2==0) // it will filter the value with will match %2==0 even number 
console.log(arr6)
let arr7=arr4.every((item,index,array)=>{return typeof(item)=='number'})  // it will give true and false value if all match the true else false
console.log(arr7)

let arr8=arr4.includes(3)
console.log(arr8);
let arr9=arr4.reverse()
console.log(arr9)
let arr10=arr4.reduce((preValue, currentvalue, index,array)=>{
    return preValue+currentvalue;

})
console.log(arr10)
