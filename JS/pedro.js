
    function textArea (){

        let fielchep = document.createElement("fieldset")
        fielchep.name = "fieldsetPedrin"

        p = document.createElement("p")
        p.id = "p"
        ptext = document.createTextNode("Escriba sugerencias: ")
        p.appendChild(ptext)
        fielchep.appendChild(p)
    
        elem = document.createElement('textarea');
        elem.className = "textarea"
        elem.cols = 40;
        elem.rows = 10;
        elem.placeholder = "Por favor, escriba aqui sus comentarios"
        fielchep.appendChild(elem);
        formulario.appendChild(fielchep);

    }

  