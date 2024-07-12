import {User} from './User.js';

let user = new User();

const createUser = async (evento)=>{
    evento.preventDefault();
    const userName = document.getElementById('userName').value.trim();
    const password = document.getElementById('password').value.trim();


    if(user.addUser(userName,password)){
        alert('usuario agregado con exito')
    }else{
        alert('ingrese otra vez los usuarios')
    }
    
}   

const registerUser = document.getElementById("registerUser")
registerUser.addEventListener('click', createUser)

