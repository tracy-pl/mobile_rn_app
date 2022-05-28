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
};

// fonts preloading
const fontsAll: { [key: string]: Font.FontSource } = {
  ...FontAwesome.font,
  openSans_regular: require('../../../assets/fonts/OpenSans-Regular.ttf'),
  openSans_regular_italic: require('../../../assets/fonts/OpenSans-Italic.ttf'),
  openSans_semiBold: require('../../../assets/fonts/OpenSans-Semibold.ttf'),
  openSans_semiBold_italic: require('../../../assets/fonts/OpenSans-SemiboldItalic.ttf'),
  openSans_bold: require('../../../assets/fonts/OpenSans-Bold.ttf'),
  openSans_bold_italic: require('../../../assets/fonts/OpenSans-BoldItalic.ttf'),
};

const fontAssets = Font.loadAsync(fontsAll);

export { fonts, fontAssets };
