const createUser = async (evento)=>{
    evento.preventDefault();

    const nombre = document.getElementById('nombres').value.trim();
    const apellido = document.getElementById('apellidos').value.trim();
    const userName = document.getElementById('userName').value.trim();
    const password = document.getElementById('password').value.trim();

    addUser(nombre,apellido,userName,password)
    
}   

const registerUser = document.getElementById("registerUser")
registerUser.addEventListener('click', createUser)

export function addUser(nombre,apellido,userName,password){
    let listUser = []

    const user = {
        nombre: nombre,
        apellido: apellido,
        userName: userName,
        password: password
    }

    listUser.push(user)

    return listUser
}