import { Text, View, useDripsyTheme, useSx } from 'dripsy'
import {
  Dimensions,
  Platform,
  StyleSheet,
  TouchableOpacity,
} from 'react-native'
import HeaderSlider from '../HeaderSlider/HeaderSlider'

const HomePageSlider = ({
  navigation,
  router,
  mobileLoadingContext,
}: {
  navigation: any
  router: any
  mobileLoadingContext: any
}) => {
  const { theme } = useDripsyTheme()
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
    sliderTextBox: {
      paddingLeft: [50, Platform.OS == 'web' ? '20vw' : 50] as any,
      paddingRight: [50, Platform.OS == 'web' ? '20vw' : 50] as any,
    },
    sliderButtonContainer: {
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: ['column', 'row'] as any,
    },
  })
  const sx = useSx()
  return (
    <HeaderSlider homepage>
      <View sx={style.sliderTextContainer}>
        <View sx={style.sliderTextBox}>
          <Text variant="sliderText">
            IF YOU NEED A JOB, WE ARE HERE TO HELP YOU!
          </Text>
        </View>
        <View sx={style.sliderButtonContainer}>
          <TouchableOpacity
            onPress={() => {
              if (Platform.OS == 'web') {
                router.push('/apply/driver')
              } else {
                if (navigation != null) {
                  mobileLoadingContext.setLoading(true)
                  setTimeout(() => {
                    navigation.navigate('apply/driver')
                  }, 1)
                }
              }
            }}
          >
            <View sx={theme.buttons.bigButton}>
              <Text variant="buttonBig">APPLY AS DRIVER</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              if (Platform.OS == 'web') {
                router.push('/apply/carrier')
              } else {
                if (navigation != null) {
                  mobileLoadingContext.setLoading(true)
                  setTimeout(() => {
                    navigation.navigate('apply/carrier')
                  }, 1)
                }
              }
            }}
          >
            <View
              style={[
                theme.buttons.bigButton,
                sx({ marginLeft: [0, 20], marginTop: [20, 0] }),
              ]}
            >
              <Text variant="buttonBig">APPLY AS CARRIER</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </HeaderSlider>
  )
}

export default HomePageSlider
