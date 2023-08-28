import { Box, ScrollView, Text, View } from 'dripsy'
import { Dripsy } from './dripsy'
import { NavigationProvider } from './navigation'
import { Dimensions, ActivityIndicator, Platform } from 'react-native'
import { useContext, useEffect, useState } from 'react'
import MobileLoadingContext from '../../../apps/expo/context/mobileLoadingContext'
import LoadingScreen from 'app/features/common/components/LoadingScreen/LoadingScreen'
import LoadingContext from '../../../apps/next/context/loadingContext'
import Footer from 'app/features/common/components/Footer/Footer'
import InAppNotify from 'app/features/common/components/InAppNotify/InAppNotify'

export function Provider({ children }: { children: React.ReactNode }) {
  const mobileLoadingContext: any = useContext(MobileLoadingContext)
  const loadingContext: any = useContext(LoadingContext)

  return (
    <NavigationProvider>
      <Dripsy>
        {(mobileLoadingContext.loading || loadingContext.loading) && (
          <LoadingScreen />
        )}
        {Platform.OS != 'web' && mobileLoadingContext.newNotification.show && (
          <InAppNotify />
        )}

        {children}
      </Dripsy>
    </NavigationProvider>
  )
}
