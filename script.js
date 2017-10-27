const canvas = document.getElementById('canvas')
// const base_URL = 'images/'
const base_URL = 'http://web.mta.info/weekender/images/subwaytilesnew/'
const ctx = canvas.getContext('2d');
const size = 16
const resolution = size * size
const max = 27
canvas.setAttribute('width', resolution * max)
canvas.setAttribute('height', resolution * max)


const total = 29 * 29
let count = 0

const loadImage = (URL, size, x, y) => new Promise((resolve, reject) => {
  try {
    let img = new Image;
    img.src =`${URL}${size}_${x}_${y}.png`
    img.onload = function(){
      ctx.drawImage(img, x * resolution, y * resolution, resolution, resolution)
      resolve(img)
    }
  }
  catch (err) {
    reject(err)
  }
})

const promises = []
for (let x = 0; x <= 26; x++){
  for (let y = 0; y <= 26; y++) {
    promises.push(loadImage(base_URL, size, x, y))
  }
}

Promise.all(promises)
.then(() => {
  console.log('done')
})
.catch((err) => console.log('uh oh', err))