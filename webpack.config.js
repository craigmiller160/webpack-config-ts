const path = require('path');

module.exports = {
    resolve: {
        extensions: [
            '.ts', '.tsx'
        ]
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                include: path.resolve(process.cwd(), 'src'),
                exclude: path.resolve(process.cwd(), 'node_modules'),
                use: {
                    loader: 'ts-loader'
                }
            }
        ]
    }
};
