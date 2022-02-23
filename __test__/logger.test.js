'use strict';
const server = require('../scr/server');
const supertest = require('supertest');
const request = supertest(server.app);
describe ('testing server',()=>{
    it('testing output type of',async()=>{
     const  response = await request.get('/person?name=ibrahim')
    expect(typeof response.body).toEqual('object')
    })
})