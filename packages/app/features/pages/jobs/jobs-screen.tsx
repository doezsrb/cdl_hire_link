import routerListener from 'app/features/common/functions/routerListener'
import {
  SafeAreaView,
  Text,
  View,
  useDripsyTheme,
  Box,
  ActivityIndicator,
  TextInput,
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
import NetInfo from '@react-native-community/netinfo'
import BouncyCheckbox from 'react-native-bouncy-checkbox'
import useRouter from 'app/features/common/functions/nextrouter'
import { getCountData, getData } from 'app/features/common/functions/firestore'
import LoadingScreen from 'app/features/common/components/LoadingScreen/LoadingScreen'
import SearchInput from 'app/features/common/components/SearchInput/SearchInput'
import OfflineIcon from 'app/features/common/components/OfflineIcon/OfflineIcon'
import CenteredBox from 'app/features/common/components/CenteredBox/CenteredBox'
const AvailableJobsScreen = ({ route, navigation }: any) => {
  const mobileLoadingContext = useContext(MobileLoadingContext)
  const router = useRouter()
  const [openFilter, setOpenFilter] = useState<boolean>(false)
  const [loading, setLoading] = useState(true)
  const [firstTime, setFirstTime] = useState(true)
  const [lastDoc, setLastDoc] = useState<any>(null)
  const [data, setData] = useState([])
  const { theme } = useDripsyTheme()
  const [search, setSearch] = useState('')
  const [selectedTypes, setSelectedTypes] = useState<any[]>([])
  const [selectedDivision, setSelectedDivision] = useState([])
  const [selectedSoloTeam, setSelectedSoloTeam] = useState([])
  const [selectedExperience, setSelectedExperience] = useState([])
  const [online, setOnline] = useState(true)
  const fetchData = (
    lastDoc: any,
    callback?: Function,
    selectedTypes_?: any[],
    selectedDivision_?: any[],
    selectedSoloTeam_?: any[],
    selectedExperience_?: any[],
    nonpagination?: boolean,
    search?: string
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
    getData('jobs', filters, lastDoc, search)
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
        setData([])
      })
      .finally(() => {
        setLoading(false)
        if (callback != undefined) callback()
      })
  }

  useEffect(() => {
    if (firstTime) {
      setFirstTime(false)
      return
    }
    setLoading(true)
    const getData = setTimeout(() => {
      fetchData(
        null,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        true,
        search
      )
    }, 1000)
    return () => {
      clearTimeout(getData)
    }
  }, [search])

  useEffect(() => {
    //!TODO: UNCOMMENT
    /* const unsubscribe = NetInfo.addEventListener((state) => {
      setOnline(state.isConnected == null ? true : state.isConnected)
    }) */
    routerListener(navigation, mobileLoadingContext)
    return () => {
      /* unsubscribe() */
    }
  }, [])
  const setFiltersAndFetch = () => {
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

    fetchData(
      null,
      undefined,
      types,
      division,
      solo_team,
      experience,
      true,
      search
    )
  }
  useEffect(() => {
    setFiltersAndFetch()
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
      minHeight:
        Platform.OS == 'web'
          ? Dimensions.get('window').height
          : Dimensions.get('window').height / 1.5,
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
      backgroundColor: 'primary',
      overflow: 'hidden',
      textAlign: 'center',
      borderRadius: 10,
      borderColor: 'primary',
      borderWidth: 1,
      color: 'secondary',
    },
  })

  const Content = () => {
    return (
      <>
        {!online ? (
          <CenteredBox>
            <OfflineIcon />
          </CenteredBox>
        ) : (
          <View sx={style.container}>
            <View sx={style.topButtons}>
              <TouchableOpacity onPress={() => setOpenFilter(true)}>
                <Text sx={style.button}>FILTERS</Text>
              </TouchableOpacity>
              <SearchInput search={search} setSearch={setSearch} />
            </View>
            {loading ? (
              <CenteredBox>
                <ActivityIndicator color="secondary" size="large" />
              </CenteredBox>
            ) : data.length == 0 ? (
              <CenteredBox>
                <Text variant="title" sx={{ color: 'secondary' }}>
                  NO JOBS FOUND
                </Text>
              </CenteredBox>
            ) : (
              <View sx={{ width: '100%', alignItems: 'center' }}>
                <View
                  sx={{
                    mt: '$3',
                    display: 'flex',
                    flexDirection: ['column', 'row'],
                    rowGap: 15,

                    width: 'auto',
                    columnGap: [
                      null,

                      (1.2 / 100) * Dimensions.get('window').width,
                    ],
                    flexWrap: 'wrap',

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
              </View>
            )}
          </View>
        )}
      </>
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
        <Layout
          navigation={navigation}
          title="AVAILABLE JOBS"
          fetchData={fetchData}
          lastDoc={lastDoc}
        >
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
            navigation={navigation}
            title="AVAILABLE JOBS"
            fetchData={fetchData}
            lastDoc={lastDoc}
            onRefresh={setFiltersAndFetch}
          >
            {Content()}
          </Layout>
        </FilterDrawerMobile>
      )}
    </>
  )
}

export default AvailableJobsScreen
