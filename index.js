let result = "";

window.onload = function() {
    result = document.getElementById('result');
};

function c_click() {
    result.value = "0";
}

function num_click(val) {
    if(result.value == "0" && val == "0"){
        result.value = "0";
    }else if (result.value == "0" && val == "."){
        result.value = "0.";
    }else if(result.value == "0"){
        result.value = val;
    }else{
        result.value += val;
    }
}

function ope_click(val) {
    if(is_ope_last()){
        result.value = result.value.slice(0, -1) + val;
    }else{ 
        result.value += val;
    }
}

function equal_click(){
     if(is_ope_last()){
         result.value = result.value.slice(0, -1);
     }else{
         result.value = eval(result.value)
     }
    
}


function is_ope_last(){
    return ["+","-","*","/"].includes(result.value.toString().slice(-1));
}