import { View, Text, useDripsyTheme } from 'dripsy'
import PhoneIcon from '../Icons/PhoneIcon'
import FacebookIcon from '../Icons/FacebookIcon'
import InstaIcon from '../Icons/InstaIcon'

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
      <View
        sx={{
          mt: 10,
          display: 'flex',
          gap: 10,
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <PhoneIcon width={60} color={theme.colors.secondary} />
        <Text
          sx={{
            color: 'secondary',
            fontSize: 24,
          }}
        >
          (708) 853-5299
        </Text>
      </View>
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
        <FacebookIcon width={60} />
        <InstaIcon width={60} />
      </View>
    </>
  )
}

export default DrawerContact
