import { ActivityIndicator, Text, View, useSx } from 'dripsy'
import { useEffect, useState } from 'react'
import {
  PixelRatio,
  Platform,
  StyleSheet,
  TouchableOpacity,
} from 'react-native'
import { SolitoImage } from 'solito/image'
import { getImage } from '../../functions/firestore'
import { useRouter } from 'solito/router'
import ImageLoader from '../ImageLoader/ImageLoader'

interface JobCardProps {
  name: string
  imageName: string
  id: string
  tags: any[]
  types: any[]
}
const JobCard = ({ name, imageName, id, tags, types }: JobCardProps) => {
  const router = useRouter()
  const [image, setImage] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [base64, setBase64] = useState<any>(null)
  const sx = useSx()

  useEffect(() => {
    getImage(imageName)
      .then((res: any) => {
        setImage(res)
      })
      .catch((e: any) => {
        console.log(e)
      })
  }, [])

  const style = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      paddingHorizontal: '$2',
      paddingBottom: '$3',
      paddingTop: '$2',
      justifyContent: 'space-between',

      width: ['100%', '100%', '48.5%', '49.3%', '32.5%'] as any,

      shadowOffset: { width: 0, height: 5 },
      shadowColor: Platform.OS == 'web' ? 'secondary' : 'black',
      shadowRadius: 14,
      shadowOpacity: 0.8,
      elevation: 9,
    },
    title: {
      fontSize: 23,
      fontWeight: 'bold',

      color: 'secondary',
    },
    subtitle: {
      fontSize: 14,
      fontStyle: 'italic',

      color: 'primary',
    },
    tagContainer: {
      marginTop: ['$3', '$3', 10] as any,
      display: 'flex',
      width: '100%',
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'center',

      maxHeight: ['auto', 'auto', 80] as any,
      overflow: 'hidden',
    },
  })

  const Tag = (name: string, key: any) => {
    return (
      <View
        key={key}
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: '$1',
        }}
      >
        <View sx={{ width: 15, height: 15, backgroundColor: 'lightgray' }} />
        <Text
          sx={{
            fontSize: 1,

            marginLeft: '$2',
            color: 'primary',
          }}
        >
          {name}
        </Text>
      </View>
    )
  }
  return (
    <View sx={style.container}>
      <TouchableOpacity
        onPress={() => {
          router.push('/job/' + id)
        }}
      >
        <View
          sx={{
            display: 'flex',
            height: ['auto', 'auto', 420],
            flexDirection: 'column',
          }}
        >
          <View sx={{ width: '100%', height: 300, backgroundColor: 'white' }}>
            {loading && <ImageLoader />}
            {/* {base64 != null && (
              <div dangerouslySetInnerHTML={{ __html: base64 }} />
            )} */}
            {image != null && (
              <SolitoImage
                alt={name + ' image'}
                resizeMode="cover"
                src={image}
                onLoadingComplete={() => {
                  setLoading(false)
                }}
                fill
              />
            )}
          </View>
          <View>
            <Text sx={style.title}>{name}</Text>
            <Text sx={style.subtitle}>
              {types.map((it: any, index: any) => {
                if (types.length == 1) {
                  return it
                } else {
                  if (index + 1 == types.length) {
                    return it
                  } else {
                    return it + ', '
                  }
                }
              })}
            </Text>
          </View>
          <View
            sx={{
              flex: 1,
              justifyContent: 'center',
              gap: 10,
            }}
          >
            <View
              style={[{ overflowY: 'auto' } as any, sx(style.tagContainer)]}
            >
              {tags.map((it: any, index: any) => Tag(it.value, index + 'tags'))}
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default JobCard
