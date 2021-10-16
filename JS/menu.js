
function menu(){
    let menu = 
    "<input type='button' id='btn_prueba' onclick='prueba()' value='Formulario'/>"


    div1.innerHTML = menu
}
//que vevera ul y luego un li
function prueba(){
    let form1 = document.createElement("h1")
    let text1 = document.createTextNode("Prueba de cosas")
    form1.appendChild(text1)
    
    div1.appendChild(form1)
    
}
