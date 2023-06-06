import { View, Text, useDripsyTheme } from 'dripsy'
import { useEffect, useRef, useState } from 'react'
import { Platform, StyleSheet } from 'react-native'

interface CustomUploadFileProps {
  name: string
  setVal: Function
  error: boolean
  required?: boolean
  value: any
}
const CustomUploadFile = ({
  name,
  error,
  setVal,
  required = false,
  value,
}: CustomUploadFileProps) => {
  const { theme } = useDripsyTheme()
  const [filename, setFilename] = useState<any>(value == '' ? null : value)
  const style = StyleSheet.create({
    uploadFileButton: {
      paddingLeft: [10, 20] as any,
      paddingRight: [10, 20] as any,
      paddingTop: 2,
      paddingBottom: 2,
      backgroundColor: 'secondary',
      borderWidth: 1,
      borderColor: theme.colors.primary,
      borderRadius: 20,
      fontSize: 17,
      cursor: 'pointer',
    },
    childBox: {
      display: 'flex',
      flexDirection: 'row',
      width: '100%',
      mt: 4,
      paddingTop: 10,
      paddingBottom: 10,
      borderRadius: 40,
      paddingRight: [6, 10] as any,
      borderWidth: 1,

      borderColor: error ? 'red' : theme.colors.primary,
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    textFile: {
      paddingLeft: [10, 25] as any,
      color: 'primary',
      flex: 1,
      height: 20,
      overflow: 'hidden',
    },
    container: { width: '100%', padding: 2, mt: 2 },
  })
  const UploadFileButton = () => {
    return (
      <Text sx={style.uploadFileButton} variant="buttonBig">
        UPLOAD FILE
      </Text>
    )
  }
  useEffect(() => {}, [])
  return (
    <View sx={style.container}>
      <Text
        sx={{
          textAlign: 'left',

          paddingTop: 2,
          paddingBottom: 2,
        }}
        variant="buttonBig"
      >
        {name}
        {required ? ' *' : null}
      </Text>
      <View sx={style.childBox}>
        <Text sx={style.textFile}>
          {filename == null ? 'No file chosen' : filename}
        </Text>

        {Platform.OS == 'web' ? (
          <label htmlFor="inputFile">{UploadFileButton()}</label>
        ) : (
          <>{UploadFileButton()}</>
        )}
      </View>
      {Platform.OS == 'web' && (
        <input
          id="inputFile"
          type="file"
          onChange={(e: any) => {
            if (e.target.files.lenght != 0) {
              setFilename(e.target.files[0].name)
              setVal(e.target.files[0].name)
            }
          }}
          style={{ display: 'none' }}
        />
      )}
    </View>
  )
}

export default CustomUploadFile
