import { DripsyProvider, makeTheme } from 'dripsy'
import { PixelRatio } from 'react-native'

const primary = '#005199'
const secondary = '#66CC8F'
const theme = makeTheme({
  // https://www.dripsy.xyz/usage/theming/create
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
      paddingLeft: 40,
      paddingRight: 40,
      paddingTop: 10,
      paddingBottom: 10,
      backgroundColor: secondary,
    },
  },
  view: {},
  text: {
    sliderText: {
      fontSize: 58 / PixelRatio.getFontScale(),
      fontWeight: 'bold',
      textAlign: 'center',

      color: 'secondary',
    },
    title: {
      paddingTop: '$2',
      paddingBottom: '$4',
      fontWeight: 'bold',
      fontSize: 40,
      textAlign: 'center',
    },
    menuText: {
      fontSize: 23,
      paddingTop: 5,
      color: 'white',
      textAlign: 'center',
    },
    buttonBig: {
      textAlign: 'center',
      color: 'primary',
      fontWeight: 'bold',
      fontSize: 20,
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
    <DripsyProvider
      theme={theme}
      // this disables SSR, since react-native-web doesn't have support for it (yet)
      ssr
    >
      {children}
    </DripsyProvider>
  )
}
