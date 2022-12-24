import { FontAwesome } from '@expo/vector-icons';
import * as Font from 'expo-font';

const fonts = {
  openSan: {
    regular: 'openSans_regular',
    regularItalic: 'openSans_regular_italic',
    semiBold: 'openSans_semiBold',
    semiBoldItalic: 'openSans_semiBold_italic',
    bold: 'openSans_bold',
    boldItalic: 'openSans_bold_italic',
  },
  inter: {
    regular: 'inter_regular',
    medium: 'inter_medium',
    semiBold: 'inter_semiBold',
    bold: 'inter_bold',
  },
};

// fonts preloading
const fontsAll: { [key: string]: Font.FontSource } = {
  ...FontAwesome.font,
  openSans_regular: require('../../assets/fonts/OpenSans-Regular.ttf'),
  openSans_regular_italic: require('../../assets/fonts/OpenSans-Italic.ttf'),
  openSans_semiBold: require('../../assets/fonts/OpenSans-Semibold.ttf'),
  openSans_semiBold_italic: require('../../assets/fonts/OpenSans-SemiboldItalic.ttf'),
  openSans_bold: require('../../assets/fonts/OpenSans-Bold.ttf'),
  openSans_bold_italic: require('../../assets/fonts/OpenSans-BoldItalic.ttf'),
  inter_regular: require('../../assets/fonts/Inter/Inter-Regular.ttf'),
  inter_medium: require('../../assets/fonts/Inter/Inter-Medium.ttf'),
  inter_semiBold: require('../../assets/fonts/Inter/Inter-SemiBold.ttf'),
  inter_bold: require('../../assets/fonts/Inter/Inter-Bold.ttf'),
};

const fontAssets = Font.loadAsync(fontsAll);

export { fonts, fontAssets };
