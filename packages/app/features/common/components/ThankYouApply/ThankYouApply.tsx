import { Text, View } from 'dripsy'
import { Dimensions, Linking, Modal, Platform, Pressable } from 'react-native'
import { useEffect } from 'react'
import { useRouter } from 'solito/router'
import SuccessIcon from '../SuccessIcon/SuccessIcon'
import ErrorIcon from '../ErrorIcon/ErrorIcon'

const ThankYouApply = ({ close }: { close: Function }) => {
  const router = useRouter()
  useEffect(() => {
    /* setTimeout(() => {
      close()
      if (success) {
        router.push('/')
      }
    }, 1500) */
  }, [])
  return (
    <Modal
      visible={true}
      transparent
      onRequestClose={() => {
        close()
      }}
    >
      <View
        sx={{
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(0,0,0,0.7)',
        }}
      >
        <View
          sx={{
            width: ['80%', '80%', 400, 400],
            alignItems: 'center',
            backgroundColor: 'white',
            paddingTop: 20,
            paddingBottom: 20,
            paddingHorizontal: 20,
            gap: 20,
            borderRadius: 10,
          }}
        >
          <View sx={{ gap: 10 }}>
            <Text sx={{ textAlign: 'center', color: 'primary', fontSize: 20 }}>
              Thank you for your interest!
            </Text>
            <Text sx={{ textAlign: 'center', color: 'primary', fontSize: 16 }}>
              We appreciate your decision to choose us.
            </Text>
            <Text sx={{ textAlign: 'center', color: 'primary', fontSize: 16 }}>
              Your inquiry has been received, and we will get in touch with you
              as soon as possible.
            </Text>
            <Text sx={{ textAlign: 'center', color: 'primary', fontSize: 16 }}>
              Your interest means a lot to us, and we look forward to serving
              you.
            </Text>
            <Text sx={{ textAlign: 'center', color: 'primary', fontSize: 16 }}>
              In the meantime, if you have any urgent questions or require
              immediate assistance, please don’t hesitate to contact us at:
            </Text>
            <Text
              sx={{
                textAlign: 'center',
                color: 'primary',
                ml: 10,
                fontSize: 16,
              }}
            >
              By email: office@cdlhirelink.com
            </Text>
            <Text
              sx={{
                textAlign: 'center',
                color: 'primary',
                ml: 10,
                fontSize: 16,
              }}
            >
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
            <Text
              sx={{
                textAlign: 'center',
                color: 'primary',
                ml: 10,
                fontSize: 16,
              }}
            >
              By phone number: (708) 853-5299
            </Text>
          </View>
          <Pressable
            onPress={() => {
              close()
              router.push('/')
            }}
          >
            <Text variant="smallBtn">CLOSE</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  )
}

export default ThankYouApply
