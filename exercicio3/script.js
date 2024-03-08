// fetch("./teste.json", {method: "GET"})
// .then((responseFetch) => {
//     return responseFetch.json()
// })
// .then((responseApi) => {
//     const jsonvalor = document.write(responseApi)
//     jsonvalor.textContent = JSON.stringify()
// })
fetch("./teste.json", { method: "GET" })
  .then((responseFetch) => {
    return responseFetch.json();
  })
  .then((responseApi) => {
    const jsonString = JSON.stringify(responseApi);

    console.log(jsonString);
    
    const jsonContainer = document.getElementById('json-container');
    jsonContainer.textContent = jsonString;
  })
  .catch((error) => {
    console.error("Erro ao obter e manipular o JSON:", error);
  });