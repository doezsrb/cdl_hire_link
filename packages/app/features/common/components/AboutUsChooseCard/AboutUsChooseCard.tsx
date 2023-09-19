import { Text, View } from 'dripsy'
import { Platform } from 'react-native'
import { SolitoImage } from 'solito/image'
import TruckIcon from '../TruckIcon/TruckIcon'

const AboutUsChooseCard = ({ title, icon }: { title: String; icon: any }) => {
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
          height: 150,
        }}
      >
        {icon}
        {/* {Platform.OS == 'web' ? (
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
        )} */}
      </View>
      <View
        sx={{
          width: ['100%', '100%', '50%', '100%'],
        }}
      >
        {/*  <Text
          sx={{
            color: 'white',
            fontSize: 25,
            fontWeight: 'bold',
            textAlign: 'center',
          }}
        >
          COMMITMENT
        </Text> */}
        <Text
          sx={{
            color: 'white',
            fontSize: 16,
            marginTop: '$2',
            textAlign: 'center',
          }}
        >
          {title}
        </Text>
      </View>
    </View>
  )
}

export default AboutUsChooseCard
