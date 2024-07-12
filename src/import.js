import { User } from './User.js';

let us = new User();

us.addUser('Diego','123456')
us.addUser('Die','1236')
us.addUser('ego','12345')

us.getUsers().map(u => {
    if(u.userName === 'Diego' && u.password === '123456'){
        console.log(true)
    }
})