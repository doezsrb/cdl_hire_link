import { Text, View, useDripsyTheme } from 'dripsy'
import { Platform, TouchableOpacity } from 'react-native'
import BouncyCheckbox from 'react-native-bouncy-checkbox'
const FilterItem = ({
  text,
  checked,
  changeFilter,
}: {
  text: string
  checked: boolean
  changeFilter: Function
}) => {
  const { theme } = useDripsyTheme()
  return (
    <TouchableOpacity onPress={() => changeFilter()}>
      <View
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: 5,
        }}
      >
        <View
          sx={{
            width: 20,
            height: 20,
            borderRadius: 20,
            borderWidth: 1,
            borderColor: 'secondary',
            backgroundColor: checked ? 'secondary' : 'white',
          }}
        />
        <Text sx={{ fontSize: 20, color: 'white' }}>{text}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default FilterItem
