const button = document.getElementById('btn');
const form = document.getElementById('loginForm');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const errorMessage = document.getElementById('errorMessage');


button.addEventListener('click', (event)=>{
    event.preventDefault();

    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    if(username ===  'Cmargot' && password === 'Cecilia123' ){
        window.location.href = 'medicines.html' ;
    }
})
