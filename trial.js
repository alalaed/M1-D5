const giveMeRandom = function(n){
        let array = []
    
        for (i=0; i<=n; i++){
    
            let x = Math.random()
            let y = x*10
            let z = Math.floor(y)
            array.push(z)
        }
        return array

}

        console.log(giveMeRandom(6))

        let sum = giveMeRandom(6)
        let j = 0
        for (i=0; i<sum.length; i++){
                if(sum[i]>5){
                     j+= sum[i]}   
                   else
                       continue    

                        
                }
                console.log (j)  
        

       
               
               
       

    
   
    