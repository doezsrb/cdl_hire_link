import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Entypo, Fontisto } from '@expo/vector-icons'
import { HomeScreen } from '../../features/pages/home/screen'
import { UserDetailScreen } from '../../features/pages/user/detail-screen'
import { createDrawerNavigator } from '@react-navigation/drawer'
import DrawerMenu from '../../../../apps/expo/components/Drawer/drawer'
import { Button, Pressable } from 'react-native'
import { Image, useDripsyTheme } from 'dripsy'
import Logo from '../../../../apps/expo/components/Logo/logo'
import ApplyAsADriver from 'app/features/pages/apply-as-a-driver/screen'

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
  'apply-as-a-driver': undefined
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
        name="apply-as-a-driver"
        options={{
          title: 'Apply as a driver',
        }}
        component={ApplyAsADriver}
      />
      <Drawer.Screen
        name="home"
        options={{
          title: 'Home',
        }}
        component={HomeScreen}
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
