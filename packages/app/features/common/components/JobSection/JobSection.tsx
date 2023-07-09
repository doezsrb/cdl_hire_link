import { Text, View } from 'dripsy'
import { Dimensions } from 'react-native'

const JobSection = ({ title, texts }: { title: string; texts: string[] }) => {
  return (
    <View
      sx={{
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
      <View sx={{ paddingLeft: 20 }}>
        {texts.map((it: any, index: any) => {
          return (
            <Text key={index + 'texts'} sx={{ color: 'primary', fontSize: 20 }}>
              {it}
            </Text>
          )
        })}
      </View>
    </View>
  )
}

export default JobSection
