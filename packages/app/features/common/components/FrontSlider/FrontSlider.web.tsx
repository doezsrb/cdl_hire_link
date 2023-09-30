import { View } from 'dripsy'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { Dimensions } from 'react-native'
import { SolitoImage } from 'solito/image'
import SliderItem from '../SliderItem/SliderItem'
const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
}

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
  return (
    <Carousel
      ssr
      responsive={responsive}
      infinite
      autoPlay
      autoPlaySpeed={5000}
      arrows={false}
    >
      {items.map((it: any, index: any) => {
        return (
          <SliderItem
            key={index}
            item={it}
            homepage={homepage}
            mobileLoadingContext={mobileLoadingContext}
            router={router}
            navigation={navigation}
          />
        )
      })}
      {/*  <View
        sx={{
          height: homepage
            ? Dimensions.get('window').height - 80
            : Dimensions.get('window').height / 2,
        }}
      >
        <SolitoImage
          src="/images/background.jpg"
          fill={true}
          alt="truck slider"
          resizeMode="cover"
          style={{ opacity: 0.2 }}
        />
      </View> */}
    </Carousel>
  )
}
export default FrontSlider
