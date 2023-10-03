function uzun(originalText){
    let originalArray = originalText.split(" ")
    console.log(originalArray)     //1
    let lengthArray = []
    for (i=0 ; i<originalArray.length; i++){
        lengthArray[i] = originalArray[i].length
    }
    console.log(lengthArray)      //2
    let efe = lengthArray.slice()
    let sortedArray = lengthArray.sort((a,b) => b-a)
    console.log("sortedArray", sortedArray)
    console.log("lengthArray", lengthArray)
    console.log("efe", efe)
    let indexOfLongest = efe.indexOf(sortedArray[0])
    console.log(originalArray[indexOfLongest])       //5
}
uzun ("Bugün ssssssssshava çok güzelmiş")
