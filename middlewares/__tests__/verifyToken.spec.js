const verifyToken = require('../verifyToken');
const createToken = require('../../utils/createToken');

describe('verifyToken', () => {
    it('should return token is valid', () => {

        let tokenGenerated = createToken({ id: 'F7gUxobvmYn5YGivHNZf' }, '1min');

        let req = {
            status:200,
            headers: {
                "x-access-token": tokenGenerated
            }
        };

        let res = {
           status:200,
           send:{
               erro:"",
               messasge:""
           }
        };
        
        let result = verifyToken(req,res,'teste')
          
        expect(result).toBe('valido');            
          
    });
   
});