import { Text, View } from 'dripsy'
import { Modal } from 'react-native'
import { useEffect } from 'react'
import { useRouter } from 'solito/router'
import SuccessIcon from '../SuccessIcon/SuccessIcon'
import ErrorIcon from '../ErrorIcon/ErrorIcon'

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
          backgroundColor: 'rgba(0,0,0,0.7)',
        }}
      >
        <View
          sx={{
            width: 200,
            paddingTop: 20,
            paddingBottom: 20,

            borderRadius: 10,
          }}
        >
          {success ? (
            <View
              sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <SuccessIcon />
            </View>
          ) : (
            <View
              sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <ErrorIcon />
            </View>
          )}
        </View>
      </View>
    </Modal>
  )
}

export default ModalErrorSuccess
