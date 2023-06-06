import { Text, View } from 'dripsy'
import { Dimensions, Platform, StyleSheet } from 'react-native'
import { SolitoImage } from 'solito/image'
interface WhyChooseCardProps {
  text: string
  title: string
  reverse?: boolean
}
const WhyChooseCard = ({
  title,
  text,
  reverse = false,
}: WhyChooseCardProps) => {
  const style = StyleSheet.create({
    container: {
      width: '100%',
      marginTop: 20,
      flexDirection: ['column', reverse ? 'row-reverse' : 'row'] as any,
    },
    image: {
      width: ['100%', '50%'] as any,
      height: 200,
    },
    containerText: {
      width: ['100%', '50%'] as any,
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
      marginTop: 5,
      fontSize: 30,
      width: '60%',

      color: 'primary',
      textAlign: 'left',
      fontWeight: 'bold',
    },
    text: {
      width: [null, '60%'] as any,
      fontSize: 18,
      color: 'primary',
      textAlign: 'left',
    },
  })
  return (
    <View sx={style.container}>
      <View sx={style.image}>
        {Platform.OS == 'web' ? (
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
        )}
      </View>
      <View sx={style.containerText}>
        <Text sx={style.title}>{title}</Text>
        <Text sx={style.text}>{text}</Text>
      </View>
    </View>
  )
}

export default WhyChooseCard
