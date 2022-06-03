const { validateImageAllowed } = require('../../../util/validation');

describe('Testing util/validation', () => {
    it('Given contentType image/pdf and contengLenght 83206 shouldnt throw error', async () => {
        try {
            validateImageAllowed("image/pdf", 83206)
        } catch (error) {
            expect(error).toEqual({ code: 400, message: `extension not allowed image/pdf` });   
        }
    })

    it('Given contentType image/png and contengLenght 10083206 shouldnt throw error', async () => {
        try {
            validateImageAllowed("image/png", 10083206)
        } catch (error) {
            expect(error).toEqual({ code: 400, message: `The file must be smallest than 5MB` });   
        }
    })
})