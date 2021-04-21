const memoizationFact = (f) => {
    let memory = {};
    return function() {

        let result = f.apply(this, arguments);

        if (arguments[0] in memory) {
            console.log("Found in memory");
            return memory[arguments[0]];
        } else {
            console.log("No matches found in memory. Calculating...");
            memory[arguments[0]] = result;
            return memory[arguments[0]];
        }
    }
}

let factorial = function fact(n) {
    return (n != 1) ? n * fact(n - 1) : 1;
}

factorial = memoizationFact(factorial);

console.log(factorial(5));
console.log(factorial(5));