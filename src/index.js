console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4" 
const breedUrl = 'https://dog.ceo/api/breeds/list/all' 

let dogs = []

const breedListUl = document.querySelector("ul#dog-breeds")

const colorArray = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', 
                    '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
                    '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', 
                    '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
                    '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', 
                    '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
                    '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680', 
                    '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
                    '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3', 
                    '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF']

fetch(imgUrl)
    .then(response => response.json())
    .then(dogPics => {
        const dogImgDiv = document.querySelector("div#dog-image-container")
        dogPics.message.forEach(msg => {
            const img = document.createElement('img')
            img.src = msg
            dogImgDiv.append(img)
        })
    })

function renderDogs(dogs){
    breedListUl.innerHTML = ''
    dogs.forEach(dog => {
        const li = document.createElement('li')
        li.textContent = dog
        breedListUl.append(li)
    })
}

// const breedUrl = 'https://dog.ceo/api/breeds/list/all' 
function getDogBreeds(){
    fetch(breedUrl)
        .then(response => response.json())
        .then(dogBreeds => {
            dogs = Object.keys(dogBreeds.message)
            renderDogs(dogs)
            breedListeners()
        })
}

getDogBreeds()



function breedListeners() {
    const menu = document.querySelector('select#breed-dropdown')

    breedListUl.addEventListener('click', event => {
        if(event.target.matches('li')){
            let color = colorArray[Math.floor(Math.random() * colorArray.length)]
            event.target.style.color = color
        }
    })

    menu.addEventListener('change', event => {
        renderDogs(dogs.filter(dog => dog.startsWith(event.target.value)))
    })
}

