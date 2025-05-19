function appendToDisplay(value) {
    const display = document.getElementById('display');
    if (display.value == '0') {
        display.value = value;
    } else {
        display.value += value;
    }
}

function deleteLast() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
    if (display.value == '') {
        display.value = '0';
    }
}

function clearDisplay() {
    document.getElementById('display').value = '0';
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        if((display.value).includes('.')){
        display.value = (eval(display.value)).toFixed(2);
        }else{
            display.value = eval(display.value);
        }
    } catch (e) {
        display.value = 'Error';
    }
}



