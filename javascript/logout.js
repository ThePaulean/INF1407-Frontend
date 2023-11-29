"use strict";
onload = (eventon) => {
    document.getElementById('logout').addEventListener('click', (evento) => {
        const token = localStorage.getItem('token');
        const backendAddress = 'conectapucv2-9ee7c697e1e1.herokuapp.com/';
        fetch(backendAddress + 'contas/token-auth', {
            method: 'DELETE',
            headers: {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json'
            }
        })
            .then(response => {
            localStorage.setItem("username", "Visitante");
            localStorage.setItem("token", "");
            const mensagem = document.getElementById('mensagem');
            if (response.ok)
                window.location.assign('/');
            else
                mensagem.innerHTML = 'Erro ' + response.status;
        })
            .catch(erro => { console.log(erro); });
    });
};
