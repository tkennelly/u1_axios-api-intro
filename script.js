console.log('working')

// const myFunction = () => {
//     console.log('First')
//     console.log('Second')
//     console.log('Third')
//   }

//   myFunction()

//   const myFunction = () => {
//     console.log('first')
//     axios.get('https://dog.ceo/api/breeds/list/all').then(function () {
//       console.log('second')
//     })
//     console.log('third')
//   }

  //PEBCAK = Problem Exists Between Keyboard And Chair
  //EIC EIC = Error In Code... Error In Chair
  //ID10T = Idiot

//   const getBreeds = async () => {
//     const dogbreeds = axios.get('https://dog.ceo/api/breeds/list/all')
//     console.log(dogbreeds)
//   }

//   getBreeds()

//   //DOM Get'ers are set up
//   const button = document.querySelector('button')
//   const breedInput = document.querySelector('input')
//   const imageDiv = document.querySelector('div')

// //now we need some functionality
// //lets listen for an event, attach it to our button

// button.addEventListener('click', async () => {
// let breed = breedInput.value
// console.log(breed)
// let response = await axios.get(
//     `https://dog.ceo/api/breed/${breed}/images/random`
//   )
//   console.log(response)
//   let dogImage = response.data.message
//   console.log(dogImage)
//   innerDiv.innerHTML = `<img src=${dogImage}>`
// })

// //and some setters
const button = document.querySelector('button')
const breedInput = document.querySelector('input')
const imageDiv = document.querySelector('div')

//pulls all breeds and logs to the console
const getBreeds = async () => {
    const dogbreeds = await axios.get('https://dog.ceo/api/breeds/list/all')
    console.log(dogbreeds.data.message)
  }

  getBreeds()


//reads our Input value and makes the interactive API call
button.addEventListener('click', async ()=> {
    let breed = breedInput.value
    let response = await axios.get(
        `https://dog.ceo/api/breed/${breed}/images/random`
      )
      //drilling our data response
      let dogPic = response.data.message
      //setting our DOM image
      imageDiv.innerHTML = `<img src=${dogPic}>`
})
