// const sign=Symbol("234");

// const JsUser={
//     name:"Shreya",
//     "Full Name":"Shreya Kumari",
//     [sign]:"Key1",
//     age:22,
//     location:"Bihar",
//     email:"AAAAAa@gmail.com",
//     loginDays:["Mon","Sun"]

// }
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["Full Name"]);
// console.log(JsUser[sign]);


// const regular={
//     email:"SSs@gamil.com",
//     fullName:{
//         UserName:{
//             name:"Shreya",
//             LastName:"Kumari"

//         }
        

//     }


 

// }
// console.log(regular.fullName);

const obj1={1:"a",2:"b"};

const obj2={3:"a",4:"b"};
//const obj3={obj1,obj2};
const obj3=Object.assign({},obj1,obj2);
console.log(obj3);
