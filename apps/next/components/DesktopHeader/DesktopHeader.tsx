import { View, Text, useSx, useDripsyTheme } from 'dripsy'
import {
  Button,
  Dimensions,
  Platform,
  StyleSheet,
  TouchableOpacity,
  Pressable,
} from 'react-native'
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
} from 'app/features/common/functions/mateiralui'
import { useEffect, useState } from 'react'
import DesktopDrawer from '../DesktopDrawer/DesktopDrawer'
import routes, { UniversalRoute } from 'app/features/common/routes'

const DesktopHeader = () => {
  const [hoverButtons, setHoverButtons] = useState<any>({})
  const [openDrawer, setOpenDrawer] = useState(false)
  const sx = useSx()
  const router = useRouter()

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
      shadowOffset: { width: 0, height: 10 },
      shadowColor: 'secondary',
      shadowRadius: 20,
      shadowOpacity: 0.8,
    },
    menuBox: {
      display: ['none', 'none', 'none', 'flex'] as any,
      flexDirection: 'row',
      alignItems: 'center',
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
      gap: 7,
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
    <View sx={{ position: 'fixed', zIndex: 2, width: '100%' }}>
      <DesktopDrawer setOpenDrawer={setOpenDrawer} openDrawer={openDrawer} />
      <View style={[sx(style.container)]}>
        <View sx={{ width: 150 }}>
          <TouchableOpacity
            onPress={() => {
              router.push('/')
            }}
          >
            <Logo />
          </TouchableOpacity>
        </View>
        <View sx={style.menuBox}>
          {routes.map((it: UniversalRoute, index: any) => {
            if (it.footerOnly) return null
            if (it.hidden) return null
            if (it.webButton) return null
            if (it.mobOnly) return null
            return (
              <TouchableOpacity
                key={index}
                onPress={() => {
                  router.push(it.webLink)
                }}
              >
                <Text
                  style={[
                    sx(style.menuButton),
                    sx({
                      color:
                        router.asPath == it.webLink ? 'secondary' : 'white',
                    }),
                  ]}
                >
                  {it.title.toUpperCase()}
                </Text>
              </TouchableOpacity>
            )
          })}
          {/*  <TouchableOpacity
            onPress={() => {
              router.push('/')
            }}
          >
            <Text
              style={[
                sx(style.menuButton),
                sx({ color: router.asPath == '/' ? 'secondary' : 'white' }),
              ]}
            >
              HOME
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              router.push('/available-jobs')
            }}
          >
            <Text
              style={[
                sx(style.menuButton),
                sx({
                  color:
                    router.route == '/available-jobs' ? 'secondary' : 'white',
                }),
              ]}
            >
              JOBS
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              router.push('/about-us')
            }}
          >
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

          <TouchableOpacity
            onPress={() => {
              router.push('/contact-us')
            }}
          >
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
          </TouchableOpacity> */}
        </View>
        <View sx={style.buttonBox}>
          {routes.map((it: UniversalRoute, index: any) => {
            if (it.hidden) return null
            if (!it.webButton) return null
            return (
              <div
                key={index}
                style={{
                  transition: '0.2s',
                  transform:
                    hoverButtons[index] != undefined &&
                    hoverButtons[index] == true
                      ? 'scale(0.9)'
                      : 'scale(1)',
                }}
                onMouseEnter={(e: any) => {
                  var obj = { ...hoverButtons }
                  obj = Object.keys(obj).map((it: any) => (obj[it] = false))
                  obj[index] = true
                  setHoverButtons(obj)
                }}
                onMouseLeave={() => {
                  var obj = { ...hoverButtons }
                  obj[index] = false
                  setHoverButtons(obj)
                }}
              >
                <TouchableOpacity
                  onPress={() => {
                    router.push(it.webLink)
                  }}
                >
                  <Text
                    style={[
                      sx(style.headerButton),
                      sx({
                        color:
                          router.asPath == it.webLink ? 'white' : 'primary',
                      }),
                    ]}
                  >
                    {it.title.toUpperCase()}
                  </Text>
                </TouchableOpacity>
              </div>
            )
          })}
          {/* <TouchableOpacity
            onPress={() => {
              router.push('/apply/driver')
            }}
          >
            <Text
              style={[
                sx(style.headerButton),
                sx({
                  color: router.asPath == '/apply/driver' ? 'white' : 'primary',
                }),
              ]}
            >
              APPLY AS A DRIVER
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              router.push('/apply/carrier')
            }}
          >
            <Text
              style={[
                sx(style.headerButton),
                sx({
                  ml: [0, 0, 0, 0, 10],
                  marginTop: [6, 6, 6, 6, 0],
                  color:
                    router.asPath == '/apply/carrier' ? 'white' : 'primary',
                }),
              ]}
            >
              APPLY AS A CARRIER
            </Text>
          </TouchableOpacity> */}
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
    </View>
  )
}

export default DesktopHeader
