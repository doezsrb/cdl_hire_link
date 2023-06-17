import { Text, View, useDripsyTheme } from 'dripsy'
import { Drawer } from '../../functions/mateiralui'
import { Dimensions } from 'react-native'
import RadioGroup from 'react-native-radio-buttons-group'
interface FilterDrawerDesktopProps {
  open: boolean
  setOpen: Function
  radioGroup: any
}
const FilterDrawerDesktop = ({
  open,
  setOpen,
  radioGroup,
}: FilterDrawerDesktopProps) => {
  const { theme } = useDripsyTheme()
  return (
    <Drawer
      disableScrollLock={true}
      open={open}
      anchor="left"
      onClose={() => setOpen(false)}
      ModalProps={{
        keepMounted: true,
      }}
      sx={{
        '& .MuiDrawer-paper': {
          boxSizing: 'border-box',
          width: 300,
          backgroundColor: 'white',
        },
      }}
    >
      <View>
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
        <View>{radioGroup()}</View>
      </View>
    </Drawer>
  )
}

export default FilterDrawerDesktop
