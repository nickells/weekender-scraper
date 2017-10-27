const download = require('image-downloader')
const base_URL = 'http://web.mta.info/weekender/images/subwaytilesnew/'
const size = 16

for (let x = -1; x <= 26; x++){
  for (let y = -1; y <= 26; y++) {

    const options = {
      url: `${base_URL}${size}_${x}_${y}.png`,
      dest: './images'                  // Save to /path/to/dest/image.jpg
    }
    download.image(options)
      .then(({ filename, image }) => {
        console.log('File saved to', filename)
      }).catch((err) => {
        console.log('couldnt save', options.url)
        throw err
      })
  }
}

 