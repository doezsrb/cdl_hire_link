import { View, useDripsyTheme, useSx } from 'dripsy'
import { Platform, TouchableOpacity } from 'react-native'
import ModalDropdown from 'react-native-modal-dropdown'
import { useState, useEffect } from 'react'
import Icon from 'react-native-vector-icons/AntDesign'

interface CustomPaginationMobileProps {
  numPages: number
  setCurrentPage: Function
  currentPage: number
}
const CustomPaginationMobile = ({
  numPages,
  setCurrentPage,
  currentPage,
}: CustomPaginationMobileProps) => {
  const data = [{ number: 1 }]
  const maxPages = 10
  const [value, setValue] = useState(1)
  const { theme } = useDripsyTheme()
  const sx = useSx()

  return (
    <View
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 30,
        alignItems: 'center',
      }}
    >
      <TouchableOpacity
        onPress={() => {
          if (value <= 1) {
            return
          } else {
            setValue((old: any) => old - 1)
          }
        }}
      >
        <Icon name="leftcircleo" size={30} color={theme.colors.primary} />
      </TouchableOpacity>
      <ModalDropdown
        textStyle={sx({ color: 'primary', fontSize: 20 })}
        style={sx({
          borderWidth: 1,
          borderStyle: 'solid',
          borderColor: 'primary',
          borderRadius: 30,
          padding: 10,
        })}
        showsVerticalScrollIndicator={true}
        dropdownStyle={{
          marginLeft: -15,
          marginTop: 10,
        }}
        dropdownTextStyle={sx({ color: 'primary', fontSize: 30 })}
        defaultValue={value.toString()}
        options={Array.from({ length: maxPages }).map((it: any, index: any) =>
          (index + 1).toString()
        )}
      />
      <TouchableOpacity
        onPress={() => {
          if (value >= maxPages) {
            return
          } else {
            setValue((old: any) => old + 1)
          }
        }}
      >
        <Icon name="rightcircleo" size={30} color={theme.colors.primary} />
      </TouchableOpacity>
    </View>
  )
}

export default CustomPaginationMobile
