import { View, Text, useDripsyTheme } from 'dripsy'
import { Dimensions, Platform, Pressable, TouchableOpacity } from 'react-native'
import { createParam } from 'solito'
import { TextLink } from 'solito/link'
import { useContext, useEffect } from 'react'
import routerListener from 'app/features/common/functions/routerListener'
import MobileLoadingContext from '../../../../../apps/expo/context/mobileLoadingContext'
import Layout from 'app/features/common/components/Layout/Layout'
import JobSection from 'app/features/common/components/JobSection/JobSection'
import {
  getImage,
  getSingleData,
} from 'app/features/common/functions/firestore'
import { useState } from 'react'
import { useRouter } from 'solito/router'
const { useParam } = createParam<{ job: string }>()

export function JobScreen({ navigation }: any) {
  const router = useRouter()
  const { theme } = useDripsyTheme()
  const [job, setJob] = useParam('job')
  const [jobData, setJobData] = useState<any>(null)
  const [image, setImage] = useState(null)
  const mobileLoadingContext = useContext(MobileLoadingContext)
  const fetchData = (job: string) => {
    getSingleData(job, 'jobs')
      .then((res: any) => {
        setJobData({ id: res.id, data: res.data() })
        getImage(res.data().imageName)
          .then((url: any) => {
            setImage(url)
          })
          .catch((e: any) => {
            setImage(null)
          })
      })
      .catch((e: any) => {
        console.log(e)
      })
  }
  useEffect(() => {
    if (job != undefined) {
      fetchData(job)
    }
  }, [job])
  useEffect(() => {
    routerListener(navigation, mobileLoadingContext)
  }, [])
  return (
    <>
      {jobData == null ? null : (
        <Layout
          navigation={navigation}
          title={jobData.data.name}
          jobTypes={jobData.data.type}
          division={jobData.data.division}
          solo_team={jobData.data.solo_team}
          experience={jobData.data.experience}
          jobscreen
          jobscreenimage={image}
        >
          <View
            sx={{
              minHeight:
                Platform.OS == 'web'
                  ? Dimensions.get('window').height
                  : Dimensions.get('window').height / 2,
              paddingBottom: 50,
              width: '100%',
              display: 'flex',

              flexDirection: 'column',
              alignItems: 'flex-start',
            }}
          >
            {jobData.data.texts.map((it: any, index: any) => {
              return (
                <JobSection
                  key={index + 'jobsection'}
                  title={it.title}
                  texts={[it.text]}
                />
              )
            })}
            <TouchableOpacity
              style={{ marginTop: 50, alignSelf: 'center' }}
              onPress={() => {
                if (Platform.OS == 'web') {
                  router.push('/apply/driver?company=' + jobData.id)
                } else {
                  navigation.navigate('apply/driver', {
                    company: jobData.id,
                  })
                }
              }}
            >
              <View sx={theme.buttons.bigButton}>
                <Text variant="buttonBig">APPLY AS A DRIVER</Text>
              </View>
            </TouchableOpacity>
          </View>
        </Layout>
      )}
    </>
  )
}
