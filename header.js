
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
            //console.log(final)
    }
    let x = " "
    for (i = 0; i < final.length; i++){ 
        switch (final[i]){
            case ",": break
            default: result +=final[i]
            console.log(result)
        }

}
dashes("this is a heading")


