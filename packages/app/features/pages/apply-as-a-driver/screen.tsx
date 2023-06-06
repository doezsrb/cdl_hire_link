import BorderInput from 'app/features/common/components/BorderInput/BorderInput'
import CustomInput from 'app/features/common/components/CustomInput/CustomInput'
import CustomRadio from 'app/features/common/components/CustomRadio/CustomRadio'
import CustomSelectInput from 'app/features/common/components/CustomSelectInput/CustomSelectInput'
import CustomUploadFile from 'app/features/common/components/CustomUploadFile/CustomUploadFile'
import StepInd from 'app/features/common/components/StepInd/StepInd'
import { Pressable, SafeAreaView, Text, View } from 'dripsy'
import { useDripsyTheme } from 'dripsy'
import { ScrollView } from 'react-native'
import { useState, useEffect, Fragment } from 'react'
const ApplyAsADriver = () => {
  const { theme } = useDripsyTheme()
  const [step, setStep] = useState(1)
  const [allSteps, setAllSteps] = useState(2)
  const [stepData, setStepData] = useState({
    step2: {
      name: 'Driver Experience',
      groups: {
        estimates: {
          name: 'Estimates',
          subgroup: null,
          data: {
            years_of_experience: {
              name: 'Years of Experience',
              type: 'text',
              value: '',
              error: false,
              required: true,
            },
            date_ready_to_start: {
              name: 'Date Ready to Start',
              type: 'text',
              value: '',
              error: false,
              required: true,
            },
          },
        },
        route_details: {
          name: 'Route Details',
          subgroup: {
            compensation_lease: {
              name: 'Comensation Lease',
              data: {
                upload_cv: {
                  name: "Upload CV or MVR, PSP, Driver's license",
                  type: 'file',
                  value: '',
                  error: false,
                  required: true,
                },
              },
            },
          },
          data: {
            accidents_3_years: {
              name: 'Accidents for the last 3 years?',
              type: 'radio',
              value: '',
              error: false,
              required: true,
              data: ['Yes', 'No'],
            },
            moving_violations: {
              name: 'Moving violations for the last 3 years?',
              type: 'radio',
              value: '',
              error: false,
              required: true,
              data: ['Yes', 'No'],
            },
            dui_dwi: {
              name: 'DUI or DWI?',
              type: 'radio',
              value: '',
              error: false,
              required: true,
              data: ['Yes', 'No'],
            },
            sap: {
              name: 'Do you have SAP program?',
              type: 'radio',
              value: '',
              error: false,
              required: true,
              data: ['Yes', 'No'],
            },
          },
        },
      },
    },
    step1: {
      name: 'Personal Details',
      groups: {
        contact_information: {
          name: 'Contact Information',
          subgroup: {
            compensation_lease: {
              name: 'Compensation Lease',
              data: {
                test_radio: {
                  name: 'Test Radio',
                  type: 'radio',
                  value: '',
                  error: false,
                  required: true,
                  data: ['Yes', 'No'],
                },

                upload_file: {
                  name: "Upload CV or MVR, PSP, Driver's license",
                  type: 'file',
                  value: '',
                  error: false,
                  required: false,
                },
              },
            },
          },
          data: {
            first_name: {
              name: 'First Name',
              type: 'text',
              value: '',
              error: false,
              required: true,
            },
            last_name: {
              name: 'Last Name',
              type: 'text',
              value: '',
              error: false,
              required: true,
            },
            contact_number: {
              name: 'Contact Number',
              type: 'text',
              value: '',
              error: false,
              required: true,
            },
            email: {
              name: 'E-mail',
              type: 'text',
              value: '',
              error: false,
              required: true,
            },
            test_radio: {
              name: 'Test Radio',
              type: 'radio',
              value: '',
              error: false,
              required: true,
              data: ['Yes', 'No'],
            },
          },
        },
        route_details: {
          name: 'Route Details',
          subgroup: null,
          data: {
            date_of_birth: {
              type: 'text',
              name: 'Date Of Birth',
              value: '',
              error: false,
              required: true,
            },
            zip_code: {
              type: 'text',
              name: 'Zip Code',
              value: '',
              error: false,
              required: true,
            },
            state: {
              type: 'select',
              name: 'State',
              value: '',
              error: false,
              required: true,
              data: [
                { name: 'text', code: 1 },
                { name: 'testt', code: 2 },
              ],
            },
            position: {
              type: 'select',
              name: 'Position',
              value: '',
              error: false,
              required: true,
              data: [
                { name: 'text', code: 1 },
                { name: 'testt', code: 2 },
              ],
            },
            route_preference: {
              type: 'select',
              name: 'Route Preference',
              value: '',
              error: false,
              required: true,
              data: [
                { name: 'text', code: 1 },
                { name: 'testt', code: 2 },
              ],
            },
            hauler_experience: {
              type: 'select',
              name: 'Hauler Experience',
              value: '',
              error: false,
              required: true,
              data: [
                { name: 'text', code: 1 },
                { name: 'testt', code: 2 },
              ],
            },
            endorsements: {
              type: 'select',
              name: 'Endorsements',
              value: '',
              error: false,
              required: false,
              data: [
                { name: 'text', code: 1 },
                { name: 'testt', code: 2 },
              ],
            },
          },
        },
      },
    },
  })

  const checkData = (): boolean => {
    const checkStep = 'step' + step
    var err = 0
    const newStepData = { ...stepData }
    Object.keys(newStepData[checkStep].groups).map((it: any) => {
      Object.keys(newStepData[checkStep].groups[it].data).map((it2: any) => {
        if (
          newStepData[checkStep].groups[it].data[it2].required &&
          newStepData[checkStep].groups[it].data[it2].value == ''
        ) {
          newStepData[checkStep].groups[it].data[it2].error = true
          err = 1
        } else {
          newStepData[checkStep].groups[it].data[it2].error = false
        }
      })
      if (newStepData[checkStep].groups[it].subgroup != null) {
        Object.keys(newStepData[checkStep].groups[it].subgroup).map(
          (it3: any) => {
            Object.keys(
              newStepData[checkStep].groups[it].subgroup[it3].data
            ).map((it4: any) => {
              if (
                newStepData[checkStep].groups[it].subgroup[it3].data[it4]
                  .required &&
                newStepData[checkStep].groups[it].subgroup[it3].data[it4]
                  .value == ''
              ) {
                newStepData[checkStep].groups[it].subgroup[it3].data[
                  it4
                ].error = true
                err = 1
              } else {
                newStepData[checkStep].groups[it].subgroup[it3].data[
                  it4
                ].error = false
              }
            })
          }
        )
      }
    })
    setStepData(newStepData)
    if (err == 0) {
      return true
    }

    return false
  }
  return (
    <SafeAreaView>
      <ScrollView>
        <View sx={{ width: '100%', alignItems: 'center' }}>
          <View
            sx={{
              width: ['100%', '50%'],

              display: 'flex',
              backgroundColor: 'white',
              alignItems: 'flex-end',
              flexDirection: 'column',
              padding: 20,
            }}
          >
            <StepInd
              stepName={step == 1 ? stepData.step1.name : stepData.step2.name}
              current={step}
              steps={allSteps}
            />

            {Object.keys(stepData['step' + step].groups).map(
              (it: any, index: number) => {
                var group = stepData['step' + step].groups[it]
                return (
                  <BorderInput key={index} text={group.name}>
                    <View
                      sx={{
                        flexDirection: ['column', 'row'],
                        flexWrap: ['nowrap', 'wrap'],
                      }}
                    >
                      {Object.keys(group.data).map((it2: any, index: any) => {
                        var response
                        if (group.data[it2].type == 'text') {
                          response = (
                            <Fragment key={step + it + it2}>
                              <CustomInput
                                currentValue={group.data[it2].value}
                                label={group.data[it2].name}
                                error={group.data[it2].error}
                                setVal={(val: any) => {
                                  var newObj = { ...stepData }
                                  newObj['step' + step].groups[it].data[
                                    it2
                                  ].value = val
                                  setStepData(newObj)
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
                                fullWidth={group.data[it2].name == 'State'}
                                label={group.data[it2].name}
                                data={group.data[it2].data}
                                setVal={(val: any) => {
                                  var newObj = { ...stepData }
                                  newObj['step' + step].groups[it].data[
                                    it2
                                  ].value = val
                                  setStepData(newObj)
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
                                  var newObj = { ...stepData }
                                  newObj['step' + step].groups[it].data[
                                    it2
                                  ].value = val
                                  setStepData(newObj)
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
                                  var newObj = { ...stepData }
                                  newObj['step' + step].groups[it].data[
                                    it2
                                  ].value = val
                                  setStepData(newObj)
                                }}
                                required={group.data[it2].required}
                              />
                            </Fragment>
                          )
                        }
                        return response
                      })}
                    </View>
                    {group.subgroup != null
                      ? Object.keys(group.subgroup).map(
                          (it2: any, index: number) => {
                            var subgroup = group.subgroup[it2]
                            return (
                              <BorderInput key={index} text={subgroup.name}>
                                <View
                                  sx={{
                                    flexDirection: ['column', 'row'],
                                    flexWrap: ['nowrap', 'wrap'],
                                  }}
                                >
                                  {Object.keys(subgroup.data).map(
                                    (it3: any, index: number) => {
                                      if (subgroup.data[it3].type == 'text') {
                                        return (
                                          <Fragment key={step + it2 + it3}>
                                            <CustomInput
                                              currentValue={
                                                subgroup.data[it3].value
                                              }
                                              error={subgroup.data[it3].error}
                                              setVal={(val: any) => {
                                                var newObj = { ...stepData }
                                                newObj['step' + step].groups[
                                                  it
                                                ].subgroup[it2].data[
                                                  it3
                                                ].value = val
                                                setStepData(newObj)
                                              }}
                                              label={subgroup.data[it3].name}
                                              required={
                                                subgroup.data[it3].required
                                              }
                                            />
                                          </Fragment>
                                        )
                                      } else if (
                                        subgroup.data[it3].type == 'select'
                                      ) {
                                        return (
                                          <Fragment key={step + it2 + it3}>
                                            <CustomSelectInput
                                              currentValue={
                                                subgroup.data[it3].value
                                              }
                                              error={subgroup.data[it3].error}
                                              required={
                                                subgroup.data[it3].required
                                              }
                                              setVal={(val: any) => {
                                                var newObj = { ...stepData }
                                                newObj['step' + step].groups[
                                                  it
                                                ].subgroup[it2].data[
                                                  it3
                                                ].value = val
                                                setStepData(newObj)
                                              }}
                                              label={subgroup.data[it3].name}
                                              data={subgroup.data[it3].data}
                                            />
                                          </Fragment>
                                        )
                                      } else if (
                                        subgroup.data[it3].type == 'file'
                                      ) {
                                        return (
                                          <Fragment key={step + it2 + it3}>
                                            <CustomUploadFile
                                              value={subgroup.data[it3].value}
                                              required={
                                                subgroup.data[it3].required
                                              }
                                              error={subgroup.data[it3].error}
                                              setVal={(val: any) => {
                                                var newObj = { ...stepData }
                                                newObj['step' + step].groups[
                                                  it
                                                ].subgroup[it2].data[
                                                  it3
                                                ].value = val
                                                setStepData(newObj)
                                              }}
                                              name={subgroup.data[it3].name}
                                            />
                                          </Fragment>
                                        )
                                      } else if (
                                        subgroup.data[it3].type == 'radio'
                                      ) {
                                        return (
                                          <Fragment key={step + it2 + it3}>
                                            <CustomRadio
                                              currentValue={
                                                subgroup.data[it3].value
                                              }
                                              error={subgroup.data[it3].error}
                                              name={subgroup.data[it3].name}
                                              setVal={(val: any) => {
                                                var newObj = { ...stepData }
                                                newObj['step' + step].groups[
                                                  it
                                                ].subgroup[it2].data[
                                                  it3
                                                ].value = val
                                                setStepData(newObj)
                                              }}
                                              required={
                                                subgroup.data[it3].required
                                              }
                                            />
                                          </Fragment>
                                        )
                                      }
                                    }
                                  )}
                                </View>
                              </BorderInput>
                            )
                          }
                        )
                      : null}
                  </BorderInput>
                )
              }
            )}

            <View
              sx={{
                display: 'flex',
                width: '100%',
                justifyContent: 'space-between',
                flexDirection: 'row',
                mt: '$3',
              }}
            >
              <Pressable
                style={[
                  theme.buttons.bigButton,
                  { opacity: step > 1 ? 1 : 0, backgroundColor: 'white' },
                ]}
                onPress={() => {
                  if (step <= 1) {
                    return
                  }
                  setStep((old) => old - 1)
                }}
              >
                <Text variant="buttonBig">BACK</Text>
              </Pressable>
              <Pressable
                style={[
                  theme.buttons.bigButton,
                  { opacity: step >= allSteps ? 0 : 1 },
                ]}
                onPress={() => {
                  if (checkData()) {
                    if (step >= allSteps) {
                      return
                    }
                    setStep((old) => old + 1)
                  }
                }}
              >
                <Text variant="buttonBig">NEXT STEP</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default ApplyAsADriver
