//Converts Integer array into an array of strings representing the phonetic equivalent of the integer
function convertArray(intArray){
    //String to store converted list
    var phoneticArray = []
    
    //Loop through intArray and convert each integer into the correct phonetic equivalent, then add this to the ph
    for (let i = 0; i < intArray.length; i++){
        phoneticArray.push(convertInt(intArray[i]));
    }

    //Return the array of strings with the phonetic equivalents of each integer
    return phoneticArray;
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

//Tests for convertArray
var arr = [3, 25, 209];
var arr1 = [10, 300, 5];
var arr2 = [1234, 56789, 0, 123, 234, 567, 89];

var converted1 = convertArray(arr);
var converted2 = convertArray(arr1);
var converted3 = convertArray(arr2);

printArray(converted1);
printArray(converted2);
printArray(converted3);