import { View, Text, useDripsyTheme, Pressable } from 'dripsy'
import PhoneIcon from '../Icons/PhoneIcon'
import FacebookIcon from '../Icons/FacebookIcon'
import InstaIcon from '../Icons/InstaIcon'
import { Linking } from 'react-native'
const DrawerContact = () => {
  const { theme } = useDripsyTheme()
  return (
    <>
      <View
        sx={{
          width: '100%',
          height: 1,
          justifyContent: 'flex-end',
          backgroundColor: 'secondary',
        }}
      />
      <Pressable
        onPress={() => {
          Linking.openURL('tel:+17088535299')
        }}
        sx={{
          mt: 10,
          display: 'flex',
          gap: 10,
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <PhoneIcon width={40} color={theme.colors.secondary} />

        <Text
          sx={{
            color: 'secondary',
            fontSize: 24,
          }}
        >
          (708) 853-5299
        </Text>
      </Pressable>
      <View
        sx={{
          mt: 10,
          width: '100%',
          height: 1,
          justifyContent: 'flex-end',
          backgroundColor: 'secondary',
        }}
      />
      <View
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          height: 60,
          mt: 10,
          width: '100%',
          gap: 10,
          justifyContent: 'center',
        }}
      >
        <Pressable
          onPress={() => {
            Linking.openURL(
              'https://www.facebook.com/profile.php?id=100091959270356&mibextid=ZbWKwL'
            )
          }}
        >
          <FacebookIcon width={60} />
        </Pressable>
        <Pressable
          onPress={() => {
            Linking.openURL('https://instagram.com/cdlhirelinkllc')
          }}
        >
          <InstaIcon width={60} />
        </Pressable>
      </View>
    </>
  )
}

export default DrawerContact
