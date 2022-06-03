const { handler } = require('../../../handler/uploadImage');
const event = require('../mock/eventPayload.json');

describe('Testing handler/uploadImage', () => {
    it('Given Payload with pdf file shoul return code 400 with message "extension not allowed application/pdf"', async () => {

        const result = await handler(event)
        expect('{"message":"extension not allowed application/pdf"}').toEqual(result.body)

    })
})