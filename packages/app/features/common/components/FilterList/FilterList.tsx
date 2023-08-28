import routerListener from 'app/features/common/functions/routerListener'
import {
  SafeAreaView,
  Text,
  View,
  useDripsyTheme,
  Box,
  ActivityIndicator,
} from 'dripsy'
import { useContext, useEffect, useState } from 'react'

import {
  Dimensions,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native'

import BouncyCheckbox from 'react-native-bouncy-checkbox'
import useRouter from 'app/features/common/functions/nextrouter'
import { getCountData, getData } from 'app/features/common/functions/firestore'
import LoadingScreen from 'app/features/common/components/LoadingScreen/LoadingScreen'
import FilterItem from '../FilterItem/FilterItem'

const FilterList = ({
  selectedTypes,
  selectedDivision,
  changeFilter,
  selectedExperience,
  selectedSoloTeam,
}: {
  selectedTypes: any[]
  selectedExperience: any[]
  changeFilter: Function
  selectedDivision: any[]
  selectedSoloTeam: any[]
}) => {
  const style = StyleSheet.create({
    title: {
      marginLeft: '$2',
      fontSize: 25,
      color: 'white',
      marginBottom: '$2',
      marginTop: '$2',
    },
  })
  const { theme } = useDripsyTheme()
  const [division, setDivision] = useState<any>([
    'Dry van',
    'Reefer',
    'Flatbed',
    'Box truck',
  ])
  const [types, setTypes] = useState<any>([
    'Company driver',
    'Lease to purchase',
    'Rental lease',
    'Owner operator',
  ])
  const [solo_team, setSoloTeam] = useState<any>(['Solo', 'Team'])
  const [experience, setExperience] = useState<any>([
    'Less than 1 year',
    'Less than 2 years',
    '2+ years',
  ])
  return (
    <View>
      <Text sx={style.title}>Type:</Text>

      <View>
        {types.map((it: any, index: any) => {
          return (
            <View key={index} sx={{ marginLeft: '$2', marginTop: '$2' }}>
              <FilterItem
                changeFilter={() => changeFilter('Type', it)}
                checked={selectedTypes.includes(it)}
                text={it}
              />
            </View>
          )
        })}
      </View>
      <Text sx={style.title}>Solo/Team:</Text>
      {solo_team.map((it: any, index: any) => {
        return (
          <View key={index} sx={{ marginLeft: '$2', marginTop: '$2' }}>
            <FilterItem
              changeFilter={() => changeFilter('SoloTeam', it)}
              text={it}
              checked={selectedSoloTeam.includes(it)}
            />
          </View>
        )
      })}
      <Text sx={style.title}>Division:</Text>
      <View>
        {division.map((it: any, index: any) => {
          return (
            <View key={index} sx={{ marginLeft: '$2', marginTop: '$2' }}>
              <FilterItem
                changeFilter={() => changeFilter('Division', it)}
                text={it}
                checked={selectedDivision.includes(it)}
              />
            </View>
          )
        })}
      </View>
      <Text sx={style.title}>Experience:</Text>
      {experience.map((it: any, index: any) => {
        return (
          <View key={index} sx={{ marginLeft: '$2', marginTop: '$2' }}>
            <FilterItem
              changeFilter={() => changeFilter('Experience', it)}
              text={it}
              checked={selectedExperience.includes(it)}
            />
          </View>
        )
      })}
    </View>
  )
}

export default FilterList
