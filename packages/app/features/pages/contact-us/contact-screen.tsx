import CustomInput from 'app/features/common/components/CustomInput/CustomInput'
import CustomTextArea from 'app/features/common/components/CustomTextarea/CustomTextArea'
import Layout from 'app/features/common/components/Layout/Layout'
import LoadingScreen from 'app/features/common/components/LoadingScreen/LoadingScreen'
import routerListener from 'app/features/common/functions/routerListener'
import { Text, TextInput, View, useDripsyTheme, useSx } from 'dripsy'
import { useContext, useEffect, useState } from 'react'
import { Dimensions, Platform, TouchableOpacity } from 'react-native'
import MobileLoadingContext from '../../../../../apps/expo/context/mobileLoadingContext'
import LoadingContext from '../../../../../apps/next/context/loadingContext'
import ModalErrorSuccess from 'app/features/common/components/ModalErrorSuccess/ModalErrorSuccess'

const ContactScreen = ({ navigation }: any) => {
  const { theme } = useDripsyTheme()

  const sx = useSx()
  const mobileLoadingContext: any = useContext(MobileLoadingContext)
  const desktopLoadingContext: any = useContext(LoadingContext)
  const [error, setError] = useState(false)
  const [success, setSuccess] = useState(false)
  const [data, setData] = useState({
    firstname: {
      value: '',
      error: false,
    },
    lastname: {
      value: '',
      error: false,
    },
    email: {
      value: '',
      error: false,
    },
    subject: {
      value: '',
      error: false,
    },
    message: {
      value: '',
      error: false,
    },
  })
  const toggleLoading = (loading: boolean) => {
    if (loading) {
      if (Platform.OS == 'web') {
        desktopLoadingContext.setLoading(true)
      } else {
        mobileLoadingContext.setLoading(true)
      }
    } else {
      if (Platform.OS == 'web') {
        desktopLoadingContext.setLoading(false)
      } else {
        mobileLoadingContext.setLoading(false)
      }
    }
  }
  const updateData = (key: any, value: any) => {
    var oldData: any = { ...data }
    oldData[key].value = value
    setData(data)
  }
  const submitData = () => {
    console.log(data)
    toggleLoading(true)
    fetch('https://www.cdlhirelink.com/api/mail', {
      method: 'POST',
      body: JSON.stringify(data),
    })
      .then((res: any) => res.json())
      .then((val: any) => {
        if (val.msg == 'Success') {
          setSuccess(true)
        } else {
          setError(true)
        }
      })
      .catch((e: any) => {
        setError(true)
      })
      .finally(() => {
        toggleLoading(false)
      })
  }
  const checkData = () => {
    var data_: any = { ...data }
    var err = 0
    Object.keys(data_).map((it: any) => {
      if (data_[it].value == '') {
        data_[it].error = true
        err++
      } else {
        data_[it].error = false
      }
    })
    setData(data_)
    if (err == 0) {
      submitData()
    }
  }
  useEffect(() => {
    routerListener(navigation, mobileLoadingContext)
  }, [])
  return (
    <Layout navigation={navigation} title={'CONTACT US'}>
      {success && (
        <ModalErrorSuccess
          success={true}
          close={() => {
            setSuccess(false)
          }}
        />
      )}
      {error && (
        <ModalErrorSuccess
          success={false}
          close={() => {
            setError(false)
          }}
        />
      )}
      <View
        sx={{
          width: '100%',

          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          paddingHorizontal: ['$2', '$2', '$4', '$5'],
          paddingVertical: '$4',
        }}
      >
        <View
          sx={{
            width: ['100%', '100%', '80%', '60%'],

            borderWidth: 1,
            borderColor: 'secondary',
            borderStyle: 'solid',
            display: 'flex',
            flexDirection: 'column',
            padding: '$3',
          }}
        >
          <View
            sx={{
              width: '100%',
              display: 'flex',
              flexDirection: ['column', 'row'],
            }}
          >
            <CustomInput
              label={'First name'}
              error={data.firstname.error}
              setVal={(val: any) => {
                updateData('firstname', val)
              }}
              currentValue={data.firstname.value}
            />
            <CustomInput
              label={'Last name'}
              error={data.lastname.error}
              setVal={(val: any) => {
                updateData('lastname', val)
              }}
              currentValue={data.lastname.value}
            />
          </View>
          <View
            sx={{
              width: '100%',
              display: 'flex',
              flexDirection: ['column', 'row'],
            }}
          >
            <CustomInput
              label={'Email'}
              error={data.email.error}
              setVal={(val: any) => {
                updateData('email', val)
              }}
              currentValue={data.email.value}
            />
            <CustomInput
              label={'Subject'}
              error={data.subject.error}
              setVal={(val: any) => {
                updateData('subject', val)
              }}
              currentValue={data.subject.value}
            />
          </View>
          <View>
            <CustomInput
              label={'Message'}
              error={data.message.error}
              setVal={(val: any) => {
                updateData('message', val)
              }}
              currentValue={data.message.value}
              multiline
            />
          </View>
          <View sx={{ marginTop: '$2' }}>
            <TouchableOpacity
              style={sx({ alignSelf: ['center', 'center', 'flex-end'] })}
              onPress={checkData}
            >
              <View sx={theme.buttons.bigButton}>
                <Text variant="buttonBig">SEND MESSAGE</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Layout>
  )
}

export default ContactScreen
