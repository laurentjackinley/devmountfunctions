function hasUniqueChars(word){
    let uniqueChars = new Set([])
    for (let i = 0; i < word.length; i++){
    uniqueChars.add(word[i])
    }
    return uniqueChars.size === word.lenght
}
function hasUniqueChars(word) {
    let obj = {};
    for (let i = 0; i <word.length; i++) {
        let uChar = word[i];
        if (obj[uChar]) return false;
        obj[uChar] = true;
    }
    return true;
}

console.log(hasUniqueChars('Rerun'))
console.log(hasUniqueChars('boolean'))

console.log(hasUniqueChars("Monday"))
console.log(hasUniqueChars("Moonday"))
console.log(hasUniqueChars("Bob"))
