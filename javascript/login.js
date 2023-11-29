"use strict";
onload = () => {
    document.getElementById('btnLogin').addEventListener('click', evento => {
        evento.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const msg = document.getElementById('msg');
        const backendAddress = 'https://conectapucv2-9ee7c697e1e1.herokuapp.com/';
        fetch(backendAddress + 'contas/token-auth', {
            method: 'POST',
            body: JSON.stringify({
                'username': username,
                'password': password
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((response) => {
            if (response.ok) {
                return response.json();
            }
            else {
                if (response.status == 401) {
                    msg.innerHTML = 'Usuário ou senha inválidos.';
                }
                throw new Error('Falha na autenticação');
            }
        })
            .then((data) => {
            const token = data.token;
            localStorage.setItem('token', token);
            localStorage.setItem("username", username);
            window.location.replace('index.html');
        })
            .catch(erro => { console.log(erro); });
    });
};
