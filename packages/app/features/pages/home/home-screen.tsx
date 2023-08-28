import {
  Text,
  useSx,
  View,
  H1,
  P,
  Row,
  A,
  useDripsyTheme,
  SafeAreaView,
} from 'dripsy'

import {
  Platform,
  ScrollView,
  PixelRatio,
  StyleSheet,
  TouchableOpacity,
} from 'react-native'

import { useEffect, useContext } from 'react'

import { Dimensions } from 'react-native'

import ApplyCard from 'app/features/common/components/ApplyCard/ApplyCard'
import WhyChooseCard from 'app/features/common/components/WhyChooseCard/WhyChooseCard'

import routerListener from 'app/features/common/functions/routerListener'
import MobileLoadingContext from '../../../../../apps/expo/context/mobileLoadingContext'
import Layout from 'app/features/common/components/Layout/Layout'
import TestimonialsSlider from 'app/features/common/components/TestimonialsSlider/Testimonials'
export function HomeScreen({ navigation }: any) {
  const sx = useSx()
  const mobileLoadingContext: any = useContext(MobileLoadingContext)

  const style = StyleSheet.create({
    testimonialsContainer: {
      width: '100%',
      mt: '$3',

      display: 'flex',
      flexDirection: 'column',
      paddingLeft: 20,
      position: 'relative',
      paddingRight: 20,
      paddingBottom: 20,
      backgroundColor: 'white',
    },
    chooseContainer: {
      width: '100%',
      alignItems: 'center',
      paddingLeft: 20,
      paddingRight: 20,
      paddingBottom: 20,
      backgroundColor: 'white',
    },
    applyContainer: {
      width: '100%',
      paddingBottom: 40,
      backgroundColor: 'primary',
    },
    sliderContainer: {
      position: 'relative',
      backgroundColor: 'black',
      zIndex: 1,
    },
    sliderTextContainer: {
      zIndex: 2,
      position: 'absolute',
      flexDirection: 'column',
      width: '100%',
      alignItems: 'center',
      bottom: 0,
      height: [
        Dimensions.get('window').height - Dimensions.get('window').height / 10,
        Platform.OS == 'web' ? '100vh' : Dimensions.get('window').width,
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
  useEffect(() => {
    console.log(Dimensions.get('screen').height)
    routerListener(navigation, mobileLoadingContext)
  }, [])
  useEffect(() => {
    /*   if (ref != null || onValue != null) {
      var userDataRef = ref(database, 'users/1')
      onValue(userDataRef, (snap) => {
        console.log('snap.val()')
        console.log(snap.val())
      })
    } else {
      var userDataRefMobile = database()
        .ref('/users/1')
        .once('value')
        .then((snap) => {
          console.log('snap.val()')
          console.log(snap.val())
        })
    } 
    upload image web::: 
    const storageRef_ = storageRef(storage, '/images/testweb.jpg')
            uploadBytes(storageRef_, e.target.files[0])
              .then((snap) => {
                console.log('uploaded')
              })
              .catch((e) => console.log(e))

    upload image app:::::
     let result: any = await ImagePicker.launchImageLibraryAsync({
              allowsEditing: true,
              quality: 1,
            })

            if (!result.canceled) {
               var imageUrl = result.assets[0].uri
              var imageUrlSplited = imageUrl.split('/')
              var storage_ref = storage().ref(
                imageUrlSplited[imageUrlSplited.length - 1]
              )

              storage_ref
                .putFile(result.assets[0].uri)
                .then(() => {
                  console.log('success upload')
                })
                .catch((e) => console.log(e)) 
            } else {
              alert('You did not select any image.')
            } 
    
    */
  }, [])
  return (
    <Layout homepage navigation={navigation}>
      <View sx={style.applyContainer}>
        <Text variant="title" sx={{ color: 'white' }}>
          HOW TO APPLY?
        </Text>
        <View sx={{ flex: 1, flexDirection: ['column', 'column', 'row'] }}>
          <ApplyCard
            step={1}
            text={`Lorem ipsum blablablablalba lbalb aw egaewkgpaowekgapoewkgaopewgja aewgkape.`}
            title={'FILL OUT AN APPLICATION'}
          />
          <ApplyCard
            step={2}
            text={`Lorem ipsum blablablablalba lbalb aw egaewkgpaowekgapoewkgaopewgja aewgkape.`}
            title={'FILL OUT AN APPLICATION'}
          />
          <ApplyCard
            step={3}
            text={`Lorem ipsum blablablablalba lbalb aw egaewkgpaowekgapoewkgaopewgja aewgkape.`}
            title={'FILL OUT AN APPLICATION'}
          />
        </View>
      </View>

      <View sx={style.chooseContainer}>
        <Text variant="title" sx={{ color: 'primary' }}>
          WHY CHOOSE CDL HIRE LINK?
        </Text>
        <WhyChooseCard
          title="OUR MISSION"
          text={`Lorem ipsum blablablablalba lbalb aw egaewkgpaowekgapoewkgaopewgja aewgkape. Lorem ipsum blabla blablalba lbalb aw egaew kgpaow ekga poewk gaopewgja aewgkape. Lorem ipsum blabla blablalba lbalb awegaewkgpa owek gapoew kgaope wgja aewgkape.`}
        />

        <WhyChooseCard
          reverse
          title="OUR MISSION"
          text={`Lorem ipsum blablablablalba lbalb aw egaewkgpaowekgapoewkgaopewgja aewgkape. Lorem ipsum blabla blablalba lbalb aw egaew kgpaow ekga poewk gaopewgja aewgkape. Lorem ipsum blabla blablalba lbalb awegaewkgpa owek gapoew kgaope wgja aewgkape.`}
        />
        <WhyChooseCard
          title="OUR MISSION"
          text={`Lorem ipsum blablablablalba lbalb aw egaewkgpaowekgapoewkgaopewgja aewgkape. Lorem ipsum blabla blablalba lbalb aw egaew kgpaow ekga poewk gaopewgja aewgkape. Lorem ipsum blabla blablalba lbalb awegaewkgpa owek gapoew kgaope wgja aewgkape.`}
        />
      </View>
      {Platform.OS == 'web' && (
        <View sx={style.testimonialsContainer}>
          <Text variant="title" sx={{ color: 'primary' }}>
            TESTIMONIALS
          </Text>
          <TestimonialsSlider />
        </View>
      )}
    </Layout>
  )
}
