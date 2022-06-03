const { getObject } = require('../service/resizedSourceService');
const { Responses } = require('../../../common/response');

module.exports = async (records, context = {}) => {
    console.log("RECORDS", typeof records == String);

    // records.forEach( async ( record ) => {
        console.log("DATA", records[0].s3.object.key);
        const image = await getObject(records[0].s3.object.key)
        console.log("IMAGE", image);
    // });

    return Responses._200({message: "Images resized"}) 
};
