import { Text, View } from 'dripsy'

const AboutUsChooseCard = () => {
  return (
    <View
      sx={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '$2',
      }}
    >
      <View
        sx={{
          width: 200,
          height: 200,
          backgroundColor: 'lightgray',
        }}
      />
      <View
        sx={{
          width: ['100%', '100%', '50%', '100%'],
        }}
      >
        <Text
          sx={{
            color: 'white',
            fontSize: 25,
            fontWeight: 'bold',
            textAlign: 'center',
          }}
        >
          COMMITMENT
        </Text>
        <Text
          sx={{
            color: 'white',
            fontSize: 16,
            marginTop: '$2',
            textAlign: 'center',
          }}
        >
          Lorem ipsum blablablablalba lbalb aw egaewkgpaowekgapoewkgaopewgja
          aewgkape. Lorem ipsum blabla blablalba lbalb aw egaew kgpaow ekga
          poewk gaopewgja aewgkape. Lorem ipsum blabla blablalba lbalb
          awegaewkgpa owek gapoew kgaope wgja aewgkape.
        </Text>
      </View>
    </View>
  )
}

export default AboutUsChooseCard
