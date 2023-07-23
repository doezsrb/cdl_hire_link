import { Text, View } from 'dripsy'
import { Modal } from 'react-native'
import { useEffect } from 'react'
import { useRouter } from 'solito/router'
const ModalErrorSuccess = ({
  success,
  close,
}: {
  success: boolean
  close: Function
}) => {
  const router = useRouter()
  useEffect(() => {
    setTimeout(() => {
      close()
      if (success) {
        router.push('/')
      }
    }, 1500)
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
          backgroundColor: 'rgba(0,0,0,0.4)',
        }}
      >
        <View
          sx={{
            width: 200,
            paddingTop: 20,
            paddingBottom: 20,
            backgroundColor: success ? 'secondary' : 'red',
            borderWidth: 2,
            borderStyle: 'solid',
            borderColor: 'primary',
            borderRadius: 10,
          }}
        >
          {success ? (
            <Text
              sx={{
                fontSize: 20,
                color: 'primary',
                textAlign: 'center',
                fontWeight: 'bold',
              }}
            >
              SUCCESS
            </Text>
          ) : (
            <Text
              sx={{
                fontSize: 20,
                color: 'white',
                textAlign: 'center',
                fontWeight: 'bold',
              }}
            >
              ERROR
            </Text>
          )}
        </View>
      </View>
    </Modal>
  )
}

export default ModalErrorSuccess
