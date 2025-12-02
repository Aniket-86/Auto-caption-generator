const ImageKit = require("imagekit");
const imagekit = new ImageKit({
    publicKey : process.env.IMAGEKIT_PUBLIC_KEY,
    privateKey : process.env.IMAGEKIT_PRIVATE_KEY,
    urlEndpoint : process.env.IMAGEKIT_URL_ENDPOINT
});


 const uploadFile= async (file,filename)=> {
    try{
        const response = await imagekit.upload({
            file: file,
            fileName: filename,
            folder:'caption-generator'
        });
        return response;
    } catch (error) {
        console.error("ImageKit upload failed:", error?.message || error);
        throw error;
    }
}




module.exports = uploadFile