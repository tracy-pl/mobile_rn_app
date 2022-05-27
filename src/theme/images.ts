import { Asset } from 'expo-asset';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Logo from '../../assets/images/logo.svg';

const svgs = {
  logo: Logo,
};

const images: { [key: string]: string } = {
  logo_sm: require('../../assets/images/logo-sm.png'),
  logo_lg: require('../../assets/images/logo-lg.png'),
};

// image preloading
const imageAssets: Array<Promise<unknown>> = Object.keys(images).map(key =>
  Asset.fromModule(images[key]).downloadAsync(),
);

export { svgs, images, imageAssets };
