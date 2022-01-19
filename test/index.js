import tokenMiddleware from 'viex.node.middleware.token'

console.log('tokenMiddleware:', tokenMiddleware)

const middleware = tokenMiddleware({
    accessTokenSecret: '123456',
})

console.log('middleware:', middleware)
