console.log('hello javascript')

// Using Objects in javascript:
let personObject = { // objects literal
    name: 'John',
    class: 'FirstJava',
    draw: function(){ // a function inside an object = method

    }
};

//Factory function
// function createCircle(radius){ // uses camel casing // uses : sign when assigning
//     return{ // setp 2: return statement either this or put the return statement at the bottom
//         radius, // myradius: radius but you can put only he variable
//         draw: function(){ 
//             console.log('this is the draw method iinside the crete circle function')
//         } 
//     }
// }

// to call the function:
// const acircle = createCircle(1); // or console.log(createCircle1)
// console.log(acircle)

//Constructor function
// function Circle(radius){ //uses pascal notation // uses = sign when assigning
//     this.radius = radius
//     dragon = function(){
//         console.log('this is the draw method iinside the crete circle function')
//     }
// }

// to call the function:
// const ConstFunc = new Circle(1);
// console.log(ConstFunc)


// data types diffrences
//ptimitive
// let x = 10;
// let y = x;

// x = 20;
// console.log(x); // prints out 20
// console.log(y);// prints out 10 // this happens because they ar not dependent on each other, the value is copied an put in y so after than x doesn t affect y


//refrence
// let myx = {value: 10};
// let myy = x;

// myx.value = 20;
// console.log(x); // prints out 20
// console.log(y); // prints out 20 because An object is stored in the memory and the adress of the memory is stored in the object


// testing primitive data types
// let num = {value: 10};

// function increase(num){
//     num.value= num.value + 1;
// }
 
//   let john = increase(num)
//   console.log(num)

// to iterate through an object:
// const circle = {
//     radius: 1,
//     diameter : 7
// }
// for(let key in circle)
//     {console.log(key, circle[key])}  //, circle[key]- i.e the bracket notation used to print the valuse too

// for (let entries of Object.entries(circle))
//     {console.log(entries)}


// if ('radius' in circle) // in key word: used to check a value in an object
//     {console.log('yes')} 
// else{console.log('no')}

// using templates literals
// const john = `thi is 
// 'akapn' micheal`