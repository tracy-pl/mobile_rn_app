import 'dotenv/config';

export default {
  expo: {
    name: 'tracy_ts',
    slug: 'tracy_ts',
    version: '1.0.0',
    orientation: 'portrait',
    icon: './assets/icon.png',
    userInterfaceStyle: 'automatic',
    splash: {
      image: './assets/splash.png',
      resizeMode: 'contain',
      backgroundColor: '#ffffff',
    },
    updates: {
      fallbackToCacheTimeout: 0,
    },
    assetBundlePatterns: ['**/*'],
    ios: {
      supportsTablet: true,
    },
    android: {
      adaptiveIcon: {
        foregroundImage: './assets/adaptive-icon.png',
        backgroundColor: '#FFFFFF',
      },
    },
    web: {
      favicon: './assets/favicon.png',
    },
    packagerOpts: {
      config: 'metro.config.js',
      sourceExts: [
        'js',
        'jsx',
        'svg',
        'ts',
        'tsx',
      ],
    },
    extra: {
      server_url: process.env.SERVER_URL,
    },
  },
};
