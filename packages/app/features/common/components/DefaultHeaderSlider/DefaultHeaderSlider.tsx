import { Text, View } from 'dripsy'
import HeaderSlider from '../HeaderSlider/HeaderSlider'
import { Dimensions, Platform, StyleSheet } from 'react-native'

const DefaultHeaderSlider = ({ title }: { title: string }) => {
  const style = StyleSheet.create({
    sliderTextContainer: {
      zIndex: 2,
      position: 'absolute',
      flexDirection: 'column',
      width: '100%',
      alignItems: 'center',
      bottom: 0,
      height: [
        Dimensions.get('window').height - Dimensions.get('window').height / 10,
        Platform.OS == 'web' ? '100vh' : Dimensions.get('window').height,
      ] as any,
      paddingBottom: 50,
      justifyContent: 'flex-end',
    },
  })
  return (
    <HeaderSlider>
      <View sx={style.sliderTextContainer}>
        <Text variant="sliderText">{title}</Text>
      </View>
    </HeaderSlider>
  )
}

export default DefaultHeaderSlider
