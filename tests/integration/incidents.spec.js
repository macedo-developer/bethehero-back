const request = require('supertest');
const app = require('../../src/app');

describe('Incidents', () => {
    it('should be able create a new Incident', async () => {
        const response = await request(app)
            .post('/incidents')
            .set('Authorization', '8348b4ef')
            .send({
                title: "Caso Test",
                description: "Caso Test detalhes",
                value: 777
            });

        expect(response.body).toHaveProperty('id');
    })
})