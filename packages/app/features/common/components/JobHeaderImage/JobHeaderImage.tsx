import { Text, View } from 'dripsy'
import HeaderImage from '../HeaderImage/HeaderImage'
import { Dimensions, Platform, StyleSheet } from 'react-native'
const JobHeaderImage = ({
  jobscreenimage,
  jobTypes,
  experience,
  solo_team,
  division,
  title,
}: {
  jobscreenimage: string
  solo_team: any[]
  experience: any[]
  division: any[]
  jobTypes: any[]
  title: string
}) => {
  const style = StyleSheet.create({
    sliderTextContainer: {
      zIndex: 2,
      position: 'absolute',
      flexDirection: 'column',
      width: '100%',
      alignItems: 'center',
      bottom: 0,
      height: [
        Dimensions.get('window').height - Dimensions.get('window').height / 10,
        Platform.OS == 'web' ? '100vh' : Dimensions.get('window').height,
      ] as any,
      paddingBottom: 50,
      justifyContent: 'flex-end',
    },
  })
  return (
    <HeaderImage url={jobscreenimage}>
      <View sx={style.sliderTextContainer}>
        <Text variant="sliderText">{title}</Text>
        <Text sx={{ color: 'lightgray', fontSize: 18 }}>
          {jobTypes.map((it: any, index: any) => {
            if (jobTypes.length == 1) {
              return it
            } else {
              if (index + 1 == jobTypes.length) {
                return it
              } else {
                return it + ', '
              }
            }
          })}
        </Text>
        <Text sx={{ color: 'lightgray', fontSize: 16 }}>
          {division.map((it: any, index: any) => {
            if (division.length == 1) {
              return it
            } else {
              if (index + 1 == division.length) {
                return it
              } else {
                return it + ', '
              }
            }
          })}
        </Text>
        <Text sx={{ color: 'lightgray', fontSize: 14 }}>
          {solo_team.map((it: any, index: any) => {
            if (solo_team.length == 1) {
              return it
            } else {
              if (index + 1 == solo_team.length) {
                return it
              } else {
                return it + ', '
              }
            }
          })}
        </Text>
        <Text sx={{ color: 'lightgray', fontSize: 14 }}>
          {experience.length != 0 && 'Experience: '}
          {experience.map((it: any, index: any) => {
            if (experience.length == 1) {
              return it
            } else {
              if (index + 1 == experience.length) {
                return it
              } else {
                return it + ', '
              }
            }
          })}
        </Text>
      </View>
    </HeaderImage>
  )
}

export default JobHeaderImage
