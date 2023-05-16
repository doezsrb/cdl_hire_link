import { DripsyProvider, makeTheme } from 'dripsy'

const primary = '#0cf5a0'
const secondary = '#012417'
const theme = makeTheme({
  // https://www.dripsy.xyz/usage/theming/create
  colors: {
    primary: primary,
    secondary: secondary,
  },
  buttons: {
    default: {
      backgroundColor: primary,
      width: ['100%', '50%', 100],

      borderRadius: 20,
      textAlign: 'center',
    },
    small: {
      backgroundColor: primary,
      width: ['20%', '20%', 100],
      py: 30,
      borderRadius: 20,
      textAlign: 'center',
      fontSize: 20,
      fontFamily: 'arial',
    },
  },
  text: {
    buttonText: {
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
