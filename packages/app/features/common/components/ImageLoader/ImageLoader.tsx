import { ActivityIndicator, View } from 'dripsy'

const ImageLoader = () => {
  return (
    <View
      sx={{
        width: '100%',
        height: '100%',

        position: 'absolute',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <ActivityIndicator color="primary" />
    </View>
  )
}

export default ImageLoader
