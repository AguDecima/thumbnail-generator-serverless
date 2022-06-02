const validateImageAllowed = (contentType, contentLength) => {
    if(!(contentType.endsWith("jpeg") || contentType.endsWith("png"))) throw { code: 400, message: `extension not allowed ${contentType}` }
    if(Number(contentLength) / (1024*1024) > 5) throw { code: 400, message: `The file must be smallest than 5MB` }
}

module.exports = {
    validateImageAllowed
};
