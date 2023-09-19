// (uncomment it to use code)




// Map - jab aapko array ke har member par koi operation perform karna ho, aur har member par operation perform karna k bad usey ek naya array meh dalna hai tab hum use karta hai map ko.
// map kha structure bilkul foreach ki tarha hota hai.
// but agar ham map use karay tho return use karna nesessary hai.
//And return jo karogey wo ek imaginary array meh store hota jayagha aur end meh jab map khatam ho jaya gha tho map us imaginary array ko aapko wapas kardega so aap usaa naye variable meh use kar lo.. eg....

// var arr = [1,2,3,4,5]
// var ans = arr.map(function(val){
//     return "hello";
// });


// 1. ek array seh naya array bano jismeh agar word ki length 5 character ho tho p tag meh daalo nahito word ko span meh daalo..

// var arr = ["hello","a","apple","ankit","banana","art"];
// var ans = arr.map(function(val){
//     if(val.length === 5){
//         return `<p>${val}</p>`;
//     }
//     else{
//         return `<span>${val}</span>`
//     }
// });

// 2. Ek array of objects hai, aur us array meh hum logo ke pass kafi data hai usae ek array banao jisma sirf name ho..

// var arr = [
//     {name:"Ankit",age: 22},
//     {name:"Ankita",age: 20},
//     {name:"Akash",age: 24},
//     {name:"Huihui",pincode: 734014},
// ]

// var ans= arr.map(function(val){
//     return val.name;
// });


// Filter - Iska vi exact structure map k jesa hota hai so iska matlab filter vi Return karagha 
// aur return jo hoga wo har hallat meh ek boolean hona chahiey..
// map jo return karta tha wo hidirect save hota tha imaginary array meh 
// but filter kyuki boolean return karta hai to boolean svae na karka wo uska jagha jo us waqt value chal raha hota hai wahi save karta hai..

// var arr = [1,2,3,4,5,6];
// var ans = arr.filter(function(val){
//     if (val % 2 === 0){
//         return true;
//     }
// })

// 1. Array meh jitne bhi naam aise hai jiska naam meh (a) aah raha ho aise namo ko hata doo

// var arr = ["Ankit","Ankita","Banana","car","Fly"];

// var ans = arr.filter(function(val){
//     return !val.includes("a");
// })



// 2. Asa naamo ko remove karo jismeh do ya do seh jyada (a) aah raha ho

// var arr = ["Ankit","ankita","Banana","car","Fly"];

// var ans = arr.filter(function(val){
//     if(val.split("a").length <= 2){
//         return true;
//     }
// })