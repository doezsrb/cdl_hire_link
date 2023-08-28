import { Text, View, useSx } from 'dripsy'
import { TouchableOpacity } from 'react-native'
import { useEffect, useContext } from 'react'
import MobileLoadingContext from '../../../../../../apps/expo/context/mobileLoadingContext'
const InAppNotify = () => {
  const mobileLoadingContext: any = useContext(MobileLoadingContext)
  const sx = useSx()
  const body =
    'Lorem ispum dolor site ametLorem ispum dolor site amet, Lorem ispum doispum dolor site amet, Lorem ispum doispum dolor site amet, Lorem ispum doispum dolor site amet, Lorem ispum dolor site ametLorem ispum dolor site amet'
  useEffect(() => {
    setTimeout(() => {
      mobileLoadingContext.resetNewNotification()
    }, 6000)
  }, [])
  return (
    <View
      sx={{
        width: '100%',

        position: 'absolute',

        mt: 80,
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <View
        sx={{
          paddingVertical: 5,
          paddingHorizontal: 10,
          width: 300,

          borderWidth: 1,
          borderRadius: 5,
          borderColor: 'secondary',
          backgroundColor: 'primary',
        }}
      >
        <TouchableOpacity
          style={sx({ position: 'absolute', top: 5, right: 5, zIndex: 2 })}
        >
          <Text
            sx={{ color: 'secondary', fontWeight: 'bold' }}
            onPress={() => {
              mobileLoadingContext.resetNewNotification()
            }}
          >
            CLOSE
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            mobileLoadingContext.setChangeRoute({
              route: mobileLoadingContext.newNotification.route,
              param: mobileLoadingContext.newNotification.param,
            })
            mobileLoadingContext.resetNewNotification()
          }}
          style={sx({ zIndex: 1 })}
        >
          <Text sx={{ textAlign: 'center', color: 'secondary' }}>
            NEW NOTIFICATION
          </Text>
          <Text sx={{ textAlign: 'center', fontSize: 20, color: 'white' }}>
            {mobileLoadingContext.newNotification.title}
          </Text>
          <Text sx={{ color: 'white' }}>
            {mobileLoadingContext.newNotification.body}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default InAppNotify
