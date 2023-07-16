import { firestore, storage } from '../../../../../apps/next/firebase/firebase'
import {
  query,
  addDoc,
  getDoc,
  onSnapshot,
  collection,
  doc,
  getDocs,
  limit,
  startAfter,
  startAt,
  getCountFromServer,
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
const getCountData = (col: string) => {
  return new Promise((resolve, reject) => {
    var colRef = collection(firestore, col)
    getCountFromServer(colRef)
      .then((snap: any) => {
        resolve(snap.data().count)
      })
      .catch((e: any) => {
        resolve(null)
      })
  })
}
const getData = (col: string, lastDoc?: any) => {
  return new Promise((resolve, reject) => {
    var colRef = collection(firestore, col)
    var query_ =
      lastDoc == null
        ? query(colRef, limit(1))
        : query(colRef, startAfter(lastDoc), limit(1))

    getDocs(query_)
      .then((snap: any) => {
        var dataArray: any[] = []
        var lastDoc = snap.docs[snap.docs.length - 1]

        snap.forEach((it: any) => {
          var obj = {}
          obj['id'] = it.id
          obj['data'] = it.data()
          dataArray.push(obj)
        })

        var responseObj = {
          data: dataArray,
          lastDoc: lastDoc,
        }
        resolve(responseObj)
      })
      .catch((e: any) => {
        resolve(null)
      })
  })
}
export { addData, getData, getImage, getSingleData, getCountData }
