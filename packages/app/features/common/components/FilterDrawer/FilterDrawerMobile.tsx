import { Text, View } from 'dripsy'
import { useEffect, useState } from 'react'
import { ScrollView } from 'react-native'
import { Dimensions, TouchableOpacity } from 'react-native'
import { Drawer } from 'react-native-drawer-layout'
import RadioGroup from 'react-native-radio-buttons-group'
import FilterList from '../FilterList/FilterList'
interface FilterDrawerMobileProps {
  open: boolean
  setOpen: Function
  changeFilter: Function
  selectedTypes: any[]
  selectedExperience: any[]
  selectedDivision: any[]
  selectedSoloTeam: any[]
  children: any
}
const FilterDrawerMobile = ({
  open,
  setOpen,
  changeFilter,
  selectedTypes,
  selectedDivision,
  selectedExperience,
  selectedSoloTeam,
  children,
}: FilterDrawerMobileProps) => {
  const [selectedId, setSelectedId] = useState<string>()

  return (
    <Drawer
      open={open}
      onOpen={() => setOpen(true)}
      onClose={() => setOpen(false)}
      renderDrawerContent={() => {
        return (
          <ScrollView>
            <View
              sx={{
                backgroundColor: 'white',
                height: '100%',
                paddingBottom: '$4',
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
              <View sx={{ mt: '$2' }}>
                <FilterList
                  changeFilter={changeFilter}
                  selectedTypes={selectedTypes}
                  selectedExperience={selectedExperience}
                  selectedDivision={selectedDivision}
                  selectedSoloTeam={selectedSoloTeam}
                />
              </View>
            </View>
          </ScrollView>
        )
      }}
    >
      {children}
    </Drawer>
  )
}

export default FilterDrawerMobile
