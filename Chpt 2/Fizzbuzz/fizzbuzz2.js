for (let counter = 0; counter <= 100; counter += 1) {
    if (counter % 3 == 0 && counter % 5 == 0) {
        console.log('Fizzbuzz');
    }
    else if (counter % 3 == 0) {
        console.log("Fizz");
    } 
    else if (counter % 5 == 0) {
        console.log("Buzz");
    } 
    else {
        console.log(counter)
    }
}