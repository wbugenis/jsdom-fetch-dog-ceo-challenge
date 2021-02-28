// document.addEventListener("DOMContentLoaded", () => {
console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4" 

fetch(imgUrl)
    .then(response => response.json())
    .then(data => {
        data.message.forEach(msg => {
            dogImgs = document.querySelector("div#dog-image-container")
            const img = document.createElement('img')
            img.src = msg
            dogImgs.append(img)
        })
    })
// })