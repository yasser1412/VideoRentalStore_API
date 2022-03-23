const request = require('supertest')
const{Genre} = require('../../models/genre');
let server;

describe('/api/genres', () => {
    beforeEach( () => {server = require('../../index'); })
    afterEach( async () => {
        server.close();
        await Genre.remove({});
    });

    describe('Get /', () => {
        it('should return all genres', async () => {
            Genre.collection.insertMany([
                {name: 'genre1'},
                {name: 'genre2'},
                {name: 'genre3'}
            ])

            const res = await request(server).get('/api/genres');
            expect(res.status).toBe(200)
            expect(res.body.length).toBe(3)
            expect(res.body.some(g => g.name === 'genre1')).toBeTruthy()
        })
        
        it('should return a genre by its id, otherwise returns 404 error', () => {
            
        })
    })
})