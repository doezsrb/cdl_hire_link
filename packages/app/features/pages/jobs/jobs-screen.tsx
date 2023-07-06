import routerListener from 'app/features/common/functions/routerListener'
import { SafeAreaView, Text, View, useDripsyTheme } from 'dripsy'
import { useContext, useEffect, useState } from 'react'

import MobileLoadingContext from '../../../../../apps/expo/context/mobileLoadingContext'
import {
  Dimensions,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native'
import FilterDrawerMobile from 'app/features/common/components/FilterDrawer/FilterDrawerMobile'
import FilterDrawerDesktop from 'app/features/common/components/FilterDrawer/FilterDrawerDesktop'
import RadioGroup from 'react-native-radio-buttons-group'
import JobCard from 'app/features/common/components/JobCard/JobCard'
import Layout from 'app/features/common/components/Layout/Layout'

import BouncyCheckbox from 'react-native-bouncy-checkbox'
import useRouter from 'app/features/common/functions/nextrouter'
const AvailableJobsScreen = ({ navigation }: any) => {
  const mobileLoadingContext = useContext(MobileLoadingContext)
  const router = useRouter()
  const [openFilter, setOpenFilter] = useState<boolean>(false)
  useEffect(() => {
    routerListener(navigation, mobileLoadingContext)
  }, [])
  const style = StyleSheet.create({
    title: {
      marginLeft: '$2',
      fontSize: 25,
      color: 'primary',
      marginBottom: '$2',
      marginTop: '$2',
    },
    container: {
      display: 'flex',
      width: '100%',

      backgroundColor: 'white',
      paddingVertical: '$3',
    },
    topButtons: {
      mt: '$1',
      ml: '$3',
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
    },
    button: {
      fontSize: 20,
      paddingLeft: 20,
      paddingRight: 20,
      paddingTop: Platform.OS == 'web' ? 5 : 8,
      paddingBottom: 8,
      textAlign: 'center',
      borderRadius: 10,
      borderColor: 'primary',
      borderWidth: 1,
      color: 'secondary',
      backgroundColor: 'primary',
    },
  })
  const { theme } = useDripsyTheme()

  const [division, setSelectedDivision] = useState<any>({
    dry_van: {
      name: 'Dry van',
      value: false,
    },
    reefer: {
      name: 'Reefer',
      value: false,
    },
    flatbed: {
      name: 'Flatbed',
      value: false,
    },
    box_truck: {
      name: 'Box truck',
      value: false,
    },
  })
  const [selectedTypes, setSelectedTypes] = useState<any>({
    company_driver: {
      name: 'Company driver',
      value: false,
    },
    lease_to_purchase: {
      name: 'Lease to purchase',
      value: false,
    },
    rental_lease: {
      name: 'Rental lease',
      value: false,
    },
    owner_operator: {
      name: 'Owner operator',
      value: false,
    },
  })
  const [solo_team, setSelectedSoloTeam] = useState<any>({
    solo: {
      name: 'Solo',
      value: false,
    },
    team: {
      name: 'Team',
      value: false,
    },
  })
  const [experience, setSelectedExperience] = useState<any>({
    less_1: {
      name: 'Less than 1 year',
      value: false,
    },
    less_2: {
      name: 'Less than 2 years',
      value: false,
    },
    more_2: {
      name: '2+ years',
      value: false,
    },
  })
  useEffect(() => {
    if (Platform.OS == 'web') {
      let url: any = '/available-jobs'
      let typeQuery: any = Object.keys(selectedTypes)
        .map((it: any) => {
          return selectedTypes[it]
        })
        .filter((it: any) => it.value)
      console.log(typeQuery)
      let stQuery = Object.keys(solo_team)
        .map((it: any) => {
          return solo_team[it]
        })
        .filter((it: any) => it.value)
      let divisionQuery = Object.keys(division)
        .map((it: any) => {
          return division[it]
        })
        .filter((it: any) => it.value)
      let experienceQuery = Object.keys(experience)
        .map((it: any) => {
          return experience[it]
        })
        .filter((it: any) => it.value)
      url += '?type=' + typeQuery.map((it: any) => it.name)
      url += '?st=' + stQuery.map((it: any) => it.name)
      url += '?division=' + divisionQuery.map((it: any) => it.name)
      url += '?experience=' + experienceQuery.map((it: any) => it.name)
      router.push(url)
    }
  }, [selectedTypes, division, experience, solo_team])
  const buttons = {
    type: [
      {
        id: '1', // acts as primary key, should be unique and non-empty string
        label: 'Company driver',
        value: 'Company driver',
        color: theme.colors.primary,
        labelStyle: { color: theme.colors.primary },
      },
      {
        id: '2',
        label: 'Lease to purchase',
        value: 'Lease to purchase',
        color: theme.colors.primary,
        labelStyle: { color: theme.colors.primary },
      },
      {
        id: '3',
        label: 'Rental lease',
        value: 'Rental lease',
        color: theme.colors.primary,
        labelStyle: { color: theme.colors.primary },
      },
      {
        id: '4',
        label: 'Owner operator',
        value: 'Owner operator',
        color: theme.colors.primary,
        labelStyle: { color: theme.colors.primary },
      },
    ],
    solo_team: [
      {
        id: '1', // acts as primary key, should be unique and non-empty string
        label: 'Team',
        value: 'Team',
        color: theme.colors.primary,
        labelStyle: { color: theme.colors.primary },
      },
      {
        id: '2',
        label: 'Solo',
        value: 'Solo',
        color: theme.colors.primary,
        labelStyle: { color: theme.colors.primary },
      },
    ],
    division: [
      {
        id: '1',
        label: 'Dry van',
        value: 'Dry van',
        color: theme.colors.primary,
        labelStyle: { color: theme.colors.primary },
      },
      {
        id: '2',
        label: 'Reefer',
        value: 'Reefer',
        color: theme.colors.primary,
        labelStyle: { color: theme.colors.primary },
      },
      {
        id: '3',
        label: 'Flatbed',
        value: 'Flatbed',
        color: theme.colors.primary,
        labelStyle: { color: theme.colors.primary },
      },
      {
        id: '4',
        label: 'Box truck',
        value: 'Box truck',
        color: theme.colors.primary,
        labelStyle: { color: theme.colors.primary },
      },
    ],
    experience: [
      {
        id: '1',
        label: 'Less than 1 year',
        value: 'Less than 1 year',
        color: theme.colors.primary,
        labelStyle: { color: theme.colors.primary },
      },
      {
        id: '2',
        label: 'Less than 2 years',
        value: 'Less than 2 years',
        color: theme.colors.primary,
        labelStyle: { color: theme.colors.primary },
      },
      {
        id: '3',
        label: '2+ years',
        value: '2+ years',
        color: theme.colors.primary,
        labelStyle: { color: theme.colors.primary },
      },
    ],
  }
  const FiltersContent = () => {
    return (
      <View>
        <Text sx={style.title}>Type:</Text>

        <View>
          {Object.keys(selectedTypes).map((it: any, index: any) => {
            return (
              <View key={index} sx={{ marginLeft: '$2', marginTop: '$2' }}>
                <BouncyCheckbox
                  useNativeDriver={Platform.OS != 'web'}
                  size={25}
                  fillColor={theme.colors.primary}
                  unfillColor="#FFFFFF"
                  text={selectedTypes[it].name}
                  textStyle={{
                    textDecorationLine: 'none',
                    color: theme.colors.primary,
                  }}
                  isChecked={selectedTypes[it].value}
                  iconStyle={{ borderColor: 'green' }}
                  innerIconStyle={{ borderWidth: 2 }}
                  onPress={(isChecked: boolean) => {
                    var newObj = { ...selectedTypes }
                    newObj[it].value = isChecked
                    setSelectedTypes(newObj)
                  }}
                />
              </View>
            )
          })}
        </View>
        <Text sx={style.title}>Solo/Team:</Text>
        {Object.keys(solo_team).map((it: any, index: any) => {
          return (
            <View key={index} sx={{ marginLeft: '$2', marginTop: '$2' }}>
              <BouncyCheckbox
                useNativeDriver={Platform.OS != 'web'}
                size={25}
                fillColor={theme.colors.primary}
                unfillColor="#FFFFFF"
                text={solo_team[it].name}
                textStyle={{
                  textDecorationLine: 'none',
                  color: theme.colors.primary,
                }}
                isChecked={solo_team[it].value}
                disableBuiltInState={true}
                iconStyle={{ borderColor: 'green' }}
                innerIconStyle={{ borderWidth: 2 }}
                onPress={(isChecked: boolean) => {
                  var newObj = { ...solo_team }
                  if (newObj[it].value) {
                    newObj[it].value = false
                  } else {
                    Object.keys(newObj).map((it: any) => {
                      newObj[it].value = false
                    })

                    newObj[it].value = true
                  }

                  setSelectedSoloTeam(newObj)
                }}
              />
            </View>
          )
        })}
        <Text sx={style.title}>Division:</Text>
        <View>
          {Object.keys(division).map((it: any, index: any) => {
            return (
              <View key={index} sx={{ marginLeft: '$2', marginTop: '$2' }}>
                <BouncyCheckbox
                  useNativeDriver={Platform.OS != 'web'}
                  size={25}
                  fillColor={theme.colors.primary}
                  unfillColor="#FFFFFF"
                  text={division[it].name}
                  textStyle={{
                    textDecorationLine: 'none',
                    color: theme.colors.primary,
                  }}
                  isChecked={division[it].value}
                  iconStyle={{ borderColor: 'green' }}
                  innerIconStyle={{ borderWidth: 2 }}
                  onPress={(isChecked: boolean) => {
                    var newObj = { ...division }
                    newObj[it].value = isChecked
                    setSelectedDivision(newObj)
                  }}
                />
              </View>
            )
          })}
        </View>
        <Text sx={style.title}>Experience:</Text>
        {Object.keys(experience).map((it: any, index: any) => {
          return (
            <View key={index} sx={{ marginLeft: '$2', marginTop: '$2' }}>
              <BouncyCheckbox
                useNativeDriver={Platform.OS != 'web'}
                size={25}
                fillColor={theme.colors.primary}
                unfillColor="#FFFFFF"
                text={experience[it].name}
                textStyle={{
                  textDecorationLine: 'none',
                  color: theme.colors.primary,
                }}
                isChecked={experience[it].value}
                disableBuiltInState={true}
                iconStyle={{ borderColor: 'green' }}
                innerIconStyle={{ borderWidth: 2 }}
                onPress={(isChecked: boolean) => {
                  var newObj = { ...experience }
                  if (newObj[it].value) {
                    newObj[it].value = false
                  } else {
                    Object.keys(newObj).map((it: any) => {
                      newObj[it].value = false
                    })

                    newObj[it].value = true
                  }

                  setSelectedExperience(newObj)
                }}
              />
            </View>
          )
        })}
      </View>
    )
  }
  const Content = () => {
    return (
      <View sx={style.container}>
        <View sx={style.topButtons}>
          <TouchableOpacity onPress={() => setOpenFilter(true)}>
            <Text sx={style.button}>FILTERS</Text>
          </TouchableOpacity>
        </View>
        <View
          sx={{
            mt: '$3',
            display: 'flex',
            flexDirection: ['column', 'row'],
            rowGap: 15,
            columnGap: [null, '1.2%'],
            flexWrap: 'wrap',
            width: '100%',
            paddingHorizontal: '$3',
          }}
        >
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
        </View>
      </View>
    )
  }
  return (
    <>
      {Platform.OS == 'web' ? (
        <Layout title="AVAILABLE JOBS">
          <FilterDrawerDesktop
            radioGroup={FiltersContent}
            open={openFilter}
            setOpen={setOpenFilter}
          />
          {Content()}
        </Layout>
      ) : (
        <FilterDrawerMobile
          radioGroup={FiltersContent}
          buttons={buttons}
          open={openFilter}
          setOpen={setOpenFilter}
        >
          <Layout title="AVAILABLE JOBS">{Content()}</Layout>
        </FilterDrawerMobile>
      )}
    </>
  )
}

export default AvailableJobsScreen
