function capitalizar(text){
    let texto = text.split(" ");

    let palavrasCapitalizadas = texto.map(function(texto) {
        return texto.charAt(0).toUpperCase() + texto.slice(1);
    });

    return palavrasCapitalizadas.join(" ");
}

function aplicar(){
    let nome = document.getElementById("nom").value
    let tele = document.getElementById("numero").value
    let email = document.getElementById("email").value
    let desc = document.getElementById("desc").value

    let nomeFormatado = capitalizar(nome)

    document.getElementById("no").textContent = nomeFormatado
    document.getElementById("tel").textContent = tele
    document.getElementById("em").textContent = email
    document.getElementById("des").textContent = desc
}

function formatarTelefone(input) {
    // Remove todos os caracteres não numéricos do input
    const numero = input.value.replace(/\D/g, '');
    
    // Verifique se o número tem pelo menos 10 dígitos
    if (numero.length >= 11) {
        // Formate o número com parênteses
        const ddd = numero.substring(0, 2);
        const parte1 = numero.substring(2, 7);
        const parte2 = numero.substring(7, 11);
        input.value = `(${ddd}) ${parte1}-${parte2}`;
    } else {
        // Se o número não tiver pelo menos 10 dígitos, remova o formato
        input.value = numero;
    }
}