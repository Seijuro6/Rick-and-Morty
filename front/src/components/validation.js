const validate = (userData)=>{
    let errors = {}

    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userData.username)){
        errors.username = 'El email es invalido'
    }
    if (!userData.username) {
        errors.username = 'Username es requerido'
    }
    if (userData.username.length > 35) {
        errors.name = 'el Nombre debe tener menos de 35 caracteres'
    }
    if (!userData.password.match(/\d/)) {
        errors.password = 'Debe contener al menos un numero'
    }
    if (userData.password.length < 6 && userData.password.length > 10) {
        errors.password = 'Debe contener entre 6 y 10 caracteres'   
    }
    return errors
}


export default validate;