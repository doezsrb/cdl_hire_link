import { Text, View } from 'dripsy'
import { Dimensions } from 'react-native'
import { useEffect } from 'react'
const JobSection = ({ title, texts }: { title: string; texts: string[] }) => {
  return (
    <View
      sx={{
        width: '100%',
        paddingHorizontal: [
          20,
          20,
          Dimensions.get('window').height / 5,
          Dimensions.get('window').height / 3,
          Dimensions.get('window').height / 3,
        ],
        paddingTop: 30,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Text sx={{ fontSize: 30, color: 'primary', fontWeight: 'bold' }}>
        {title}
      </Text>
      <View sx={{ width: '100%', paddingLeft: 20 }}>
        {texts.map((it: any, index: any) => {
          return (
            <View
              key={index + 'texts'}
              sx={{
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {it.split('<row>').map((split: any, indexSplit: any) => {
                if (split != '') {
                  return (
                    <Text
                      sx={{
                        width: '100%',
                        color: 'primary',
                        fontSize: 20,
                      }}
                      key={indexSplit + 'split'}
                    >
                      {split.replace('\n', '')}
                    </Text>
                  )
                }
              })}
            </View>
          )
        })}
      </View>
    </View>
  )
}

export default JobSection
