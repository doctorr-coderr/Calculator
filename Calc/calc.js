const display = document.getElementById('display');

function clickToDisplay(input) {
    if(display.value === "Error" || display.value === 'undefined' || display.value === 'Infinity' || display.value === '0'){
        display.value = '' + input;

    }else if( showLimit()){
        return
     }
    else{
        display.value += input;
    }
    updateDisplay()
    

    display.scrollLeft = display.scrollWidth;
}

function showLimit() {
    if( display.value.length >= 16){
        alert("Limit reached. Cannot enter more than 16 characters.");
        return true;
    }

    return false;
}



function updateDisplay() {
    if (display.value.length >= 13) {
        display.style.fontSize = "30px";
    } else {
        display.style.fontSize = "40px";
    }
}


function clearDisplay() {
    display.value = '';
}

function deleteLast() {
    if (display.value === "Error" || display.value === 'undefined' || display.value === 'Infinity'){
        display.value = '';
    }else{
        display.value = display.value.slice(0, -1);
    }
}

function calculate() {
    try {
        let expression = display.value.replace(/%/g, '*0.01');
        display.value = eval(expression);
    } catch (error) {
        display.value = 'Error';
    }
}
