function factorial(n) {
    if (n < 0) {
        return "Error: Negative numbers don't have a factorial";
    }
    function recurseFactorial(x) {
        if (x === 0 || x === 1) {
            return 1;
        }
        return x * recurseFactorial(x - 1);
    }
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }

    return recurseFactorial(n) + result;  
}

console.log(factorial(5)); 
