/**
 * Created by Ivaylo on 12/5/2016.
 */
import $ from 'jquery';

const kinveyBaseUrl = "https://baas.kinvey.com/";
const kinveyAppKey = "kid_HJ756tb7g";
const kinveyAppSecret = "a4127e5c68f34644b52b98e235c520e7";

function makeAuth(type) {
    switch (type) {
        case 'basic':
            return {
                'Authorization': "Basic " +
                btoa(kinveyAppKey + ":" + kinveyAppSecret),
            };
        case 'kinvey':
            return {
                'Authorization': "Kinvey " +
                sessionStorage.getItem('authToken'),
            };
        default: break;
    }
}

function get(moduleUrl, url, auth) {
    const kinveyLoginUrl = kinveyBaseUrl + moduleUrl + "/" + kinveyAppKey + "/" + url;
    const kinveyAuthHeaders = makeAuth(auth);

    return $.ajax({
        method: "GET",
        url: kinveyLoginUrl,
        headers: kinveyAuthHeaders
    });
}


function post(moduleUrl, url, data, auth) {
    const kinveyLoginUrl = kinveyBaseUrl + moduleUrl + "/" + kinveyAppKey + "/" + url;
    const kinveyAuthHeaders = makeAuth(auth);

    let request = {
        method: "POST",
        url: kinveyLoginUrl,
        headers: kinveyAuthHeaders
    };

    if (data !== null) {
        request.data = data;
    }
    return $.ajax(request);
}

function update(moduleUrl, url, data, auth) {
    const kinveyLoginUrl = kinveyBaseUrl + moduleUrl + "/" + kinveyAppKey + "/" + url;
    const kinveyAuthHeaders = makeAuth(auth);

    let request = {
        method: "PUT",
        url: kinveyLoginUrl,
        headers: kinveyAuthHeaders,
        data: data
    };

    return $.ajax(request);
}

export {get, post, update};