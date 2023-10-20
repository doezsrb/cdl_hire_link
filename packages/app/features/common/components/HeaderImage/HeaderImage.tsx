import {
  ActivityIndicator,
  Pressable,
  Text,
  View,
  useDripsyTheme,
  useSx,
} from 'dripsy'
import FrontSlider from '../FrontSlider/FrontSlider'
import {
  Dimensions,
  PixelRatio,
  Platform,
  StyleSheet,
  TouchableOpacity,
} from 'react-native'
import { SolitoImage } from 'solito/image'
import { useState } from 'react'
import ImageLoader from '../ImageLoader/ImageLoader'
import BackIcon from '../Icons/BackIcon'
import { useRouter } from 'solito/router'

interface HeaderImageProps {
  url: string | null
  children: any
  job?: boolean
}
const HeaderImage = ({ url, children, job = false }: HeaderImageProps) => {
  const { theme } = useDripsyTheme()
  const router = useRouter()
  const sx = useSx()
  const [loading, setLoading] = useState(true)
  const style = StyleSheet.create({
    imageContainer: {
      position: 'relative',
      backgroundColor: 'black',
      shadowOffset: { width: 0, height: 10 },
      shadowColor:
        Platform.OS == 'web'
          ? 'secondary'
          : Platform.OS == 'ios'
          ? 'secondary'
          : 'black',
      shadowRadius: 14,
      shadowOpacity: 0.8,
      elevation: 20,
      width: '100%',
      height: job
        ? Dimensions.get('window').height / 2
        : ([
            Dimensions.get('window').height / 3,
            Dimensions.get('window').height / 3,
            Dimensions.get('window').height / 3,
            Dimensions.get('window').height / 2,
          ] as any),
      zIndex: 1,
    },
    sliderTextBox: {
      paddingLeft: [50, Platform.OS == 'web' ? '20vw' : 50] as any,
      paddingRight: [50, Platform.OS == 'web' ? '20vw' : 50] as any,
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
    sliderText: {
      fontSize: 58 / PixelRatio.getFontScale(),
      fontWeight: 'bold',
      textAlign: 'center',

      color: 'secondary',
    },
    sliderButtonContainer: {
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: ['column', 'row'] as any,
    },
  })
  return (
    <View sx={{ position: 'relative' }}>
      <View sx={style.imageContainer}>
        {loading && <ImageLoader />}
        {url != null && (
          <SolitoImage
            alt="company image"
            src={url}
            fill
            resizeMode="cover"
            style={{ opacity: 0.2 }}
            onLoadingComplete={() => {
              setLoading(false)
            }}
          />
        )}
      </View>
      {job && (
        <Pressable
          sx={{
            width: 40,
            height: 40,
            mt: 30,
            ml: 20,
            zIndex: 3,
            position: 'absolute',
          }}
          onPress={() => {
            router.back()
          }}
        >
          <BackIcon width={40} color={theme.colors.secondary} />
        </Pressable>
      )}

      {children}
    </View>
  )
}

export default HeaderImage
