interface Pessoa {
    gerarDocumento() : void
    email: string;
    gerarCertificado() : string
}

class PessoaFisica implements Pick<Pessoa, 'gerarDocumento'> {
   
    nome: string = "";
    cpf: string = ""

    gerarDocumento(): void {
        console.log("Documento CPF: " + this.cpf);
    }
}

class PessoaJuridica implements Pick<Pessoa, 'email' | 'gerarDocumento'> {
    email: string = ''; 
    nome: string = "";
    cnpj: string = ""

    gerarDocumento(): void {
        console.log("Documento CNPJ: " + this.cnpj);
    }
}

const pessoaFisica = new PessoaFisica();
pessoaFisica.cpf = '111111111';
pessoaFisica.nome = "Teste pessoa fisica"
pessoaFisica.gerarDocumento();

const pessoaJuridica = new PessoaJuridica();
pessoaJuridica.cnpj = "2222222222";
pessoaJuridica.nome = "Tese pessoa juridica"
pessoaJuridica.gerarDocumento();