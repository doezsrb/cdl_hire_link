import { View, Text } from 'dripsy'
import ApplyStepInd from '../ApplyStepInd/ApplyStepInd'
import { Platform, StyleSheet } from 'react-native'
import { SolitoImage } from 'solito/image'

interface ApplyCardProps {
  title: string
  step: number
  button: any
}
const ApplyCard = ({ title, step, button }: ApplyCardProps) => {
  const style = StyleSheet.create({
    container: { flex: 1, flexDirection: ['column'] as any, marginTop: 10 },
    childContainer: {
      flex: 1,
      paddingBottom: 20,
      alignItems: 'center',
    },
    image: {
      width: '100%',
      height: 150,
    },
    title: {
      fontSize: 20,
      color: 'white',
      textAlign: 'center',
      fontWeight: 'bold',
      width: '80%',
    },
    text: {
      fontSize: 18,
      color: 'white',
      textAlign: 'center',
      flexWrap: 'wrap',
    },
  })
  return (
    <View sx={style.container}>
      <ApplyStepInd step={step} />
      <View sx={style.childContainer}>
        {/*  <View sx={style.image}>
          {Platform.OS == 'web' ? (
            // eslint-disable-next-line jsx-a11y/alt-text
            <SolitoImage alt="test" src="/images/pngtruck2.png" fill={true} />
          ) : (
            // eslint-disable-next-line jsx-a11y/alt-text
            <SolitoImage
              alt="truck"
              src={require('../../../../../../apps/expo/images/pngtruck2.png')}
              style={{
                width: '100%',
                height: 150,
              }}
            />
          )}
        </View> */}
        <View
          sx={{
            width: '100%',
            height: 80,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text sx={style.title}>{title}</Text>
        </View>
        {/* <Text sx={style.text}>{text}</Text> */}
        <View
          sx={{
            width: '100%',

            height: 40,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <View sx={{ flexDirection: 'column' }}>
            {button}
            <View
              sx={{ width: 'auto', height: 3, backgroundColor: 'secondary' }}
            />
          </View>
        </View>
      </View>
    </View>
  )
}

export default ApplyCard
