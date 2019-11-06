class Response
{
    send(code,message,result,req,res){
        var result = {
            'status' : code,
            'message' : message,
            'data' : result
        }
        res.status(code).json(result);
    }

    error(code,message,req,res){
        var result = {
            'status' : code,
            'message' : message
        }
        res.status(code).json(result);
    }

    buildError(errorCode, message) {
        return new Error(JSON.stringify({
            'code': errorCode,
            'msg': message
        }));
    }
}

exports = module.exports = new Response()