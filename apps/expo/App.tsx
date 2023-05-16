import { NativeNavigation } from 'app/navigation/native'
import { Provider } from 'app/provider'
import messaging from '@react-native-firebase/messaging'

export default function App() {
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
    <Provider>
      <NativeNavigation />
    </Provider>
  )
}
