export class User{
    userName;
    password;
    users = []

    constructor(){}

    addUser(userName,password) {
        if(!(userName === '' && password === '')){
            this.users.push(
                { 
                userName, 
                password
                }
            );
            return true;
        }
        return false
    }

    getUsers(){
        return this.users
    }
}