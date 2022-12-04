let reviews : number[] = [5,5,4.5,1,3];

let total : number = 0;
for (let index = 0; index < reviews.length; index++) {
    console.log("Review is "+reviews[index]);
    total += reviews[index];
}

console.log(`Total is ${total}`);

let average : number =  total / reviews.length;

console.log(`Average is ${average}`);
