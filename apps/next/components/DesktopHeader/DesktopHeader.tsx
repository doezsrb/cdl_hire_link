import { View, Text, Pressable, useSx, useDripsyTheme } from 'dripsy'
import { Button, Dimensions, StyleSheet, TouchableOpacity } from 'react-native'
import { SolitoImage } from 'solito/image'
import { RxHamburgerMenu } from 'react-icons/rx'
import Logo from 'app/features/common/components/Logo/logo'
import { useRouter } from 'next/router'
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from 'app/features/common/mateiralui'
import { useEffect, useState } from 'react'
import DesktopDrawer from '../DesktopDrawer/DesktopDrawer'

const DesktopHeader = () => {
  const [openDrawer, setOpenDrawer] = useState(false)
  const sx = useSx()
  const router = useRouter()
  useEffect(() => {
    console.log(router.route)
  }, [])
  const { theme } = useDripsyTheme()
  const style = StyleSheet.create({
    numberStyleDrawer: {
      color: 'white',
      fontSize: 24,
    },
    numbersDrawer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
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
      paddingLeft: [15, 5, 5, 20] as any,
      paddingRight: [15, 5, 5, 20] as any,
      color: 'white',
      paddingTop: 40,
      paddingBottom: 40,
      fontWeight: 'bold',
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
    <>
      <DesktopDrawer setOpenDrawer={setOpenDrawer} openDrawer={openDrawer} />
      <View style={[sx(style.container)]}>
        <View>
          <TouchableOpacity
            onPress={() => {
              router.push('/')
            }}
          >
            <Logo />
          </TouchableOpacity>
        </View>
        <View sx={style.menuBox}>
          <TouchableOpacity
            onPress={() => {
              router.push('/')
            }}
          >
            <Text
              style={[
                sx(style.menuButton),
                sx({ color: router.route == '/' ? 'secondary' : 'white' }),
              ]}
            >
              HOME
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <Text
              style={[
                sx(style.menuButton),
                sx({
                  color: router.route == '/about-us' ? 'secondary' : 'white',
                }),
              ]}
            >
              ABOUT US
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => {}}>
            <Text
              style={[
                sx(style.menuButton),
                sx({
                  color: router.route == '/careers' ? 'secondary' : 'white',
                }),
              ]}
            >
              CAREERS
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => {}}>
            <Text
              style={[
                sx(style.menuButton),
                sx({
                  color: router.route == '/contact-us' ? 'secondary' : 'white',
                }),
              ]}
            >
              CONTACT US
            </Text>
          </TouchableOpacity>
        </View>
        <View sx={style.buttonBox}>
          <TouchableOpacity
            onPress={() => {
              router.push('/apply-as-a-driver')
            }}
          >
            <Text
              style={[
                sx(style.headerButton),
                sx({
                  color:
                    router.route == '/apply-as-a-driver' ? 'white' : 'primary',
                }),
              ]}
            >
              APPLY AS A DRIVER
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <Text
              style={[
                sx(style.headerButton),
                sx({
                  ml: [0, 0, 0, 0, 10],
                  marginTop: [6, 6, 6, 6, 0],
                  color:
                    router.route == '/apply-as-a-carrier' ? 'white' : 'primary',
                }),
              ]}
            >
              APPLY AS A CARRIER
            </Text>
          </TouchableOpacity>
        </View>
        <View sx={style.numbers}>
          <Text sx={style.numberStyle}>+38115256126126</Text>
          <Text sx={style.numberStyle}>+3812412596823</Text>
        </View>
        <View sx={style.hamburgerBox}>
          <TouchableOpacity onPress={() => setOpenDrawer(true)}>
            <RxHamburgerMenu size={26} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </>
  )
}

export default DesktopHeader
