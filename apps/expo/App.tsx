import { NativeNavigation } from 'app/navigation/native'
import { Provider } from 'app/provider'
import messaging from '@react-native-firebase/messaging'
import { MobileLoadingProvider } from './context/mobileLoadingContext'
import { useState } from 'react'

export default function App() {
  const [loading, setLoading] = useState(true)
  const requestUserPermission = async () => {
    const authStatus = await messaging().requestPermission()
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL

    if (enabled) {
      console.log('Authorization status:', authStatus)
    }
  }
  return (
    <MobileLoadingProvider value={{ loading: loading, setLoading: setLoading }}>
      <Provider>
        <NativeNavigation />
      </Provider>
    </MobileLoadingProvider>
  )
}
