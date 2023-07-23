const createFileName = (fileName: string) => {
  var newName: string
  var ext = /[.]/.exec(fileName) ? /[^.]+$/.exec(fileName) : undefined
  if (ext == undefined) {
    return null
  } else {
    var nameWithoutExt = fileName.replace('.' + ext[0], '')
    var randomNamb1 = Math.floor(Math.random() * 1000) + 10 + '-'
    var randomNamb2 = Math.floor(Math.random() * 1000) + 10 + '-'
    var randomNamb3 = Math.floor(Math.random() * 1000) + 10

    newName =
      nameWithoutExt + randomNamb1 + randomNamb2 + randomNamb3 + '.' + ext[0]
    return newName
  }
}

export { createFileName }
