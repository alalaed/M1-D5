
let median = [1,2,3,4,5,6,"butter","milk", 7,8, "apple", 9,10]


const average = function(){

        let array = []
        for(i=0; i<median.length; i++){

                if ( typeof median[i] === "number"){

                array.push(median[i])
        }
                else {continue}
        }
        let result = 0
        for(i=0; i<array.length; i++) {
        result += array[i]}
        let avg = result / array.length
        console.log(avg)
}

average()



   
    