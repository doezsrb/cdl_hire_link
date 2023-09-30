import { SafeAreaView, Text, View, useDripsyTheme, useSx } from 'dripsy'
import {
  View as NativeView,
  Platform,
  ScrollView,
  StatusBar,
  RefreshControl,
  Dimensions,
} from 'react-native'

import { useRouter } from 'solito/router'
import { useEffect, useRef, useState, useContext } from 'react'
import Footer from '../Footer/Footer'
import scrollToTop from '../../functions/scrolltotop'

import MobileLoadingContext from '../../../../../../apps/expo/context/mobileLoadingContext'

import JobHeaderImage from '../JobHeaderImage/JobHeaderImage'

import FrontSlider from '../FrontSlider/FrontSlider'
import HeaderImage from '../HeaderImage/HeaderImage'

var allowFetch = true
interface LayoutProps {
  title?: string
  homepage?: boolean
  jobscreen?: boolean
  jobscreenimage?: string | null
  navigation: any
  children: any
  scrollRef?: any
  solo_team?: any[]
  experience?: any[]
  jobTypes?: any[]
  division?: any[]
  fetchData?: Function
  lastDoc?: any
  onRefresh?: Function
}
const Layout = ({
  title = '',
  homepage = false,
  jobscreen = false,
  navigation,
  jobscreenimage = null,
  solo_team = [],
  experience = [],
  jobTypes = [],
  division = [],
  fetchData,
  lastDoc,
  children,
  scrollRef,
  onRefresh,
}: LayoutProps) => {
  const router = useRouter()
  const scrollRef_ = useRef()
  const [refreshing, setRefreshing] = useState(false)
  const [footerHeight, setFooterHeight] = useState(0)
  const [footerPosition, setFooterPosition] = useState(0)
  const [pageHeight, setPageHeight] = useState(0)
  const { theme } = useDripsyTheme()
  const mobileLoadingContext: any = useContext(MobileLoadingContext)

  //!TODO: srediti layout

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
  const onRefresh_ = () => {
    if (onRefresh != undefined) {
      setRefreshing(true)

      onRefresh()
      setTimeout(() => {
        setRefreshing(false)
      }, 2000)
    }
  }
  useEffect(() => {
    if (Platform.OS == 'web') return
    var routeObject = mobileLoadingContext.changeRoute
    if (routeObject.route != '') {
      if (routeObject.route == 'job') {
        if (routeObject.param != undefined) {
          navigation.navigate(routeObject.route, {
            job: routeObject.param,
          })
        }
      } else {
        navigation.navigate(routeObject.route)
      }
    }
  }, [mobileLoadingContext.changeRoute])
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
  const items = [
    {
      text: 'IF YOU NEED A JOB, WE ARE HERE TO HELP YOU!',
      img:
        Platform.OS == 'web'
          ? '/images/background2.jpg'
          : require('../../../../../../apps/expo/images/background2.jpg'),
    },
    {
      text: 'LOOKING FOR A JOB? YOU ARE ON THE RIGHT PLACE!',
      img:
        Platform.OS == 'web'
          ? '/images/background2.jpg'
          : require('../../../../../../apps/expo/images/background2.jpg'),
    },
  ]
  return (
    <SafeAreaView sx={{ backgroundColor: 'white' }}>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh_} />
        }
        onLayout={(event) => {
          var { height } = event.nativeEvent.layout
          setPageHeight(height)
        }}
        scrollEventThrottle={16}
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
          /*  <HomePageSlider
            navigation={navigation}
            router={router}
            mobileLoadingContext={mobileLoadingContext}
          /> */
          <FrontSlider
            homepage
            items={items}
            router={router}
            navigation={navigation}
            mobileLoadingContext={mobileLoadingContext}
          />
        ) : jobscreen ? (
          <JobHeaderImage
            jobscreenimage={jobscreenimage as string}
            solo_team={solo_team}
            experience={experience}
            division={division}
            jobTypes={jobTypes}
            title={title}
          />
        ) : (
          <HeaderImage
            url={
              Platform.OS == 'web'
                ? '/images/background2.jpg'
                : require('../../../../../../apps/expo/images/background2.jpg')
            }
          >
            <View
              sx={{
                zIndex: 2,
                position: 'absolute',
                flexDirection: 'column',
                width: '100%',
                alignItems: 'center',
                bottom: 0,
                height: [
                  Dimensions.get('window').height -
                    Dimensions.get('window').height / 10,
                  Platform.OS == 'web'
                    ? '100vh'
                    : Dimensions.get('window').height,
                ] as any,
                paddingBottom: 50,
                justifyContent: 'flex-end',
              }}
            >
              <Text variant="sliderText">{title}</Text>
            </View>
          </HeaderImage>
        )}
        {/* <DefaultHeaderSlider title={title} /> */}
        {children}

        <NativeView
          onLayout={(event) => {
            var { y, height } = event.nativeEvent.layout
            setFooterPosition(y)
            setFooterHeight(height)
          }}
        >
          <Footer
            navigation={navigation}
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
