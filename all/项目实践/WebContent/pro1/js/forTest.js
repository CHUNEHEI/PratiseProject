var a=new Object();
var b=a;
a.name="kk";

console.log(a.name);
console.log(b.name);
a.name=2;
console.log(a);
console.log(b);