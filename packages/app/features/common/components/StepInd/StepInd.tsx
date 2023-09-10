import { Text, View, useDripsyTheme, useSx } from 'dripsy'
import { StyleSheet } from 'react-native'
import { Fragment } from 'react'
import { MotiView } from 'moti'
interface StepIndProps {
  current: number
  steps: number
  stepName: string
}
const StepInd = ({ current, steps, stepName }: StepIndProps) => {
  const { theme } = useDripsyTheme()
  const style = StyleSheet.create({
    circle: {
      marginLeft: 5,
      marginRight: 5,
      width: 30,
      height: 30,
      borderRadius: 20,
      borderWidth: 7,
    },
    line: {
      flex: 1,
      height: 10,
      backgroundColor: theme.colors.$lightGray,
    },
    line2: {
      flex: 1,
      height: 10,

      backgroundColor: 'gray',
    },
    stepName: {
      textAlign: 'center',
      fontSize: 20,
      fontWeight: 'bold',
      color: 'secondary',
    },
  })
  const sx = useSx()
  const number = 4
  const step = 1

  return (
    <View sx={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
      <Text sx={style.stepName}>{stepName}</Text>
      <View
        sx={{
          width: '100%',

          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <></>
        {Array.from({ length: steps }).map((it, index) => {
          if (index == 0) {
            return (
              <Fragment key={index}>
                <View
                  style={[style.circle, sx({ borderColor: 'secondary' })]}
                />
              </Fragment>
            )
          }
          return (
            <Fragment key={index}>
              <View style={[style.line]}>
                <MotiView
                  transition={{
                    type: 'timing',
                    duration: 2000,
                  }}
                  animate={{
                    width: current > index ? '100%' : '0%',
                    height: '100%',
                    backgroundColor: theme.colors.secondary,
                  }}
                />
              </View>
              <View
                style={[
                  style.circle,
                  current > index
                    ? sx({ borderColor: 'secondary' })
                    : { borderColor: theme.colors.$lightGray },
                ]}
              />
            </Fragment>
          )
        })}
      </View>
    </View>
  )
}

export default StepInd
