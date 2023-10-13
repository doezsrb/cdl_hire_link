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
import { Linking } from 'react-native'

const PrivacyPolicyScreen = ({ navigation }: any) => {
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
      textAlign: ['left'] as any,
    },
    textBox: {
      width: '100%',
      paddingHorizontal: ['$2', '$2', '$4', '$6'] as any,
      gap: 10,
    },
  })
  useEffect(() => {
    routerListener(navigation, mobileLoadingContext)
  }, [])
  return (
    <Layout navigation={navigation} title={'PRIVACY POLICY'}>
      <View>
        <View sx={style.whiteBoxParent}>
          <View sx={style.textBox}>
            {/* <Text sx={style.title}>PRIVACY POLICY</Text> */}
            <Text>Last Updated: 12.10.2023.</Text>
            <Text sx={style.title}>Welcome to CDL Hire Link.</Text>
            <Text sx={style.paragraph}>
              We understand the importance of your privacy and are committed to
              safeguarding your personal information.
            </Text>
            <Text sx={style.paragraph}>
              We take measures to protect your data from loss, misuse, and
              unauthorized access, disclosure, alteration, or destruction. This
              Privacy Policy is designed to address your concerns and outline
              our privacy practices regarding our website(s).
            </Text>
            <Text sx={style.paragraph}>
              Please be aware that no internet transmission is completely secure
              or error-free. By using our website(s), you consent to the terms
              and conditions of this Privacy Policy and our processing of
              personal information for the purposes described below.
            </Text>
            <Text sx={style.paragraph}>
              If you disagree with the terms and conditions, please do not use
              our site(s).
            </Text>
            <Text sx={style.title}>Information Collected</Text>
            <Text sx={style.paragraph}>
              {' '}
              1. Non-Personal Information We may collect non-personal
              information, including but not limited to:
            </Text>
            <Text style={[sx(style.paragraph), { marginLeft: 10 }]}>
              -Sites visited Date and time of website visits
            </Text>
            <Text style={[sx(style.paragraph), { marginLeft: 10 }]}>
              -Domain names from which our website(s) are accessed (e.g.,
              company.com, school.edu, or agency.gov)
            </Text>
            <Text style={[sx(style.paragraph), { marginLeft: 10 }]}>
              -Internet Protocol (IP) address of the computer used to access our
              website(s)
            </Text>
            <Text style={[sx(style.paragraph), { marginLeft: 10 }]}>
              -Type of browser used (e.g., Internet Explorer, Chrome, Firefox)
            </Text>
            <Text style={[sx(style.paragraph), { marginLeft: 10 }]}>
              -Operating system (e.g., Windows, iOS, Android)
            </Text>
            <Text style={[sx(style.paragraph), { marginLeft: 10 }]}>
              -The site that linked you to our website(s)
            </Text>
            <Text sx={style.paragraph}>
              2. Personal Information Personal information is data that
              personally identifies you, including:
            </Text>
            <Text style={[sx(style.paragraph), { marginLeft: 10 }]}>
              -Full Name
            </Text>
            <Text style={[sx(style.paragraph), { marginLeft: 10 }]}>
              -Email
            </Text>
            <Text style={[sx(style.paragraph), { marginLeft: 10 }]}>
              -Address
            </Text>
            <Text style={[sx(style.paragraph), { marginLeft: 10 }]}>
              -Phone Number
            </Text>
            <Text style={[sx(style.paragraph), { marginLeft: 10 }]}>
              -State
            </Text>
            <Text style={[sx(style.paragraph), { marginLeft: 10 }]}>
              -Province
            </Text>
            <Text style={[sx(style.paragraph), { marginLeft: 10 }]}>
              -ZIP/Postal Code
            </Text>
            <Text style={[sx(style.paragraph), { marginLeft: 10 }]}>-City</Text>
            <Text sx={style.paragraph}>
              We may offer opportunities on our website(s to ask questions,
              request information, and apply for employment. Your participation
              in these opportunities is voluntary and may require you to provide
              personal information. We collect and store personal information
              that you voluntarily provide.
            </Text>
            <Text sx={style.title}>Use of Collected Information</Text>
            <Text sx={style.paragraph}>
              We use the collected information to:
            </Text>
            <Text style={[sx(style.paragraph), { marginLeft: 10 }]}>
              Maintain and improve our website(s) and services
            </Text>
            <Text style={[sx(style.paragraph), { marginLeft: 10 }]}>
              Provide services and information you’ve expressed an interest in
            </Text>
            <Text style={[sx(style.paragraph), { marginLeft: 10 }]}>
              Forward requests for employment information to CDL Hire Link
              Recruitment Team and relevant recruiter(s)
            </Text>
            <Text style={[sx(style.paragraph), { marginLeft: 10 }]}>
              Ensure that all qualified applicants receive fair consideration
              for employment, regardless of race, color, religion, age, sex,
              sexual orientation or identity, national origin, disability
              status, protected veteran status, or any other characteristic
              protected by federal, state, or local law.
            </Text>
            <Text sx={style.title}>Sharing Collected Information</Text>
            <Text sx={style.paragraph}>
              We collaborate with other parties to collect, obtain, and utilize
              visitor information to offer specific services, including
              analytics services. We may disclose personal information you
              provide to these parties for the sole purpose of providing these
              services.
            </Text>

            <Text sx={style.title}>Storing Collected Information</Text>

            <Text sx={style.paragraph}>
              We may transfer data we collect to parties located outside of the
              United States for processing and storage. Please note that
              personal information processed and stored outside the United
              States may be subject to foreign legal requirements. By providing
              personal information, you agree to the transfer, storage, and
              processing of that information and assume the risk of unauthorized
              access.
            </Text>
            <Text sx={style.title}>Disclosing Collected Information</Text>

            <Text sx={style.paragraph}>
              We will not sell or share your information with any non-affiliated
              service providers unless required by law.
            </Text>
            <Text sx={style.title}>Cookies</Text>

            <Text sx={style.paragraph}>
              Cookies provide information about the computer used to access
              websites. We may use cookies to gather data about your computer to
              enhance our website(s). Non-personally identifiable information
              may also be collected for internet-based advertising purposes and
              shared with our advertising partners. These cookies are stored on
              your computer’s hard drive and are not linked to personal
              information. Most browsers allow you to configure cookie handling
              options. Some features of our website(s) may not function
              correctly if cookies are disabled.
            </Text>
            <Text sx={style.title}>Changes in Our Privacy Policy</Text>

            <Text sx={style.paragraph}>
              CDL Hire Link reserves the right to make changes to our Privacy
              Policy at any time and for any reason without prior notice. Any
              changes to our Privacy Policy will be posted on this page. We may
              also contact you by email to inform you of changes.
            </Text>
            <Text sx={style.title}>Contact Us</Text>
            <Text sx={style.paragraph}>
              If you have any questions, you can contact us:
            </Text>
            <Text style={[sx(style.paragraph), { marginLeft: 10 }]}>
              By email: office@cdlhirelink.com
            </Text>
            <Text style={[sx(style.paragraph), { marginLeft: 10 }]}>
              By visiting this page on our{' '}
              <Text
                sx={{ color: 'blue' }}
                onPress={() => {
                  Linking.openURL('https://www.cdlhirelink.com/contact-us')
                }}
              >
                website
              </Text>
            </Text>
            <Text style={[sx(style.paragraph), { marginLeft: 10 }]}>
              By phone number: (708) 853-5299
            </Text>
          </View>
        </View>
      </View>
    </Layout>
  )
}

export default PrivacyPolicyScreen
