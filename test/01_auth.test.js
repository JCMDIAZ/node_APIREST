const request = require("supertest");
const app = require("../app");

describe("[AUTH] esta es la prueba de /api/auth", () => {
    test("esto debería retornar 404", async () => {
        const response =  await request(app)
            .post('/api/auth/login')
            .send(
                {
                    "email":"jcmdiaz@jcmdiaz.net",
                    "password":"123123123"
                }
            );

            expect(response.statusCode).toEqual(404);
    })
});