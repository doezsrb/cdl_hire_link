import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Entypo, Fontisto } from '@expo/vector-icons'

import { UserDetailScreen } from '../../features/pages/user/detail-screen'
import { createDrawerNavigator } from '@react-navigation/drawer'
import DrawerMenu from '../../../../apps/expo/components/Drawer/drawer'
import { Button, Pressable } from 'react-native'
import { Image, useDripsyTheme } from 'dripsy'
import Logo from '../../features/common/components/Logo/logo'

import routes, { UniversalRoute } from 'app/features/common/routes'
import COMPONENTS from 'app/features/common/routesComponents'
import { normalize } from 'app/provider/dripsy'

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
  job: {
    job: string
  }
  'apply/driver': undefined
  'apply/carrier': undefined
  'available-jobs': undefined
  'fav-jobs': undefined
}>()
export function NativeNavigation() {
  const { theme } = useDripsyTheme()
  return (
    <Drawer.Navigator
      backBehavior="history"
      screenOptions={({ navigation }) => ({
        drawerPosition: 'right',

        headerStyle: {
          backgroundColor: theme.colors.primary,
        },
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
      {routes.map((it: UniversalRoute, index: any) => {
        if (it.footerOnly) return null
        if (it.webOnly) return null

        return (
          <Drawer.Screen
            key={index}
            name={it.mobileName as any}
            options={({ route }) => {
              /* var job = route['params']['job'] */
              return {
                drawerIcon: ({ color, size, focused }) => (
                  <it.icon
                    color={focused ? 'white' : theme.colors.secondary}
                    width={30}
                  />
                ),
                title: it.title,
                unmountOnBlur: it.mobileName == 'job',
              }
            }}
            initialParams={it.initialParams as any}
            component={COMPONENTS[it.component]}
          />
        )
      })}
    </Drawer.Navigator>
  )
}
