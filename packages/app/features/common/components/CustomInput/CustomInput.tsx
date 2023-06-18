import { TextInput, View, useDripsyTheme, Text } from 'dripsy'
import { useState, useEffect } from 'react'
import { Platform, Pressable, StyleSheet } from 'react-native'
import {
  AdapterDayjs,
  DatePicker,
  DateTimePicker,
  LocalizationProvider,
} from '../../functions/datepicker'

interface CustomInputProps {
  label: string
  required?: boolean
  error: boolean
  setVal: Function
  currentValue: any
  datePicker?: boolean
  multiline?: boolean
}
const CustomInput = ({
  label,
  error,
  setVal,
  required = false,
  currentValue,
  datePicker = false,
  multiline = false,
}: CustomInputProps) => {
  const [date, setDate] = useState<any>(new Date())
  const [value, setValue] = useState(currentValue)
  const { theme } = useDripsyTheme()
  const [openDatePicker, setOpenDatePicker] = useState(false)
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
      height: multiline ? 200 : 'auto',
      mt: '$1',
      borderWidth: 1,
      borderColor: error ? 'red' : theme.colors.primary,
      borderRadius: 30,
      padding: 10,
    },
  })
  return (
    <View sx={style.container}>
      {openDatePicker && Platform.OS != 'web' && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={'date'}
          is24Hour={true}
          onChange={(e: any) => {
            var date = new Date(e.nativeEvent.timestamp)
            setDate(new Date(e.nativeEvent.timestamp))
            setOpenDatePicker(false)
            setVal(
              date.getMonth() + '/' + date.getDate() + '/' + date.getFullYear()
            )
            setValue(
              date.getMonth() + '/' + date.getDate() + '/' + date.getFullYear()
            )
          }}
        />
      )}

      <Text sx={style.textLabel}>
        {label} {required ? '*' : ''}
      </Text>
      {Platform.OS == 'web' && datePicker ? (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            onChange={(e: any) => {
              setVal(e.$M + 1 + '/' + e.$D + '/' + e.$y)
            }}
            sx={{
              '& .MuiInputBase-root': {
                borderRadius: 30,
                height: 40,
                borderColor: 'red !important',
                marginTop: theme.space.$1 + 'px',
              },
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: error ? 'red' : theme.colors.primary,
              },
            }}
          />
        </LocalizationProvider>
      ) : (
        <Pressable
          onPress={() => {
            if (datePicker) {
              setOpenDatePicker(true)
            }
          }}
        >
          <TextInput
            sx={style.textInput}
            value={value}
            onChange={(e: any) => {
              {
                setValue(e.target.value)
                setVal(e.target.value)
              }
            }}
            multiline={multiline}
            editable={!datePicker}
            onFocus={undefined}
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
        </Pressable>
      )}
    </View>
  )
}

export default CustomInput