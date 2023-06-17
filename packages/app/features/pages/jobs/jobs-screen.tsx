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
const AvailableJobsScreen = ({ navigation }) => {
  const mobileLoadingContext = useContext(MobileLoadingContext)
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
      minHeight: 800,
      backgroundColor: 'white',
    },
    topButtons: {
      mt: '$2',
      ml: '$2',
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
      paddingTop: 5,
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
  const [selectedId, setSelectedId] = useState<string>()
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
  const radioGroup = (btns: any[]) => {
    return (
      <View>
        <Text sx={style.title}>Type:</Text>
        <RadioGroup
          containerStyle={{
            alignItems: 'flex-start',
          }}
          radioButtons={buttons.type}
          onPress={setSelectedId}
          selectedId={selectedId}
        />
        <Text sx={style.title}>Solo/Team:</Text>
        <RadioGroup
          containerStyle={{
            alignItems: 'flex-start',
          }}
          radioButtons={buttons.solo_team}
          onPress={setSelectedId}
          selectedId={selectedId}
        />
        <Text sx={style.title}>Division:</Text>
        <RadioGroup
          containerStyle={{
            alignItems: 'flex-start',
          }}
          radioButtons={buttons.division}
          onPress={setSelectedId}
          selectedId={selectedId}
        />
        <Text sx={style.title}>Experience:</Text>
        <RadioGroup
          containerStyle={{
            alignItems: 'flex-start',
          }}
          radioButtons={buttons.experience}
          onPress={setSelectedId}
          selectedId={selectedId}
        />
      </View>
    )
  }
  const content = () => {
    return (
      <View sx={style.container}>
        <View sx={style.topButtons}>
          <TouchableOpacity onPress={() => setOpenFilter(true)}>
            <Text sx={style.button}>FILTERS</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
  return (
    <SafeAreaView>
      <ScrollView>
        {Platform.OS == 'web' ? (
          <>
            <FilterDrawerDesktop
              radioGroup={radioGroup}
              open={openFilter}
              setOpen={setOpenFilter}
            />
            {content()}
          </>
        ) : (
          <FilterDrawerMobile
            radioGroup={radioGroup}
            buttons={buttons}
            open={openFilter}
            setOpen={setOpenFilter}
          >
            {content()}
          </FilterDrawerMobile>
        )}
      </ScrollView>
    </SafeAreaView>
  )
}

export default AvailableJobsScreen
