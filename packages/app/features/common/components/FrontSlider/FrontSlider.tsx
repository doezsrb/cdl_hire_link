import { View } from 'dripsy'
import { useEffect, useRef } from 'react'
import { Dimensions, Platform, StatusBar } from 'react-native'
import Carousel from 'react-native-snap-carousel'
import { SolitoImage } from 'solito/image'

interface FrontSliderProps {
  homepage?: boolean
}
const FrontSlider = ({ homepage = false }: FrontSliderProps) => {
  const isCarousel = useRef<any>()
  useEffect(() => {
    console.log(StatusBar.currentHeight)
  }, [])
  const renderItem = ({ item }: any) => {
    return (
      <View
        sx={{
          width: '100%',
          height: homepage
            ? Platform.OS == 'web'
              ? Dimensions.get('screen').height
              : Dimensions.get('screen').height - StatusBar.currentHeight! - 80
            : Dimensions.get('window').height / 3,
        }}
      >
        <SolitoImage
          alt="slider-img"
          src={item.img}
          style={{
            opacity: 0.2,
          }}
          fill
          resizeMode="cover"
        />
      </View>
    )
  }
  return (
    <Carousel
      autoplayInterval={8000}
      autoplay
      autoplayDelay={8000}
      ref={isCarousel}
      data={[
        { img: require('../../../../../../apps/expo/images/background.jpg') },
        { img: require('../../../../../../apps/expo/images/background.jpg') },
        { img: require('../../../../../../apps/expo/images/background.jpg') },
      ]}
      renderItem={renderItem}
      sliderWidth={Dimensions.get('screen').width}
      itemWidth={Dimensions.get('screen').width}
      inactiveSlideOpacity={1}
      inactiveSlideScale={1}
      vertical={false}
    />
  )
}
export default FrontSlider
