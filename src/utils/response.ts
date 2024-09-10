import { Response } from 'express';

const responseAPI = (res: Response, status: boolean, statusCode: number, message: string, data?: any) => {
    return res.status(statusCode).json({
        status,
        statusCode,
        message,
        data
    })
}

const responseData = (res: Response, data: any) => {
    return responseAPI(res, true, 200, 'success', data)
}

const responseSuccess = (res: Response) => {
    return responseAPI(res, true, 200, 'success')
}

const responseFailed = (res: Response) => {
    return responseAPI(res, false, 400, 'failed')
}

const responseNotFound = (res: Response) => {
    return responseAPI(res, false, 404, 'not found')
}

const responseDenied = (res: Response) => {
    return responseAPI(res, false, 403, 'denied')
}

const responseMethodNotAllowed = (res: Response) => {
    return responseAPI(res, false, 405, 'method not allowed')
}

const responseUnauthorized = (res: Response) => {
    return responseAPI(res, false, 401, 'unauthorized')
}

const responseUnauthenticated = (res: Response) => {
    return responseAPI(res, false, 401, 'unauthenticated')
}

export { responseData, responseSuccess, responseNotFound, responseFailed, responseDenied, responseMethodNotAllowed, responseUnauthorized, responseUnauthenticated }
