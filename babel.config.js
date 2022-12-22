module.exports = api => {
    api.cache(true);
    return {
        compact: true,
        presets: ['babel-preset-expo'],
        plugins: [
            [
                'module-resolver',
                {
                    root: ['./'],
                    alias: {
                        '^~(.+)': './src/\\1',
                    },
                    extensions: [
                        '.ios.js',
                        '.android.js',
                        '.js',
                        '.jsx',
                        '.json',
                        '.tsx',
                        '.ts',
                        '.native.js',
                    ],
                },
            ],
            [
                'module:react-native-dotenv',
                {
                    moduleName: '@env',
                    path: '.env',
                    blacklist: null,
                    whitelist: null,
                    safe: false,
                    allowUndefined: true
                }
            ]
        ],
    };
};
