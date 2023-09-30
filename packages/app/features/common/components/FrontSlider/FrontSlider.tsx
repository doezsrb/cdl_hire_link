import { View } from 'dripsy'
import { useEffect, useRef } from 'react'
import { Dimensions, Platform, StatusBar } from 'react-native'
import Carousel from 'react-native-snap-carousel'
import { SolitoImage } from 'solito/image'
import SliderItem from '../SliderItem/SliderItem'

interface FrontSliderProps {
  items: any
  mobileLoadingContext: any
  router?: any
  navigation?: any
  homepage?: boolean
}
const FrontSlider = ({
  items,
  mobileLoadingContext,
  router,
  navigation,
  homepage = false,
}: FrontSliderProps) => {
  const isCarousel = useRef<any>()

  const renderItem = ({ item }: any) => {
    return (
      <SliderItem
        item={item}
        homepage={homepage}
        mobileLoadingContext={mobileLoadingContext}
        router={router}
        navigation={navigation}
      />
    )
  }
  return (
    <Carousel
      autoplayInterval={5000}
      autoplay
      autoplayDelay={5000}
      ref={isCarousel}
      data={items}
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
