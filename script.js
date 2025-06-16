document.getElementById('submitBtn').addEventListener('click', () => {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    if (name && email) {
        alert(`Obrigado, ${name}! Sua mensagem foi enviada com sucesso.`);
    } else {
        alert('Por favor, preencha todos os campos.');
    }
});
