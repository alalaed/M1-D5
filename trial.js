


let title = "this is a heading"

n = (60 - title.length)/2
//console.log(n)


const dashes = function(title){

    let a = [ ]
  
    n = 5 
    for (i = 0; i < n; i++){
       
        
            a.splice(1,0,"-") 
        
    }
    //console.log ( a + title + a )
    let header = a + title + a
    //console.log(header)
    let final = header.toString()
    /*let final = " "
    for( i=0; i<header.length; i++){
            final =+ header[i]*/
            console.log(final)
    }
    
//}
dashes("this is a heading")


