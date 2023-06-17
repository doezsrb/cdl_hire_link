import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Entypo, Fontisto } from '@expo/vector-icons'
import { HomeScreen } from '../../features/pages/home/screen'
import { UserDetailScreen } from '../../features/pages/user/detail-screen'
import { createDrawerNavigator } from '@react-navigation/drawer'
import DrawerMenu from '../../../../apps/expo/components/Drawer/drawer'
import { Button, Pressable } from 'react-native'
import { Image, useDripsyTheme } from 'dripsy'
import Logo from '../../features/common/components/Logo/logo'

import ApplyScreen from '../../../../apps/next/pages/apply/[as]'
import AvailableJobsScreen from 'app/features/pages/jobs/jobs-screen'

/* const Stack = createNativeStackNavigator<{
  home: undefined
  'user-detail': {
    id: string
  }
}>() */
const Drawer = createDrawerNavigator<{
  home: undefined
  'about-us': undefined
  careers: undefined
  'contact-us': undefined
  apply: {
    as: string
  }
  'apply/driver': undefined
  'apply/carrier': undefined
  'available-jobs': undefined
}>()
export function NativeNavigation() {
  const { theme } = useDripsyTheme()
  return (
    /*  <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={HomeScreen}
        options={{
          title: 'Home',
        }}
      />
      <Stack.Screen
        name="user-detail"
        component={UserDetailScreen}
        options={{
          title: 'User',
        }}
      />
    </Stack.Navigator> */
    <Drawer.Navigator
      screenOptions={({ navigation }) => ({
        drawerPosition: 'right',

        headerStyle: { backgroundColor: theme.colors.primary },
        headerTitle: () => <Logo />,
        headerLeft: () => null,
        headerRight: (props) => {
          return (
            <Pressable
              style={{ marginRight: theme.space.$3 }}
              onPress={() => navigation.toggleDrawer()}
            >
              <Entypo name="menu" size={24} color={'white'} />
            </Pressable>
          )
        },
      })}
      drawerContent={(props) => <DrawerMenu drawerProps={props} />}
    >
      <Drawer.Screen
        name="available-jobs"
        listeners={{
          drawerItemPress: (e: any) => {
            console.log('PRESS')
          },
        }}
        options={{
          title: 'Available Jobs',
        }}
        component={AvailableJobsScreen}
      />
      <Drawer.Screen
        name="home"
        listeners={{
          drawerItemPress: (e: any) => {
            console.log('PRESS')
          },
        }}
        options={{
          title: 'Home',
        }}
        component={HomeScreen}
      />
      <Drawer.Screen
        name="apply/driver"
        listeners={{
          drawerItemPress: (e: any) => {
            console.log('PRESS')
          },
        }}
        options={({ route }) => {
          return {
            title: 'Apply as a driver',
          }
        }}
        initialParams={{ as: 'driver' } as any}
        component={ApplyScreen}
      />
      <Drawer.Screen
        name="apply/carrier"
        options={({ route }) => {
          return {
            title: 'Apply as a carrier',
          }
        }}
        initialParams={{ as: 'carrier' } as any}
        component={ApplyScreen}
      />

      <Drawer.Screen
        name="about-us"
        options={{
          title: 'About Us',
        }}
        component={UserDetailScreen}
      />
      <Drawer.Screen
        name="careers"
        options={{
          title: 'Careers',
        }}
        component={UserDetailScreen}
      />
      <Drawer.Screen
        name="contact-us"
        options={{
          title: 'Contact Us',
        }}
        component={UserDetailScreen}
      />
    </Drawer.Navigator>
  )
}
