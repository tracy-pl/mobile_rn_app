import colors from './colors';
import fontSize from './fontSizes';
import sizes from './sizes';
import { fonts } from './fonts';
import { images } from './images';
import { light } from './shemas';

const theme = {
  sizes,
  allColors: colors,
  // Default theme colors
  ...light,
};

export { colors, fonts, images, fontSize, sizes };
export default theme;
