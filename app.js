// equal
const equals = document.getElementById('equal');
equals.addEventListener('click', equal)

// back
const backs = document.getElementById('back')
backs.addEventListener('click', back)

// clean
const cleans = document.getElementById('clean')
cleans.addEventListener('click', clean)

// insert
const buttons = document.querySelectorAll('.button');
console.log(buttons);

// Functions
function insert(num){
    document.form.textview.value=document.form.textview.value+num
}

function equal(){
    var exp=document.form.textview.value
    if(exp){
        document.form.textview.value=eval(exp)
    }
}

function back(){
    var exp=document.form.textview.value
    document.form.textview.value=exp.substring(0,exp.length-1)
}

function clean(){
    document.form.textview.value=""
}



