var num1, num2, num3, operator;

function evaluateId(){
    num1 = parseInt(document.getElementById("numEntry1").value);
    num2 = parseInt(document.getElementById("numEntry2").value); 

    var operator = document.getElementsByName('operatorRadio');
    var op_value;
    for(var i = 0; i < operator.length; i++){
        if(operator[i].checked){
            op_value = operator[i].value;
        }
    }
    if(op_value == "plus")
        num3 = num1+num2;
    if(op_value == "minus")
        num3 = num1-num2;
    if(op_value== "multi")
        num3 = num1*num2;
    if(op_value== "divide"){
        if (num2 == 0){
            alert("Can not divide by 0.");
            return -1;
        }
        num3 = num1/num2;
    }
   // alert(num3);
    document.getElementById("result").value = num3;
    num1 = num3;
    num3 = 0;
    document.getElementById("numEntry1").value = num1;
}

    
