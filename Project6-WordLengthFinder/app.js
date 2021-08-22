

//print function that takes message as input

var print = (message)=>{
    document.getElementById("output").innerHTML="Length is " + message;
}

//event function that gives the string length as message to the print function

document.getElementById("btn").onclick = (event) =>{
    print(document.getElementById("str").value.length);
}