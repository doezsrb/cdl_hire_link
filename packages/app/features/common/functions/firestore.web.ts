import { firestore } from '../../../../../apps/next/firebase/firebase'
import { query, addDoc, onSnapshot, collection, doc } from 'firebase/firestore'
const addData = (data: any, as: string, toggleLoading: Function) => {
  const colRef = collection(firestore, as)
  toggleLoading(true)
  addDoc(colRef, {
    data,
  })
    .then(() => {
      console.log('Success')
      toggleLoading(false)
    })
    .catch((e: any) => {
      console.log(e)
      toggleLoading(false)
    })
}
export { addData }
