import { Asset } from 'expo-asset';

const svgs = {
  // logo: require('../../assets/images/logo.svg'),
};

const images: { [key: string]: string } = {
  // logo_sm: require('../../assets/images/logo-sm.png'),
};

const imageAssets: Array<Promise<unknown>> = Object.keys(images).map(key =>
  Asset.fromModule(images[key]).downloadAsync(),
);

export { svgs, images, imageAssets };
