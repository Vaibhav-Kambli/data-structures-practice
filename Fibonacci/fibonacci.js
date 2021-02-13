const fibo = (num) => {
    if(num == 0 || num == 1){
        return num
    }
    return fibo(num - 1) + fibo(num - 2)
}

console.log(fibo(12))
console.log(fibo(13))
console.log(fibo(14))
console.log(fibo(15))
console.log(fibo(11))