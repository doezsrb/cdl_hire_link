import { firestore, storage } from '../../../../../apps/next/firebase/firebase'
import {
  query,
  addDoc,
  getDoc,
  onSnapshot,
  collection,
  doc,
  getDocs,
} from 'firebase/firestore'
import { getDownloadURL, ref } from 'firebase/storage'
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
const getSingleData = (id: string, col: string) => {
  return new Promise((resolve, reject) => {
    var colRef = doc(firestore, col, id)
    getDoc(colRef)
      .then((snap: any) => {
        resolve(snap)
      })
      .catch((e: any) => {
        resolve(null)
      })
  })
}
const getImage = (url: string) => {
  return new Promise((resolve, reject) => {
    var imgRef = ref(storage, 'panel-images/' + url)
    getDownloadURL(imgRef)
      .then((res: any) => {
        console.log(res)
        resolve(res)
      })
      .catch((e: any) => {
        console.log('error')
        console.log(e)
        resolve(null)
      })
  })
}
const getData = (col: string) => {
  return new Promise((resolve, reject) => {
    var colRef = collection(firestore, col)

    getDocs(colRef)
      .then((snap: any) => {
        var dataArray: any[] = []
        snap.forEach((it: any) => {
          var obj = {}
          obj['id'] = it.id
          obj['data'] = it.data()
          dataArray.push(obj)
        })

        resolve(dataArray)
      })
      .catch((e: any) => {
        resolve(null)
      })
  })
}
export { addData, getData, getImage, getSingleData }
