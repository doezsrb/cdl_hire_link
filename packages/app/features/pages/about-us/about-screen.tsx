import Layout from 'app/features/common/components/Layout/Layout'

import routerListener from 'app/features/common/functions/routerListener'
import { Text, TextInput, View, useDripsyTheme, useSx } from 'dripsy'
import { useContext, useEffect, useState } from 'react'

import MobileLoadingContext from '../../../../../apps/expo/context/mobileLoadingContext'
import { Dimensions, StyleSheet } from 'react-native'
import AboutUsChooseCard from 'app/features/common/components/AboutUsChooseCard/AboutUsChooseCard'

const AboutScreen = ({ navigation }) => {
  const { theme } = useDripsyTheme()
  const sx = useSx()
  const mobileLoadingContext: any = useContext(MobileLoadingContext)
  const style = StyleSheet.create({
    chooseBox: {
      display: 'flex',
      marginTop: '$4',
      gap: '$3' as any,
      flexDirection: ['column', 'column', 'column', 'row'] as any,
    },
    titleBlue: {
      fontSize: 30,
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
      width: '100%',
    },
    blueBoxParent: {
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: 'primary',
      paddingHorizontal: ['$2', '$2', '$4', '$6'] as any,
      paddingVertical: '$4',
    },
    whiteBoxParent: {
      width: '100%',

      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '$4' as any,

      paddingVertical: '$5',
    },
    ourStoryContainer: {
      width: '100%',
      display: 'flex',
      flexDirection: ['column', 'column', 'row'] as any,
      paddingHorizontal: ['$2', '$2', '$4', '$6'] as any,
    },
    circleBox: { flex: 1, alignItems: 'center', justifyContent: 'center' },
    ourStoryTextBox: {
      flex: 1,
      alignItems: 'flex-start',
      justifyContent: 'center',
      marginTop: ['$2', '$2', 0] as any,
    },
    circle: {
      width: 320,
      height: 320,
      backgroundColor: 'lightgray',
      borderRadius: 220,
    },
    title: {
      fontSize: 30,
      color: 'primary',
      fontWeight: 'bold',
      textAlign: ['center', 'center', 'left'] as any,
      width: '100%',
    },
    paragraph: {
      fontSize: 20,
      color: 'primary',
      textAlign: ['center', 'center', 'center', 'left'] as any,
    },
    textBox: {
      width: '100%',
      paddingHorizontal: ['$2', '$2', '$4', '$6'] as any,
    },
  })
  useEffect(() => {
    routerListener(navigation, mobileLoadingContext)
  }, [])
  return (
    <Layout title={'ABOUT US'}>
      <View>
        <View sx={style.whiteBoxParent}>
          <View sx={style.ourStoryContainer}>
            <View sx={style.circleBox}>
              <View sx={style.circle} />
            </View>
            <View sx={style.ourStoryTextBox}>
              <Text sx={style.title}>OUR STORY</Text>
              <Text sx={style.paragraph}>
                Lorem ipsum blablablablalba lbalb aw
                egaewkgpaowekgapoewkgaopewgja aewgkape. Lorem ipsum blabla
                blablalba lbalb aw egaew kgpaow ekga poewk gaopewgja aewgkape.
                Lorem ipsum blabla blablalba lbalb awegaewkgpa owek gapoew
                kgaope wgja aewgkape.
              </Text>
            </View>
          </View>
          <View sx={style.textBox}>
            <Text sx={style.title}>FRIENDLY SERVICE</Text>
            <Text sx={style.paragraph}>
              Lorem ipsum blablablablalba lbalb aw egaewkgpaowekgapoewkgaopewgja
              aewgkape. Lorem ipsum blabla blablalba lbalb aw egaew kgpaow ekga
              poewk gaopewgja aewgkape. Lorem ipsum blabla blablalba lbalb
              awegaewkgpa owek gapoew kgaope wgja aewgkape.
            </Text>
          </View>
          <View sx={style.textBox}>
            <Text sx={style.title}>PROFESSIONAL TEAM</Text>
            <Text sx={style.paragraph}>
              Lorem ipsum blablablablalba lbalb aw egaewkgpaowekgapoewkgaopewgja
              aewgkape. Lorem ipsum blabla blablalba lbalb aw egaew kgpaow ekga
              poewk gaopewgja aewgkape. Lorem ipsum blabla blablalba lbalb
              awegaewkgpa owek gapoew kgaope wgja aewgkape.
            </Text>
          </View>
        </View>
        <View sx={style.blueBoxParent}>
          <Text sx={style.titleBlue}>WHY YOU NEED TO CHOOSE US?</Text>
          <View sx={style.chooseBox}>
            <AboutUsChooseCard />
            <AboutUsChooseCard />
            <AboutUsChooseCard />
          </View>
        </View>
      </View>
    </Layout>
  )
}

export default AboutScreen
