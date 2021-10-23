function addSelect() {

    let fldsetfg = document.createElement("fieldset");

    let lablBasilisco = document.createElement("select");
        lablBasilisco.id = "opciones";
        lablBasilisco.name = "opciones";

        let basilisco1 = document.createElement("option");
            basilisco1.value = "1";
        let basilisco1tx = document.createTextNode("Avión");
        basilisco1.appendChild(basilisco1tx);

        let basilisco2 = document.createElement("option");
            basilisco2.value = "2";
        let basilisco2tx = document.createTextNode("Tren");
        basilisco2.appendChild(basilisco2tx);

        let basilisco3 = document.createElement("option");
            basilisco3.value = "3";
        let basilisco3tx = document.createTextNode("Bus");
        basilisco3.appendChild(basilisco3tx);

        let basilisco4 = document.createElement("option");
            basilisco4.value = "4";
        let basilisco4tx = document.createTextNode("Misil hipersónico");
        basilisco4.appendChild(basilisco4tx);

        lablBasilisco.appendChild(basilisco1);
        lablBasilisco.appendChild(basilisco2);
        lablBasilisco.appendChild(basilisco3);
        lablBasilisco.appendChild(basilisco4);

        fldsetfg.appendChild(lablBasilisco);
        formulario.appendChild(fldsetfg)

}