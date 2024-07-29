document.getElementById('loginFormulario').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('nome').value;
    const password = document.getElementById('senha').value;

    if (username === password) {
        document.getElementById('messagem').textContent = 'Login bem-sucedido!';
        document.getElementById('messagem').style.color = 'green';
    } else {
        document.getElementById('messagem').textContent = 'Usuário ou senha incorretos.';
        document.getElementById('messagem').style.color = 'red';
    }
});