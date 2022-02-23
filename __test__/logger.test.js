'use strict';
const logger = require('../scr/middleware/logger.js');

describe('second test',()=>{
    let req ={};
    let res = {};
    let next = jest.fn();
    it('test next',()=>{
        logger(req,res,next)
        expect(next).toHaveBeenCalled();
    })
})
