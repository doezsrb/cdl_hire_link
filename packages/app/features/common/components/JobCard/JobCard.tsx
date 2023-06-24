import { Text, View } from 'dripsy'
import { useEffect } from 'react'
import { PixelRatio, Platform, StyleSheet } from 'react-native'

const JobCard = () => {
  const style = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      paddingHorizontal: '$2',
      paddingBottom: '$2',
      justifyContent: 'space-between',

      width: ['100%', '100%', '48.5%', '48.5%', '32.5%'] as any,
      height: ['auto', 'auto', 160] as any,
      shadowOffset: { width: 0, height: 5 },
      shadowColor: 'black',
      shadowRadius: 10,
      shadowOpacity: 0.4,
      elevation: 4,
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
      marginTop: ['$3', '$3', 0] as any,
      display: 'flex',
      width: '100%',
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
  })

  const Tag = (name: string) => {
    return (
      <View
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
      <View sx={{ flexDirection: 'column' }}>
        <Text sx={style.title}>Leader Freight Systems</Text>
        <Text sx={style.subtitle}>Compandy driver, Dry van</Text>
      </View>
      <View sx={style.tagContainer}>
        {Tag('$1300-$2000 per week')}
        {Tag('2+ years experience')}
        {Tag('$1300-$2000 per week')}
        {Tag('$1300-$2000 per week')}
        {Tag('2+ years experience')}
      </View>
    </View>
  )
}

export default JobCard
