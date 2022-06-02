const validateImageAllowed = (contentType, contentLength) => {
    if(!(contentType.endsWith("jpeg") || contentType.endsWith("png"))) throw new Error(`extension not allowed ${contentType}`)
    if(Number(contentLength) / (1024*1024) > 5) throw new Error("The file must be smallest than 5MB")
}

module.exports = {
    validateImageAllowed
};
