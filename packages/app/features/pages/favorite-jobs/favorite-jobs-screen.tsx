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
import {
  getCountData,
  getData,
  getDataByID,
} from 'app/features/common/functions/firestore'
import LoadingScreen from 'app/features/common/components/LoadingScreen/LoadingScreen'
import SearchInput from 'app/features/common/components/SearchInput/SearchInput'
import OfflineIcon from 'app/features/common/components/OfflineIcon/OfflineIcon'
import CenteredBox from 'app/features/common/components/CenteredBox/CenteredBox'
import AsyncStorage from '@react-native-async-storage/async-storage'

const FavoriteJobsScreen = ({ route, navigation }: any) => {
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

  useEffect(() => {
    //!TODO: UNCOMMENT
    /* const unsubscribe = NetInfo.addEventListener((state) => {
      setOnline(state.isConnected == null ? true : state.isConnected)
    }) */
    routerListener(navigation, mobileLoadingContext)
    fetchFavData()
    return () => {
      /* unsubscribe() */
    }
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
  const fetchFavData = () => {
    AsyncStorage.getItem('fav').then((res: any) => {
      if (res != null) {
        res = JSON.parse(res)
        if (res.length != 0) {
          getDataByID('jobs', res)
            .then((res: any) => {
              setData([])
              setData(res.data)
            })
            .catch((e: any) => {
              console.log(e)
            })
            .finally(() => {
              setLoading(false)
            })
        } else {
          setData([])
          setLoading(false)
        }
      } else {
        setData([])
        setLoading(false)
      }
    })
  }

  const Content = () => {
    return (
      <>
        {!online ? (
          <CenteredBox>
            <OfflineIcon />
          </CenteredBox>
        ) : (
          <View sx={style.container}>
            {loading ? (
              <CenteredBox>
                <ActivityIndicator color="secondary" size="large" />
              </CenteredBox>
            ) : data.length == 0 ? (
              <CenteredBox>
                <Text variant="title" sx={{ color: 'secondary' }}>
                  NO JOBS SELECTED
                </Text>
              </CenteredBox>
            ) : (
              <View sx={{ width: '100%' }}>
                <View
                  sx={{
                    mt: '$3',
                    display: 'flex',
                    flexDirection: ['column', 'row'],
                    rowGap: 15,
                    columnGap: [
                      null,

                      (1.2 / 100) * Dimensions.get('window').width,
                    ],
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
              </View>
            )}
          </View>
        )}
      </>
    )
  }

  return (
    <>
      <Layout
        navigation={navigation}
        title="FAVORITE JOBS"
        onRefresh={fetchFavData}
      >
        {Content()}
      </Layout>
    </>
  )
}

export default FavoriteJobsScreen
