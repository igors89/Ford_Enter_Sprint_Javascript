
//class contato

class contato {
    constructor(nome,sobrenome,email,cpf,telefone,contato){
        this.nome=nome;
        this.sobrenome=sobrenome;
        this.email=email;
        this.cpf=cpf;
        this.telefone=telefone;
        this.contato=contato;
    }
}

function Post(form) {

    let data = new contato(form.elements.namedItem("nome").value,
            form.elements.namedItem("sobrenome").value, 
            form.elements.namedItem("email").value, 
            form.elements.namedItem("cpf").value, 
            form.elements.namedItem("telefone").value, 
            form.elements.namedItem("contato").value);
    Enviar(data);

}

function Enviar(valor) {

    document.addEventListener("submit", (event) => {
        event.preventDefault();
        var nome = document.getElementById("nomeid");
    
        if (nome.value != "") {
            alert('Obrigado sr(a) ' + valor.nome + ' os seus dados foram encaminhados com sucesso');
        }

        console.log(valor);

        // document.getElementById('meuform').submit();
    })

}