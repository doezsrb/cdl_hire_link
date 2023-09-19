import { View, Text } from 'dripsy'
import ApplyStepInd from '../ApplyStepInd/ApplyStepInd'
import { Platform, StyleSheet } from 'react-native'
import { SolitoImage } from 'solito/image'

interface ApplyCardProps {
  title: string
  step: number
  text: string
}
const ApplyCard = ({ title, step, text }: ApplyCardProps) => {
  const style = StyleSheet.create({
    container: { flex: 1, flexDirection: ['column'] as any, marginTop: 10 },
    childContainer: {
      flex: 1,
      alignItems: 'center',

      marginTop: [10] as any,
    },
    image: {
      width: '100%',
      height: 150,
    },
    title: {
      fontSize: 30,
      color: 'white',
      textAlign: 'center',
      fontWeight: 'bold',
    },
    text: {
      fontSize: 18,
      color: 'white',
      textAlign: 'center',
      flexWrap: 'wrap',
      width: '80%',
    },
  })
  return (
    <View sx={style.container}>
      <ApplyStepInd step={step} />
      <View sx={style.childContainer}>
        {/*  <View sx={style.image}>
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
                height: 150,
              }}
            />
          )}
        </View> */}
        <Text sx={style.title}>{title}</Text>
        <Text sx={style.text}>{text}</Text>
      </View>
    </View>
  )
}

export default ApplyCard
