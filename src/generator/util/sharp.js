const im = require('imagemagick');

const resizeImage = async (image, { width, height}) => {

    var data = im.resizeArgs({
        srcData: image.Body,
        height: height,
        width: width,
        format: image.ContentType.split("/")[1]
    })

    if(!data) throw { code: 400, message: "there was an error resizing the file" }
    
    return data
    
}

module.exports = {
    resizeImage
};
