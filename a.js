

const giveMeRandom = function(n){
    for (i=0; i<=n; i++){

        let array2 = []
        let array = []
        let x = Math.random()
        let y = x*10
        let z = Math.floor(y)
        array2 = array + array.splice(1,0,z)
        console.log(array2)
        
    }
    
    
}
giveMeRandom(6)