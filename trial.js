
const boundary = function(n){
    if( (20 <= n ) && ( n<= 100) || ( n===400) ){
        return true
    } else {
        return "error" 
    }
}

console.log(boundary(155))