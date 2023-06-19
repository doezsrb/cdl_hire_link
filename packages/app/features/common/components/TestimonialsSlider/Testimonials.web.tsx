import { Text, View } from 'dripsy'
import Carousel from 'react-multi-carousel'
import { StyleSheet } from 'react-native'
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
const style = StyleSheet.create({
  nameFirmContainer: {
    width: '100%',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    paddingHorizontal: 50,
  },
  textContainer: {
    flexDirection: 'column',
    flex: 1,
  },
  item: {
    width: ['100%', '100%', '100%', '80%', '60%'] as any,
    height: '100%',
    backgroundColor: 'primary',
    borderRadius: [20, 20, 1000] as any,
    display: 'flex',

    alignItems: 'center',
    flexDirection: ['column', 'column', 'row'] as any,
    padding: 20,
  },
  containerItem: {
    width: '100%',

    display: 'flex',

    alignItems: 'center',
    justifyContent: 'center',
  },
  circle: {
    width: 180,
    height: 180,
    borderRadius: 100,
    backgroundColor: 'white',
  },
  mainText: { color: 'white', paddingHorizontal: 10 },
  textName: { fontSize: 20, color: 'secondary', fontWeight: 'bold' },
  firmName: { color: 'white', fontStyle: 'italic' },
})
const TestimonialsSlider = () => {
  return (
    <Carousel
      ssr
      responsive={responsive}
      infinite
      autoPlay
      autoPlaySpeed={5000}
      arrows={true}
    >
      <View sx={style.containerItem}>
        <View sx={style.item}>
          <View sx={style.circle}></View>
          <View sx={style.textContainer}>
            <Text sx={style.mainText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Text>
            <View sx={style.nameFirmContainer}>
              <Text sx={style.textName}>John Doe</Text>
              <Text sx={style.firmName}>Random Trucking Firm</Text>
            </View>
          </View>
        </View>
      </View>
      <View sx={style.containerItem}>
        <View sx={style.item}>
          <View sx={style.circle}></View>
          <View sx={style.textContainer}>
            <Text sx={style.mainText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Text>
            <View sx={style.nameFirmContainer}>
              <Text sx={style.textName}>John Doe</Text>
              <Text sx={style.firmName}>Random Trucking Firm</Text>
            </View>
          </View>
        </View>
      </View>
      <View sx={style.containerItem}>
        <View sx={style.item}>
          <View sx={style.circle}></View>
          <View sx={style.textContainer}>
            <Text sx={style.mainText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Text>
            <View sx={style.nameFirmContainer}>
              <Text sx={style.textName}>John Doe</Text>
              <Text sx={style.firmName}>Random Trucking Firm</Text>
            </View>
          </View>
        </View>
      </View>
    </Carousel>
  )
}

export default TestimonialsSlider
