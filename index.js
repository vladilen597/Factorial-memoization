let fn = 1;
let i = 1;

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
            console.log(memory[n]);
            return memory[n];
        } else {
            console.log("No matches found in memory. Calculating...");
            let result = fact(n);
            memory[n] = result;
            console.log(result);
            return memory[n];
        }
    }
}

const newMemoFact = memoizationFact();

newMemoFact(20);
newMemoFact(20);