import { ActivityIndicator, Text, View, useDripsyTheme, useSx } from 'dripsy'
import FrontSlider from '../FrontSlider/FrontSlider'
import { Dimensions, PixelRatio, Platform, StyleSheet } from 'react-native'
import { SolitoImage } from 'solito/image'
import { useState } from 'react'
import ImageLoader from '../ImageLoader/ImageLoader'

interface HeaderImageProps {
  url: string | null
  children: any
}
const HeaderImage = ({ url, children }: HeaderImageProps) => {
  const { theme } = useDripsyTheme()
  const sx = useSx()
  const [loading, setLoading] = useState(true)
  const style = StyleSheet.create({
    imageContainer: {
      position: 'relative',
      backgroundColor: 'black',

      width: '100%',
      height: Dimensions.get('window').height / 2,
      zIndex: 1,
    },
    sliderTextBox: {
      paddingLeft: [50, '20vw'] as any,
      paddingRight: [50, '20vw'] as any,
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

      {children}
    </View>
  )
}

export default HeaderImage
