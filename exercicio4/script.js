function salvarDados(){

let nome = prompt("Qual seu nome?")
let idade = prompt("Qual sua idade?")
let email = prompt("Qual o seu email?")

const usuario = {
    nome: nome,
    idade: idade,
    email: email
};

const usuarioJson = JSON.stringify(usuario);

localStorage.setItem("user", usuarioJson);

console.log("usuario salvo no storage.")
}


salvarDados()


