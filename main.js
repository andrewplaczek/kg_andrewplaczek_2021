//Converts Integer array into an array of strings representing the phonetic equivalent of the integer
function convertArray(intArray){

}

//Converts single integer to phonetic equivalent (e.g 123 will become OneTwoThree), returns this as a string
function convertInt(x){
    //Convert integer into string
    var digits = x.toString();

    //Create a string to store phonetic equivalent of integer
    var intstring = "";

    //Loop through array of digits, build string of phonetic equivalents
    for (let i = 0; i < digits.length; i++){
        //Based on the value of the digit, add the corresponding phonetic equivalent to the string. i.e. the digit 1 would become "One"
        switch(digits[i]){
            case "0":
                intstring += "Zero";
                break;
            case "1":
                intstring += "One";
                break;
            case "2":
                intstring += "Two";
                break;
            case "3":
                intstring += "Three";
                break;
            case "4":
                intstring += "Four";
                break;
            case "5":
                intstring += "Five";
                break;
            case "6":
                intstring += "Six";
                break;
            case "7":
                intstring += "Seven";
                break;
            case "8":
                intstring += "Eight";
                break;
            case "9":
                intstring += "Nine";
                break;
        }
    }

    return intstring;
}

//Prints a given array of strings to stdout
function printArray(stringArray){
    //Create a string to store the output
    var output = "";
    
    //Loop through the array stringArray and add the value to the output string
    for (let i = 0; i < stringArray.length; i++){
        //If the element being added to output is the last element, don't add "," to the end
        if (i == stringArray.length - 1){
            output += stringArray[i];
        }
        //If the element being added to output is not the last element, we add "," to the end
        else{
            output += stringArray[i] + ",";
        }
    }

    //Print the output code to stdout
    console.log(output);
}

//Testing printArray
console.log("printArray Tests");
printArray(["One","Two","Three"]);
printArray(["One"]);

//Testing convertInt
console.log("convertInt Tests")
console.log(convertInt(3));
console.log(convertInt(25));
console.log(convertInt(209));
console.log(convertInt(1234));
console.log(convertInt(56789));