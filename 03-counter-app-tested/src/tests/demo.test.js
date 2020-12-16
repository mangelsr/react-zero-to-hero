
describe('Tests in file demo.test.js', () => {
    
    test('strings should be equals', () => {
    
        // 1. Init
        const message = 'Hello World';
    
        // 2. 
        const message2 = `Hello World`;
    
        // 3. Obrserve
        expect(message).toBe(message2);
    
    })

})
