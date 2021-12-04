



const giveMeRandom = function(n){
        let array = []
    
        for (i=0; i<n; i++){
    
            let x = Math.random()
            let y = x*10
            let z = Math.floor(y)
            array.push(z)
        }
        return array

}
const checkArray = function(n){
        

        let sum = giveMeRandom(n)
        console.log(sum)
        let j = 0
        for (i=0; i<sum.length; i++){
                if(sum[i]>5){
                     j+= sum[i]}   
                   else
                       continue                       
                }
                console.log (j)  
}

       
      checkArray(8)      
               
       

    
   
    