var checkOp = false;
function getValue(){
    return document.getElementById("result");
}
function setNum(num){
    var r = getValue();
    if(r.value !== "0"){  
        r.value += num;
    }
    else{
        r.value = "";// agr screen p sirf 0 bachega to usko clear kia h ta k agr koi number input ho to 0 shrow me na ay
        r.value += num;
    }
}

function clearResult(){
    var r = getValue();
    r.value = "";
}
function delResult(){
    var r = getValue();
    r.value = r.value.slice(0,r.value.length - 1);
}

function getOperator(op){
    if(getValue().value != ""){
        if(op === "0" && getValue().value !== "0"){
            setNum(op);
        }
        else if(op === "+" && getValue().value.slice(-1) != "+"){
            setNum(op);
        }
        else if(op === "-" && getValue().value.slice(-1) != "-"){
            setNum(op);
        }
        else if(op === "*" && getValue().value.slice(-1) != "*"){
            setNum(op);
        }
        else if(op === "/" && getValue().value.slice(-1) != "/"){
            setNum(op);
        }
    }
}

function calAns(){
    var r = getValue();
    r.value = eval(r.value);
}


