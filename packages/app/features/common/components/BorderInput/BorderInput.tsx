import { View, Text, useDripsyTheme } from 'dripsy'
import { StyleSheet } from 'react-native'

interface BorderInputProps {
  text: string
  children: any
}
const BorderInput = ({ text, children }: BorderInputProps) => {
  const { theme } = useDripsyTheme()
  const style = StyleSheet.create({
    container: {
      width: '100%',
      padding: 10,
      borderWidth: 2,
      marginTop: 10,
      borderColor: theme.colors.secondary,
      borderRadius: 2,
    },
    text: {
      fontWeight: 'bold',
      width: 'auto',
      color: 'secondary',
      marginTop: -21,
      left: 7,
      backgroundColor: 'white',
      paddingLeft: 5,
      paddingRight: 5,
    },
  })
  return (
    <View sx={style.container}>
      <View sx={{ alignItems: 'flex-start' }}>
        <Text sx={style.text}>{text}</Text>
      </View>
      {children}
    </View>
  )
}

export default BorderInput
