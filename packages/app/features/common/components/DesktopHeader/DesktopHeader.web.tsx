import { View, Text, Pressable, useSx } from 'dripsy'
import { Button, StyleSheet, TouchableOpacity } from 'react-native'
import { SolitoImage } from 'solito/image'
import { RxHamburgerMenu } from 'react-icons/rx'
import Logo from '../Logo/logo'
const DesktopHeader = () => {
  const sx = useSx()
  const style = StyleSheet.create({
    hamburgerBox: {
      display: ['flex', 'flex', 'flex', 'none'] as any,
    },
    container: {
      width: '100%',
      height: 80,
      backgroundColor: 'primary',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      paddingLeft: 20,
      paddingRight: 20,
      justifyContent: 'space-between',
    },
    menuBox: {
      display: ['none', 'none', 'none', 'flex'] as any,
      flexDirection: 'row',
      alignItems: 'center',
      ml: 20,
    },
    menuButton: {
      paddingLeft: [15, 5, 5, 15] as any,
      paddingRight: [15, 5, 5, 15] as any,
      color: 'white',
      paddingTop: 40,
      paddingBottom: 40,

      textAlign: 'center',
    },
    buttonBox: {
      display: ['none', 'none', 'none', 'flex'] as any,
      flexDirection: ['column', 'column', 'column', 'column', 'row'] as any,

      alignItems: 'center',
    },
    headerButton: {
      backgroundColor: 'secondary',
      borderRadius: 40,
      width: 200,
      textAlign: 'center',
      padding: 0,
      borderWidth: 1,
      color: 'primary',
      fontWeight: 'bold',
      borderColor: 'secondary',
      paddingTop: [5, 5, 5, 5, 10] as any,
      paddingBottom: [5, 5, 5, 5, 10] as any,
    },
    numbers: {
      display: ['none', 'none', 'none', 'flex'] as any,
      flexDirection: 'column',
      alignItems: 'center',
    },
    numberStyle: {
      color: 'secondary',
      fontWeight: 'bold',
    },
  })
  return (
    <View style={[sx(style.container)]}>
      <View>
        <Logo />
      </View>
      <View sx={style.menuBox}>
        <TouchableOpacity onPress={() => {}}>
          <Text sx={style.menuButton}>HOME PAGE</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <Text sx={style.menuButton}>ABOUT US</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {}}>
          <Text sx={style.menuButton}>CAREERS</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {}}>
          <Text sx={style.menuButton}>CONTACT US</Text>
        </TouchableOpacity>
      </View>
      <View sx={style.buttonBox}>
        <Text sx={style.headerButton}>APPLY AS A DRIVER</Text>
        <Text
          style={[
            sx(style.headerButton),
            sx({ ml: [0, 0, 0, 0, 10], marginTop: [6, 6, 6, 6, 0] }),
          ]}
        >
          APPLY AS A CARRIER
        </Text>
      </View>
      <View sx={style.numbers}>
        <Text sx={style.numberStyle}>+38115256126126</Text>
        <Text sx={style.numberStyle}>+3812412596823</Text>
      </View>
      <View sx={style.hamburgerBox}>
        <RxHamburgerMenu size={26} color="white" />
      </View>
    </View>
  )
}

export default DesktopHeader
