import { SafeAreaView, Text, View, useDripsyTheme, useSx } from 'dripsy'
import {
  Dimensions,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native'
import HeaderSlider from '../HeaderSlider/HeaderSlider'
import { useRouter } from 'solito/router'
interface LayoutProps {
  title?: string
  homepage?: boolean
  navigation?: any
  children: any
}
const Layout = ({
  title = '',
  homepage = false,
  navigation = null,
  children,
}: LayoutProps) => {
  const router = useRouter()
  const { theme } = useDripsyTheme()
  const sx = useSx()
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
        '100vh',
      ] as any,
      paddingBottom: 50,
      justifyContent: 'flex-end',
    },
    sliderTextBox: {
      paddingLeft: [50, '20vw'] as any,
      paddingRight: [50, '20vw'] as any,
    },
    sliderButtonContainer: {
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: ['column', 'row'] as any,
    },
  })
  return (
    <SafeAreaView>
      <ScrollView>
        {homepage ? (
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
                      navigation.navigate('apply/driver')
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
                        navigation.navigate('apply/carrier')
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
        ) : (
          <HeaderSlider>
            <View sx={style.sliderTextContainer}>
              <Text variant="sliderText">{title}</Text>
            </View>
          </HeaderSlider>
        )}

        {children}
      </ScrollView>
    </SafeAreaView>
  )
}

export default Layout
