import express from 'express'
import jsonwebtoken from 'jsonwebtoken'

import { TokenMiddlewareOptions } from "./TokenMiddlwareOptions.js";
export { TokenMiddlewareOptions }

/**
 * @param {TokenMiddlewareOptions} options
 */
export default function (options) {
    /**
     * @param {express.Request} req
     * @param {express.Response} res
     * @param {express.NextFunction} next
     */
    return (req, res, next) => {
        const authHeader = req.headers['authorization']

        if (!authHeader) {
            res.status(401).json({
                message: 'Authorization header was not found',
                statusCode: 401,
            })
            return
        }

        const accessToken = authHeader.split(' ')[1] // "Bearer <accessToken>"

        if (!accessToken) {
            res.status(401).json({
                message: 'Could not find access token in authorization header',
                statusCode: 401,
            })
            return
        }

        jsonwebtoken.verify(accessToken, options.accessTokenSecret, (err, user) => {
            if (err) {
                res.status(403).json({
                    message: 'Your token is invalid',
                    statusCode: 403,
                })
                return
            }

            req.user = user
            next()
        })
    }
}
