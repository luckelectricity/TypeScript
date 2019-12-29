class ParameterException extends Error {
    constructor(msg='有错误',code=400,errorCode='10001'){
        super()
        this.msg = msg
        this.code = code
        this.errorCode = errorCode
    }
}

module.exports = {
    ParameterException
}