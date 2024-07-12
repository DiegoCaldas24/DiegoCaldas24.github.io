export class User{
    userName;
    password;
    us;
    ps;
    users = []
    addUser(userName,password) {
        this.users.push(
            { 
            userName, 
            password
            }
        );
    }

    getUsers(){
        return this.users
    }
}