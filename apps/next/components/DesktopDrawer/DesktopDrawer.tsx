import { Text, View } from 'dripsy'
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from 'app/features/common/functions/mateiralui'
import Logo from 'app/features/common/components/Logo/logo'
import { Dimensions, StyleSheet } from 'react-native'
import { useRouter } from 'next/router'
import { useDripsyTheme } from 'dripsy'
interface DesktopDrawerProps {
  openDrawer: boolean
  setOpenDrawer: Function
}
const DesktopDrawer = ({ openDrawer, setOpenDrawer }: DesktopDrawerProps) => {
  const router = useRouter()
  const { theme } = useDripsyTheme()
  const style = StyleSheet.create({
    divider: {
      width: '100%',
      height: 1,
      backgroundColor: 'white',
      marginTop: 20,
      marginBottom: 20,
    },
    listContainer: {
      width: '100%',
      height: 1,
      backgroundColor: 'white',
      marginTop: 20,
      marginBottom: 20,
    },
    logo: { width: '100%', display: 'flex', alignItems: 'center' },
    container: {
      width: 300,
      display: 'flex',
      height: Dimensions.get('window').height,
      backgroundColor: 'primary',
      paddingTop: 20,
    },
    numberStyleDrawer: {
      color: 'white',
      fontSize: 24,
    },
    numbersDrawer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
  })
  return (
    <Drawer
      disableScrollLock={true}
      open={openDrawer}
      anchor="right"
      onClose={() => setOpenDrawer(false)}
    >
      <View sx={style.container}>
        <View sx={style.logo}>
          <Logo />
        </View>
        <View sx={style.divider} />
        <List>
          <ListItem disablePadding>
            <ListItemButton
              onClick={() => {
                router.push('/')
                setOpenDrawer(false)
              }}
            >
              <ListItemText
                sx={{
                  color: router.route == '/' ? theme.colors.secondary : 'white',
                }}
                primary="HOME"
              />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              onClick={() => {
                router.push('/available-jobs')
                setOpenDrawer(false)
              }}
            >
              <ListItemText
                sx={{
                  color:
                    router.route == '/available-jobs'
                      ? theme.colors.secondary
                      : 'white',
                }}
                primary="JOBS"
              />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => {}}>
              <ListItemText sx={{ color: 'white' }} primary="ABOUT US" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => {}}>
              <ListItemText sx={{ color: 'white' }} primary="CAREERS" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => {}}>
              <ListItemText sx={{ color: 'white' }} primary="CONTACT US" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              onClick={() => {
                router.push('/apply/driver')
                setOpenDrawer(false)
              }}
            >
              <ListItemText
                sx={{
                  color:
                    router.asPath == '/apply/driver'
                      ? theme.colors.secondary
                      : 'white',
                }}
                primary="APPLY AS A DRIVER"
              />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              onClick={() => {
                router.push('/apply/carrier')
                setOpenDrawer(false)
              }}
            >
              <ListItemText
                sx={{
                  color:
                    router.asPath == '/apply/carrier'
                      ? theme.colors.secondary
                      : 'white',
                }}
                primary="APPLY AS A CARRIER"
              />
            </ListItemButton>
          </ListItem>
        </List>
        <View sx={style.divider} />
        <View sx={style.numbersDrawer}>
          <Text sx={style.numberStyleDrawer}>+38115256126126</Text>
          <Text sx={style.numberStyleDrawer}>+3812412596823</Text>
        </View>
      </View>
    </Drawer>
  )
}

export default DesktopDrawer
