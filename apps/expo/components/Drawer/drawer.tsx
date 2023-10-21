import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer'

import { useContext, useEffect } from 'react'
import { View, Text, useDripsyTheme } from 'dripsy'
import Logo from 'app/features/common/components/Logo/logo'
import BurgerIcon from 'app/features/common/components/Icons/BurgerIcon'

import MobileLoadingContext from '../../context/mobileLoadingContext'
import routes, { UniversalRoute } from 'app/features/common/routes'
import DrawerContact from 'app/features/common/components/DrawerContact/DrawerContact'
import ContactUsIcon from 'app/features/common/components/Icons/ContactUsIcon'
interface DrawerMenuProps {
  drawerProps: DrawerContentComponentProps
}
const DrawerMenu = ({ drawerProps }: DrawerMenuProps) => {
  const mobileLoadingContext: any = useContext(MobileLoadingContext)
  const { theme } = useDripsyTheme()
  useEffect(() => {}, [])
  return (
    <DrawerContentScrollView style={{ backgroundColor: '#005199', padding: 5 }}>
      <View sx={{ padding: '$3', width: '100%', alignItems: 'center' }}></View>
      {/* <View
        sx={{
          width: '100%',
          height: 1,

          backgroundColor: 'secondary',
        }}
      /> */}
      {drawerProps.state.routes.map((it, index) => {
        const focused = index === drawerProps.state.index
        const { title, drawerLabel, drawerIcon } =
          drawerProps.descriptors[it.key]!.options

        var break_ = false
        routes.map((it: UniversalRoute) => {
          if (it.hidden) {
            if (it.title == title) {
              break_ = true
            }
          }
        })
        if (break_) return null
        return (
          <DrawerItem
            focused={focused}
            key={index}
            icon={drawerIcon}
            labelStyle={{ color: focused ? 'white' : theme.colors.secondary }}
            label={title == undefined ? '' : title.toUpperCase()}
            onPress={() => {
              if (focused) return
              mobileLoadingContext.setLoading(true)

              setTimeout(() => {
                drawerProps.navigation.navigate(it.name)
              }, 1)
            }}
          />
        )
      })}
      <DrawerContact />
    </DrawerContentScrollView>
  )
}

export default DrawerMenu
