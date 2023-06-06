import { Image, View, useDripsyTheme } from 'dripsy'
import { useEffect, useState } from 'react'
import Dropdown from 'react-native-input-select'
import { SolitoImage } from 'solito/image'
import { AiOutlineDown } from 'react-icons/ai'
import { Platform } from 'react-native'
interface CustomSelectInputProps {
  label: string
  data: any[]
  error: boolean
  fullWidth?: boolean
  required?: boolean
  setVal: Function
  currentValue: any
}
const CustomSelectInput = ({
  label,
  data,
  error,
  fullWidth = false,
  required = false,
  setVal,
  currentValue,
}: CustomSelectInputProps) => {
  const [value, setValue] = useState(
    currentValue == ''
      ? null
      : data.findIndex((obj) => {
          return obj.name == currentValue
        }) + 1
  )
  const { theme } = useDripsyTheme()

  return (
    <View
      sx={{
        paddingLeft: 2,
        paddingRight: 2,
        minWidth: fullWidth ? '100%' : '50%',
        width: fullWidth ? '100%' : null,
        flex: 1,
      }}
    >
      <Dropdown
        label={label + (required ? ' *' : '')}
        placeholder="Select an option..."
        options={data}
        dropdownIcon={Platform.OS == 'web' && <AiOutlineDown />}
        labelStyle={{
          marginBottom: 5,
          color: theme.colors.primary,
          fontWeight: 'bold',
          fontSize: 13,
        }}
        dropdownIconStyle={{
          display: 'flex',
          justifyContent: 'center',
          height: Platform.OS == 'web' ? '100%' : 50,
          top: 0,
        }}
        modalBackgroundStyle={{
          alignItems: 'center',
          justifyContent: 'center',
        }}
        modalOptionsContainerStyle={{
          width: 200,
          paddingBottom: 20,
          borderBottomEndRadius: 15,
          borderBottomStartRadius: 15,
        }}
        dropdownStyle={{
          padding: 12,
          paddingLeft: 20,

          minHeight: 0,
          borderColor: error ? 'red' : theme.colors.primary,
          borderRadius: 30,
        }}
        optionLabel={'name'}
        optionValue={'code'}
        selectedValue={value}
        onValueChange={(value) => {
          setValue(value)

          setVal(data[value - 1].name)
        }}
        primaryColor={theme.colors.primary}
      />
    </View>
  )
}

export default CustomSelectInput
