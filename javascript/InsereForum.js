document.addEventListener('DOMContentLoaded', () => {
    const criarForumForm = document.getElementById('criar-forum-form');
    const backendAddress = 'https://conectapucv2-9ee7c697e1e1.herokuapp.com/';

    if (criarForumForm) {
        criarForumForm.addEventListener('submit', async (event) => {
            event.preventDefault();

            const formData = new FormData(criarForumForm);

            try {
                const response = await fetch(backendAddress + 'api/foruns/create/', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'X-CSRFToken': getCSRFToken(),
                    },
                    body: JSON.stringify({
                        nome: formData.get('nome'),
                        descricao: formData.get('descricao'),
                    }),
                });

                if (response.ok) {
                    console.log('Fórum criado com sucesso!');
                    window.location.href = "index.html";
                } else {
                    console.error('Erro ao criar o fórum:', response.statusText);
                    // Implemente aqui a lógica de tratamento de erro, se necessário
                }
            } catch (error) {
                console.error('Erro ao criar o fórum:', error);
                // Implemente aqui a lógica de tratamento de erro, se necessário
            }
        });
    }
});

function getCSRFToken() {
    const csrfTokenInput = document.querySelector('input[name=csrfmiddlewaretoken]');
    if (csrfTokenInput) {
        return csrfTokenInput.value;
    } else {
        console.error('CSRF token não encontrado no formulário.');
        // Implemente aqui a lógica de tratamento de erro, se necessário
        return '';
    }
}
