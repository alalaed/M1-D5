

for (i=0; i<10; i++){
    let x = Math.random()
    let y = x*10
    let z = Math.floor(y)

console.log(z)
}

const crazyDiff = function(n){
    if ( n <19){
        let x = (n-19)*-1
    }else {
        x = (n-19)*3
    }
    console.log(x)
}

crazyDiff (34)