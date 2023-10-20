import { useFonts } from 'expo-font'

export function Fonts({ children }: any) {
  const [loaded] = useFonts({
    gantari: require('../fonts/gantari.ttf'),
  })

  return <>{loaded && children}</>
}
