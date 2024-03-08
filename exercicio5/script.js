fetch("https://api.thecatapi.com/v1/images/search?limit=10")
.then(response => {
    return response.json()
})

.then(responseApi => {
    responseApi.forEach(image => {
        const imageUrl = image.url
    document.write(`<img src='${imageUrl}'/> <br />`)
    })
}) 

.catch(error => {
console,log("error:", error)
})