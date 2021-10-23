//Creamos los nodos del formulario
function crearNodosDom(){//Funcion para crear el formulario entero
    crearForm();
}

function crearForm ({name , method, action, inputs = []}){ //Funcion para crear el formulario que recibirá por parámetro los datos necesarios
    let formulario = document.createElement("form");
        formulario.name = name;
        formulario.method = method;
        formulario.action = action;
        document.getElementById("div1").appendChild(formulario);//añadimos al div el formulario
        inputs.forEach(function (input){//con el for, recorremos todos los campos del input
            crearCampo(formulario, input);//creamos en el formulario los input
        })
}

function crearCampo (form, {type, id, name, placeholder, value}){//funcion para crear campos
    const fieldWrapper = document.createElement("div"); // creamos un div y lo asignamos a una variable
    fieldWrapper.classList.add("campo", `campo-${id}`); //Le agrego al div el class comun campo y campo-id, que dependerá del valor del id

    const newInput = document.createElement("input"); //creamos un input y lo asignamos a una variable
        newInput.id = id;
        newInput.type = type;
        newInput.name = name;
        newInput.placeholder = placeholder;

    const newLabel = document.createElement("label");
        newLabel.setAttribute('for',id);//Programo el autofocus
        
        newLabel.innerText = type ==='radio'?value:name;//aprovechando la misma función para crear el radioButton
                                                        //le decimos que compare el type y si es radio use el value, y si no lo es, el name

    fieldWrapper.appendChild(newLabel);//Agrego el Label al div
    fieldWrapper.appendChild(newInput);//Agrego el Input al div
    form.appendChild(fieldWrapper);//Agrego al form el div con el campo creado
}

crearForm({//Llamo a la funcion para construir el formulario con los campos
    name: "formulario",
    method: "post",
    action: "#",
    inputs: [
        {
            id: "dni",
            type: "text",
            name: "Dni: ",
            placeholder: "Introduce el Dni",
        },
        {
            id: "nombre",
            type: "text",
            name: "Nombre: ",
            placeholder: "Introduce el Nombre"
        },
        {
            id: "apellidos",
            type: "text",
            name: "Apellidos: ",
            placeholder: "Introduce los Apellidos"
        },
        {
            id: "direccion",
            type: "text",
            name: "Direccion: ",
            placeholder: "Introduce tu direccion"
        },
        {
            id: "tlf",
            type: "tel",
            name: "Telefono",
            placeholder: "Introduce tu numero de telefono"
        },
        {
            id: "continente1",
            type: "radio",
            name: "continente",
            value: "africa"            
        },
        {
            id: "continente1",
            type: "radio",
            name: "continente",
            value: "europa"            
        },
        {
            id: "continente1",
            type: "radio",
            name: "continente",
            value: "Asia"            
        },
        {
            id: "continente1",
            type: "radio",
            name: "continente",
            value: "eeuu"            
        }
    ]
});


