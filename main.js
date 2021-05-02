//Converts Integer array into an array of strings representing the phonetic equivalent of the integer
function convertArray(intArray){

}

//Converts single integer to phonetic equivalent (e.g 123 will become OneTwoThree)
function convertInt(x){

}

//Prints a given array of strings to stdout
function printArray(stringArray){
    //Create a string to store the output
    var output = "";
    
    //Loop through the array stringArray and add the value to the output string
    for (let i = 0; i < stringArray.length; i++){
        //If the element being added to output is the last element, don't add ", " to the end
        if (i == stringArray.length - 1){
            output += stringArray[i];
        }
        //If the element being added to output is not the last element, we add ", " to the end
        else{
            output += stringArray[i] + ", ";
        }
    }

    //Print the output code to stdout
    console.log(output);
}

//Testing printArray
printArray(["One","Two","Three"]);
printArray(["One"]);