import BorderInput from 'app/features/common/components/BorderInput/BorderInput'
import CustomInput from 'app/features/common/components/CustomInput/CustomInput'
import CustomRadio from 'app/features/common/components/CustomRadio/CustomRadio'
import CustomSelectInput from 'app/features/common/components/CustomSelectInput/CustomSelectInput'
import CustomUploadFile from 'app/features/common/components/CustomUploadFile/CustomUploadFile'
import StepInd from 'app/features/common/components/StepInd/StepInd'
import { Pressable, SafeAreaView, Text, View } from 'dripsy'
import { addData, uploadImage } from 'app/features/common/functions/firestore'
import { useDripsyTheme } from 'dripsy'
import {
  Dimensions,
  Modal,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Animated,
} from 'react-native'
import { useState, useEffect, Fragment, useRef, useContext } from 'react'

import { createParam } from 'solito'

import routerListener from 'app/features/common/functions/routerListener'
import MobileLoadingContext from '../../../../../apps/expo/context/mobileLoadingContext'
import Layout from 'app/features/common/components/Layout/Layout'
import LoadingContext from '../../../../../apps/next/context/loadingContext'
import scrollToTop from 'app/features/common/functions/scrolltotop'
import useRouter from 'app/features/common/functions/nextrouter'
import ModalErrorSuccess from 'app/features/common/components/ModalErrorSuccess/ModalErrorSuccess'
import { createFileName } from 'app/features/common/functions/common'
import CARRIER_FORM from 'app/features/common/forms/carrier-form'
import DRIVER_FORM from 'app/features/common/forms/driver-form'
import LoadingScreen from 'app/features/common/components/LoadingScreen/LoadingScreen'
import CenteredBox from 'app/features/common/components/CenteredBox/CenteredBox'

const { useParam } = createParam<{
  as: 'carrier' | 'driver'
}>()
/* import { DateTimePickerAndroid } from '@react-native-community/datetimepicker' */

//!TODO: 2. download slika u panel 3. search za sve stranice
const ApplyScreen = ({ route, navigation }: any) => {
  const fadeAnim = useRef(new Animated.Value(1)).current
  const mobileLoadingContext: any = useContext(MobileLoadingContext)
  const [error, setError] = useState(false)
  const [success, setSuccess] = useState(false)

  const scrollRef = useRef<any>()
  const desktopLoadingContext: any = useContext(LoadingContext)
  const [as, setAs] = useParam('as')
  const router = useRouter()
  const [companyId, setCompanyId] = useState<any>(null)
  const scrollToStepRef: any = useRef()
  const { theme } = useDripsyTheme()
  const [step, setStep] = useState(1)
  const [allSteps, setAllSteps] = useState(0)

  const [stepData, setStepData] = useState<any>({
    driver: DRIVER_FORM,
    carrier: CARRIER_FORM,
  })
  useEffect(() => {
    if (Platform.OS == 'android' || Platform.OS == 'ios') {
      setCompanyId(route.params.company)
    }
    if (Platform.OS == 'web') {
      setCompanyId(router.query.company)
    }

    routerListener(navigation, mobileLoadingContext)
  }, [navigation])
  useEffect(() => {
    setStep(1)
    const as_parram = as
    if (as_parram == 'driver') {
      setAllSteps(2)
    } else {
      setAllSteps(4)
    }
  }, [as])

  const style = StyleSheet.create({
    container: {
      width: '100%',
      paddingTop: 20,
      paddingBottom: 20,
      alignItems: 'center',
    },
    containerChild: {
      width: ['100%', '80%', '80%', '80%', '50%'] as any,

      display: 'flex',
      backgroundColor: 'white',
      alignItems: 'flex-end',
      borderWidth: 2,
      borderColor: 'secondary',
      flexDirection: 'column',
      padding: 20,
    },
    containerButtons: {
      bottom: 0,
      display: 'flex',
      flex: 1,

      alignItems: 'flex-end',
      width: '100%',
      justifyContent: 'space-between',
      flexDirection: 'row',
      mt: '$3',
    },
    sliderTextContainer: {
      zIndex: 2,
      position: 'absolute',
      flexDirection: 'column',
      width: '100%',
      alignItems: 'center',
      bottom: 0,
      height: [
        Dimensions.get('window').height - Dimensions.get('window').height / 10,
        Platform.OS == 'web' ? '100vh' : Dimensions.get('window').height,
      ] as any,
      paddingBottom: 50,
      justifyContent: 'flex-end',
    },
  })

  const updateStateSubgroup = (
    val: any,
    groupsKey: string,
    subgroupKey: string,
    dataKey: string,
    index?: any
  ) => {
    if (index != undefined) {
      var newObj = { ...stepData }
      newObj[as as string]['step' + step].groups[groupsKey].subgroup[
        subgroupKey
      ].data.array[index][dataKey].value = val
      setStepData(newObj)
    } else {
      var newObj = { ...stepData }
      newObj[as as string]['step' + step].groups[groupsKey].subgroup[
        subgroupKey
      ].data[dataKey].value = val
      setStepData(newObj)
    }
  }
  const updateState = (val: any, groupsKey: string, dataKey: string) => {
    var newObj = { ...stepData }
    newObj[as as string]['step' + step].groups[groupsKey].data[dataKey].value =
      val
    setStepData(newObj)
  }
  const getDataURL = (file: any) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.onloadend = () => {
        resolve(reader.result)
      }
      reader.readAsDataURL(file)
    })
  }
  const submit = async () => {
    if (as != undefined) {
      var dataObject: any = {}
      var forUpload: any[] = []
      var errorFile = 0
      Object.keys(stepData[as]).map((checkStep: any) => {
        var stepName = stepData[as][checkStep].name
        var groups = stepData[as][checkStep].groups
        dataObject[stepName] = {}
        Object.keys(groups).map((it: any) => {
          var fieldName = groups[it].name
          var stepName = stepData[as][checkStep].name
          dataObject[stepName][fieldName] = {}
          Object.keys(groups[it].data).map((it2: any) => {
            var field = groups[it].data[it2]
            let groupData = groups[it].data
            if (field.sibling_radio != undefined) {
              if (
                groupData[field.sibling_radio].value !=
                field.sibling_radio_value
              ) {
                return
              }
            }
            if (field.type == 'file') {
              if (field.value != '') {
                var newImageName = createFileName(field.value.name)
                if (newImageName == null) {
                  errorFile++
                } else {
                  forUpload.push({
                    name: newImageName,
                    file: field.value,
                  })
                  dataObject[stepName][fieldName][field.name] = newImageName
                }
              } else {
                dataObject[stepName][fieldName][field.name] = null
              }
            } else {
              if (field.name == 'First Name' || field.name == 'Company Name') {
                var firstLetterUpper =
                  field.value.charAt(0).toUpperCase() + field.value.slice(1)
                dataObject[stepName][fieldName][field.name] = firstLetterUpper
              } else {
                dataObject[stepName][fieldName][field.name] = field.value
              }
            }

            /*  console.log(
                stepData[as][checkStep].groups[it].data[it2].name +
                  ': ' +
                  stepData[as][checkStep].groups[it].data[it2].value
              ) */
          })
          if (groups[it].subgroup != null) {
            dataObject[stepName][fieldName]['subgroup'] = {}
            Object.keys(groups[it].subgroup).map((it3: any) => {
              let group = groups[it]
              let subgroup = groups[it].subgroup[it3]
              if (subgroup.parent_select != undefined) {
                if (
                  !group.data[subgroup.parent_select].value.includes(
                    subgroup.name
                  )
                ) {
                  return
                }
              }
              if (subgroup.parent_radio != undefined) {
                if (
                  group.data[subgroup.parent_radio].value !=
                  subgroup.parent_radio_value
                ) {
                  return null
                }
              }
              var subgroupName = groups[it].subgroup[it3].name

              if (subgroup.add) {
                dataObject[stepName][fieldName]['subgroup'][subgroupName] = []
                var obj: any = {}
                subgroup.data.array.map((itArray: any) => {
                  Object.keys(itArray).map((it4: any) => {
                    var subgroupData = itArray
                    var field = itArray[it4]
                    if (field.sibling_radio != undefined) {
                      if (
                        subgroupData[field.sibling_radio].value !=
                        field.sibling_radio_value
                      ) {
                        return
                      }
                    }
                    if (field.sibling_select != undefined) {
                      if (
                        !subgroupData[field.sibling_select].value.includes(
                          field.name.replace('Description ', '')
                        )
                      ) {
                        return
                      }
                    }
                    if (field.type == 'file') {
                      if (field.value != '') {
                        var newImageName = createFileName(field.value.name)
                        if (newImageName == null) {
                          errorFile++
                        } else {
                          forUpload.push({
                            name: newImageName,
                            file: field.value,
                          })
                          obj[field.name] = newImageName
                        }
                      } else {
                        obj[field.name] = null
                      }
                    } else {
                      obj[field.name] = field.value
                    }

                    /* console.log(
                        stepData[as][checkStep].groups[it].subgroup[it3].data[it4]
                          .name +
                          ':' +
                          stepData[as][checkStep].groups[it].subgroup[it3].data[it4]
                            .value
                      ) */
                  })
                  dataObject[stepName][fieldName]['subgroup'][
                    subgroupName
                  ].push(obj)
                })
              } else {
                dataObject[stepName][fieldName]['subgroup'][subgroupName] = {}
                Object.keys(groups[it].subgroup[it3].data).map((it4: any) => {
                  var subgroupData = groups[it].subgroup[it3].data
                  var field = groups[it].subgroup[it3].data[it4]
                  if (field.sibling_radio != undefined) {
                    if (
                      subgroupData[field.sibling_radio].value !=
                      field.sibling_radio_value
                    ) {
                      return
                    }
                  }
                  if (field.sibling_select != undefined) {
                    if (
                      !subgroupData[field.sibling_select].value.includes(
                        field.name.replace('Description ', '')
                      )
                    ) {
                      return
                    }
                  }
                  if (field.type == 'file') {
                    if (field.value != '') {
                      var newImageName = createFileName(field.value.name)
                      if (newImageName == null) {
                        errorFile++
                      } else {
                        forUpload.push({
                          name: newImageName,
                          file: field.value,
                        })
                        dataObject[stepName][fieldName]['subgroup'][
                          subgroupName
                        ][field.name] = newImageName
                      }
                    } else {
                      dataObject[stepName][fieldName]['subgroup'][subgroupName][
                        field.name
                      ] = null
                    }
                  } else {
                    dataObject[stepName][fieldName]['subgroup'][subgroupName][
                      field.name
                    ] = field.value
                  }

                  /* console.log(
                      stepData[as][checkStep].groups[it].subgroup[it3].data[it4]
                        .name +
                        ':' +
                        stepData[as][checkStep].groups[it].subgroup[it3].data[it4]
                          .value
                    ) */
                })
              }
            })
          }
        })
      })

      if (errorFile != 0) {
        setError(true)
      } else {
        scrollToTop(scrollRef)

        toggleLoading(true)
        if (Platform.OS == 'web') {
          Promise.all(
            forUpload.map(async (it: any): Promise<any> => {
              var dataURL = await getDataURL(it.file)
              var response = await uploadImage(dataURL, it.name)
              if (response != 'success') {
                throw 'failed upload'
              }
              return true
            })
          )
            .then(() => {
              if (as == 'driver') {
                var job = companyId == undefined ? null : companyId
                addData(dataObject, as, job)
                  .then((res: any) => {
                    if (res == 'success') {
                      setSuccess(true)
                    } else {
                      setError(true)
                    }
                  })
                  .catch((e: any) => {
                    setError(true)
                  })
                  .finally(() => {
                    toggleLoading(false)
                  })
              } else {
                addData(dataObject, as, null)
                  .then((res: any) => {
                    if (res == 'success') {
                      setSuccess(true)
                    } else {
                      setError(true)
                    }
                  })
                  .catch((e: any) => {
                    setError(true)
                  })
                  .finally(() => {
                    toggleLoading(false)
                  })
              }
            })
            .catch((e: any) => {
              setError(true)
              toggleLoading(false)
            })
        } else {
          Promise.all(
            forUpload.map(async (it: any): Promise<any> => {
              var response = await uploadImage(it.file.uri, it.name)
              if (response != 'success') {
                throw 'failed upload'
              }
              return true
            })
          )
            .then(() => {
              if (as == 'driver') {
                var job = companyId == undefined ? null : companyId
                addData(dataObject, as, job)
                  .then((res: any) => {
                    if (res == 'success') {
                      setSuccess(true)
                    } else {
                      setError(true)
                    }
                  })
                  .catch((e: any) => {
                    setError(true)
                  })
                  .finally(() => {
                    toggleLoading(false)
                  })
              } else {
                addData(dataObject, as, null)
                  .then((res: any) => {
                    if (res == 'success') {
                      setSuccess(true)
                    } else {
                      setError(true)
                    }
                  })
                  .catch((e: any) => {
                    setError(true)
                  })
                  .finally(() => {
                    toggleLoading(false)
                  })
              }
            })
            .catch((e: any) => {
              setError(true)
              toggleLoading(false)
            })
        }
      }

      /* toggleLoading(true)
       */
    }
  }
  const toggleLoading = (loading: boolean) => {
    if (loading) {
      if (Platform.OS == 'web') {
        desktopLoadingContext.setLoading(true)
      } else {
        mobileLoadingContext.setLoading(true)
      }
    } else {
      if (Platform.OS == 'web') {
        desktopLoadingContext.setLoading(false)
      } else {
        mobileLoadingContext.setLoading(false)
      }
    }
  }
  const checkData = (): boolean => {
    const checkStep = 'step' + step
    var err = 0
    const newStepData: any = { ...stepData }
    if (as == undefined) return false
    Object.keys(newStepData[as][checkStep].groups).map((it: any) => {
      Object.keys(newStepData[as][checkStep].groups[it].data).map(
        (it2: any) => {
          var validRegex =
            /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/

          let groupData = newStepData[as][checkStep].groups[it].data
          var field = newStepData[as][checkStep].groups[it].data[it2]

          if (field.sibling_radio != undefined) {
            if (
              groupData[field.sibling_radio].value != field.sibling_radio_value
            ) {
              return
            }
          }

          if (field.required && field.value == '') {
            field.error = true
            err = 1
          } else {
            if (field.type == 'numeric') {
              if (Number.isInteger(parseInt(field.value))) {
                field.error = false
              } else {
                err = 1
                field.error = true
              }
            } else if (field.type == 'email') {
              var email: string = field.value
              if (email.match(validRegex)) {
                field.error = false
              } else {
                err = 1
                field.error = true
              }
            } else {
              field.error = false
            }
          }
        }
      )
      if (newStepData[as][checkStep].groups[it].subgroup != null) {
        Object.keys(newStepData[as][checkStep].groups[it].subgroup).map(
          (it3: any) => {
            let group = newStepData[as][checkStep].groups[it]
            let subgroup = newStepData[as][checkStep].groups[it].subgroup[it3]
            if (subgroup.parent_select != undefined) {
              if (
                !group.data[subgroup.parent_select].value.includes(
                  subgroup.name
                )
              ) {
                return
              }
            }
            if (subgroup.parent_radio != undefined) {
              if (
                group.data[subgroup.parent_radio].value !=
                subgroup.parent_radio_value
              ) {
                return null
              }
            }
            if (subgroup.add) {
              subgroup.data.array.map((itArray: any, index: any) => {
                Object.keys(itArray).map((it4: any) => {
                  var field = itArray[it4]

                  var subgroupData = itArray
                  if (field.sibling_radio != undefined) {
                    if (
                      subgroupData[field.sibling_radio].value !=
                      field.sibling_radio_value
                    ) {
                      return null
                    }
                  }
                  if (field.sibling_select != undefined) {
                    if (
                      !subgroupData[field.sibling_select].value.includes(
                        field.name.replace('Description ', '')
                      )
                    ) {
                      return
                    }
                  }

                  if (field.required && field.value == '') {
                    field.error = true
                    err = 1
                  } else {
                    if (field.type == 'numeric') {
                      if (Number.isInteger(parseInt(field.value))) {
                        field.error = false
                      } else {
                        err = 1
                        field.error = true
                      }
                    } else {
                      field.error = false
                    }
                  }
                })
              })
            } else {
              Object.keys(
                newStepData[as][checkStep].groups[it].subgroup[it3].data
              ).map((it4: any) => {
                var field =
                  newStepData[as][checkStep].groups[it].subgroup[it3].data[it4]

                var subgroupData =
                  newStepData[as][checkStep].groups[it].subgroup[it3].data
                if (field.sibling_radio != undefined) {
                  if (
                    subgroupData[field.sibling_radio].value !=
                    field.sibling_radio_value
                  ) {
                    return null
                  }
                }
                if (field.sibling_select != undefined) {
                  if (
                    !subgroupData[field.sibling_select].value.includes(
                      field.name.replace('Description ', '')
                    )
                  ) {
                    return
                  }
                }

                if (field.required && field.value == '') {
                  field.error = true
                  err = 1
                } else {
                  if (field.type == 'numeric') {
                    if (Number.isInteger(parseInt(field.value))) {
                      field.error = false
                    } else {
                      err = 1
                      field.error = true
                    }
                  } else {
                    field.error = false
                  }
                }
              })
            }
          }
        )
      }
    })
    setStepData(newStepData)

    if (err == 0) {
      return true
    }

    /* window.scroll({
      top: scrollToStepRef.current.offsetTop,
      left: 0,
      behavior: 'smooth',
    }) */
    return false
  }
  const addMore = (as: any, step: any, group: any, subgroup: any) => {
    var newData = { ...stepData }
    var obj =
      newData[as]['step' + step].groups[group].subgroup[subgroup].pattern
    var array =
      newData[as]['step' + step].groups[group].subgroup[subgroup].data.array
    array.push(obj)
    newData[as]['step' + step].groups[group].subgroup[subgroup].data.array =
      array
    setStepData(newData)
    console.log(array)
  }
  const removeMore = (as: any, step: any, group: any, subgroup: any) => {
    var newData = { ...stepData }
    var array =
      newData[as]['step' + step].groups[group].subgroup[subgroup].data.array
    array.pop()
    newData[as]['step' + step].groups[group].subgroup[subgroup].data.array =
      array
    setStepData(newData)
  }
  const toggleFade = (number: number) => {
    Animated.timing(fadeAnim, {
      toValue: number,
      duration: 500,
      useNativeDriver: true,
    }).start()
  }
  return (
    <>
      {as == undefined ? null : (
        <Layout
          navigation={navigation}
          title={'APPLY AS A ' + as.toUpperCase()}
          scrollRef={scrollRef}
        >
          {error && (
            <ModalErrorSuccess success={false} close={() => setError(false)} />
          )}
          {success && (
            <ModalErrorSuccess success={true} close={() => setSuccess(false)} />
          )}

          <View sx={style.container}>
            <View sx={style.containerChild}>
              <StepInd
                stepName={stepData[as as string]['step' + step].name}
                current={step}
                steps={allSteps}
              />

              <View ref={scrollToStepRef} />
              <Animated.View
                style={{
                  opacity: fadeAnim,

                  width: '100%',
                }}
              >
                {Object.keys(stepData[as as string]['step' + step].groups).map(
                  (it: any, index: number) => {
                    var group: any =
                      stepData[as as string]['step' + step].groups[it]

                    return (
                      <BorderInput key={index} text={group.name}>
                        <View
                          sx={{
                            flexDirection: ['column', 'row'],
                            flexWrap: ['nowrap', 'wrap'],
                          }}
                        >
                          {Object.keys(group.data).map(
                            (it2: any, index: any) => {
                              if (group.data[it2].sibling_radio != undefined) {
                                if (
                                  group.data[group.data[it2].sibling_radio]
                                    .value !=
                                  group.data[it2].sibling_radio_value
                                ) {
                                  return null
                                }
                              }
                              var response
                              if (
                                group.data[it2].type == 'text' ||
                                group.data[it2].type == 'email' ||
                                group.data[it2].type == 'numeric'
                              ) {
                                response = (
                                  <Fragment key={step + it + it2}>
                                    <CustomInput
                                      currentValue={group.data[it2].value}
                                      label={group.data[it2].name}
                                      error={group.data[it2].error}
                                      setVal={(val: any) => {
                                        updateState(val, it, it2)
                                      }}
                                      type={group.data[it2].type}
                                      required={group.data[it2].required}
                                      multiline={
                                        group.data[it2].multiline != undefined
                                      }
                                    />
                                  </Fragment>
                                )
                              } else if (group.data[it2].type == 'date') {
                                response = (
                                  <Fragment key={step + it + it2}>
                                    <CustomInput
                                      datePicker
                                      currentValue={group.data[it2].value}
                                      label={group.data[it2].name}
                                      error={group.data[it2].error}
                                      setVal={(val: any) => {
                                        updateState(val, it, it2)
                                      }}
                                      required={group.data[it2].required}
                                    />
                                  </Fragment>
                                )
                              } else if (group.data[it2].type == 'select') {
                                response = (
                                  <Fragment key={step + it + it2}>
                                    <CustomSelectInput
                                      currentValue={group.data[it2].value}
                                      error={group.data[it2].error}
                                      required={group.data[it2].required}
                                      fullWidth={
                                        group.data[it2].name == 'State'
                                      }
                                      label={group.data[it2].name}
                                      data={group.data[it2].arrayData}
                                      optionValue={group.data[it2].optionValue}
                                      optionLabel={group.data[it2].optionLabel}
                                      multiple={group.data[it2].multiple}
                                      setVal={(val: any) => {
                                        updateState(val, it, it2)
                                      }}
                                    />
                                  </Fragment>
                                )
                              } else if (group.data[it2].type == 'file') {
                                response = (
                                  <Fragment key={step + it + it2}>
                                    <CustomUploadFile
                                      value={group.data[it2].value}
                                      required={group.data[it2].required}
                                      error={group.data[it2].error}
                                      name={group.data[it2].name}
                                      setVal={(val: any) => {
                                        updateState(val, it, it2)
                                      }}
                                    />
                                  </Fragment>
                                )
                              } else if (group.data[it2].type == 'radio') {
                                response = (
                                  <Fragment key={step + it + it2}>
                                    <CustomRadio
                                      currentValue={group.data[it2].value}
                                      error={group.data[it2].error}
                                      name={group.data[it2].name}
                                      setVal={(val: any) => {
                                        updateState(val, it, it2)
                                      }}
                                      required={group.data[it2].required}
                                    />
                                  </Fragment>
                                )
                              }
                              return response
                            }
                          )}
                        </View>
                        {group.subgroup != null
                          ? Object.keys(group.subgroup).map(
                              (it2: any, index: number) => {
                                var subgroup = group.subgroup[it2]

                                if (subgroup.parent_select != undefined) {
                                  if (
                                    !group.data[
                                      subgroup.parent_select
                                    ].value.includes(subgroup.name)
                                  ) {
                                    return null
                                  }
                                }

                                if (subgroup.parent_radio != undefined) {
                                  if (
                                    group.data[subgroup.parent_radio].value !=
                                    subgroup.parent_radio_value
                                  ) {
                                    return null
                                  }
                                }

                                return (
                                  <Fragment key={index}>
                                    <BorderInput text={subgroup.name}>
                                      <View
                                        sx={{
                                          flexDirection: ['column', 'row'],
                                          flexWrap: ['nowrap', 'wrap'],
                                        }}
                                      >
                                        {subgroup.add ? (
                                          <>
                                            {subgroup.data.array.map(
                                              (itArray: any, itIndex: any) =>
                                                Object.keys(itArray).map(
                                                  (it3: any, index: number) => {
                                                    if (
                                                      itArray[it3]
                                                        .sibling_radio !=
                                                      undefined
                                                    ) {
                                                      if (
                                                        itArray[
                                                          itArray[it3]
                                                            .sibling_radio
                                                        ].value !=
                                                        itArray[it3]
                                                          .sibling_radio_value
                                                      ) {
                                                        return null
                                                      }
                                                    }
                                                    if (
                                                      itArray[it3]
                                                        .sibling_select !=
                                                      undefined
                                                    ) {
                                                      if (
                                                        !itArray[
                                                          itArray[it3]
                                                            .sibling_select
                                                        ].value.includes(
                                                          itArray[
                                                            it3
                                                          ].name.replace(
                                                            'Description ',
                                                            ''
                                                          )
                                                        )
                                                      ) {
                                                        return null
                                                      }
                                                    }
                                                    if (
                                                      itArray[it3].type ==
                                                        'text' ||
                                                      itArray[it3].type ==
                                                        'email' ||
                                                      itArray[it3].type ==
                                                        'numeric'
                                                    ) {
                                                      return (
                                                        <Fragment
                                                          key={step + it2 + it3}
                                                        >
                                                          <CustomInput
                                                            currentValue={
                                                              itArray[it3].value
                                                            }
                                                            error={
                                                              itArray[it3].error
                                                            }
                                                            setVal={(
                                                              val: any
                                                            ) => {
                                                              updateStateSubgroup(
                                                                val,
                                                                it,
                                                                it2,
                                                                it3,
                                                                itIndex
                                                              )
                                                            }}
                                                            type={
                                                              itArray[it3].type
                                                            }
                                                            label={
                                                              itArray[it3].name
                                                            }
                                                            required={
                                                              itArray[it3]
                                                                .required
                                                            }
                                                            multiline={
                                                              itArray[it3]
                                                                .multiline !=
                                                              undefined
                                                            }
                                                          />
                                                        </Fragment>
                                                      )
                                                    } else if (
                                                      itArray[it3].type ==
                                                      'date'
                                                    ) {
                                                      return (
                                                        <Fragment
                                                          key={step + it2 + it3}
                                                        >
                                                          <CustomInput
                                                            datePicker
                                                            currentValue={
                                                              itArray[it3].value
                                                            }
                                                            error={
                                                              itArray[it3].error
                                                            }
                                                            setVal={(
                                                              val: any
                                                            ) => {
                                                              updateStateSubgroup(
                                                                val,
                                                                it,
                                                                it2,
                                                                it3,
                                                                itIndex
                                                              )
                                                            }}
                                                            label={
                                                              itArray[it3].name
                                                            }
                                                            required={
                                                              itArray[it3]
                                                                .required
                                                            }
                                                          />
                                                        </Fragment>
                                                      )
                                                    } else if (
                                                      itArray[it3].type ==
                                                      'select'
                                                    ) {
                                                      return (
                                                        <Fragment
                                                          key={step + it2 + it3}
                                                        >
                                                          <CustomSelectInput
                                                            currentValue={
                                                              itArray[it3].value
                                                            }
                                                            error={
                                                              itArray[it3].error
                                                            }
                                                            required={
                                                              itArray[it3]
                                                                .required
                                                            }
                                                            setVal={(
                                                              val: any
                                                            ) => {
                                                              updateStateSubgroup(
                                                                val,
                                                                it,
                                                                it2,
                                                                it3,
                                                                itIndex
                                                              )
                                                            }}
                                                            label={
                                                              itArray[it3].name
                                                            }
                                                            data={
                                                              itArray[it3]
                                                                .arrayData
                                                            }
                                                            optionLabel={
                                                              itArray[it3]
                                                                .optionLabel
                                                            }
                                                            multiple={
                                                              itArray[it3]
                                                                .multiple
                                                            }
                                                            optionValue={
                                                              itArray[it3]
                                                                .optionValue
                                                            }
                                                          />
                                                        </Fragment>
                                                      )
                                                    } else if (
                                                      itArray[it3].type ==
                                                      'file'
                                                    ) {
                                                      return (
                                                        <Fragment
                                                          key={step + it2 + it3}
                                                        >
                                                          <CustomUploadFile
                                                            value={
                                                              itArray[it3].value
                                                            }
                                                            required={
                                                              itArray[it3]
                                                                .required
                                                            }
                                                            error={
                                                              itArray[it3].error
                                                            }
                                                            setVal={(
                                                              val: any
                                                            ) => {
                                                              updateStateSubgroup(
                                                                val,
                                                                it,
                                                                it2,
                                                                it3,
                                                                itIndex
                                                              )
                                                            }}
                                                            name={
                                                              itArray[it3].name
                                                            }
                                                          />
                                                        </Fragment>
                                                      )
                                                    } else if (
                                                      itArray[it3].type ==
                                                      'radio'
                                                    ) {
                                                      return (
                                                        <Fragment
                                                          key={step + it2 + it3}
                                                        >
                                                          <CustomRadio
                                                            currentValue={
                                                              itArray[it3].value
                                                            }
                                                            error={
                                                              itArray[it3].error
                                                            }
                                                            name={
                                                              itArray[it3].name
                                                            }
                                                            setVal={(
                                                              val: any
                                                            ) => {
                                                              updateStateSubgroup(
                                                                val,
                                                                it,
                                                                it2,
                                                                it3,
                                                                itIndex
                                                              )
                                                            }}
                                                            required={
                                                              itArray[it3]
                                                                .required
                                                            }
                                                          />
                                                        </Fragment>
                                                      )
                                                    }
                                                  }
                                                )
                                            )}
                                          </>
                                        ) : (
                                          <>
                                            {Object.keys(subgroup.data).map(
                                              (it3: any, index: number) => {
                                                if (
                                                  subgroup.data[it3]
                                                    .sibling_radio != undefined
                                                ) {
                                                  if (
                                                    subgroup.data[
                                                      subgroup.data[it3]
                                                        .sibling_radio
                                                    ].value !=
                                                    subgroup.data[it3]
                                                      .sibling_radio_value
                                                  ) {
                                                    return null
                                                  }
                                                }
                                                if (
                                                  subgroup.data[it3]
                                                    .sibling_select != undefined
                                                ) {
                                                  if (
                                                    !subgroup.data[
                                                      subgroup.data[it3]
                                                        .sibling_select
                                                    ].value.includes(
                                                      subgroup.data[
                                                        it3
                                                      ].name.replace(
                                                        'Description ',
                                                        ''
                                                      )
                                                    )
                                                  ) {
                                                    return null
                                                  }
                                                }
                                                if (
                                                  subgroup.data[it3].type ==
                                                    'text' ||
                                                  subgroup.data[it3].type ==
                                                    'email' ||
                                                  subgroup.data[it3].type ==
                                                    'numeric'
                                                ) {
                                                  return (
                                                    <Fragment
                                                      key={step + it2 + it3}
                                                    >
                                                      <CustomInput
                                                        currentValue={
                                                          subgroup.data[it3]
                                                            .value
                                                        }
                                                        error={
                                                          subgroup.data[it3]
                                                            .error
                                                        }
                                                        setVal={(val: any) => {
                                                          updateStateSubgroup(
                                                            val,
                                                            it,
                                                            it2,
                                                            it3
                                                          )
                                                        }}
                                                        type={
                                                          subgroup.data[it3]
                                                            .type
                                                        }
                                                        label={
                                                          subgroup.data[it3]
                                                            .name
                                                        }
                                                        required={
                                                          subgroup.data[it3]
                                                            .required
                                                        }
                                                        multiline={
                                                          subgroup.data[it3]
                                                            .multiline !=
                                                          undefined
                                                        }
                                                      />
                                                    </Fragment>
                                                  )
                                                } else if (
                                                  subgroup.data[it3].type ==
                                                  'date'
                                                ) {
                                                  return (
                                                    <Fragment
                                                      key={step + it2 + it3}
                                                    >
                                                      <CustomInput
                                                        datePicker
                                                        currentValue={
                                                          subgroup.data[it3]
                                                            .value
                                                        }
                                                        error={
                                                          subgroup.data[it3]
                                                            .error
                                                        }
                                                        setVal={(val: any) => {
                                                          updateStateSubgroup(
                                                            val,
                                                            it,
                                                            it2,
                                                            it3
                                                          )
                                                        }}
                                                        label={
                                                          subgroup.data[it3]
                                                            .name
                                                        }
                                                        required={
                                                          subgroup.data[it3]
                                                            .required
                                                        }
                                                      />
                                                    </Fragment>
                                                  )
                                                } else if (
                                                  subgroup.data[it3].type ==
                                                  'select'
                                                ) {
                                                  return (
                                                    <Fragment
                                                      key={step + it2 + it3}
                                                    >
                                                      <CustomSelectInput
                                                        currentValue={
                                                          subgroup.data[it3]
                                                            .value
                                                        }
                                                        error={
                                                          subgroup.data[it3]
                                                            .error
                                                        }
                                                        required={
                                                          subgroup.data[it3]
                                                            .required
                                                        }
                                                        setVal={(val: any) => {
                                                          updateStateSubgroup(
                                                            val,
                                                            it,
                                                            it2,
                                                            it3
                                                          )
                                                        }}
                                                        label={
                                                          subgroup.data[it3]
                                                            .name
                                                        }
                                                        data={
                                                          subgroup.data[it3]
                                                            .arrayData
                                                        }
                                                        optionLabel={
                                                          subgroup.data[it3]
                                                            .optionLabel
                                                        }
                                                        multiple={
                                                          subgroup.data[it3]
                                                            .multiple
                                                        }
                                                        optionValue={
                                                          subgroup.data[it3]
                                                            .optionValue
                                                        }
                                                      />
                                                    </Fragment>
                                                  )
                                                } else if (
                                                  subgroup.data[it3].type ==
                                                  'file'
                                                ) {
                                                  return (
                                                    <Fragment
                                                      key={step + it2 + it3}
                                                    >
                                                      <CustomUploadFile
                                                        value={
                                                          subgroup.data[it3]
                                                            .value
                                                        }
                                                        required={
                                                          subgroup.data[it3]
                                                            .required
                                                        }
                                                        error={
                                                          subgroup.data[it3]
                                                            .error
                                                        }
                                                        setVal={(val: any) => {
                                                          updateStateSubgroup(
                                                            val,
                                                            it,
                                                            it2,
                                                            it3
                                                          )
                                                        }}
                                                        name={
                                                          subgroup.data[it3]
                                                            .name
                                                        }
                                                      />
                                                    </Fragment>
                                                  )
                                                } else if (
                                                  subgroup.data[it3].type ==
                                                  'radio'
                                                ) {
                                                  return (
                                                    <Fragment
                                                      key={step + it2 + it3}
                                                    >
                                                      <CustomRadio
                                                        currentValue={
                                                          subgroup.data[it3]
                                                            .value
                                                        }
                                                        error={
                                                          subgroup.data[it3]
                                                            .error
                                                        }
                                                        name={
                                                          subgroup.data[it3]
                                                            .name
                                                        }
                                                        setVal={(val: any) => {
                                                          updateStateSubgroup(
                                                            val,
                                                            it,
                                                            it2,
                                                            it3
                                                          )
                                                        }}
                                                        required={
                                                          subgroup.data[it3]
                                                            .required
                                                        }
                                                      />
                                                    </Fragment>
                                                  )
                                                }
                                              }
                                            )}
                                          </>
                                        )}
                                      </View>
                                    </BorderInput>
                                    {subgroup.add && (
                                      <View
                                        sx={{
                                          mt: 10,
                                          width: '100%',
                                          alignItems: 'flex-end',
                                          gap: 10,
                                        }}
                                      >
                                        {stepData[as]['step' + step].groups[it]
                                          .subgroup[it2].data.array.length <
                                          3 && (
                                          <TouchableOpacity
                                            onPress={() => {
                                              addMore(as, step, it, it2)
                                            }}
                                          >
                                            <Text variant="smallBtn">ADD</Text>
                                          </TouchableOpacity>
                                        )}

                                        {stepData[as]['step' + step].groups[it]
                                          .subgroup[it2].data.array.length >
                                          1 && (
                                          <TouchableOpacity
                                            onPress={() => {
                                              removeMore(as, step, it, it2)
                                            }}
                                          >
                                            <Text
                                              variants={['smallBtn', 'errBtn']}
                                            >
                                              REMOVE
                                            </Text>
                                          </TouchableOpacity>
                                        )}
                                      </View>
                                    )}
                                  </Fragment>
                                )
                              }
                            )
                          : null}
                      </BorderInput>
                    )
                  }
                )}
              </Animated.View>

              <View sx={style.containerButtons}>
                <Pressable
                  style={[
                    theme.buttons.bigButton,
                    { opacity: step > 1 ? 1 : 0, backgroundColor: 'white' },
                  ]}
                  onPress={() => {
                    if (step <= 1) {
                      return
                    }
                    toggleFade(0)

                    setTimeout(() => {
                      toggleFade(1)
                      setStep((old) => old - 1)
                      scrollToTop(scrollRef)
                    }, 500)
                  }}
                >
                  <Text variant="buttonBig">BACK</Text>
                </Pressable>
                <Pressable
                  style={[
                    theme.buttons.bigButton,
                    { opacity: step >= allSteps && step != allSteps ? 0 : 1 },
                  ]}
                  onPress={() => {
                    if (checkData()) {
                      if (step >= allSteps) {
                        submit()

                        return
                      }
                      toggleFade(0)
                      setTimeout(() => {
                        toggleFade(1)
                        setStep((old) => old + 1)
                        scrollToTop(scrollRef)
                      }, 500)
                    }
                  }}
                >
                  <Text variant="buttonBig">
                    {step == allSteps ? 'SUBMIT' : 'NEXT STEP'}
                  </Text>
                </Pressable>
              </View>
            </View>
          </View>
        </Layout>
      )}
    </>
  )
}

export default ApplyScreen
