function par(numero){
    return new Promise((reject, resolve) => {
        if (numero % 2 == 0){
            resolve("O número validado é par")
        } else{
            reject("Error: número informado é impar")
        }
    })
}

const valorNumero = 8
par(valorNumero)
.then((mensagem) => {
    console.log(mensagem)
})
.catch((error) => {
    console.log(error)
})