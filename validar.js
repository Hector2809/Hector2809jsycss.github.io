function validar(form){
    
    //validar nombre
    let nombre=form.nombre.value.trim()
    if(nombre==""){
        alert("Por favor, ingresa un nombre válido")
        return false
    }

    //validar edad
    let edad=form.edad.value.trim()
    if(edad===""|| isNaN(edad)|| edad<=0){
        alert("Por favor, ingrese una edad válida")
        return false
    }

    //validar sexo
    let sexo=form.sexo.value
    if(sexo==""){
        alert("Por favor, ingrese un sexo")
        return false
    }

    //validar deporte
    let deporte=form.deporte.value
    if(deporte=="ninguno"){
        alert("Por favor, ingrese un deporte")
        return false
    }

    //si todo es válido
    return alert("Datos correctos")
}