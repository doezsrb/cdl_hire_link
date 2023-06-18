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
import database, { dbRef, onValue } from '../../common/functions/db'
import { useEffect, useContext } from 'react'
import * as ImagePicker from 'expo-image-picker'
import * as FileSystem from 'expo-file-system'
import storage, {
  storageRef,
  uploadBytes,
} from '../../common/functions/storage'
import { Dimensions } from 'react-native'
import ApplyStepInd from 'app/features/common/components/ApplyStepInd/ApplyStepInd'
import ApplyCard from 'app/features/common/components/ApplyCard/ApplyCard'
import WhyChooseCard from 'app/features/common/components/WhyChooseCard/WhyChooseCard'
import dynamic from 'next/dynamic'
import FrontSlider from 'app/features/common/components/FrontSlider/FrontSlider'
import HeaderSlider from 'app/features/common/components/HeaderSlider/HeaderSlider'
import { useRouter } from 'solito/router'

import routerListener from 'app/features/common/functions/routerListener'
import MobileLoadingContext from '../../../../../apps/expo/context/mobileLoadingContext'
import Layout from 'app/features/common/components/Layout/Layout'
export function HomeScreen({ navigation }) {
  const sx = useSx()
  const mobileLoadingContext: any = useContext(MobileLoadingContext)

  const style = StyleSheet.create({
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
  useEffect(() => {
    routerListener(navigation, mobileLoadingContext)
  }, [navigation])
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
        <View sx={{ flex: 1, flexDirection: ['column', 'row'] }}>
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
    </Layout>
  )
}
