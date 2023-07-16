import { firestore, storage } from '../../../../../apps/expo/firebase/firebase'

const testData = () => {
  /* firestore()
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
    }) */
  console.log('Test')
}
const getImage = (url: string) => {
  return new Promise(async (resolve, reject) => {
    try {
      var img = await storage()
        .ref('panel-images/' + url)
        .getDownloadURL()
      resolve(img)
    } catch (e: any) {
      resolve(null)
    }
  })
}
const getSingleData = (id: string, col: string) => {
  return new Promise((resolve, reject) => {
    firestore()
      .collection(col)
      .doc(id)
      .get()
      .then((snap: any) => {
        resolve(snap)
      })
      .catch((e: any) => {
        resolve(null)
      })
  })
}
const getCountData = (col: string) => {
  return new Promise((resolve, reject) => {
    firestore()
      .collection(col)
      .count()
      .get()
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
    var query_ =
      lastDoc == null
        ? firestore().collection(col).limit(1)
        : firestore().collection(col).startAfter(lastDoc).limit(1)
    query_
      .get()
      .then((snap: any) => {
        var dataArray: any[] = []
        var lastDoc = snap.docs[snap.docs.length - 1]
        snap.forEach((it: any) => {
          var obj: any = {}
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
        console.log('Error')
        console.log(e)
        resolve(null)
      })
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
export { addData, getData, getImage, getSingleData, getCountData }
