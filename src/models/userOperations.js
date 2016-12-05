/**
 * Created by Ivaylo on 12/5/2016.
 */
import * as requester from './requests'

function saveSession(userInfo){
    let userAuth = userInfo._kmd.authtoken;
    sessionStorage.setItem('authToken', userAuth);
    let userId = userInfo._id;
    sessionStorage.setItem('userId', userId);
    let username = userInfo.username;
    sessionStorage.setItem('username', username);
}

function login(username, password, callback){
    let userData = {
        username: username,
        password: password
    };

    requester.post('user','login', 'basic',userData)
        .then( (response)=>{
            saveSession(response);
            callback(true);
        })

}

function register(username, password, callback){

    let userData = {
        username: username,
        password: password
    };

    requester.post('user','', userData, 'basic')
        .then( (response)=>{
            saveSession(response);
            callback(true);
        })

}

function logout() {
    sessionStorage.clear();
}

export {login, register, logout};