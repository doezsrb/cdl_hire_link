import { Box, SafeAreaView, Text, View, useDripsyTheme, useSx } from 'dripsy'
import {
  Dimensions,
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
} from 'react-native'
import HeaderSlider from '../HeaderSlider/HeaderSlider'
import { useRouter } from 'solito/router'
import { useRef } from 'react'
import Footer from '../Footer/Footer'
import scrollToTop from '../../functions/scrolltotop'
import HeaderImage from '../HeaderImage/HeaderImage'

import Pagination from '../../functions/pagination'
interface LayoutProps {
  title?: string
  homepage?: boolean
  jobscreen?: boolean
  jobscreenimage?: string | null
  navigation?: any
  children: any
  scrollRef?: any
  solo_team_experience?: string
  jobTypes?: any[]
  division?: any[]
}
const Layout = ({
  title = '',
  homepage = false,
  jobscreen = false,
  navigation = null,
  jobscreenimage = null,
  solo_team_experience = '',
  jobTypes = [],
  division = [],
  children,
  scrollRef,
}: LayoutProps) => {
  const router = useRouter()
  const scrollRef_ = useRef()
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
    <SafeAreaView sx={{ backgroundColor: 'white' }}>
      <ScrollView ref={scrollRef == null ? scrollRef_ : scrollRef}>
        <StatusBar backgroundColor={theme.colors.primary} />
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
        ) : jobscreen ? (
          <HeaderImage url={jobscreenimage}>
            <View sx={style.sliderTextContainer}>
              <Text variant="sliderText">{title}</Text>
              <Text sx={{ color: 'lightgray', fontSize: 18 }}>
                {jobTypes.map((it: any, index: any) => {
                  if (jobTypes.length == 1) {
                    return it
                  } else {
                    if (index + 1 == jobTypes.length) {
                      return it
                    } else {
                      return it + ', '
                    }
                  }
                })}
              </Text>
              <Text sx={{ color: 'lightgray', fontSize: 16 }}>
                {division.map((it: any, index: any) => {
                  if (division.length == 1) {
                    return it
                  } else {
                    if (index + 1 == division.length) {
                      return it
                    } else {
                      return it + ', '
                    }
                  }
                })}
              </Text>
              <Text sx={{ color: 'lightgray', fontSize: 14 }}>
                {solo_team_experience}
              </Text>
            </View>
          </HeaderImage>
        ) : (
          <>
            <HeaderSlider>
              <View sx={style.sliderTextContainer}>
                <Text variant="sliderText">{title}</Text>
              </View>
            </HeaderSlider>
          </>
        )}

        {children}
        <Box
          sx={{
            width: '100%',
            paddingVertical: 20,
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Pagination />
        </Box>
        <Footer
          scrollToTop={() =>
            scrollToTop(scrollRef == null ? scrollRef_ : scrollRef)
          }
        />
      </ScrollView>
    </SafeAreaView>
  )
}

export default Layout
