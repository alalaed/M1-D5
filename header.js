const dashes = function(title){

    let a = [ ]
  
    n = 25
    for (i = 0; i < n; i++){ 
            a.splice(1,0,"-")  
    }
    let header = a + title + a
    let x = " "
    for (i = 0; i < header.length; i++){ 
        switch (header[i]){
            case ",": break
            default: x +=header[i]
            //console.log(x)
        }
            
}console.log(x)
}
dashes("this is a heading")



