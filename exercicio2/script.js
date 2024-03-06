function getUserInfo(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let user = {
                nome: "Daniel",
                idade: 17,
                email: "email@gmail.com",
             }
        resolve(user);
        }, 10000);
    });
}

async function playGetUser(){
    let retorno = getUserInfo()
    console.log(retorno)
}

playGetUser()