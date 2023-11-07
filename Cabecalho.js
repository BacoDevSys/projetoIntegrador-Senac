// JavaScript para mostrar o menu dropdown ao clicar no ícone do menu
document.querySelector('.menu-icon').addEventListener('click', function() {
    document.getElementById('dropdownMenu').style.display = document.getElementById('dropdownMenu').style.display === 'block' ? 'none' : 'block';
});


  // Função para salvar as anotações no navegador do usuário
  function salvarAnotacoes() {
    const nome = document.querySelector('input[placeholder="Nome"]').value;
    const prontuario = document.querySelector('input[placeholder="Prontuário"]').value;
    const alergia = document.querySelector('input[placeholder="Alergia"]').value;
    const dataNascimento = document.querySelector('input[placeholder="Data de Nascimento"]').value;
    const sexo = document.getElementById('sexo').value;
    const registro = document.querySelector('input[placeholder="Registro"]').value;
    const table = document.querySelector('table').value;
    
    const anotacoes = {
        nome: nome,
        prontuario: prontuario,
        alergia: alergia,
        dataNascimento: dataNascimento,
        sexo: sexo,
        registro: registro
    };

    // Convertendo as anotações para uma string JSON
    const anotacoesString = JSON.stringify(anotacoes);

    // Salvando as anotações no armazenamento local
    localStorage.setItem('anotacoes', anotacoesString);

    alert('Anotações salvas com sucesso!');
}

// Função para voltar à página anterior
function goBack() {
    window.history.back();
}
