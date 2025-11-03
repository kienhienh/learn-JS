function calculate(operator){
    const num1= parseFloat(document.getElementById("num1").value);
    const num2= parseFloat(document.getElementById("num2").value);
    let result;
    if(isNaN(num1) || isNaN(num2)){
        result = "Nhập số hợp lệ!";
    } else{
        switch(operator){
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            case '/':
                result = num2 !== 0 ? num1 / num2 : "không thể chia cho 0";
                break;
        }
        if(typeof result === "number"){
            result = result.toFixed(2);
        }
    }
    document.getElementById("result").textContent = result;
}