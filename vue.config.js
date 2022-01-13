module.exports = {
    devServer: {
        host:'127.0.0.1',
        port: 9100,
        open: true,
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
        // proxy: {
        //     '/child': {
        //         target: 'http://localhost:8080',
        //         rewrite: (path) => path.replace(/^\/child/, ""),
        //     }
        // }
    }
}