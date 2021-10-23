function checkbox(){
    let nodos = div1.childNodes
    let num = nodos.length
    for(let a=4;a<num;a++){
        let nodo = nodos[a]
        let namer = nodo.name
        if( namer = "formulario"){    
    let espac = document.createElement("br")
    let espac1 = document.createElement("br")
    let espac2 = document.createElement("br")
    let espac3 = document.createElement("br")

    let input1 = document.createElement("input")
    input1.type = "checkbox"
    input1.name = "extra"
    input1.value = "1"

    let form1 = document.createElement("p")
    let text1 = document.createTextNode("Asiento Extra")
    form1.appendChild(text1)

    let input2 = document.createElement("input")
    input2.type = "checkbox"
    input2.name = "extra"
    input2.value = "2"

    let form2 = document.createElement("p")
    let text2 = document.createTextNode("Maleta Extra")
    form2.appendChild(text2)

    let input3 = document.createElement("input")
    input3.type = "checkbox"
    input3.name = "extra"
    input3.value = "3"

    let form3 = document.createElement("p")
    let text3 = document.createTextNode("Comida vegana")
    form3.appendChild(text3)

    let input4 = document.createElement("input")
    input4.type = "checkbox"
    input4.name = "extra"
    input4.value = "4"

    let form4 = document.createElement("p")
    let text4 = document.createTextNode("VideoJuegos PS5")
    form4.appendChild(text4)



    let input5 = document.createElement("input")
    input5.type = "checkbox"
    input5.name = "extra"
    input5.value = "5"

    let form5 = document.createElement("p")
    let text5 = document.createTextNode("Masaje balines")
    form5.appendChild(text5)

    let fielche = document.createElement("fieldset")
    fielche.name = "fieldset"
    
    let forml = document.createElement("h2")

    let textl = document.createTextNode("Puedes elegir entre estas fantásticas opciones")
   
    forml.appendChild(textl)
    fielche.appendChild(forml)
    fielche.appendChild(input1)
    fielche.appendChild(text1)
    fielche.appendChild(espac)
    fielche.appendChild(input2)
    fielche.appendChild(text2)
    fielche.appendChild(espac1)
    fielche.appendChild(input3)
    fielche.appendChild(text3)
    fielche.appendChild(espac2)
    fielche.appendChild(input4)
    fielche.appendChild(text4)
    fielche.appendChild(espac3)
    fielche.appendChild(input5)
    fielche.appendChild(text5)
    formulario.appendChild(fielche)
    }
}
}


function eliminarNodo(){
    let nodos = div1.childNodes
    let num = nodos.length
        if(num > 4){
            for(let a=4;a<num;a++){
            let nodo = nodos[a]
            nodo.remove()
            }  
        }
}
/*function nomascheck(){
    let nodos = div1.childNodes
    nodos[3].remove()
}*/




