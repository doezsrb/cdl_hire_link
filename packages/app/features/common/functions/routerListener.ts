import { Platform } from 'react-native'

const routerListener = (navigation: any, loadingContext: any) => {
  var unsubscribe: any
  var unsub: any
  if (Platform.OS != 'web') {
    unsubscribe = navigation.addListener('focus', () => {
      loadingContext.setLoading(false)
    })
    unsub = navigation.addListener('blur', () => {
      loadingContext.setLoading(true)
    })
  }

  return () => {
    if (Platform.OS != 'web') {
      unsubscribe()
      unsub()
    }
  }
}
export default routerListener
