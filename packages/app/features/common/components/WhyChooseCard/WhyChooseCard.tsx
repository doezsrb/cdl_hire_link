import { Text, View } from 'dripsy'
import { Dimensions, Platform, StyleSheet } from 'react-native'
import { SolitoImage } from 'solito/image'
import TruckIcon from '../TruckIcon/TruckIcon1'
import TruckIcon2 from '../TruckIcon/TruckIcon2'
interface WhyChooseCardProps {
  text: string
  title: string
  icon: any
  reverse?: boolean
}
const WhyChooseCard = ({
  title,
  text,
  icon,
  reverse = false,
}: WhyChooseCardProps) => {
  const style = StyleSheet.create({
    container: {
      width: '100%',
      marginTop: 20,
      alignItems: 'center',
      flexDirection: [
        'column',
        'column',
        reverse ? 'row-reverse' : 'row',
      ] as any,
    },
    image: {
      width: ['100%', '100%', '50%'] as any,
      height: 200,
    },
    containerText: {
      width: ['100%', '100%', '50%'] as any,
      justifyContent: 'center',
      alignItems: ['center'] as any,
    },
    title: {
      marginTop: 5,
      fontSize: 30,
      width: ['100%', '100%', '60%', '60%'] as any,

      color: 'primary',
      textAlign: ['center', 'center', 'left'] as any,
      fontWeight: 'bold',
    },
    text: {
      width: [null, null, '60%'] as any,
      fontSize: 18,
      color: 'primary',
      textAlign: 'left',
    },
  })
  return (
    <View sx={style.container}>
      <View sx={style.image}>
        {icon}
        {/* {Platform.OS == 'web' ? (
          // eslint-disable-next-line jsx-a11y/alt-text
          <SolitoImage alt="test" src="/images/pngtruck2.png" fill={true} />
        ) : (
          // eslint-disable-next-line jsx-a11y/alt-text
          <SolitoImage
            alt="truck"
            src={require('../../../../../../apps/expo/images/pngtruck2.png')}
            style={{
              width: '100%',
              height: 200,
            }}
          />
        )} */}
      </View>
      <View sx={style.containerText}>
        <Text sx={style.title}>{title}</Text>
        <Text sx={style.text}>{text}</Text>
      </View>
    </View>
  )
}

export default WhyChooseCard
