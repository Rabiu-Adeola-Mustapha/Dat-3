/*for ( i = 20; i<=100; i +=10){
 document.write(`<br><br> ${i}`)
} */
 

// program counting down to one and sayin merry christmass

 let x = document.getElementById("put")

 function reduce(){
   
if ( x.value == ""){

    alert("Please enter a digit")
}

    else {
    for ( i = x.value; i>=0; i -=1 ){

        document.write(` <br> <br> ${i}`)

        if (i == 0){

            document.write("MERRYCHRISTMAS")
        }


    }

}



 }



