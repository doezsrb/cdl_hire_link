import { Box, SafeAreaView, Text, View, useDripsyTheme, useSx } from 'dripsy'
import {
  View as NativeView,
  Dimensions,
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
} from 'react-native'
import HeaderSlider from '../HeaderSlider/HeaderSlider'
import { useRouter } from 'solito/router'
import { useEffect, useRef, useState } from 'react'
import Footer from '../Footer/Footer'
import scrollToTop from '../../functions/scrolltotop'
import HeaderImage from '../HeaderImage/HeaderImage'

import Pagination from '../../functions/pagination'

var allowFetch = true
interface LayoutProps {
  title?: string
  homepage?: boolean
  jobscreen?: boolean
  jobscreenimage?: string | null
  navigation?: any
  children: any
  scrollRef?: any
  solo_team?: any[]
  experience?: any[]
  jobTypes?: any[]
  division?: any[]
  fetchData?: Function
  lastDoc?: any
}
const Layout = ({
  title = '',
  homepage = false,
  jobscreen = false,
  navigation = null,
  jobscreenimage = null,
  solo_team = [],
  experience = [],
  jobTypes = [],
  division = [],
  fetchData,
  lastDoc,
  children,
  scrollRef,
}: LayoutProps) => {
  const router = useRouter()
  const scrollRef_ = useRef()
  const [footerHeight, setFooterHeight] = useState(0)
  const [footerPosition, setFooterPosition] = useState(0)
  const [pageHeight, setPageHeight] = useState(0)
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
  const callback = () => {
    setTimeout(() => {
      allowFetch = true
    }, 1500)
  }
  function handleInfinityScroll(event: any) {
    let mHeight = event.nativeEvent.layoutMeasurement.height
    let cSize = event.nativeEvent.contentSize.height - footerHeight
    let Y = event.nativeEvent.contentOffset.y
    if (Math.ceil(mHeight + Y) >= cSize) return true
    return false
  }
  useEffect(() => {
    if (pageHeight == 0 || footerPosition == 0) return

    const handleScroll = (event: any) => {
      if (
        window.scrollY >=
        pageHeight - (footerPosition + footerHeight) / 1.2
      ) {
        if (allowFetch) {
          allowFetch = false
          if (fetchData != undefined) {
            fetchData(lastDoc, callback)
          }
        }
      }
    }

    if (Platform.OS == 'web') {
      window.removeEventListener('scroll', handleScroll)

      window.addEventListener('scroll', handleScroll)
    }

    return () => {
      if (Platform.OS == 'web') {
        window.removeEventListener('scroll', handleScroll)
      }
    }
  }, [pageHeight, footerHeight, footerPosition, lastDoc])
  return (
    <SafeAreaView sx={{ backgroundColor: 'white' }}>
      <ScrollView
        onLayout={(event) => {
          var { height } = event.nativeEvent.layout
          setPageHeight(height)
        }}
        onScroll={(e: any) => {
          if (handleInfinityScroll(e)) {
            if (allowFetch) {
              allowFetch = false
              if (fetchData != undefined) {
                fetchData(lastDoc, callback)
              }
            }
          }
        }}
        ref={scrollRef == null ? scrollRef_ : scrollRef}
      >
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
                {solo_team.map((it: any, index: any) => {
                  if (solo_team.length == 1) {
                    return it
                  } else {
                    if (index + 1 == solo_team.length) {
                      return it
                    } else {
                      return it + ', '
                    }
                  }
                })}
              </Text>
              <Text sx={{ color: 'lightgray', fontSize: 14 }}>
                {experience.length != 0 && 'Experience: '}
                {experience.map((it: any, index: any) => {
                  if (experience.length == 1) {
                    return it
                  } else {
                    if (index + 1 == experience.length) {
                      return it
                    } else {
                      return it + ', '
                    }
                  }
                })}
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
        {/* <Box
          sx={{
            width: '100%',
            paddingVertical: 20,
            display: 'flex',
            alignItems: 'center',
          }}
        >
          {numPages > 1 &&
            currentPage != undefined &&
            setCurrentPage != undefined && (
              <Pagination
                numPages={numPages}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
              />
            )}
        </Box> */}
        <NativeView
          onLayout={(event) => {
            var { y, height } = event.nativeEvent.layout
            setFooterPosition(y)
            setFooterHeight(height)
          }}
        >
          <Footer
            scrollToTop={() =>
              scrollToTop(scrollRef == null ? scrollRef_ : scrollRef)
            }
          />
        </NativeView>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Layout
