import Layout from 'app/features/common/components/Layout/Layout'

import routerListener from 'app/features/common/functions/routerListener'
import { Text, TextInput, View, useDripsyTheme, useSx } from 'dripsy'
import { useContext, useEffect, useState } from 'react'

import MobileLoadingContext from '../../../../../apps/expo/context/mobileLoadingContext'
import { Dimensions, StyleSheet, Platform } from 'react-native'
import AboutUsChooseCard from 'app/features/common/components/AboutUsChooseCard/AboutUsChooseCard'
import { SolitoImage } from 'solito/image'
import Logo from 'app/features/common/components/Logo/logo'
import TruckIcon1 from 'app/features/common/components/TruckIcon/TruckIcon1'
import TruckIcon2 from 'app/features/common/components/TruckIcon/TruckIcon2'
import TruckIcon3 from 'app/features/common/components/TruckIcon/TruckIcon3'
import LocationIcon from 'app/features/common/components/Icons/LocationIcon'
import PhoneIcon from 'app/features/common/components/Icons/PhoneIcon'

const AboutScreen = ({ navigation }: any) => {
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
      paddingTop: '$3',
      paddingBottom: '$5',
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
      alignItems: 'center',
      justifyContent: 'center',
      width: 320,
      height: 320,
      backgroundColor: 'primary',
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
      textAlign: ['center', 'center', 'left', 'left'] as any,
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
    <Layout navigation={navigation} title={'ABOUT US'}>
      <View>
        <View sx={style.whiteBoxParent}>
          <View
            sx={{
              width: '100%',

              display: 'flex',
              gap: 10,
              alignItems: ['center', 'center'],
              flexDirection: ['column', 'column', 'row'],
              justifyContent: 'center',
            }}
          >
            <View
              sx={{
                display: 'flex',
                height: 20,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <LocationIcon width={20} color={theme.colors.primary} />
              <Text sx={{ color: 'primary', fontSize: 16 }}>
                650 Warrenville, Lisle, IL 60532
              </Text>
            </View>
            <View
              sx={{
                display: 'flex',
                height: 20,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <PhoneIcon width={20} color={theme.colors.primary} />
              <Text sx={{ color: 'primary', fontSize: 16 }}>
                (708) 853-5299
              </Text>
            </View>
          </View>
          <View sx={style.ourStoryContainer}>
            <View sx={style.circleBox}>
              <View sx={style.circle}>
                <Logo />
              </View>
            </View>
            <View sx={style.ourStoryTextBox}>
              <Text sx={style.title}>OUR STORY</Text>
              <Text sx={style.paragraph}>
                We are CDL Hire Link, your trusted partner in the world of CDL
                driver recruitment. Our agency is dedicated to connecting
                skilled and passionate CDL drivers with reputable trucking
                companies nationwide. With years of experience and a deep
                understanding of the trucking industry, we stand as the bridge
                that brings together talent and opportunity.
              </Text>
            </View>
          </View>
          <View sx={style.textBox}>
            <Text sx={style.title}>FRIENDLY SERVICE</Text>
            <Text sx={style.paragraph}>
              What sets us apart is our commitment to personalized service. We
              believe that every driver is unique, and every trucking company
              has distinct requirements. That’s why we take the time to get to
              know each driver’s aspirations and match them with companies that
              share their values.
            </Text>
          </View>
          <View sx={style.textBox}>
            <Text sx={style.title}>PROFESSIONAL TEAM</Text>
            <Text sx={style.paragraph}>
              At CDL Hire Link, we don’t just find jobs, we forge careers and
              create success stories. Whether you’re a CDL driver seeking your
              dream job or a trucking company in need of top talent, we’re here
              to be your trusted link in the world of CDL recruitment. Welcome
              to CDL Hire Link, where opportunities meet talent.
            </Text>
          </View>
        </View>
        <View sx={style.blueBoxParent}>
          <Text sx={style.titleBlue}>WHY YOU NEED TO CHOOSE US?</Text>
          <View sx={style.chooseBox}>
            <AboutUsChooseCard
              icon={<TruckIcon2 color={theme.colors.secondary} />}
              title={
                'Choose CDL-HIRE-LINK because we connect you with the best opportunities in the trucking industry. '
              }
            />
            <AboutUsChooseCard
              icon={<TruckIcon1 color={theme.colors.secondary} />}
              title={
                "Our expertise ensures you'll find the perfect match for your driving career, whether you're seeking long-haul routes, local deliveries, or specialized transport roles."
              }
            />
            <AboutUsChooseCard
              icon={<TruckIcon3 color={theme.colors.secondary} />}
              title={
                "We're committed to building long-lasting partnerships, making us the preferred choice for drivers looking to thrive in their profession. Join us for a rewarding journey on the road to success."
              }
            />
          </View>
        </View>
      </View>
    </Layout>
  )
}

export default AboutScreen
