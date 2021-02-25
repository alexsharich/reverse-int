module.exports = function reverse (num) {
    let result = Math.abs(num)
    return (String(result).split('').reverse().join('')) 
}

