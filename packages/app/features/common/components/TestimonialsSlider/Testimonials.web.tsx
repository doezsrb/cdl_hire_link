import { Text, View } from 'dripsy'
import Carousel from 'react-multi-carousel'
import { StyleSheet } from 'react-native'
import TestimonialsItem from '../TestimonialsItem/TestimonialsItem'
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

const testimonialsData = [
  {
    img: 'test1.png',
    text: 'I can’t thank CDL Hire Link enough. They connected me with a fantastic company that values safety and professionalism. I’ve never felt more supported in my career.',
    name: 'David R.',
    firm: '',
  },
  {
    img: 'test1.png',
    text: 'Kudos to CDL Hire Link! They truly care about the drivers they work with. They found me a great position that matches my experience, and I’m loving every mile of it',
    name: 'Mike H.',
    firm: '',
  },
  {
    img: 'test1.png',
    text: 'Working with CDL Hire Link has been a fantastic experience. Their attention to detail and commitment to finding the right fit for our company has been invaluable.',
    name: 'John D.',
    firm: '',
  },
]
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
      {testimonialsData.map((it: any, index: any) => {
        return (
          <TestimonialsItem
            key={index}
            text={it.text}
            name={it.name}
            firm={it.firm}
            img={it.img}
          />
        )
      })}
    </Carousel>
  )
}

export default TestimonialsSlider
