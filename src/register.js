const createUser = async (evento)=>{
    evento.preventDefault();
    const userName = document.getElementById('userName').value.trim();
    const password = document.getElementById('password').value.trim();
    
}   

const registerUser = document.getElementById("registerUser")
registerUser.addEventListener('click', createUser)

