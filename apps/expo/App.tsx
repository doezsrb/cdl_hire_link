import { NativeNavigation } from 'app/navigation/native'
import { Provider } from 'app/provider'
import messaging from '@react-native-firebase/messaging'
import { MobileLoadingProvider } from './context/mobileLoadingContext'
import { useEffect, useState } from 'react'

import * as Notifications from 'expo-notifications'

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
})

export default function App() {
  const [loading, setLoading] = useState(true)

  const [enabledNotifications, setEnabledNotifications] = useState(false)
  const requestUserPermission = async () => {
    const authStatus = await messaging().requestPermission()
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL

    setEnabledNotifications(enabled)
  }
  const subscribeToTopic = () => {
    messaging()
      .subscribeToTopic('jobs')
      .then(() => console.log('Subscribed to topic!'))
  }
  useEffect(() => {
    requestUserPermission()
    subscribeToTopic()
  }, [])
  useEffect(() => {
    var unsubscribe: any = null
    if (enabledNotifications) {
      unsubscribe = messaging().onMessage(async (remoteMessage) => {
        console.log('A new FCM message arrived!', JSON.stringify(remoteMessage))
      })
      messaging().setBackgroundMessageHandler(async (remoteMessage) => {
        console.log('Message handled in the background!', remoteMessage)
      })

      messaging().onNotificationOpenedApp((remoteMessage) => {
        console.log(
          'Notification caused app to open from background state:',
          remoteMessage.notification
        )
      })

      // Check whether an initial notification is available
      messaging()
        .getInitialNotification()
        .then((remoteMessage) => {
          if (remoteMessage) {
            console.log(
              'Notification caused app to open from quit state:',
              remoteMessage.notification
            )
          }
        })
    }
    return () => {
      unsubscribe
    }
  }, [enabledNotifications])
  return (
    <MobileLoadingProvider value={{ loading: loading, setLoading: setLoading }}>
      <Provider>
        <NativeNavigation />
      </Provider>
    </MobileLoadingProvider>
  )
}
