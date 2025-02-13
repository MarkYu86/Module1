//test1
if(sum(2,6)!= 8){
    throw new Error("test failed")
}
if(sum(2,-4)!= -2){
    throw new Error("test failed")
}
if(sum(2,0)!= 2){
    throw new Error("test failed")
}
console.log("all tests passed for sum")
//writing code
function sum(a,b){
    return a + b;
}

//test2
if(minus(6,2,3)!= 1){
    throw new Error("test failed")
}
if(minus(-3,-5,-6)!= 8){
    throw new Error("text faled")
}
if(minus(0,-5,-6)!= 11){
    throw new Error("text faled")
}
//writing code2
function minus(a,b,c){
    return a - b - c;
}
console.log("test passed for minus")

//test3
if (times(2,3,3)!= 18){
    throw new Error("text failed")
}
if (times(-3,-3,-3)!= -27 ){
    throw new Error("text failed")
}
if (times(0,3,3)!= 0){
    throw new Error("text failed")
}
//wrote code
function times(a,b,c){
    return a * b * c
}
console.log("test passed for times")
//test 4
if (divide(6,3,2)!= 1){
    throw new Error("divide not working")
};
if (divide(-3,-5,-2)!= -0.3){
    throw new Error("divide not working")
};
if (divide(8,2,2)!= 2){
    throw new Error("divide not working")
};
    
//wrote code 
function divide(a,b,c){
    if (b === 0){
       return "vaild number cannot be '0' mate:)"
    }
    return a / b / c
}
console.log(sum(25,3))
console.log(minus(90,23,6))
console.log(times(2,2,6))
console.log(divide(7,0,1))

function greet(name) {
    console.log(`Hello ${name}`);
    console.log("hello " + name)
    // Figure out wtfs ` and $
}
greet("mark")

function takenames(){
    const textContent = document.getElementById("getname").value
    alert( "Hello" + textContent)
}


let rivers = ['Mississippi', 'Amazon', 'Nile'];
let lastRiver = rivers.pop();
console.log(lastRiver); // Nile
console.log(rivers); // [ 'Mississippi', 'Amazon' ]
let firstRiver = rivers.shift();
console.log(firstRiver); // Mississippi
console.log(rivers); // [ 'Amazon' ]

// Arrays excersise
let cars = ['Toyota','Honda','Nissan','Mazda','Suzuki']
console.log(cars)

//Replace the value of the element at position 1 and 4.
// const replaced = "Ford";
// cars[1]= replaced;
// const replaced2 = "Tesla";
// cars[4] = replaced2;
cars[0] = "Ford"
cars[3] = "Tesla"
console.log(cars)

// Add a new element to the beginning of the array
cars.unshift("Subaru")
console.log(cars)

//Remove the element at the end of the array
cars.pop()
console.log(cars)

