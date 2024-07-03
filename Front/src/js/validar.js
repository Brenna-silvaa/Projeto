function validarLogin() {
    // Obter os valores dos campos de email e senha
    var email = document.getElementById('email').value;
    var senha = document.getElementById('Senha').value;

    // Verificar se o email e a senha são válidos
    if (email === 'orb@gmail.com' && senha === 'orb') {
        // Redirecionar para a tela inicial (ou fazer qualquer outra ação desejada)
        
        window.location.href = "main.html";
    } else {
        // Se o email ou senha estiverem incorretos, exibir uma mensagem de erro
        alert('Email ou senha incorretos. Por favor, tente novamente.');
    }
}

// Adicionar evento de clique para o botão de validação
document.getElementById('validar').addEventListener('click', function() {
    validarLogin();
});
