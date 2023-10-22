import { normalize } from 'app/provider/dripsy'
import { Text, View, useDripsyTheme, useSx } from 'dripsy'

import {
  Dimensions,
  TouchableOpacity,
  StatusBar,
  Platform,
  StyleSheet,
} from 'react-native'

import { SolitoImage } from 'solito/image'

const SliderItem = ({
  item,
  router,
  navigation,
  mobileLoadingContext,
  homepage,
}: {
  item: any
  router?: any
  navigation?: any
  mobileLoadingContext: any
  homepage?: boolean
}) => {
  const { theme } = useDripsyTheme()
  const sx = useSx()
  const style = StyleSheet.create({
    sliderTextContainer: {
      zIndex: 2,
      gap: 10,
      flexDirection: 'column',
      width: '100%',
      alignItems: 'center',

      bottom: 0,
      height: '100%',
      paddingBottom: Platform.OS == 'web' ? 50 : 100,
      justifyContent: 'flex-end',
    },
    sliderTextBox: {},
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
        width: '100%',
        backgroundColor: 'black',

        height:
          Platform.OS == 'web'
            ? Dimensions.get('window').height - 80
            : Dimensions.get('window').height - 60,
      }}
    >
      <SolitoImage
        alt=""
        fill
        resizeMode="cover"
        style={{ opacity: 0.2, position: 'absolute' }}
        src={item.img}
      />
      <View sx={style.sliderTextContainer}>
        <View sx={style.sliderTextBox}>
          <Text variant="sliderText">{item.text}</Text>
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
              <Text variant="buttonBig">APPLY AS A DRIVER</Text>
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
              <Text variant="buttonBig">APPLY AS A CARRIER</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}
export default SliderItem
