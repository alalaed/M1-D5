
const check3and7 = function (n){
    if( n%3===0  || n%7===0){
        return " Passes"
    } else {
        return "denied"
    }
}

console.log(check3and7(46))