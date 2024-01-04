//myfunc
function print(value){
    console.log(value)
}
adress ={
    street: 'johncena road',
    city: 'niger',
    zipcode: '1221'
}

function showAdd(address){
    for (let key in address){
        console.log(key, address[key])
    }
}

// showAdd(adress)

//factory function
function adFunc(street,city,zipcode){  
    return{
        street: street,
        city,
        zipcode
    }
}

const afunc = adFunc('johncena road','niger','1221')

// console.log(afunc)

//constructor func
function AdFunc(street,city,zipcode){
    this.street = street,
    this.city = city,
    this.zipcode = zipcode
}

const anotherfunc = new AdFunc('johncena road','niger','1221')
const anotherfunc2 = new AdFunc('johncena road','niger','1221')

function areEqual(j, c){
    if (j == c){
        console.log('my jaguar is a canivore')
    }else{
        console.log('my jaguar is not a canivore')
    }
}

// const jaggg = areEqual(anotherfunc,anotherfunc2  )

function areSame(j, c){
    if (j === c){
        console.log('my jaguar is a canivore')
    }else{
        console.log('my jaguar is not a canivore')
    }
}
//return statement can returns true or false
// const jagggg = areSame(anotherfunc,anotherfunc2 )
// console.log(anotherfunc)


let ablog = {
    Title: 'Jonah\'s Essay',
    Body: 'This is an essay that jonah wrote when he was a child, he was young and naive so he didnt really know what he wrote, please forgive him',
    Author: 'Jonah Camel',
    Views: 4,
    comments: [{ // since comments are plenty it should be an array
        author: 'James Camel',
        Body: 'I helped him write it'
    }],
    isLive: true  
}
function ConstBlog(Title,Body,Author,){
    this.Title = Title, 
    this.Body = Body,
    this.Author = Author
}

const anotherBlog = new ConstBlog('Jonah\'s Essay',' please forgive him','Jonah Camel')
// console.log(anotherBlog)
print(anotherBlog)

























