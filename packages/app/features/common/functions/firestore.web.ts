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
  where,
  and,
} from 'firebase/firestore'
import { getDownloadURL, ref, uploadString } from 'firebase/storage'

const uploadImage = (file: any, filename: string) => {
  return new Promise((resolve, reject) => {
    var storageRef = ref(storage, '/images/' + filename)
    uploadString(storageRef, file, 'data_url')
      .then((snap: any) => {
        resolve('success')
      })
      .catch((e: any) => {
        resolve('failed')
      })
  })
}
const addData = (
  data: any,
  as: string,

  job: string | null
) => {
  return new Promise((resolve, reject) => {
    const colRef = collection(firestore, as)

    addDoc(colRef, {
      data,
      job,
    })
      .then(() => {
        resolve('success')
      })
      .catch((e: any) => {
        resolve('failed')
      })
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
        resolve(res)
      })
      .catch((e: any) => {
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
const getData = (col: string, filters: any[], lastDoc?: any) => {
  return new Promise((resolve, reject) => {
    var type = ['Company driver', 'Rental lease']
    var solo_team = ['Solo']
    var division = ['Dry van']
    var experience = ['2+ years']
    var colRef = collection(firestore, col)
    var queries: any

    var query_ =
      lastDoc == null
        ? filters.length != 0
          ? query(
              colRef,
              where('filters', 'array-contains-any', filters),
              limit(20)
            )
          : query(
              colRef,

              limit(20)
            )
        : filters.length != 0
        ? query(
            colRef,
            where('filters', 'array-contains-any', filters),
            startAfter(lastDoc),
            limit(20)
          )
        : query(colRef, startAfter(lastDoc), limit(20))

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
        console.log(e)
        resolve(null)
      })
  })
}
export { addData, getData, getImage, getSingleData, getCountData, uploadImage }
