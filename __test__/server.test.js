'use strict';
const server = require('../scr/server.js');
const supertest = require('supertest');
const request = supertest(server.app);

describe('testing the server',()=>{

    it ('testing /person',async()=>{
        const response = await request.get('/wrongPath')
        expect(response.status).toEqual(404);
    })
    it ('testing bad method',async()=>{
        const response = await request.post('/person')
        expect(response.status).toEqual(404);
    })
})