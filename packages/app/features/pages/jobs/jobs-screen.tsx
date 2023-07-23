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
import { getCountData, getData } from 'app/features/common/functions/firestore'
import LoadingScreen from 'app/features/common/components/LoadingScreen/LoadingScreen'
const AvailableJobsScreen = ({ route, navigation }: any) => {
  const mobileLoadingContext = useContext(MobileLoadingContext)
  const router = useRouter()
  const [openFilter, setOpenFilter] = useState<boolean>(false)
  const [loading, setLoading] = useState(true)

  const [lastDoc, setLastDoc] = useState<any>(null)
  const [data, setData] = useState([])
  const { theme } = useDripsyTheme()
  const [selectedTypes, setSelectedTypes] = useState<any[]>([])
  const [selectedDivision, setSelectedDivision] = useState([])
  const [selectedSoloTeam, setSelectedSoloTeam] = useState([])
  const [selectedExperience, setSelectedExperience] = useState([])
  const fetchData = (
    lastDoc: any,
    callback?: Function,
    selectedTypes_?: any[],
    selectedDivision_?: any[],
    selectedSoloTeam_?: any[],
    selectedExperience_?: any[],
    nonpagination?: boolean
  ) => {
    if (lastDoc == 'finish') return

    var filters: any = []
    if (selectedTypes_ != undefined) {
      filters = filters.concat(selectedTypes_)
    } else {
      filters = filters.concat(selectedTypes)
    }
    if (selectedDivision_ != undefined) {
      filters = filters.concat(selectedDivision_)
    } else {
      filters = filters.concat(selectedDivision)
    }
    if (selectedSoloTeam_ != undefined) {
      filters = filters.concat(selectedSoloTeam_)
    } else {
      filters = filters.concat(selectedSoloTeam)
    }
    if (selectedExperience_ != undefined) {
      filters = filters.concat(selectedExperience_)
    } else {
      filters = filters.concat(selectedExperience)
    }
    if (nonpagination) {
      setLoading(true)
    }
    getData('jobs', filters, lastDoc)
      .then((data_: any) => {
        if (data_.lastDoc == undefined || data_.data.length < 20) {
          setLastDoc('finish')
        } else {
          setLastDoc(data_.lastDoc)
        }

        if (nonpagination) {
          setData([])
          setData(data_.data)
        } else {
          var oldData: any = data
          oldData = oldData.concat(data_.data)
          setData(oldData)
        }
      })
      .catch((e: any) => {
        console.log(e)
      })
      .finally(() => {
        setLoading(false)
        if (callback != undefined) callback()
      })
  }

  useEffect(() => {
    routerListener(navigation, mobileLoadingContext)
  }, [])
  useEffect(() => {
    var universalRouter: any
    var types: any = []
    var solo_team: any = []
    var division: any = []
    var experience: any = []
    if (Platform.OS == 'web') {
      if (!router.isReady) return
      universalRouter = router.query
    } else {
      universalRouter = route.params
    }

    if (universalRouter != undefined) {
      types =
        universalRouter.type != undefined && universalRouter.type != ''
          ? universalRouter.type.split(',')
          : []
      solo_team =
        universalRouter.st != undefined && universalRouter.st != ''
          ? universalRouter.st.split(',')
          : []
      division =
        universalRouter.division != undefined && universalRouter.division != ''
          ? universalRouter.division.split(',')
          : []
      experience =
        universalRouter.experience != undefined &&
        universalRouter.experience != ''
          ? universalRouter.experience.split(',')
          : []
    }
    setSelectedTypes(types)
    setSelectedSoloTeam(solo_team)
    setSelectedDivision(division)
    setSelectedExperience(experience)

    fetchData(null, undefined, types, division, solo_team, experience, true)
  }, [router, route])
  const style = StyleSheet.create({
    title: {
      marginLeft: '$2',
      fontSize: 25,
      color: 'primary',
      marginBottom: '$2',
      marginTop: '$2',
    },
    container: {
      position: 'relative',
      display: 'flex',
      width: '100%',
      minHeight: Dimensions.get('window').height,
      backgroundColor: 'white',
      paddingVertical: '$3',
    },
    topButtons: {
      mt: '$1',

      paddingHorizontal: '$3',
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

  const Content = () => {
    return (
      <View sx={style.container}>
        {loading ? (
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              height: Dimensions.get('window').height / 1.5,

              zIndex: 3,
            }}
          >
            <ActivityIndicator color="primary" size="large" />
          </Box>
        ) : (
          <>
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
              {data.map((it: any) => {
                return (
                  <JobCard
                    types={it.data.type}
                    tags={it.data.tags}
                    id={it.id}
                    imageName={it.data.imageName}
                    name={it.data.name}
                    key={it.id}
                  />
                )
              })}
            </View>
          </>
        )}
      </View>
    )
  }

  const universalChangeFilter = (filterGroup: string, filter: string) => {
    var types: any[] = []
    var solo_team: any[] = []
    var division: any[] = []
    var experience: any[] = []
    var webRouter: any

    var universalRouter: any
    if (Platform.OS == 'web') {
      universalRouter = router.query
      webRouter = router
    } else {
      universalRouter = route.params
    }

    if (universalRouter != undefined) {
      types =
        universalRouter.type != undefined && universalRouter.type != ''
          ? universalRouter.type.split(',')
          : []
      division =
        universalRouter.division != undefined && universalRouter.division != ''
          ? universalRouter.division.split(',')
          : []
      solo_team =
        universalRouter.st != undefined && universalRouter.st != ''
          ? universalRouter.st.split(',')
          : []
      experience =
        universalRouter.experience != undefined &&
        universalRouter.experience != ''
          ? universalRouter.experience.split(',')
          : []
    }
    switch (filterGroup) {
      case 'Type':
        if (types.includes(filter)) {
          types = types.filter((it: any) => it != filter)
        } else {
          types.push(filter)
        }
        break
      case 'Division':
        if (division.includes(filter)) {
          division = division.filter((it: any) => it != filter)
        } else {
          division.push(filter)
        }
        break
      case 'Experience':
        if (experience.includes(filter)) {
          experience = []
        } else {
          experience = [filter]
        }
        break
      case 'SoloTeam':
        if (solo_team.includes(filter)) {
          solo_team = []
        } else {
          solo_team = [filter]
        }
        break
    }
    if (Platform.OS == 'web') {
      let url: any = '/available-jobs'
      url += '?type=' + types.join(',')
      url += '&division=' + division.join(',')
      url += '&st=' + solo_team.join(',')
      url += '&experience=' + experience.join(',')
      url = url.replace('+', '%2B')
      webRouter.push(url)
    } else {
      navigation.navigate('available-jobs', {
        type: types.join(','),
        division: division.join(','),
        st: solo_team.join(','),
        experience: experience.join(','),
      })
    }
  }

  return (
    <>
      {Platform.OS == 'web' ? (
        <Layout title="AVAILABLE JOBS" fetchData={fetchData} lastDoc={lastDoc}>
          <FilterDrawerDesktop
            changeFilter={universalChangeFilter}
            selectedTypes={selectedTypes}
            selectedDivision={selectedDivision}
            selectedSoloTeam={selectedSoloTeam}
            selectedExperience={selectedExperience}
            open={openFilter}
            setOpen={setOpenFilter}
          />
          {Content()}
        </Layout>
      ) : (
        <FilterDrawerMobile
          changeFilter={universalChangeFilter}
          selectedTypes={selectedTypes}
          selectedDivision={selectedDivision}
          selectedSoloTeam={selectedSoloTeam}
          selectedExperience={selectedExperience}
          open={openFilter}
          setOpen={setOpenFilter}
        >
          <Layout
            title="AVAILABLE JOBS"
            fetchData={fetchData}
            lastDoc={lastDoc}
          >
            {Content()}
          </Layout>
        </FilterDrawerMobile>
      )}
    </>
  )
}

export default AvailableJobsScreen
