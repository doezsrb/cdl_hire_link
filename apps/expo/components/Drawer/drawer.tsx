import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer'
import { useContext, useEffect } from 'react'
import { View, Text } from 'dripsy'
import Logo from 'app/features/common/components/Logo/logo'

import MobileLoadingContext from '../../context/mobileLoadingContext'

interface DrawerMenuProps {
  drawerProps: DrawerContentComponentProps
}
const DrawerMenu = ({ drawerProps }: DrawerMenuProps) => {
  const mobileLoadingContext: any = useContext(MobileLoadingContext)
  useEffect(() => {}, [])
  return (
    <DrawerContentScrollView style={{ backgroundColor: '#005199', padding: 5 }}>
      <View sx={{ padding: '$3', width: '100%', alignItems: 'center' }}>
        <Logo />
      </View>
      <View sx={{ width: '100%', height: 1, backgroundColor: 'white' }} />
      {drawerProps.state.routes.map((it, index) => {
        const focused = index === drawerProps.state.index
        const { title, drawerLabel, drawerIcon } =
          drawerProps.descriptors[it.key]!.options
        return (
          <DrawerItem
            focused={focused}
            key={index}
            labelStyle={{ color: focused ? '#66CC8F' : 'white' }}
            label={title == undefined ? '' : title.toUpperCase()}
            onPress={() => {
              mobileLoadingContext.setLoading(true)
              setTimeout(() => {
                drawerProps.navigation.navigate(it.name)
              }, 1)
            }}
          />
        )
      })}
      <View sx={{ width: '100%', height: 1, backgroundColor: 'white' }} />
      <Text variant="menuText">+3812412596823</Text>
      <Text variant="menuText">+38115256126126</Text>
    </DrawerContentScrollView>
  )
}

export default DrawerMenu
