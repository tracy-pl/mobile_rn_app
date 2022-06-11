import { Asset } from 'expo-asset';
import Logo from '../../assets/images/logo.svg';

const svgs = {
  logo: Logo,
};

const images: { [key: string]: string } = {
  logo_sm: require('../../assets/images/logo-sm.png'),
  logo_lg: require('../../assets/images/logo-lg.png'),
};

const imageAssets: Array<Promise<unknown>> = Object.keys(images).map(key =>
  Asset.fromModule(images[key]).downloadAsync(),
);

export { svgs, images, imageAssets };
