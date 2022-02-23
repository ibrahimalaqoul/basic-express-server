'use strict';
const supertest = require('supertest');
const server = require('../scr/server.js');
const request = supertest(server.app);
describe ('testing validator middleware',()=>{
    it ('testing 500 status',async()=>{
        const response = await request.get('/person?name=')
        expect(response.status).toEqual(500);
    })
    it ('testing 200 status',async()=>{
        const response = await request.get('/person?name=string')
        expect(response.status).toEqual(200);
    })
    
})

