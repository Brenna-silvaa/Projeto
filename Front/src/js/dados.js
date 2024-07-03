function PegaDados(){
    var usuario = document.getElementById('nome_r').value;
    var Email = document.getElementById('email_r').value;
    var senha = document.getElementById('senha_r').value;

    console.log(usuario);
    console.log(Email);
    console.log(senha);

    if (usuario.length < 5  ||  senha.length <8) {
        alert('A senha e usuario deve ter no mínimo 8 caracteres. Por favor, tente novamente.');
        return; 
    }

    else{
        alert('Usuário: ' + usuario + '\nEmail: ' + Email + '\nSenha: ' + senha);
    }
        
}

document.getElementById('dados').addEventListener('click', PegaDados);
