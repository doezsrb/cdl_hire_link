import { Text, View, useDripsyTheme, useSx } from 'dripsy'
import { StyleSheet } from 'react-native'
import { Fragment } from 'react'
interface StepIndProps {
  current: number
  steps: number
  stepName: string
}
const StepInd = ({ current, steps, stepName }: StepIndProps) => {
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
  const { theme } = useDripsyTheme()
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
              <View
                style={[
                  style.line,
                  current > index
                    ? sx({ backgroundColor: 'secondary' })
                    : { backgroundColor: theme.colors.$lightGray },
                ]}
              />
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
