import { View, Text } from 'dripsy'
import { Dimensions, Pressable } from 'react-native'
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
const { useParam } = createParam<{ job: string }>()

export function JobScreen({ navigation }) {
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
        <Layout title={jobData.data.name} jobscreen jobscreenimage={image}>
          <View
            sx={{
              minHeight: Dimensions.get('window').height,
              width: '100%',
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
          </View>
        </Layout>
      )}
    </>
  )
}
