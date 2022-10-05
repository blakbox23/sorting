const bubbleSort = array => {
    for(let i=0; i<array.length; i++){
        for(let j=0; j<array.length; j++){
            if(array[j]>array[j+1]){
                [array[j+1], array[j]] = [array[j], array[j+1]]
            }
        }
    }
    return array
}

bubbleSort([9,5,47,1,])