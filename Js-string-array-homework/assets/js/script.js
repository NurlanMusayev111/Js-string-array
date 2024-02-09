"use strict";

// 2) Parametr olaraq gelen stringi tersine ceviren method yazin. Meselen: Cavid gelirse divaC qaytarsin

function changeText(string){
    let result = "";

    for(let i = string.length - 1;i >= 0;i--){
        result += string[i]
    } 

    return result;
}


// console.log(changeText("Nurlan"));








// 3) Parametr olaraq gelen yasha gore hansi ilden olduqugunu gosteren function yazin. Meselen 30 gelirse function geriye 1993 qaytarmalidir



function calcAge(age){
    return 2024 - age;
}


console.log(calcAge(57));






// 4) Personlardan ibaret objectleriniz olacaq. (id,name,fullName,age,salary) . Ashagidaki tasklari array qebul eden functionlar seklinde yazin.
//      1) Personlarin umumi sayini geri qaytaran.
//      2) Personlarin maashlarinin umumi ortalamasini qaytaran.
//      3) Personlarin fullName-ne gore search function-u yazin. (elave parametr olaraq searchText de qebul edecek)









let person1 = {
    id:1,
    name:"Nurlan",
    fullName:"Musayev Nurlan",
    age:22,
    salary:3500
}

let person2 = {
    id:2,
    name:"Berat",
    fullName:"Berat Ozdemir",
    age:28,
    salary:1700
}

let person3 = {
    id:3,
    name:"Ugurcan",
    fullName:"Ugurcan Cakir",
    age:29,
    salary:3100
}

let person4 = {
    id:4,
    name:"Enis",
    fullName:"Enis Destan",
    age:32,
    salary:4000
}


const persons = [person1,person2,person3,person4];



//1 

function countPerson(array){
    return array.length
}


// console.log(countPerson(persons));



//2

function avgSalary(array){    
    
    let sum = 0;

    for(let i = 0;i<array.length;i++){
        sum += array[i].salary
    }

    let average = sum / array.length;
    return average;
    
}


// console.log(avgSalary(persons));




//3 

function findPerson(searchText,array){

   for (const item of array) {
        if(item.fullName.includes(searchText.toLowerCase())){
            console.log(`${item.name} - ${item.age}`);
        }
   }

}


// findPerson("a",persons);