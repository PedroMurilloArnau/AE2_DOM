
//Creamos los nodos del formulario
function crearNodosDom(){//Funcion para crear el formulario entero
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
                placeholder: "Introduce tu numero de tlf"
            },
            {
                id: "continente1",
                type: "radio",
                name: "continente",
                value: "Africa"            
            },            
            {
                id: "continente2",
                type: "radio",
                name: "continente",
                value: "Europa"            
            },
            {
                id: "continente3",
                type: "radio",
                name: "continente",
                value: "Asia"            
            },
            {
                id: "continente4",
                type: "radio",
                name: "continente",
                value: "America"            
            },
            {
                id: "pais1",
                type: "radio",
                name: "capital",
                value: "Marruecos"            
            },            
            {
                id: "pais2",
                type: "radio",
                name: "capital",
                value: "Espa??a"            
            },
            {
                id: "pais3",
                type: "radio",
                name: "capital",
                value: "Tailandia"            
            },
            {
                id: "pais4",
                type: "radio",
                name: "capital",
                value: "Colombia"            
            }
        ]
    });

    
    let label2 = document.createElement("label");
        label2.id = "eligeContinente";
    let textLabel2 = document.createTextNode("Elije el Continente");

    label2.appendChild(textLabel2);
    formulario.appendChild(label2);

    let label3 = document.createElement("label");
        label3.id = "eligePais";
    let textLabel3 = document.createTextNode("Elije el Pais");

    label3.appendChild(textLabel3);
    formulario.appendChild(label3);
    

    
}


function crearForm ({name , method, action, inputs = []}){ //Funcion para crear el formulario que recibir?? por par??metro los datos necesarios
    let formulario = document.createElement("form");
        formulario.name = name;
        formulario.method = method;
        formulario.action = action;
        document.getElementById("div1").appendChild(formulario);//a??adimos al div el formulario
        inputs.forEach(function (input){//con el for, recorremos todos los campos del input
            crearCampo(formulario, input);//creamos en el formulario los input
        })
}

function crearCampo (form, {type, id, name, placeholder, value}){//funcion para crear campos
    const fieldWrapper = document.createElement("div"); // creamos un div y lo asignamos a una variable
    fieldWrapper.classList.add("campo", `campo-${id}`); //Le agrego al div el class comun campo y campo-id, que depender?? del valor del id

    const newInput = document.createElement("input"); //creamos un input y lo asignamos a una variable
        newInput.id = id;
        newInput.type = type;
        newInput.name = name;
        newInput.placeholder = placeholder;

    const newLabel = document.createElement("label");
        newLabel.setAttribute('for',id);
        newLabel.innerText = type == 'radio'?value:name;

    fieldWrapper.appendChild(newLabel);//Agrego el Label al div
    fieldWrapper.appendChild(newInput);//Agrego el Input al div
    form.appendChild(fieldWrapper);//Agrego al form el div con el campo creado
}
/*
{
    id: "continente",
    type: "radio",
    name: "continente",
    value: "EEUU"            
}
*/





