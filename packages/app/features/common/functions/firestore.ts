import { firestore } from '../../../../../apps/expo/firebase/firebase'

const testData = () => {
  firestore()
    .collection('sdsd')
    .add({
      data: 'dsds',
    })
    .then(() => {
      console.log('SUCCESS')
    })
    .catch((e: any) => {
      console.log('ERR')
      console.log(e)
    })
}
const addData = (data: any, as: string, toggleLoading: Function) => {
  toggleLoading(true)
  firestore()
    .collection(as)
    .add({
      data,
    })
    .then(() => {
      console.log('SUCCESS')
      toggleLoading(false)
    })
    .catch((e: any) => {
      console.log('ERR')
      console.log(e)
      toggleLoading(false)
    })
}
export { addData, testData }
