module.exports = {
    devServer: {
        port: 9090,
        proxy: {
            '^/open': {
                target: 'http://47.106.87.113:8080',
            }
        }
    }
}