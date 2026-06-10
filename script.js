function predict(){

    let cgpa = parseFloat(
        document.getElementById("cgpa").value
    );

    let iq = parseFloat(
        document.getElementById("iq").value
    );

    let score = (cgpa * 10) + (iq / 10);

    let result = "";

    if(score >= 90){
        result =
        "Student is likely to get placed.";
    }
    else{
        result =
        "Student is unlikely to get placed.";
    }

    document.getElementById("result")
        .innerHTML = result;
}
