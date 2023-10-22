import { Fonts } from 'app/features/common/functions/fonts'
import { DripsyProvider, makeTheme } from 'dripsy'
import { Dimensions, PixelRatio, Platform } from 'react-native'

const webFont = (font: string) =>
  Platform.select({
    web: `Gantari`,
    default: font,
  })
const fontName = 'gantari'
const primary = '#005199'
const secondary = '#66CC8F'
const BASE_WIDTH = 414
const BASE_HEIGHT = 896
const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('screen')
const widthBaseScale = SCREEN_WIDTH / BASE_WIDTH
const heightBaseScale = SCREEN_HEIGHT / BASE_HEIGHT
export const normalize = (size: any, based = 'width') => {
  const newSize =
    based === 'height' ? size * heightBaseScale : size * widthBaseScale
  return Math.round(PixelRatio.roundToNearestPixel(newSize))
}
/* function normalize(size) {

  const newSize = size * heightBaseScale

  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize))
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2
  }
} */
//for width  pixel
/* const widthPixel = (size) => {
  return normalize(size, 'width');
}; */
//for height  pixel
/* const heightPixel = (size) => {
  return normalize(size, 'height');
}; */
//for font  pixel
/* const fontPixel = (size) => {
  return heightPixel(size);
}; */
//for Margin and Padding vertical pixel
/* const pixelSizeVertical = (size) => {
  return heightPixel(size);
}; */
//for Margin and Padding horizontal pixel
/* const pixelSizeHorizontal = (size) => {
  return widthPixel(size);
}; */
const theme = makeTheme({
  // https://www.dripsy.xyz/usage/theming/create
  customFonts: {
    [fontName]: {
      400: webFont(fontName),
      default: webFont(fontName),
      normal: webFont(fontName),
    },
  },
  fonts: {
    root: webFont(fontName),
  },
  colors: {
    primary: primary,
    secondary: secondary,
    $lightGray: '#D9D9D9',
  },
  space: {
    $0: 0,
    $1: 4,
    $2: 8,
    $3: 16,
    $4: 32,
    $5: 64,
    $6: 128,
    $7: 256,
  },

  buttons: {
    bigButton: {
      borderColor: primary,
      borderWidth: 1,

      borderRadius: 30,
      paddingLeft: normalize(40, 'height'),
      paddingRight: normalize(40, 'height'),
      paddingTop: 10,
      paddingBottom: 10,
      backgroundColor: secondary,
    },
  },
  view: {},
  text: {
    sliderText: {
      fontSize: [normalize(50, 'height'), normalize(60, 'height')],
      fontWeight: 'bold',
      textAlign: 'center',

      color: 'secondary',
    },
    applyNowBtn: {
      textAlign: 'center',
      color: 'secondary',

      fontWeight: 'bold',
      fontSize: 20,
      paddingBottom: 2,
    },
    smallBtn: {
      overflow: 'hidden',
      paddingHorizontal: 20,
      paddingVertical: 5,
      color: 'primary',
      backgroundColor: 'secondary',
      borderWidth: 1,
      borderColor: 'primary',
      borderRadius: 20,
      fontWeight: 'bold',
    },
    errBtn: {
      color: 'red',
    },
    title: {
      paddingTop: '$2',
      paddingBottom: '$4',
      fontWeight: 'bold',
      fontSize: 40,
      textAlign: 'center',
    },
    menuText: {
      fontSize: 20,
      paddingTop: 5,

      color: 'secondary',
      textAlign: 'center',
    },

    buttonBig: {
      textAlign: 'center',
      color: 'primary',
      fontWeight: 'bold',
      fontSize: 20,
      paddingBottom: 2,
    },
    p: {
      fontSize: 16,
    },
  },
})
type MyTheme = typeof theme
declare module 'dripsy' {
  interface DripsyCustomTheme extends MyTheme {}
}
export function Dripsy({ children }: { children: React.ReactNode }) {
  return (
    <Fonts>
      <DripsyProvider
        theme={theme}
        // this disables SSR, since react-native-web doesn't have support for it (yet)
        ssr
      >
        {children}
      </DripsyProvider>
    </Fonts>
  )
}
