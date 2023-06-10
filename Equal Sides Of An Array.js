function findEvenIndex(arr){
    let i = 0
    let nIndex = 0
    let isEven = false

    for (i = 0 ; i < arr.length && isEven == false; i++){

        let sumLeftOfN = 0
        let sumRightOfN = 0

        for(iLeft = 0; iLeft < i; iLeft++){
            sumLeftOfN += +arr[iLeft]
        }

        for(iRight = i+1; iRight < arr.length; iRight++){
            sumRightOfN += +arr[iRight]
        }

        if(sumLeftOfN === sumRightOfN){
            isEven = true
            nIndex = i
        } else{
            nIndex = -1
        }

    }

    return nIndex
}