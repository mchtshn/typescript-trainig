var reviews = [5, 5, 4.5, 1, 3];
var total = 0;
for (var index = 0; index < reviews.length; index++) {
    console.log("Review is " + reviews[index]);
    total += reviews[index];
}
console.log("Total is ".concat(total));
var average = total / reviews.length;
console.log("Average is ".concat(average));
