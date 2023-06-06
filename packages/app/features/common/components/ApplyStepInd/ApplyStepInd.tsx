import { View } from 'dripsy'
import { StyleSheet } from 'react-native'

interface ApplyStepIndProps {
  step: number
}
const ApplyStepInd = ({ step }: ApplyStepIndProps) => {
  const style = StyleSheet.create({
    container: {
      width: '100%',

      flexDirection: 'row',
      alignItems: 'center',
    },
    circle: {
      marginLeft: 5,
      marginRight: 5,
      width: 30,
      height: 30,
      borderRadius: 20,
      borderWidth: 7,
      borderColor: 'secondary',
    },
    line: {
      flex: 1,
      height: step == 1 ? ([10, 0] as any) : 10,

      backgroundColor: 'white',
    },
    line2: {
      flex: 1,
      height: step == 3 ? ([10, 0] as any) : 10,

      backgroundColor: 'white',
    },
  })
  return (
    <View sx={style.container}>
      <View sx={style.line}></View>
      {Array.from({ length: step }).map((it, index) => (
        <View key={index} sx={style.circle}></View>
      ))}

      <View sx={style.line2}></View>
    </View>
  )
}

export default ApplyStepInd
