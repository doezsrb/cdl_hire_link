import { Text, View } from 'dripsy'
import { useEffect, useState } from 'react'
import { Dimensions, TouchableOpacity } from 'react-native'
import { Drawer } from 'react-native-drawer-layout'
import RadioGroup from 'react-native-radio-buttons-group'
interface FilterDrawerMobileProps {
  open: boolean
  setOpen: Function
  buttons: any
  radioGroup: any
  children: any
}
const FilterDrawerMobile = ({
  open,
  setOpen,
  buttons,
  radioGroup,
  children,
}: FilterDrawerMobileProps) => {
  const [selectedId, setSelectedId] = useState<string>()
  useEffect(() => {
    console.log('open')
  }, [open])
  return (
    <Drawer
      open={open}
      onOpen={() => setOpen(true)}
      onClose={() => setOpen(false)}
      renderDrawerContent={() => {
        return (
          <View
            sx={{
              backgroundColor: 'white',
              height: '100%',
            }}
          >
            <Text
              sx={{
                fontSize: 30,
                textAlign: 'center',
                color: 'primary',
                mt: '$2',
              }}
            >
              FILTERS
            </Text>
            <View sx={{ mt: '$2' }}>{radioGroup()}</View>
          </View>
        )
      }}
    >
      {children}
    </Drawer>
  )
}

export default FilterDrawerMobile
