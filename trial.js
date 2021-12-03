
const check3and7 = function (n){
    if( n%3===0  || n%7===0){
        return " Passes"
    } else {
        return "denied"
    }
}

console.log(check3and7(46))

const reversString = function(s){

    let split = s.split("")
    let reversedArray = split.reverse()
    let result = reversedArray.join("")
    console.log(result)
}

reversString("ali is tired")


const upperFirst = function(s){

    let split = s.split(" ")
    for( i=0; i<split.length; i++ ){
        split[i]=split[i].charAt(0).toUpperCase( )+ split[i].slice(1)   
    }
    let capital=split.join(" ")

    console.log(capital)
}

upperFirst("ali is tired")
