const jwt = require('jsonwebtoken');
const {secret} = require('../config/default');

const verifyToken = (req, res, next) => {
    
    const token = req.headers['x-access-token'];

    if(!token) {
        return res
                .status(401)
                .send({
                    code: 'not_authorized',
                    message: 'Não Autorizado'
                });                
    }

    jwt.verify(token, secret, (error, decode) => {
       
        if (error) {
            let descError = { erro:'' }
            switch (error.name) {
                case 'JsonWebTokenError':
                    descError.erro = "Token inválido";
                    break;
                default:
                    descError.erro  = "Erro genérico de token, gere um novo token e tente novamente";
            }
            return res  
                    .status(500)
                    .send(descError);
        }
        if (next != 'teste') {
            next();
        } 
        
    });
    return 'valido';
}

module.exports = verifyToken;