import { ActivityIndicator, View } from 'dripsy'
import { Dimensions } from 'react-native'

const LoadingScreen = () => {
  return (
    <View
      sx={{
        width: '100%',
        height: Dimensions.get('screen').height,
        backgroundColor: 'rgba(0,0,0,0.3)',
        position: 'absolute',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 2,
      }}
    >
      <ActivityIndicator color="white" size="large" />
    </View>
  )
}

export default LoadingScreen
