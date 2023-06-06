import { View, Text, Pressable, useSx } from 'dripsy'
import { useState } from 'react'
import { StyleSheet } from 'react-native'

interface CustomRadioProps {
  name: string
  setVal: Function
  error: boolean
  required?: boolean
  currentValue: any
}
const CustomRadio = ({
  name,
  setVal,
  error,
  required = false,
  currentValue,
}: CustomRadioProps) => {
  const [value, setValue] = useState<any>(
    currentValue == '' ? null : currentValue
  )
  const sx = useSx()
  const style = StyleSheet.create({
    textStyle: {
      marginLeft: 4,
      fontWeight: 'bold',
      color: 'primary',
    },
    button: {
      marginLeft: 5,
      width: 20,
      height: 20,

      borderRadius: 20,
      borderWidth: 3,
      borderColor: error ? 'red' : 'primary',
    },
    pressable: { display: 'flex', flexDirection: 'row' },
    containerButton: {
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      mt: 5,
    },
    container: {
      display: 'flex',
      flexDirection: 'column',
      paddingLeft: 2,
      paddingRight: 2,
      paddingTop: 5,
      paddingBottom: 5,
    },
  })
  return (
    <View sx={style.container}>
      <Text variant="buttonBig" sx={{ textAlign: 'left' }}>
        {name}
        {required ? ' *' : null}
      </Text>
      <View sx={style.containerButton}>
        <Pressable
          sx={style.pressable}
          onPress={() => {
            setValue(true)
            setVal('Yes')
          }}
        >
          <View
            style={[
              sx(style.button),
              sx({ backgroundColor: value ? 'primary' : 'white' }),
            ]}
          ></View>

          <Text sx={style.textStyle}>YES</Text>
        </Pressable>
        <Pressable
          sx={style.pressable}
          onPress={() => {
            setValue(false)
            setVal('No')
          }}
        >
          <View
            style={[
              sx(style.button),
              sx({
                backgroundColor: !value && value != null ? 'primary' : 'white',
              }),
            ]}
          ></View>

          <Text sx={style.textStyle}>NO</Text>
        </Pressable>
      </View>
    </View>
  )
}

export default CustomRadio
