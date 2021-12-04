

let title = "this is a heading"

n = (60 - title.length)/2
console.log(n)


const dashes = function(title){

    let a = [ ]
    let header = []
    n = 5 
    for (i = 0; i < n; i++){
       
         
            a.splice(1,0,"-") 
        
    }
    console.log ( a + title + a )
    
}
dashes("this is a heading")

