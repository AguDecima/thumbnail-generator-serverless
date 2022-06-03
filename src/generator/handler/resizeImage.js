const ResizeImageDomain = require('../domain/resizeImage');

module.exports.handler = async (event) => { 
    return ResizeImageDomain(event.Records)    
}