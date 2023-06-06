import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer'
import { useEffect } from 'react'
import { View, Text } from 'dripsy'
import Logo from '../Logo/logo'

interface DrawerMenuProps {
  drawerProps: DrawerContentComponentProps
}
const DrawerMenu = ({ drawerProps }: DrawerMenuProps) => {
  useEffect(() => {
    /* console.log('dsdddddddddddddddddddddddddddddd')
    console.log(drawerProps.descriptors) */
  }, [])
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
              alert(it)
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
