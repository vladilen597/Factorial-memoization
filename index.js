function fact(n) {
    if (n != 1) {
        return n * fact(n - 1);
    }
    return true;
}

const memoizationFact = () => {
    let memory = {};
    return (n) => {
        if (n in memory) {
            console.log("Found in memory");
            return memory[n];
        } else {
            console.log("No matches found in memory. Calculating...");
            let result = fact(n);
            memory[n] = result;
            return memory[n];
        }
    }
}

const newMemoFact = memoizationFact();

console.log(newMemoFact(20));
console.log(newMemoFact(20));