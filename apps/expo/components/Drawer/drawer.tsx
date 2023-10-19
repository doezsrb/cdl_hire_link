import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer'

import { useContext, useEffect } from 'react'
import { View, Text } from 'dripsy'
import Logo from 'app/features/common/components/Logo/logo'
import BurgerIcon from 'app/features/common/components/Icons/BurgerIcon'

import MobileLoadingContext from '../../context/mobileLoadingContext'
import routes, { UniversalRoute } from 'app/features/common/routes'
import FacebookIcon from 'app/features/common/components/Icons/FacebookIcon'
import InstaIcon from 'app/features/common/components/Icons/InstaIcon'

interface DrawerMenuProps {
  drawerProps: DrawerContentComponentProps
}
const DrawerMenu = ({ drawerProps }: DrawerMenuProps) => {
  const mobileLoadingContext: any = useContext(MobileLoadingContext)
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
            labelStyle={{ color: focused ? '#66CC8F' : 'white' }}
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
      {/* <View
        sx={{
          width: '100%',
          height: 1,
          justifyContent: 'flex-end',
          backgroundColor: 'secondary',
        }}
      /> */}

      {/*  <View
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',

          gap: 10,
          justifyContent: 'center',
        }}
      >
        <FacebookIcon width={60} />
        <InstaIcon width={60} />
      </View> */}
    </DrawerContentScrollView>
  )
}

export default DrawerMenu
