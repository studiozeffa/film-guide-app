import { Platform } from 'react-native';

const platform = {
  isIOS: Platform.OS === 'ios',
  isAndroid: Platform.OS === 'android'
};

const colors = {
  primary: '#68aa63',

  rating: {
    good: '#265819',
    average: '#71500f',
    poor: '#7e2310'
  },

  // http://chir.ag/projects/name-that-color/
  white: '#fff',
  concrete: '#f2f2f2',
  silver: '#c0c0c0',
  dove: '#6c6c6c',
  emperor: '#555'
};

const dimensions = {
  basePadding: 12,
  navbarHeight: platform.isAndroid ? 56 : 44
};

const fontSizes = {
  small: 14,
  normal: 16
};

const lineHeights = {
  small: platform.isAndroid ? 22 : 18,
  normal: platform.isAndroid ? 24 : 20
};

export { colors, dimensions, fontSizes, lineHeights, platform };
