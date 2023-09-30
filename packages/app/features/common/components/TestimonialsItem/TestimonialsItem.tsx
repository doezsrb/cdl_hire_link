import { Text, View } from 'dripsy'
import { StyleSheet } from 'react-native'
import { SolitoImage } from 'solito/image'
const TestimonialsItem = ({
  img,
  text,
  name,
  firm,
}: {
  img: string
  text: string
  name: string
  firm: string
}) => {
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
      overflow: 'hidden',
      width: 180,
      height: 180,
      borderRadius: 100,
      backgroundColor: 'white',
    },
    mainText: { color: 'white', paddingHorizontal: 10 },
    textName: { fontSize: 20, color: 'secondary', fontWeight: 'bold' },
    firmName: { color: 'white', fontStyle: 'italic' },
  })
  return (
    <View sx={style.containerItem}>
      <View sx={style.item}>
        <View sx={style.circle}>
          <SolitoImage
            fill
            alt={name + ' img profile'}
            src={'/images/testimonials/' + img}
          />
        </View>
        <View sx={style.textContainer}>
          <Text sx={style.mainText}>{text}</Text>
          <View sx={style.nameFirmContainer}>
            <Text sx={style.textName}>{name}</Text>
            <Text sx={style.firmName}>{firm}</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

export default TestimonialsItem
