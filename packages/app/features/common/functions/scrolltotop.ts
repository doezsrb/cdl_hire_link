import { Platform } from 'react-native'

const scrollToTop = (scrollRef: any) => {
  if (Platform.OS == 'web') {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    })
  } else {
    if (scrollRef != undefined) {
      scrollRef.current.scrollTo({
        y: 0,
        animated: true,
      })
    }
  }
}

export default scrollToTop
