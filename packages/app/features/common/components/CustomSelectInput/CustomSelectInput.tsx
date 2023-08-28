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
  optionValue: string
  optionLabel: string
  multiple?: boolean
}
const CustomSelectInput = ({
  label,
  data,
  error,
  fullWidth = false,
  required = false,
  setVal,
  currentValue,
  optionLabel,
  optionValue,
  multiple = false,
}: CustomSelectInputProps) => {
  const [value, setValue] = useState(
    multiple && currentValue != '' ? currentValue.split(',') : currentValue
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
        modalProps={{
          animationType: 'none',
        }}
        label={label + (required ? ' *' : '')}
        placeholder="Select an option..."
        options={data}
        isMultiple={multiple}
        dropdownIcon={Platform.OS == 'web' && <AiOutlineDown />}
        labelStyle={{
          marginBottom: 8,

          color: theme.colors.primary,
          fontWeight: 'bold',
          fontSize: 13,
        }}
        dropdownIconStyle={{
          display: 'flex',
          justifyContent: 'center',
          height: Platform.OS == 'web' ? '100%' : 42,
          top: 0,
        }}
        modalBackgroundStyle={{
          alignItems: 'center',
          justifyContent: 'center',
        }}
        modalOptionsContainerStyle={{
          width: 'auto',
          paddingBottom: 20,

          borderBottomEndRadius: 15,
          borderBottomStartRadius: 15,
        }}
        multipleSelectedItemStyle={{
          backgroundColor: theme.colors.primary,
          paddingHorizontal: 10,
          paddingVertical: 2,
        }}
        dropdownStyle={{
          paddingTop: 0,
          paddingBottom: 0,
          margin: 0,
          height: 42,
          minHeight: 0,
          borderColor: error ? 'red' : theme.colors.primary,

          borderRadius: 70,
        }}
        dropdownHelperTextStyle={{ backgroundColor: 'red' }}
        optionLabel={optionLabel}
        optionValue={optionValue}
        selectedValue={value}
        onValueChange={(value: any) => {
          setValue(value)
          var value_ = ''
          if (multiple) {
            value_ = value.join(',')
          } else {
            value_ = value
          }
          if (value_ == null) {
            value_ = ''
          }
          setVal(value_)
        }}
        primaryColor={theme.colors.primary}
      />
    </View>
  )
}

export default CustomSelectInput
