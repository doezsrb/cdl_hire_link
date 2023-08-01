import { Text, View, useDripsyTheme, useSx } from 'dripsy'
import FrontSlider from '../FrontSlider/FrontSlider'
import { Dimensions, PixelRatio, Platform, StyleSheet } from 'react-native'

interface HeaderSliderProps {
  homepage?: boolean
  children: any
}
const HeaderSlider = ({ homepage = false, children }: HeaderSliderProps) => {
  const { theme } = useDripsyTheme()
  const sx = useSx()
  const style = StyleSheet.create({
    sliderContainer: {
      position: 'relative',
      backgroundColor: 'black',
      shadowOffset: { width: 0, height: 10 },
      shadowColor: Platform.OS == 'web' ? 'secondary' : 'black',
      shadowRadius: 14,
      shadowOpacity: 0.8,
      elevation: 9,
      zIndex: 1,
    },
    sliderTextBox: {
      paddingLeft: [50, Platform.OS == 'web' ? '20vw' : 50] as any,
      paddingRight: [50, Platform.OS == 'web' ? '20vw' : 50] as any,
    },
    sliderTextContainer: {
      zIndex: 2,
      position: 'absolute',
      flexDirection: 'column',
      width: '100%',
      alignItems: 'center',
      bottom: 0,
      height: [
        Dimensions.get('window').height - Dimensions.get('window').height / 10,
        '100vh',
      ] as any,
      paddingBottom: 50,
      justifyContent: 'flex-end',
    },
    sliderText: {
      fontSize: 58 / PixelRatio.getFontScale(),
      fontWeight: 'bold',
      textAlign: 'center',

      color: 'secondary',
    },
    sliderButtonContainer: {
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: ['column', 'row'] as any,
    },
  })
  return (
    <View
      sx={{
        position: 'relative',

        paddingBottom: homepage ? 0 : 20,
      }}
    >
      <View sx={style.sliderContainer}>
        <FrontSlider homepage={homepage} />
      </View>

      {children}
    </View>
  )
}

export default HeaderSlider
