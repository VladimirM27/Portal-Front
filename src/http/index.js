export const API_BASE_URL = 'https://portalfood.azurewebsites.net';
export const ACCESS_TOKEN = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyIiwiaWF0IjoxNjY5NDgwNTQ3LCJleHAiOjE2NzAzNDQ1NDd9.i0lDlqlWCk1U7SR4j684QNR7805cQ2jpvLFlDeLCxLav2hySavtHeifBr-i4fAd4T7OtuW9bYsySIfbyFfwcmg';

const request = (options) => {
    const headers = new Headers({
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": "true"
    })
    if(localStorage.getItem("ACCESS_TOKEN")) {
        headers.append('Authorization', 'Bearer ' + "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyIiwiaWF0IjoxNjY5NDgwNTQ3LCJleHAiOjE2NzAzNDQ1NDd9.i0lDlqlWCk1U7SR4j684QNR7805cQ2jpvLFlDeLCxLav2hySavtHeifBr-i4fAd4T7OtuW9bYsySIfbyFfwcmg")
    }
    const defaults = {headers: headers};
    options = Object.assign({}, defaults, options);
    return fetch(options.url, options)
    .then(response => 
        response.json().then(json => {
            if(!response.ok) {
                return Promise.reject(json);
            }
            return json;
        })
    );
}
export function getCurrentUser() {
    if(!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }

    return request({
        url: API_BASE_URL + "/user/me",
        method: 'GET',
    });
}

export function login(loginRequest) {
    return request({
        url: API_BASE_URL + "/auth/login",
        method: 'POST',
        body: JSON.stringify(loginRequest)
    });
}

export function signup(signupRequest) {
    return request({
        url: API_BASE_URL + "/auth/signup",
        method: 'POST',
        body: JSON.stringify(signupRequest)
    });
}

export function orders() {
    if(!localStorage.getItem("ACCESS_TOKEN")) {
        return Promise.reject("No access token set.");
    }
    return request({
        url: API_BASE_URL + "/orders",
        method: 'GET',
    });
}
