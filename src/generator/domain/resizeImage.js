const { getObject, uploadImage } = require('../service/resizedSourceService');
const { resizeImage } = require('../util/sharp');

module.exports = async (records, context = {}) => {

    try {
        const {s3} = records[0]
        // getting image from s3
        const image = await (getObject(s3.object.key))
    
        // resizing images
        const imagesResized = await Promise.all([
            resizeImage(image, { width: 400, height: 300 }),
            resizeImage(image, { width: 160, height: 120 }),
            resizeImage(image, { width: 120, height: 120 })
        ])
    
        // saving images resized
        await Promise.all([
            uploadImage(imagesResized[0].opt.srcData, `400x300/${s3.object.key}`, image.ContentType),
            uploadImage(imagesResized[1].opt.srcData, `160x120/${s3.object.key}`, image.ContentType),
            uploadImage(imagesResized[2].opt.srcData, `120x120/${s3.object.key}`, image.ContentType)
        ])
        
        return { message: "Images resized" }  
    } catch (error) {
        console.log("ERROR", JSON.stringify(error));
    }
    
};
