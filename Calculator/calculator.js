var result = document.getElementById('result--container')

function display(v){
   result.value+=v;
   console.log(result)
}

function clearAll(){
    result.value=""
}

function del(){
    result.value = result.value.toString().slice(0,-1)
}

function Equals(){
    var final = eval(result.value)
    result.value=final
}