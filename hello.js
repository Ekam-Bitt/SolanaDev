console.log("hello world");

const a=10;
const b=12;

if(a>b){
    console.log(a + " is greater than b " + b);
}else{
    console.log(b + " is greater than b " + a);
}


const n = 10;

for(let i=0; i<n; i++){
    console.log(i);
}

try{
    throw new Error("why bruh?")
}catch(e){
    console.log(e);
}

function print(n){
    console.log(n);
}