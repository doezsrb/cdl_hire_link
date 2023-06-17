import { View, Text } from 'dripsy'
import ApplyStepInd from '../ApplyStepInd/ApplyStepInd'
import { StyleSheet } from 'react-native'
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
      marginTop: [10, 60] as any,
    },
    image: { width: 150, height: 150 },
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
      paddingLeft: 20,
      paddingRight: 20,
    },
  })
  return (
    <View sx={style.container}>
      <ApplyStepInd step={step} />
      <View sx={style.childContainer}>
        <View sx={style.image}>
          {/* <SolitoImage alt="imgtruck" src="/images/pngtruck2.png" fill /> */}
        </View>
        <Text sx={style.title}>{title}</Text>
        <Text sx={style.text}>{text}</Text>
      </View>
    </View>
  )
}

export default ApplyCard
