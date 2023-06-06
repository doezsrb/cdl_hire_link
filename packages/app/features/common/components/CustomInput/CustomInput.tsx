import { TextInput, View, useDripsyTheme, Text } from 'dripsy'
import { useState, useEffect } from 'react'
import { Platform, StyleSheet } from 'react-native'

interface CustomInputProps {
  label: string
  required?: boolean
  error: boolean
  setVal: Function
  currentValue: any
}
const CustomInput = ({
  label,
  error,
  setVal,
  required = false,
  currentValue,
}: CustomInputProps) => {
  const [value, setValue] = useState(currentValue)
  const { theme } = useDripsyTheme()

  const style = StyleSheet.create({
    container: {
      minWidth: '50%',
      paddingLeft: 2,
      paddingRight: 2,
      paddingBottom: 10,
      ...(Platform.OS == 'web' && { flex: 1 }),
      ...(Platform.OS != 'web' && { width: '100%' }),
    },
    textLabel: { fontWeight: 'bold', color: 'primary' },
    textInput: {
      mt: '$1',
      borderWidth: 1,
      borderColor: error ? 'red' : theme.colors.primary,
      borderRadius: 30,
      padding: 10,
    },
  })
  return (
    <View sx={style.container}>
      <Text sx={style.textLabel}>
        {label} {required ? '*' : ''}
      </Text>
      <TextInput
        sx={style.textInput}
        value={value}
        onChange={(e: any) => {
          {
            setValue(e.target.value)
            setVal(e.target.value)
          }
        }}
        onFocus={() => {}}
        inputMode={undefined}
        onPressIn={undefined}
        onPressOut={undefined}
        id={undefined}
        href={undefined}
        hrefAttrs={undefined}
        onClick={undefined}
        onPointerEnter={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeave={undefined}
        onPointerLeaveCapture={undefined}
        onPointerMove={undefined}
        onPointerMoveCapture={undefined}
        onPointerCancel={undefined}
        onPointerCancelCapture={undefined}
        onPointerDown={undefined}
        onPointerDownCapture={undefined}
        onPointerUp={undefined}
        onPointerUpCapture={undefined}
        aria-label={undefined}
        aria-busy={undefined}
        aria-checked={undefined}
        aria-disabled={undefined}
        aria-expanded={undefined}
        aria-selected={undefined}
        aria-labelledby={undefined}
        aria-valuemax={undefined}
        aria-valuemin={undefined}
        aria-valuenow={undefined}
        aria-valuetext={undefined}
        aria-hidden={undefined}
        aria-live={undefined}
        aria-modal={undefined}
        role={undefined}
        accessibilityLabelledBy={undefined}
        accessibilityLanguage={undefined}
        autoComplete={undefined}
        cursorColor={undefined}
        verticalAlign={undefined}
      />
    </View>
  )
}

export default CustomInput
