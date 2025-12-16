function copiarEmail() {
    const email = document.getElementById("email-text").innerText;
    
    navigator.clipboard.writeText(email).then(() => {
        alert("E-mail copiado para a área de transferência!");
    }).catch(err => {
        console.error('Erro ao copiar: ', err);
    });
}