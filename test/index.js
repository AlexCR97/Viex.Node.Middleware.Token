import middleware, { TokenMiddlewareOptions } from 'viex.node.middleware.token'

const x = middleware({
    accessTokenExpiration: '600sec',
    accessTokenSecret: '7b45876373bb62d5d2563aaab829de00',
    refreshTokenSecret: 'd593ac80cbb1de1fed0c5c4b50e5790d',
    saltGenerationRounds: 10,
})

console.log('x:', x)
console.log('TokenMiddlewareOptions:', TokenMiddlewareOptions)