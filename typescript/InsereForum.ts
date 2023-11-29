document.addEventListener('DOMContentLoaded', () => {
    const criarForumForm = document.getElementById('criar-forum-form') as HTMLFormElement | null;
    const backendAddress = 'https://conectapucv2-9ee7c697e1e1.herokuapp.com/';

    if (criarForumForm) {
        criarForumForm.addEventListener('submit', async (event: Event) => {
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
                }
            } catch (error) {
                console.error('Erro ao criar o fórum:', error);
            }
        });
    }
});

function getCSRFToken(): string {
    const csrfTokenInput = document.querySelector('input[name=csrfmiddlewaretoken]') as HTMLInputElement | null;
    if (csrfTokenInput) {
        return csrfTokenInput.value;
    } else {
        console.error('CSRF token não encontrado no formulário.');
        return '';
    }
}
