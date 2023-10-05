import { NativeNavigation } from 'app/navigation/native'
import { Provider } from 'app/provider'
import messaging from '@react-native-firebase/messaging'
import { MobileLoadingProvider } from './context/mobileLoadingContext'
import { useEffect, useState } from 'react'
import * as SplashScreen from 'expo-splash-screen'
import * as Notifications from 'expo-notifications'
import { PermissionsAndroid, Platform } from 'react-native'

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
})
//!TODO: ADD DATETIME TO job database, job ids+name from database (create notifications panel form)
export default function App({ navigation }: any) {
  const [loading, setLoading] = useState(true)
  const [changeRoute, setChangeRoute] = useState({
    route: '',
    param: '',
  })
  const [newNotification, setNewNotification] = useState({
    title: '',
    body: '',
    route: '',
    param: '',
    show: false,
  })
  const resetNewNotification = () => {
    setNewNotification({
      title: '',
      body: '',
      route: '',
      param: '',
      show: false,
    })
  }
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
  //"^3.17.1",
  useEffect(() => {
    var version = parseInt(Platform.Version.toString())
    if (!Number.isNaN(version)) {
      if (version >= 33) {
        if (PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS != undefined)
          PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS
          )
      }
    }
    requestUserPermission()
    subscribeToTopic()
  }, [])

  useEffect(() => {
    var unsubscribe: any = null
    if (enabledNotifications) {
      unsubscribe = messaging().onMessage(async (remoteMessage: any) => {
        var url = remoteMessage.data.link
        var urlParam = remoteMessage.data.linkParam
        var title = remoteMessage.notification.title
        var body = remoteMessage.notification.body

        setNewNotification({
          title,
          body,
          route: url,
          param: urlParam,
          show: true,
        })
      })
      messaging().setBackgroundMessageHandler(async (remoteMessage) => {
        console.log('Message handled in the background!', remoteMessage)
      })
      messaging().onNotificationOpenedApp((remoteMessage) => {
        console.log('REMOTE1')
        console.log(remoteMessage.notification)
        console.log(remoteMessage)
        console.log(
          'Notification caused app to open from background state:',
          remoteMessage.notification
        )
      })
      // Check whether an initial notification is available
      messaging()
        .getInitialNotification()
        .then((remoteMessage: any) => {
          if (remoteMessage) {
            var url = remoteMessage.data.link
            var urlParam = remoteMessage.data.linkParam
            if (url != '-') {
              setChangeRoute({ route: url, param: urlParam })
            }
            console.log(remoteMessage.notification)
            console.log(remoteMessage)
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
    <MobileLoadingProvider
      value={{
        loading: loading,
        setLoading: setLoading,
        changeRoute: changeRoute,
        setChangeRoute: setChangeRoute,
        resetNewNotification: resetNewNotification,
        newNotification: newNotification,
      }}
    >
      <Provider>
        <NativeNavigation />
      </Provider>
    </MobileLoadingProvider>
  )
}
