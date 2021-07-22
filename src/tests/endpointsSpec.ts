import supertest from 'supertest';
import app from '../index';
const request = supertest(app)

describe('End points for images test', () => {
    it('get request to /api/images?filename=encenadaport&width=200&height=200 responds 200', async () => {
        const res = await request.get('/api/images?filename=encenadaport&width=200&height=200')
        expect(res.status).toBe(200);
    });

    it('404 returns for not valid endpoint', async () => {
        const response = await request.get('/about-us');
        expect(response.status).toBe(404);
    });
});