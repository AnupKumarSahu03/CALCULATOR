let inputBox = document.getElementById('inputBox')
let inputBox1 = document.getElementById('inputBox1')
let buttons = document.querySelectorAll('button')

let string = ''

buttons.forEach(element =>{
    element.addEventListener('click',(b)=>{
        if(b.target.innerText == '='){
             
             let result = eval(string);

             if (Number.isInteger(result)) {
                 string = String(result); 
             } else {
                 string = String(result.toFixed(5)); 
             }
            inputBox.value = string;
        }
        else if(b.target.innerText == 'AC'){
                string =''
                inputBox.value = string;
                inputBox1.value = string;
        }
        else if(b.target.innerText == 'DEL'){
                string = string.substring(0,string.length-1)
                inputBox.value= string;
                inputBox1.value = string;
        }
        else{
            string += b.target.innerText
            inputBox1.value = string;
            inputBox.value = string;
        }
    })
})
