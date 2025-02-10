var array =[11,22,33,44];
var [x,y]=array; //x=11;y=22
console.log("x=",x);
console.log("y=",y);

var [a,b,c] = array;
console.log("a=",a);
console.log("b=",b);
console.log("c=",c);
//object
const person ={
    name:"Nguyen Duy",
    age:25,
    city:"New York"
};
console.log(person.name);//NguyenDUy
console.log(person.age);//25
console.log(person.city);//new york

//Cach khac
const{name,city}=person;
console.log(name);
console.log(city);
