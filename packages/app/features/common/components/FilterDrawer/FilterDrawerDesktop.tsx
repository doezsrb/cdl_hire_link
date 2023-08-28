import { Text, View, useDripsyTheme } from 'dripsy'
import { Drawer } from '../../functions/mateiralui'
import { Dimensions } from 'react-native'
import RadioGroup from 'react-native-radio-buttons-group'
import FilterList from '../FilterList/FilterList'
interface FilterDrawerDesktopProps {
  open: boolean
  setOpen: Function
  changeFilter: Function
  selectedTypes: any[]
  selectedExperience: any[]
  selectedDivision: any[]
  selectedSoloTeam: any[]
}
const FilterDrawerDesktop = ({
  open,
  setOpen,
  changeFilter,
  selectedTypes,
  selectedDivision,
  selectedExperience,
  selectedSoloTeam,
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
          backgroundColor: theme.colors.primary,
        },
      }}
    >
      <View>
        <Text
          sx={{
            fontSize: 30,
            textAlign: 'center',
            color: 'white',
            mt: '$2',
          }}
        >
          FILTERS
        </Text>
        <View>
          <FilterList
            changeFilter={changeFilter}
            selectedTypes={selectedTypes}
            selectedExperience={selectedExperience}
            selectedDivision={selectedDivision}
            selectedSoloTeam={selectedSoloTeam}
          />
        </View>
      </View>
    </Drawer>
  )
}

export default FilterDrawerDesktop
