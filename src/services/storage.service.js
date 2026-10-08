const { ImageKit } = require('@imagekit/nodejs')

const imageKit = new ImageKit({
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY
})

async function uploadFile(file) {

    const result = await imageKit.files.upload({
        file,
        fileName: "music" + Date.now(),
        folder: "Role-Based/music"
    })

    return result
    
}

module.exports = {uploadFile}