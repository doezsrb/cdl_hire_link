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
const uploadImage = (file: any, filename: string) => {
  return new Promise((resolve, reject) => {
    const ref = storage().ref('/images/' + filename)
    ref
      .putFile(file)
      .then((snap: any) => {
        resolve('success')
      })
      .catch((e: any) => {
        console.log('RROR')
        console.log(e)
        resolve('failed')
      })
    /* var storageRef = ref(storage, "/images/" + filename);
    uploadString(storageRef, file, "data_url")
      .then((snap: any) => {
        resolve("success");
      })
      .catch((e: any) => {
        resolve("failed");
      }); */
  })
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
const getData = (col: string, filters: any[], lastDoc?: any) => {
  return new Promise((resolve, reject) => {
    var query_ =
      lastDoc == undefined
        ? filters.length != 0
          ? firestore()
              .collection(col)
              .where('filters', 'array-contains-any', filters)
              .limit(20)
          : firestore().collection(col).limit(20)
        : filters.length != 0
        ? firestore()
            .collection(col)
            .where('filters', 'array-contains-any', filters)
            .startAfter(lastDoc)
            .limit(20)
        : firestore().collection(col).startAfter(lastDoc).limit(20)
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
const addData = (
  data: any,
  as: string,

  job: string | null
) => {
  return new Promise((resolve, reject) => {
    firestore()
      .collection(as)
      .add({
        data,
        job,
      })
      .then(() => {
        resolve('success')
      })
      .catch((e: any) => {
        console.log('FAILED')
        console.log(e)
        resolve('failed')
      })
  })
}
export { addData, getData, getImage, getSingleData, getCountData, uploadImage }
