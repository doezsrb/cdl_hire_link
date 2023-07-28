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
} from 'react-native'
import { useState, useEffect, Fragment, useRef, useContext } from 'react'
import HeaderSlider from 'app/features/common/components/HeaderSlider/HeaderSlider'
import { createParam } from 'solito'

import routerListener from 'app/features/common/functions/routerListener'
import MobileLoadingContext from '../../../../../apps/expo/context/mobileLoadingContext'
import Layout from 'app/features/common/components/Layout/Layout'
import LoadingContext from '../../../../../apps/next/context/loadingContext'
import scrollToTop from 'app/features/common/functions/scrolltotop'
import useRouter from 'app/features/common/functions/nextrouter'
import ModalErrorSuccess from 'app/features/common/components/ModalErrorSuccess/ModalErrorSuccess'
import { createFileName } from 'app/features/common/functions/common'

const { useParam } = createParam<{
  as: 'carrier' | 'driver'
}>()
/* import { DateTimePickerAndroid } from '@react-native-community/datetimepicker' */

//!TODO: 2. download slika u panel 3. search za sve stranice
const ApplyScreen = ({ route, navigation }: any) => {
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
    driver: {
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
                type: 'date',
                value: '',
                error: false,
                required: true,
              },
            },
          },
          route_details: {
            name: 'Route Details',
            subgroup: {
              accident_info: {
                add_accident: true,
                parent_radio: 'accidents_3_years',
                parent_radio_value: 'Yes',
                name: 'Accident info',
                data: {
                  type_of_accident: {
                    name: 'Type of Accident/incident',
                    type: 'select',
                    value: '',
                    error: false,
                    required: true,
                    multiple: true,
                    optionLabel: 'name',
                    optionValue: 'name',
                    arrayData: [
                      { name: 'Non-injury' },
                      { name: 'Injury' },
                      { name: 'Fatality' },
                    ],
                  },
                  date_of_accident: {
                    name: 'Date of Accident/Incident',
                    type: 'date',
                    value: '',
                    error: false,
                    required: true,
                  },
                  state_accident: {
                    type: 'select',
                    name: 'State',
                    value: '',
                    error: false,
                    required: true,
                    optionLabel: 'name',
                    optionValue: 'name',
                    multiple: false,
                    arrayData: [
                      { name: 'Alabama', abbreviation: 'AL' },
                      { name: 'Alaska', abbreviation: 'AK' },
                      { name: 'Arizona', abbreviation: 'AZ' },
                      { name: 'Arkansas', abbreviation: 'AR' },
                      { name: 'California', abbreviation: 'CA' },
                      { name: 'Colorado', abbreviation: 'CO' },
                      { name: 'Connecticut', abbreviation: 'CT' },
                      { name: 'Delaware', abbreviation: 'DE' },
                      { name: 'Florida', abbreviation: 'FL' },
                      { name: 'Georgia', abbreviation: 'GA' },
                      { name: 'Hawaii', abbreviation: 'HI' },
                      { name: 'Idaho', abbreviation: 'ID' },
                      { name: 'Illinois', abbreviation: 'IL' },
                      { name: 'Indiana', abbreviation: 'IN' },
                      { name: 'Iowa', abbreviation: 'IA' },
                      { name: 'Kansas', abbreviation: 'KS' },
                      { name: 'Kentucky', abbreviation: 'KY' },
                      { name: 'Louisiana', abbreviation: 'LA' },
                      { name: 'Maine', abbreviation: 'ME' },
                      { name: 'Maryland', abbreviation: 'MD' },
                      { name: 'Massachusetts', abbreviation: 'MA' },
                      { name: 'Michigan', abbreviation: 'MI' },
                      { name: 'Minnesota', abbreviation: 'MN' },
                      { name: 'Mississippi', abbreviation: 'MS' },
                      { name: 'Missouri', abbreviation: 'MO' },
                      { name: 'Montana', abbreviation: 'MT' },
                      { name: 'Nebraska', abbreviation: 'NE' },
                      { name: 'Nevada', abbreviation: 'NV' },
                      { name: 'New Hampshire', abbreviation: 'NH' },
                      { name: 'New Jersey', abbreviation: 'NJ' },
                      { name: 'New Mexico', abbreviation: 'NM' },
                      { name: 'New York', abbreviation: 'NY' },
                      { name: 'North Carolina', abbreviation: 'NC' },
                      { name: 'North Dakota', abbreviation: 'ND' },
                      { name: 'Ohio', abbreviation: 'OH' },
                      { name: 'Oklahoma', abbreviation: 'OK' },
                      { name: 'Oregon', abbreviation: 'OR' },
                      { name: 'Pennsylvania', abbreviation: 'PA' },
                      { name: 'Rhode Island', abbreviation: 'RI' },
                      { name: 'South Carolina', abbreviation: 'SC' },
                      { name: 'South Dakota', abbreviation: 'SD' },
                      { name: 'Tennessee', abbreviation: 'TN' },
                      { name: 'Texas', abbreviation: 'TX' },
                      { name: 'Utah', abbreviation: 'UT' },
                      { name: 'Vermont', abbreviation: 'VT' },
                      { name: 'Virginia', abbreviation: 'VA' },
                      { name: 'Washington', abbreviation: 'WA' },
                      { name: 'West Virginia', abbreviation: 'WV' },
                      { name: 'Wisconsin', abbreviation: 'WI' },
                      { name: 'Wyoming', abbreviation: 'WY' },
                    ],
                  },
                  comm_vehicle: {
                    name: 'Were you in commercial vehicle?',
                    type: 'radio',
                    value: '',
                    error: false,
                    required: false,
                    data: ['Yes', 'No'],
                  },
                  at_fault: {
                    name: 'Were you at fault?',
                    type: 'radio',
                    value: '',
                    error: false,
                    required: false,
                    data: ['Yes', 'No'],
                  },
                  ticketed: {
                    name: 'Were you ticketed?',
                    type: 'radio',
                    value: '',
                    error: false,
                    required: false,
                    data: ['Yes', 'No'],
                  },
                  detailed_info: {
                    name: 'Please enter detailed information about the Accident',
                    type: 'text',
                    value: '',
                    error: false,
                    required: false,
                    multiline: true,
                  },
                },
              },
              moving_violations: {
                add_violation: true,
                parent_radio: 'moving_violations',
                parent_radio_value: 'Yes',
                name: 'Violations info',
                data: {
                  type_of_violation: {
                    name: 'Type of violation',
                    type: 'select',
                    value: '',
                    error: false,
                    required: true,
                    multiple: true,
                    optionLabel: 'name',
                    optionValue: 'name',
                    arrayData: [
                      { name: 'Non-injury' },
                      { name: 'Injury' },
                      { name: 'Fatality' },
                    ],
                  },
                  date_of_violation: {
                    name: 'Date of violation',
                    type: 'date',
                    value: '',
                    error: false,
                    required: true,
                  },
                  state_violation: {
                    type: 'select',
                    name: 'State',
                    value: '',
                    error: false,
                    required: true,
                    optionLabel: 'name',
                    optionValue: 'name',
                    multiple: false,
                    arrayData: [
                      { name: 'Alabama', abbreviation: 'AL' },
                      { name: 'Alaska', abbreviation: 'AK' },
                      { name: 'Arizona', abbreviation: 'AZ' },
                      { name: 'Arkansas', abbreviation: 'AR' },
                      { name: 'California', abbreviation: 'CA' },
                      { name: 'Colorado', abbreviation: 'CO' },
                      { name: 'Connecticut', abbreviation: 'CT' },
                      { name: 'Delaware', abbreviation: 'DE' },
                      { name: 'Florida', abbreviation: 'FL' },
                      { name: 'Georgia', abbreviation: 'GA' },
                      { name: 'Hawaii', abbreviation: 'HI' },
                      { name: 'Idaho', abbreviation: 'ID' },
                      { name: 'Illinois', abbreviation: 'IL' },
                      { name: 'Indiana', abbreviation: 'IN' },
                      { name: 'Iowa', abbreviation: 'IA' },
                      { name: 'Kansas', abbreviation: 'KS' },
                      { name: 'Kentucky', abbreviation: 'KY' },
                      { name: 'Louisiana', abbreviation: 'LA' },
                      { name: 'Maine', abbreviation: 'ME' },
                      { name: 'Maryland', abbreviation: 'MD' },
                      { name: 'Massachusetts', abbreviation: 'MA' },
                      { name: 'Michigan', abbreviation: 'MI' },
                      { name: 'Minnesota', abbreviation: 'MN' },
                      { name: 'Mississippi', abbreviation: 'MS' },
                      { name: 'Missouri', abbreviation: 'MO' },
                      { name: 'Montana', abbreviation: 'MT' },
                      { name: 'Nebraska', abbreviation: 'NE' },
                      { name: 'Nevada', abbreviation: 'NV' },
                      { name: 'New Hampshire', abbreviation: 'NH' },
                      { name: 'New Jersey', abbreviation: 'NJ' },
                      { name: 'New Mexico', abbreviation: 'NM' },
                      { name: 'New York', abbreviation: 'NY' },
                      { name: 'North Carolina', abbreviation: 'NC' },
                      { name: 'North Dakota', abbreviation: 'ND' },
                      { name: 'Ohio', abbreviation: 'OH' },
                      { name: 'Oklahoma', abbreviation: 'OK' },
                      { name: 'Oregon', abbreviation: 'OR' },
                      { name: 'Pennsylvania', abbreviation: 'PA' },
                      { name: 'Rhode Island', abbreviation: 'RI' },
                      { name: 'South Carolina', abbreviation: 'SC' },
                      { name: 'South Dakota', abbreviation: 'SD' },
                      { name: 'Tennessee', abbreviation: 'TN' },
                      { name: 'Texas', abbreviation: 'TX' },
                      { name: 'Utah', abbreviation: 'UT' },
                      { name: 'Vermont', abbreviation: 'VT' },
                      { name: 'Virginia', abbreviation: 'VA' },
                      { name: 'Washington', abbreviation: 'WA' },
                      { name: 'West Virginia', abbreviation: 'WV' },
                      { name: 'Wisconsin', abbreviation: 'WI' },
                      { name: 'Wyoming', abbreviation: 'WY' },
                    ],
                  },
                  comm_vehicle: {
                    name: 'Were you in commercial vehicle?',
                    type: 'radio',
                    value: '',
                    error: false,
                    required: false,
                    data: ['Yes', 'No'],
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
                required: false,
                data: ['Yes', 'No'],
              },
              dui_dwi_date: {
                sibling_radio: 'dui_dwi',
                sibling_radio_value: 'Yes',
                name: 'DUI or DWI date',
                type: 'date',
                value: '',
                error: false,
                required: false,
              },
              sap: {
                name: 'Do you have SAP program?',
                type: 'radio',
                value: '',
                error: false,
                required: false,
                data: ['Yes', 'No'],
              },
              desc_sap: {
                sibling_radio: 'sap',
                sibling_radio_value: 'Yes',
                name: 'Please describe',
                type: 'text',
                value: '',
                error: false,
                required: false,
                multiline: true,
              },
            },
          },
          upload_file: {
            name: 'Upload Resume optional or any supporting documents like MVR, PSP, copy of driving license',
            subgroup: null,
            data: {
              upload_cv: {
                name: 'Upload resume',
                type: 'file',
                value: '',
                error: false,
                required: false,
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
            subgroup: null,
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
                type: 'numeric',
                value: '',
                error: false,
                required: true,
              },
              email: {
                name: 'E-mail',
                type: 'email',
                value: '',
                error: false,
                required: true,
              },
            },
          },
          route_details: {
            name: 'Route Details',
            subgroup: null,
            data: {
              date_of_birth: {
                type: 'date',
                name: 'Date Of Birth',
                value: '',
                error: false,
                required: true,
              },
              zip_code: {
                type: 'numeric',
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
                optionLabel: 'name',
                optionValue: 'name',
                multiple: false,
                arrayData: [
                  { name: 'Alabama', abbreviation: 'AL' },
                  { name: 'Alaska', abbreviation: 'AK' },
                  { name: 'Arizona', abbreviation: 'AZ' },
                  { name: 'Arkansas', abbreviation: 'AR' },
                  { name: 'California', abbreviation: 'CA' },
                  { name: 'Colorado', abbreviation: 'CO' },
                  { name: 'Connecticut', abbreviation: 'CT' },
                  { name: 'Delaware', abbreviation: 'DE' },
                  { name: 'Florida', abbreviation: 'FL' },
                  { name: 'Georgia', abbreviation: 'GA' },
                  { name: 'Hawaii', abbreviation: 'HI' },
                  { name: 'Idaho', abbreviation: 'ID' },
                  { name: 'Illinois', abbreviation: 'IL' },
                  { name: 'Indiana', abbreviation: 'IN' },
                  { name: 'Iowa', abbreviation: 'IA' },
                  { name: 'Kansas', abbreviation: 'KS' },
                  { name: 'Kentucky', abbreviation: 'KY' },
                  { name: 'Louisiana', abbreviation: 'LA' },
                  { name: 'Maine', abbreviation: 'ME' },
                  { name: 'Maryland', abbreviation: 'MD' },
                  { name: 'Massachusetts', abbreviation: 'MA' },
                  { name: 'Michigan', abbreviation: 'MI' },
                  { name: 'Minnesota', abbreviation: 'MN' },
                  { name: 'Mississippi', abbreviation: 'MS' },
                  { name: 'Missouri', abbreviation: 'MO' },
                  { name: 'Montana', abbreviation: 'MT' },
                  { name: 'Nebraska', abbreviation: 'NE' },
                  { name: 'Nevada', abbreviation: 'NV' },
                  { name: 'New Hampshire', abbreviation: 'NH' },
                  { name: 'New Jersey', abbreviation: 'NJ' },
                  { name: 'New Mexico', abbreviation: 'NM' },
                  { name: 'New York', abbreviation: 'NY' },
                  { name: 'North Carolina', abbreviation: 'NC' },
                  { name: 'North Dakota', abbreviation: 'ND' },
                  { name: 'Ohio', abbreviation: 'OH' },
                  { name: 'Oklahoma', abbreviation: 'OK' },
                  { name: 'Oregon', abbreviation: 'OR' },
                  { name: 'Pennsylvania', abbreviation: 'PA' },
                  { name: 'Rhode Island', abbreviation: 'RI' },
                  { name: 'South Carolina', abbreviation: 'SC' },
                  { name: 'South Dakota', abbreviation: 'SD' },
                  { name: 'Tennessee', abbreviation: 'TN' },
                  { name: 'Texas', abbreviation: 'TX' },
                  { name: 'Utah', abbreviation: 'UT' },
                  { name: 'Vermont', abbreviation: 'VT' },
                  { name: 'Virginia', abbreviation: 'VA' },
                  { name: 'Washington', abbreviation: 'WA' },
                  { name: 'West Virginia', abbreviation: 'WV' },
                  { name: 'Wisconsin', abbreviation: 'WI' },
                  { name: 'Wyoming', abbreviation: 'WY' },
                ],
              },
              position: {
                type: 'select',
                name: 'Position',
                value: '',
                error: false,
                required: true,
                optionLabel: 'name',
                optionValue: 'name',
                multiple: true,
                arrayData: [
                  { name: 'Company Driver' },
                  { name: 'Owner Operator' },
                  { name: 'Rent' },
                  { name: 'Lease Purchase' },
                ],
              },

              hauler_experience: {
                type: 'select',
                name: 'Hauler Experience',
                value: '',
                error: false,
                required: true,
                multiple: true,
                optionLabel: 'name',
                optionValue: 'name',
                arrayData: [
                  { name: 'Box' },
                  { name: 'Car Hauler' },
                  { name: 'Drop and Hook' },
                  { name: 'Dry bulk' },
                  { name: 'Dry Van' },
                  { name: 'Flatbed' },
                  { name: 'Hopper Bottom' },
                  { name: 'Intermodal' },
                  { name: 'Oil Field' },
                  { name: 'Oversize Load' },
                  { name: 'Refrigerated' },
                  { name: 'Tanker' },
                  { name: 'Reefer' },
                  { name: 'Dump truck' },
                ],
              },
            },
          },
        },
      },
    },
    carrier: {
      step1: {
        name: 'Carrier Information',
        groups: {
          contact_information: {
            name: 'Contact Information',
            subgroup: null,
            data: {
              company_name: {
                name: 'Carrier Name',
                type: 'text',
                value: '',
                error: false,
                required: true,
              },
              contact_name: {
                name: 'Contact Name',
                type: 'text',
                value: '',
                error: false,
                required: true,
              },
              contact_number: {
                name: 'Contact Number',
                type: 'numeric',
                value: '',
                error: false,
                required: true,
              },
              email: {
                name: 'E-mail',
                type: 'email',
                value: '',
                error: false,
                required: true,
              },
              carrier_state: {
                name: 'Carrier State',
                type: 'select',
                value: '',
                error: false,
                required: true,
                optionLabel: 'name',
                optionValue: 'name',
                arrayData: [
                  { name: 'Alabama', abbreviation: 'AL' },
                  { name: 'Alaska', abbreviation: 'AK' },
                  { name: 'Arizona', abbreviation: 'AZ' },
                  { name: 'Arkansas', abbreviation: 'AR' },
                  { name: 'California', abbreviation: 'CA' },
                  { name: 'Colorado', abbreviation: 'CO' },
                  { name: 'Connecticut', abbreviation: 'CT' },
                  { name: 'Delaware', abbreviation: 'DE' },
                  { name: 'Florida', abbreviation: 'FL' },
                  { name: 'Georgia', abbreviation: 'GA' },
                  { name: 'Hawaii', abbreviation: 'HI' },
                  { name: 'Idaho', abbreviation: 'ID' },
                  { name: 'Illinois', abbreviation: 'IL' },
                  { name: 'Indiana', abbreviation: 'IN' },
                  { name: 'Iowa', abbreviation: 'IA' },
                  { name: 'Kansas', abbreviation: 'KS' },
                  { name: 'Kentucky', abbreviation: 'KY' },
                  { name: 'Louisiana', abbreviation: 'LA' },
                  { name: 'Maine', abbreviation: 'ME' },
                  { name: 'Maryland', abbreviation: 'MD' },
                  { name: 'Massachusetts', abbreviation: 'MA' },
                  { name: 'Michigan', abbreviation: 'MI' },
                  { name: 'Minnesota', abbreviation: 'MN' },
                  { name: 'Mississippi', abbreviation: 'MS' },
                  { name: 'Missouri', abbreviation: 'MO' },
                  { name: 'Montana', abbreviation: 'MT' },
                  { name: 'Nebraska', abbreviation: 'NE' },
                  { name: 'Nevada', abbreviation: 'NV' },
                  { name: 'New Hampshire', abbreviation: 'NH' },
                  { name: 'New Jersey', abbreviation: 'NJ' },
                  { name: 'New Mexico', abbreviation: 'NM' },
                  { name: 'New York', abbreviation: 'NY' },
                  { name: 'North Carolina', abbreviation: 'NC' },
                  { name: 'North Dakota', abbreviation: 'ND' },
                  { name: 'Ohio', abbreviation: 'OH' },
                  { name: 'Oklahoma', abbreviation: 'OK' },
                  { name: 'Oregon', abbreviation: 'OR' },
                  { name: 'Pennsylvania', abbreviation: 'PA' },
                  { name: 'Rhode Island', abbreviation: 'RI' },
                  { name: 'South Carolina', abbreviation: 'SC' },
                  { name: 'South Dakota', abbreviation: 'SD' },
                  { name: 'Tennessee', abbreviation: 'TN' },
                  { name: 'Texas', abbreviation: 'TX' },
                  { name: 'Utah', abbreviation: 'UT' },
                  { name: 'Vermont', abbreviation: 'VT' },
                  { name: 'Virginia', abbreviation: 'VA' },
                  { name: 'Washington', abbreviation: 'WA' },
                  { name: 'West Virginia', abbreviation: 'WV' },
                  { name: 'Wisconsin', abbreviation: 'WI' },
                  { name: 'Wyoming', abbreviation: 'WY' },
                ],
              },
              carrier_city: {
                name: 'Carrier City',
                type: 'text',
                value: '',
                error: false,
                required: true,
              },
              carrier_street: {
                name: 'Carrier Street',
                type: 'text',
                value: '',
                error: false,
                required: true,
              },
              carrier_zip: {
                name: 'Carrier Zip',
                type: 'text',
                value: '',
                error: false,
                required: true,
              },
              us_dot: {
                name: 'US DOT #',
                type: 'text',
                value: '',
                error: false,
                required: true,
              },
              website: {
                name: 'Website',
                type: 'text',
                value: '',
                error: false,
                required: false,
              },
              describe: {
                name: 'Describe your Company',
                type: 'text',
                value: '',
                error: false,
                required: false,
                multiline: true,
              },
            },
          },
        },
      },
      step4: {
        name: 'Additional information',
        groups: {
          compensation_information: {
            name: 'Compensation Information',
            subgroup: null,
            data: {
              how_frequent: {
                name: 'How frequent?',
                type: 'select',
                value: '',
                error: false,
                required: true,
                optionLabel: 'name',
                optionValue: 'name',
                arrayData: [{ name: 'Weekly' }, { name: 'Other' }],
              },
              what_day: {
                sibling_radio: 'how_frequent',
                sibling_radio_value: 'Weekly',
                name: 'What day is payday?',
                type: 'select',
                value: '',
                error: false,
                required: true,
                optionLabel: 'name',
                optionValue: 'name',
                arrayData: [
                  { name: 'Monday' },
                  { name: 'Tuesday' },
                  { name: 'Wednesday' },
                  { name: 'Thursday' },
                  { name: 'Friday' },
                  { name: 'Saturday' },
                  { name: 'Sunday' },
                ],
              },
              desc_day: {
                sibling_radio: 'how_frequent',
                sibling_radio_value: 'Other',
                name: 'Description',
                type: 'text',
                value: '',
                error: false,
                required: false,
                multiline: true,
              },
              paid_orientation: {
                name: 'Paid orientation?',
                type: 'radio',
                value: '',
                error: false,
                required: true,
                data: ['Yes', 'No'],
              },
              desc_paid: {
                sibling_radio: 'paid_orientation',
                sibling_radio_value: 'Yes',
                name: 'Description',
                type: 'text',
                value: '',
                error: false,
                required: false,
                multiline: true,
              },
              travel_provided: {
                name: 'Travel provided',
                type: 'radio',
                value: '',
                error: false,
                required: true,
                data: ['Yes', 'No'],
              },
              select_travel_provided: {
                sibling_radio: 'travel_provided',
                sibling_radio_value: 'Yes',
                name: 'Travel provided',
                type: 'select',
                value: '',
                error: false,
                required: true,
                optionLabel: 'name',
                optionValue: 'name',
                arrayData: [
                  { name: 'Rental car' },
                  { name: 'Flight ticket' },
                  { name: 'Bus' },
                  { name: 'Train' },
                ],
              },
              require: {
                name: 'Do you require: deposits, escrows or hold extra pay checks?',
                type: 'radio',
                value: '',
                error: false,
                required: true,
                data: ['Yes', 'No'],
              },
              desc_require: {
                sibling_radio: 'require',
                sibling_radio_value: 'Yes',
                name: 'Description',
                type: 'text',
                value: '',
                error: false,
                required: false,
                multiline: true,
              },
              home_time: {
                name: 'What is home time for drivers?',
                type: 'select',
                value: '',
                error: false,
                required: false,
                optionLabel: 'name',
                optionValue: 'name',
                arrayData: [
                  { name: 'Every weekend' },
                  { name: 'Every 2nd week' },
                  { name: 'Every 3rd week' },
                  { name: 'Every 4th week' },
                  { name: 'Other' },
                ],
              },
            },
          },
          cargo: {
            name: 'Cargo Information',
            subgroup: null,
            data: {
              dedicated: {
                name: 'Any dedicated freight?',
                type: 'radio',
                value: '',
                error: false,
                required: false,
                data: ['Yes', 'No'],
              },
              desc_dedicated: {
                sibling_radio: 'dedicated',
                sibling_radio_value: 'Yes',
                name: 'Description',
                type: 'text',
                value: '',
                error: false,
                required: false,
                multiline: true,
              },
              drop_hook: {
                name: 'Any drop & hook?',
                type: 'radio',
                value: '',
                error: false,
                required: false,
                data: ['Yes', 'No'],
              },
              desc_drop_hook: {
                sibling_radio: 'drop_hook',
                sibling_radio_value: 'Yes',
                name: 'Description',
                type: 'text',
                value: '',
                error: false,
                required: false,
                multiline: true,
              },
            },
          },
          support: {
            name: 'Support Info',
            subgroup: {
              files: {
                name: 'Files',
                data: {
                  upload_cv: {
                    name: 'Upload resume',
                    type: 'file',
                    value: '',
                    error: false,
                    required: false,
                  },
                },
              },
            },
            data: {
              support_line: {
                name: 'Do you have 24/7 support line?',
                type: 'radio',
                value: '',
                error: false,
                required: false,
                data: ['Yes', 'No'],
              },
              repair_shop: {
                name: 'Do you have a repair shop?',
                type: 'radio',
                value: '',
                error: false,
                required: false,
                data: ['Yes', 'No'],
              },
              provide_fuel: {
                name: 'Do you provide fuel cards?',
                type: 'radio',
                value: '',
                error: false,
                required: false,
                data: ['Yes', 'No'],
              },
              desc_fuel: {
                sibling_radio: 'provide_fuel',
                sibling_radio_value: 'Yes',
                name: 'Description',
                type: 'text',
                value: '',
                error: false,
                required: false,
                multiline: true,
              },
            },
          },
        },
      },
      step3: {
        name: 'Compensation',
        groups: {
          compensation_information: {
            name: 'Compensation Information',
            subgroup: {
              w2_company_driver: {
                parent_select: 'compensation_for',
                name: 'W2 Company Driver',
                data: {
                  occupational_select: {
                    name: 'Compensation type',
                    type: 'select',
                    value: '',
                    error: false,
                    required: false,
                    optionLabel: 'name',
                    optionValue: 'name',
                    multiple: true,
                    arrayData: [
                      { name: 'Cpm' },
                      { name: 'Flat rate' },
                      { name: '% from Gross' },
                      { name: 'per/hr' },
                    ],
                  },
                  desc_cpm: {
                    sibling_select: 'occupational_select',
                    name: 'Description Cpm',
                    type: 'text',
                    value: '',
                    error: false,
                    required: false,
                    multiline: true,
                  },
                  desc_flat_rate: {
                    sibling_select: 'occupational_select',
                    name: 'Description Flat rate',
                    type: 'text',
                    value: '',
                    error: false,
                    required: false,
                    multiline: true,
                  },
                  desc_from_gros: {
                    sibling_select: 'occupational_select',
                    name: 'Description % from Gross',
                    type: 'text',
                    value: '',
                    error: false,
                    required: false,
                    multiline: true,
                  },
                  desc_per_hr: {
                    sibling_select: 'occupational_select',
                    name: 'Description per/hr',
                    type: 'text',
                    value: '',
                    error: false,
                    required: false,
                    multiline: true,
                  },
                },
              },
              independent_contractor: {
                parent_select: 'compensation_for',
                name: '1099 Independent Contractor(IC)',
                data: {
                  occupational_select: {
                    name: 'Compensation type',
                    type: 'select',
                    value: '',
                    error: false,
                    required: false,
                    multiple: true,
                    optionLabel: 'name',
                    optionValue: 'name',
                    arrayData: [
                      { name: 'Cpm' },
                      { name: 'Flat rate' },
                      { name: '% from Gross' },
                      { name: 'per/hr' },
                    ],
                  },
                  desc_cpm: {
                    sibling_select: 'occupational_select',
                    name: 'Description Cpm',
                    type: 'text',
                    value: '',
                    error: false,
                    required: false,
                    multiline: true,
                  },

                  desc_flat_rate: {
                    sibling_select: 'occupational_select',
                    name: 'Description Flat rate',
                    type: 'text',
                    value: '',
                    error: false,
                    required: false,
                    multiline: true,
                  },
                  desc_from_gros: {
                    sibling_select: 'occupational_select',
                    name: 'Description % from Gross',
                    type: 'text',
                    value: '',
                    error: false,
                    required: false,
                    multiline: true,
                  },
                  desc_per_hr: {
                    sibling_select: 'occupational_select',
                    name: 'Description Per/Hr',
                    type: 'text',
                    value: '',
                    error: false,
                    required: false,
                    multiline: true,
                  },
                },
              },
              w2_team: {
                parent_select: 'compensation_for',
                name: 'W2 Team',
                data: {
                  occupational_select: {
                    name: 'Compensation type',
                    type: 'select',
                    value: '',
                    error: false,
                    required: false,
                    multiple: true,
                    optionLabel: 'name',
                    optionValue: 'name',
                    arrayData: [
                      { name: 'Cpm' },
                      { name: 'Flat rate' },
                      { name: '% from Gross' },
                      { name: 'per/hr' },
                    ],
                  },
                  desc_cpm: {
                    sibling_select: 'occupational_select',
                    name: 'Description Cpm',
                    type: 'text',
                    value: '',
                    error: false,
                    required: false,
                    multiline: true,
                  },
                  desc_flat_rate: {
                    sibling_select: 'occupational_select',
                    name: 'Description Flat rate',
                    type: 'text',
                    value: '',
                    error: false,
                    required: false,
                    multiline: true,
                  },
                  desc_from_gros: {
                    sibling_select: 'occupational_select',
                    name: 'Description % from Gross',
                    type: 'text',
                    value: '',
                    error: false,
                    required: false,
                    multiline: true,
                  },
                  desc_per_hr: {
                    sibling_select: 'occupational_select',
                    name: 'Description Per/Hr',
                    type: 'text',
                    value: '',
                    error: false,
                    required: false,
                    multiline: true,
                  },
                },
              },
              team_ic: {
                parent_select: 'compensation_for',
                name: '1099 Team IC',
                data: {
                  occupational_select: {
                    name: 'Compensation type',
                    type: 'select',
                    value: '',
                    error: false,
                    required: false,
                    multiple: true,
                    optionLabel: 'name',
                    optionValue: 'name',
                    arrayData: [
                      { name: 'Cpm' },
                      { name: 'Flat rate' },
                      { name: '% from Gross' },
                      { name: 'per/hr' },
                    ],
                  },
                  desc_cpm: {
                    sibling_select: 'occupational_select',
                    name: 'Description Cpm',
                    type: 'text',
                    value: '',
                    error: false,
                    required: false,
                    multiline: true,
                  },
                  desc_flat_rate: {
                    sibling_select: 'occupational_select',
                    name: 'Description Flat rate',
                    type: 'text',
                    value: '',
                    error: false,
                    required: false,
                    multiline: true,
                  },
                  desc_from_gros: {
                    sibling_select: 'occupational_select',
                    name: 'Description % from Gross',
                    type: 'text',
                    value: '',
                    error: false,
                    required: false,
                    multiline: true,
                  },
                  desc_per_hr: {
                    sibling_select: 'occupational_select',
                    name: 'Description Per/Hr',
                    type: 'text',
                    value: '',
                    error: false,
                    required: false,
                    multiline: true,
                  },
                },
              },
              owner_operator: {
                parent_select: 'compensation_for',
                name: 'Owner Operator',
                data: {
                  from_gross: {
                    name: '% from Gross',
                    type: 'text',
                    value: '',
                    error: false,
                    required: false,
                  },
                  cargo: {
                    name: 'Cargo insurance included in %',
                    type: 'radio',
                    value: '',
                    error: false,
                    required: false,
                    data: ['Yes', 'No'],
                  },
                  trailer: {
                    name: 'Trailer rent included in %',
                    type: 'radio',
                    value: '',
                    error: false,
                    required: false,
                    data: ['Yes', 'No'],
                  },
                  occupational: {
                    name: 'Occupational Accident Insurance Cost',
                    type: 'text',
                    value: '',
                    error: false,
                    required: false,
                  },
                  occupational_select: {
                    name: 'Occupational Accident Insurance Period',
                    type: 'select',
                    value: '',
                    error: false,
                    required: false,
                    optionLabel: 'name',
                    optionValue: 'name',
                    arrayData: [{ name: 'Per week' }, { name: 'Per month' }],
                  },
                  eld: {
                    name: 'ELD',
                    type: 'text',
                    value: '',
                    error: false,
                    required: false,
                  },
                  eld_period: {
                    name: 'ELD Period',
                    type: 'select',
                    value: '',
                    error: false,
                    required: false,
                    optionLabel: 'name',
                    optionValue: 'name',
                    arrayData: [{ name: 'Per week' }, { name: 'Per month' }],
                  },
                  provide_pre_pass: {
                    name: 'Do you provide Pre pass?',
                    type: 'radio',
                    value: '',
                    error: false,
                    required: false,
                    data: ['Yes', 'No'],
                  },
                  pre_pass: {
                    name: 'Pre Pass cost',
                    type: 'text',
                    value: '',
                    error: false,
                    required: false,
                  },
                  pre_pass_period: {
                    name: 'Pre Pass Period',
                    type: 'select',
                    value: '',
                    error: false,
                    required: false,
                    optionLabel: 'name',
                    optionValue: 'name',
                    arrayData: [{ name: 'Per week' }, { name: 'Per month' }],
                  },
                  weekly_miles: {
                    name: 'Average weekly miles',
                    type: 'text',
                    value: '',
                    error: false,
                    required: false,
                  },
                  weekly_gross: {
                    name: 'Average weekly Gross',
                    type: 'text',
                    value: '',
                    error: false,
                    required: false,
                  },
                  other_charges: {
                    name: 'Other charges',
                    type: 'text',
                    value: '',
                    error: false,
                    required: false,
                  },
                },
              },
              lease: {
                parent_select: 'compensation_for',
                name: 'Lease',
                data: {
                  from_gross: {
                    name: '% from Gross',
                    type: 'text',
                    value: '',
                    error: false,
                    required: false,
                  },
                  cargo: {
                    name: 'Cargo insurance included in %',
                    type: 'radio',
                    value: '',
                    error: false,
                    required: false,
                    data: ['Yes', 'No'],
                  },
                  cargo_insurance_cost: {
                    sibling_radio: 'cargo',
                    sibling_radio_value: 'No',
                    name: 'Cargo Insurance cost',
                    type: 'text',
                    value: '',
                    error: false,
                    required: false,
                  },
                  cargo_insurance_period: {
                    sibling_radio: 'cargo',
                    sibling_radio_value: 'No',
                    name: 'Cargo Insurance Period',
                    type: 'select',
                    value: '',
                    error: false,
                    required: false,
                    optionLabel: 'name',
                    optionValue: 'name',
                    arrayData: [{ name: 'Per week' }, { name: 'Per month' }],
                  },
                  trailer: {
                    name: 'Trailer rent included in %',
                    type: 'radio',
                    value: '',
                    error: false,
                    required: false,
                    data: ['Yes', 'No'],
                  },
                  trailer_cost: {
                    sibling_radio: 'trailer',
                    sibling_radio_value: 'No',
                    name: 'Trailer rent cost',
                    type: 'text',
                    value: '',
                    error: false,
                    required: false,
                  },
                  trailer_period: {
                    sibling_radio: 'trailer',
                    sibling_radio_value: 'No',
                    name: 'Trailer rent Period',
                    type: 'select',
                    value: '',
                    error: false,
                    required: false,
                    optionLabel: 'name',
                    optionValue: 'name',
                    arrayData: [{ name: 'Per week' }, { name: 'Per month' }],
                  },
                  occupational: {
                    name: 'Occupational Accident Insurance Cost',
                    type: 'text',
                    value: '',
                    error: false,
                    required: false,
                  },
                  occupational_select: {
                    name: 'Occupational Accident Insurance Period',
                    type: 'select',
                    value: '',
                    error: false,
                    required: false,
                    optionLabel: 'name',
                    optionValue: 'name',
                    arrayData: [{ name: 'Per week' }, { name: 'Per month' }],
                  },
                  eld: {
                    name: 'ELD',
                    type: 'text',
                    value: '',
                    error: false,
                    required: false,
                  },
                  eld_period: {
                    name: 'ELD Period',
                    type: 'select',
                    value: '',
                    error: false,
                    required: false,
                    optionLabel: 'name',
                    optionValue: 'name',
                    arrayData: [{ name: 'Per week' }, { name: 'Per month' }],
                  },
                  provide_pre_pass: {
                    name: 'Do you provide Pre pass?',
                    type: 'radio',
                    value: '',
                    error: false,
                    required: false,
                    data: ['Yes', 'No'],
                  },
                  pre_pass: {
                    sibling_radio: 'provide_pre_pass',
                    sibling_radio_value: 'Yes',
                    name: 'Pre Pass cost',
                    type: 'text',
                    value: '',
                    error: false,
                    required: false,
                  },
                  pre_pass_period: {
                    sibling_radio: 'provide_pre_pass',
                    sibling_radio_value: 'Yes',
                    name: 'Pre Pass Period',
                    type: 'select',
                    value: '',
                    error: false,
                    required: false,
                    optionLabel: 'name',
                    optionValue: 'name',
                    arrayData: [{ name: 'Per week' }, { name: 'Per month' }],
                  },
                  weekly_miles: {
                    name: 'Average weekly miles',
                    type: 'text',
                    value: '',
                    error: false,
                    required: false,
                  },
                  weekly_gross: {
                    name: 'Average weekly Gross',
                    type: 'text',
                    value: '',
                    error: false,
                    required: false,
                  },
                  other_charges: {
                    name: 'Other charges',
                    type: 'text',
                    value: '',
                    error: false,
                    required: false,
                  },
                },
              },
              lease_purchase: {
                parent_select: 'compensation_for',
                name: 'Lease Purchase',
                data: {
                  from_gross: {
                    name: '% from Gross',
                    type: 'text',
                    value: '',
                    error: false,
                    required: false,
                  },
                  cargo: {
                    name: 'Cargo insurance included in %',
                    type: 'radio',
                    value: '',
                    error: false,
                    required: false,
                    data: ['Yes', 'No'],
                  },
                  cargo_insurance_cost: {
                    sibling_radio: 'cargo',
                    sibling_radio_value: 'No',
                    name: 'Cargo Insurance cost',
                    type: 'text',
                    value: '',
                    error: false,
                    required: false,
                  },
                  cargo_insurance_period: {
                    sibling_radio: 'cargo',
                    sibling_radio_value: 'No',
                    name: 'Cargo Insurance Period',
                    type: 'select',
                    value: '',
                    error: false,
                    required: false,
                    optionLabel: 'name',
                    optionValue: 'name',
                    arrayData: [{ name: 'Per week' }, { name: 'Per month' }],
                  },
                  trailer: {
                    name: 'Trailer rent included in %',
                    type: 'radio',
                    value: '',
                    error: false,
                    required: false,
                    data: ['Yes', 'No'],
                  },
                  trailer_cost: {
                    sibling_radio: 'trailer',
                    sibling_radio_value: 'No',
                    name: 'Trailer rent cost',
                    type: 'text',
                    value: '',
                    error: false,
                    required: false,
                  },
                  trailer_period: {
                    sibling_radio: 'trailer',
                    sibling_radio_value: 'No',
                    name: 'Trailer rent Period',
                    type: 'select',
                    value: '',
                    error: false,
                    required: false,
                    optionLabel: 'name',
                    optionValue: 'name',
                    arrayData: [{ name: 'Per week' }, { name: 'Per month' }],
                  },
                  occupational: {
                    name: 'Occupational Accident Insurance Cost',
                    type: 'text',
                    value: '',
                    error: false,
                    required: false,
                  },
                  occupational_select: {
                    name: 'Occupational Accident Insurance Period',
                    type: 'select',
                    value: '',
                    error: false,
                    required: false,
                    optionLabel: 'name',
                    optionValue: 'name',
                    arrayData: [{ name: 'Per week' }, { name: 'Per month' }],
                  },
                  eld: {
                    name: 'ELD',
                    type: 'text',
                    value: '',
                    error: false,
                    required: false,
                  },
                  eld_period: {
                    name: 'ELD Period',
                    type: 'select',
                    value: '',
                    error: false,
                    required: false,
                    optionLabel: 'name',
                    optionValue: 'name',
                    arrayData: [{ name: 'Per week' }, { name: 'Per month' }],
                  },
                  provide_pre_pass: {
                    name: 'Do you provide Pre pass?',
                    type: 'radio',
                    value: '',
                    error: false,
                    required: false,
                    data: ['Yes', 'No'],
                  },
                  pre_pass: {
                    sibling_radio: 'provide_pre_pass',
                    sibling_radio_value: 'Yes',
                    name: 'Pre Pass cost',
                    type: 'text',
                    value: '',
                    error: false,
                    required: false,
                  },
                  pre_pass_period: {
                    sibling_radio: 'provide_pre_pass',
                    sibling_radio_value: 'Yes',
                    name: 'Pre Pass Period',
                    type: 'select',
                    value: '',
                    error: false,
                    required: false,
                    optionLabel: 'name',
                    optionValue: 'name',
                    arrayData: [{ name: 'Per week' }, { name: 'Per month' }],
                  },
                  weekly_miles: {
                    name: 'Average weekly miles',
                    type: 'text',
                    value: '',
                    error: false,
                    required: false,
                  },
                  weekly_gross: {
                    name: 'Average weekly Gross',
                    type: 'text',
                    value: '',
                    error: false,
                    required: false,
                  },
                  other_charges: {
                    name: 'Other charges',
                    type: 'text',
                    value: '',
                    error: false,
                    required: false,
                  },
                },
              },
              w2_local: {
                parent_select: 'compensation_for',
                name: 'W2 Local',
                data: {
                  occupational_select: {
                    name: 'Compensation type',
                    type: 'select',
                    value: '',
                    error: false,
                    required: false,
                    optionLabel: 'name',
                    optionValue: 'name',
                    multiple: true,
                    arrayData: [
                      { name: 'Cpm' },
                      { name: 'Flat rate' },
                      { name: '% from Gross' },
                      { name: 'per/hr' },
                    ],
                  },
                  desc_cpm: {
                    sibling_select: 'occupational_select',
                    name: 'Description Cpm',
                    type: 'text',
                    value: '',
                    error: false,
                    required: false,
                    multiline: true,
                  },
                  desc_flat_rate: {
                    sibling_select: 'occupational_select',
                    name: 'Description Flat rate',
                    type: 'text',
                    value: '',
                    error: false,
                    required: false,
                    multiline: true,
                  },
                  desc_from_gros: {
                    sibling_select: 'occupational_select',
                    name: 'Description % from Gross',
                    type: 'text',
                    value: '',
                    error: false,
                    required: false,
                    multiline: true,
                  },
                  desc_per_hr: {
                    sibling_select: 'occupational_select',
                    name: 'Description Per/Hr',
                    type: 'text',
                    value: '',
                    error: false,
                    required: false,
                    multiline: true,
                  },
                },
              },
              local_1099: {
                parent_select: 'compensation_for',
                name: '1099 Local',
                data: {
                  occupational_select: {
                    name: 'Compensation type',
                    type: 'select',
                    value: '',
                    error: false,
                    required: false,
                    optionLabel: 'name',
                    optionValue: 'name',
                    multiple: true,
                    arrayData: [
                      { name: 'Cpm' },
                      { name: 'Flat rate' },
                      { name: '% from Gross' },
                      { name: 'per/hr' },
                    ],
                  },
                  desc_cpm: {
                    sibling_select: 'occupational_select',
                    name: 'Description Cpm',
                    type: 'text',
                    value: '',
                    error: false,
                    required: false,
                    multiline: true,
                  },
                  desc_flat_rate: {
                    sibling_select: 'occupational_select',
                    name: 'Description Flat rate',
                    type: 'text',
                    value: '',
                    error: false,
                    required: false,
                    multiline: true,
                  },
                  desc_from_gros: {
                    sibling_select: 'occupational_select',
                    name: 'Description % from Gross',
                    type: 'text',
                    value: '',
                    error: false,
                    required: false,
                    multiline: true,
                  },
                  desc_per_hr: {
                    sibling_select: 'occupational_select',
                    name: 'Description Per/Hr',
                    type: 'text',
                    value: '',
                    error: false,
                    required: false,
                    multiline: true,
                  },
                },
              },
              students: {
                parent_select: 'compensation_for',
                name: 'Students',
                data: {
                  occupational_select: {
                    name: 'Compensation type',
                    type: 'select',
                    value: '',
                    error: false,
                    required: false,
                    optionLabel: 'name',
                    optionValue: 'name',
                    multiple: true,
                    arrayData: [
                      { name: 'Cpm' },
                      { name: 'Flat rate' },
                      { name: '% from Gross' },
                      { name: 'per/hr' },
                    ],
                  },
                  desc_flat_rate: {
                    sibling_select: 'occupational_select',
                    name: 'Description Flat rate',
                    type: 'text',
                    value: '',
                    error: false,
                    required: false,
                    multiline: true,
                  },
                  desc_from_gros: {
                    sibling_select: 'occupational_select',
                    name: 'Description % from Gross',
                    type: 'text',
                    value: '',
                    error: false,
                    required: false,
                    multiline: true,
                  },
                  desc_per_hr: {
                    sibling_select: 'occupational_select',
                    name: 'Description Per/Hr',
                    type: 'text',
                    value: '',
                    error: false,
                    required: false,
                    multiline: true,
                  },
                },
              },
            },
            data: {
              compensation_for: {
                name: 'Compensation for',
                type: 'select',
                value: '',
                error: false,
                required: false,
                multiple: true,
                optionLabel: 'name',
                optionValue: 'name',
                arrayData: [
                  { name: 'W2 Company Driver' },
                  { name: '1099 Independent Contractor(IC)' },
                  { name: 'W2 Team' },
                  { name: '1099 Team IC' },
                  { name: 'Owner Operator' },
                  { name: 'Lease' },
                  { name: 'Lease Purchase' },
                  { name: 'W2 Local' },
                  { name: '1099 Local' },
                  { name: 'Students' },
                ],
              },
            },
          },
        },
      },
      step2: {
        name: 'Carrier Hiring Criteria',
        groups: {
          employee_information: {
            name: 'Employee Information',
            subgroup: null,
            data: {
              equipment_type: {
                name: 'Equipment Type',
                type: 'select',
                value: '',
                error: false,
                required: true,
                multiple: true,
                optionLabel: 'name',
                optionValue: 'name',
                arrayData: [
                  { name: 'Dry Van' },
                  { name: 'Reefer' },
                  { name: 'Flatbed' },
                  { name: 'Tanker' },
                  { name: 'Intermodal' },
                  { name: 'Auto Hauler' },
                  { name: 'Step deck' },
                  { name: 'Other' },
                ],
              },
              driver_type: {
                name: 'Driver Type',
                type: 'select',
                value: '',
                error: false,
                required: true,
                multiple: true,
                optionLabel: 'name',
                optionValue: 'name',
                arrayData: [
                  { name: 'W2 Company driver' },
                  { name: '1099 Independent Contractor (IC)' },
                  { name: 'W2 Team' },
                  { name: '1099 Team IC' },
                  { name: 'Owner Operator' },
                  { name: 'Lease' },
                  { name: 'Lease Purchase' },
                  { name: 'W2 Local' },
                  { name: '1099 Local' },
                  { name: 'Students' },
                ],
              },
              how_many_drivers: {
                name: 'How many drivers do you need currently?',
                type: 'text',
                value: '',
                error: false,
                required: true,
              },
              minimum_experience_required: {
                name: 'Minimum experience required',
                type: 'select',
                value: '',
                error: false,
                required: true,
                multiple: true,
                optionLabel: 'name',
                optionValue: 'name',
                arrayData: [
                  { name: 'none' },
                  { name: '1-5 months' },
                  { name: '6-11 months' },
                  { name: '1 year' },
                  { name: '2 years' },
                  { name: '3 years' },
                  { name: '4+ years' },
                ],
              },
              required_endorsements: {
                name: 'Required Endorsements',
                type: 'radio',
                value: '',
                error: false,
                required: false,
                data: ['Yes', 'No'],
              },
              select_required_endorsements: {
                sibling_radio: 'required_endorsements',
                sibling_radio_value: 'Yes',
                name: 'Required Endorsements',
                type: 'select',
                value: '',
                error: false,
                required: false,
                multiple: true,
                optionLabel: 'name',
                optionValue: 'name',
                arrayData: [
                  { name: 'H-Hazmat' },
                  { name: 'N-Tank Vehicle' },
                  { name: 'T-Double/triple trailers' },
                  { name: 'X-Tank+Hazardous' },
                ],
              },
              hiring_location: {
                name: 'Hiring Location by',
                type: 'select',
                value: '',
                error: false,
                required: false,
                multiple: true,
                optionLabel: 'name',
                optionValue: 'name',
                arrayData: [
                  { name: 'Alabama', abbreviation: 'AL' },
                  { name: 'Alaska', abbreviation: 'AK' },
                  { name: 'Arizona', abbreviation: 'AZ' },
                  { name: 'Arkansas', abbreviation: 'AR' },
                  { name: 'California', abbreviation: 'CA' },
                  { name: 'Colorado', abbreviation: 'CO' },
                  { name: 'Connecticut', abbreviation: 'CT' },
                  { name: 'Delaware', abbreviation: 'DE' },
                  { name: 'Florida', abbreviation: 'FL' },
                  { name: 'Georgia', abbreviation: 'GA' },
                  { name: 'Hawaii', abbreviation: 'HI' },
                  { name: 'Idaho', abbreviation: 'ID' },
                  { name: 'Illinois', abbreviation: 'IL' },
                  { name: 'Indiana', abbreviation: 'IN' },
                  { name: 'Iowa', abbreviation: 'IA' },
                  { name: 'Kansas', abbreviation: 'KS' },
                  { name: 'Kentucky', abbreviation: 'KY' },
                  { name: 'Louisiana', abbreviation: 'LA' },
                  { name: 'Maine', abbreviation: 'ME' },
                  { name: 'Maryland', abbreviation: 'MD' },
                  { name: 'Massachusetts', abbreviation: 'MA' },
                  { name: 'Michigan', abbreviation: 'MI' },
                  { name: 'Minnesota', abbreviation: 'MN' },
                  { name: 'Mississippi', abbreviation: 'MS' },
                  { name: 'Missouri', abbreviation: 'MO' },
                  { name: 'Montana', abbreviation: 'MT' },
                  { name: 'Nebraska', abbreviation: 'NE' },
                  { name: 'Nevada', abbreviation: 'NV' },
                  { name: 'New Hampshire', abbreviation: 'NH' },
                  { name: 'New Jersey', abbreviation: 'NJ' },
                  { name: 'New Mexico', abbreviation: 'NM' },
                  { name: 'New York', abbreviation: 'NY' },
                  { name: 'North Carolina', abbreviation: 'NC' },
                  { name: 'North Dakota', abbreviation: 'ND' },
                  { name: 'Ohio', abbreviation: 'OH' },
                  { name: 'Oklahoma', abbreviation: 'OK' },
                  { name: 'Oregon', abbreviation: 'OR' },
                  { name: 'Pennsylvania', abbreviation: 'PA' },
                  { name: 'Rhode Island', abbreviation: 'RI' },
                  { name: 'South Carolina', abbreviation: 'SC' },
                  { name: 'South Dakota', abbreviation: 'SD' },
                  { name: 'Tennessee', abbreviation: 'TN' },
                  { name: 'Texas', abbreviation: 'TX' },
                  { name: 'Utah', abbreviation: 'UT' },
                  { name: 'Vermont', abbreviation: 'VT' },
                  { name: 'Virginia', abbreviation: 'VA' },
                  { name: 'Washington', abbreviation: 'WA' },
                  { name: 'West Virginia', abbreviation: 'WV' },
                  { name: 'Wisconsin', abbreviation: 'WI' },
                  { name: 'Wyoming', abbreviation: 'WY' },
                ],
              },
            },
          },
          equipment_information: {
            name: 'Equipment Information',
            subgroup: null,
            data: {
              equipment_information: {
                name: 'Equipment Information',
                type: 'radio',
                value: '',
                error: false,
                required: false,
                data: ['Yes', 'No'],
              },
              what_trucks: {
                sibling_radio: 'equipment_information',
                sibling_radio_value: 'Yes',
                name: 'What trucks do you have?',
                type: 'select',
                value: '',
                error: false,
                required: false,
                multiple: true,
                optionLabel: 'name',
                optionValue: 'name',
                arrayData: [
                  { name: 'Freightliner' },
                  { name: 'Volvo' },
                  { name: 'Peterbilt' },
                  { name: 'Kenworth' },
                  { name: 'Western Star' },
                  { name: 'International' },
                  { name: '4+ years' },
                ],
              },
              transmission: {
                sibling_radio: 'equipment_information',
                sibling_radio_value: 'Yes',
                name: 'Transmission',
                type: 'select',
                value: '',
                error: false,
                required: false,
                multiple: true,
                optionLabel: 'name',
                optionValue: 'name',
                arrayData: [{ name: 'Automatic' }, { name: 'Manual' }],
              },
              do_your_trucks_have: {
                sibling_radio: 'equipment_information',
                sibling_radio_value: 'Yes',
                name: 'Do your trucks have',
                type: 'select',
                value: '',
                error: false,
                required: false,
                multiple: true,
                optionLabel: 'name',
                optionValue: 'name',
                arrayData: [
                  { name: 'Inverter' },
                  { name: 'APU units' },
                  { name: 'Fridge' },
                  { name: 'Microwave' },
                  { name: 'Driver facing cameras' },
                  { name: 'Crash mitigation' },
                ],
              },
              max_speed: {
                sibling_radio: 'equipment_information',
                sibling_radio_value: 'Yes',
                name: 'What is max speed of trucks?',
                type: 'text',
                value: '',
                error: false,
                required: true,
              },
              year_of_trucks: {
                sibling_radio: 'equipment_information',
                sibling_radio_value: 'Yes',
                name: 'Year of trucks',
                type: 'text',
                value: '',
                error: false,
                required: false,
              },
            },
          },
          benefits: {
            name: 'Benefits',
            subgroup: null,
            data: {
              offer_benefits: {
                name: 'Do you offer benefits?',
                type: 'radio',
                value: '',
                error: false,
                required: false,
                data: ['Yes', 'No'],
              },
              describe: {
                sibling_radio: 'offer_benefits',
                sibling_radio_value: 'Yes',
                name: 'Describe',
                type: 'text',
                value: '',
                error: false,
                required: false,
                multiline: true,
              },
              which_benefits: {
                sibling_radio: 'offer_benefits',
                sibling_radio_value: 'Yes',
                name: 'Which benefits you offer?',
                type: 'select',
                value: '',
                error: false,
                required: false,
                multiple: true,
                optionLabel: 'name',
                optionValue: 'name',
                arrayData: [
                  { name: 'Vision Benefits' },
                  { name: 'Dental Benefits' },
                  { name: 'Retirement benefits' },
                  { name: 'Sign on bonus' },
                  { name: 'Any safety' },
                  { name: 'Layover Pay' },
                  { name: 'Breakdown Pay' },
                  { name: 'Pay Loading/unloading' },
                  { name: 'Pay extra pick up' },
                  { name: 'Health Insurance' },
                ],
              },
            },
          },
          offense: {
            name: 'Offense',
            subgroup: null,
            data: {
              drivers_with_tickets: {
                name: 'Will you consider drivers with tickets or accidents?',
                type: 'radio',
                value: '',
                error: false,
                required: false,
                data: ['Yes', 'No'],
              },
              max_number_of_preentable: {
                sibling_radio: 'drivers_with_tickets',
                sibling_radio_value: 'Yes',
                name: 'Max number of preventable accidents in the past 3 years?',
                type: 'select',
                value: '',
                error: false,
                required: false,

                optionLabel: 'name',
                optionValue: 'name',
                arrayData: [
                  { name: '1' },
                  { name: '2' },
                  { name: '3' },
                  { name: '4' },
                  { name: '5' },
                  { name: '6' },
                  { name: '7' },
                  { name: '8' },
                  { name: '9' },
                  { name: '10' },
                ],
              },
              max_number_of_moving: {
                sibling_radio: 'drivers_with_tickets',
                sibling_radio_value: 'Yes',
                name: 'Max number of moving violations in the past 3 years?',
                type: 'select',
                value: '',
                error: false,
                required: false,

                optionLabel: 'name',
                optionValue: 'name',
                arrayData: [
                  { name: '1' },
                  { name: '2' },
                  { name: '3' },
                  { name: '4' },
                  { name: '5' },
                  { name: '6' },
                  { name: '7' },
                  { name: '8' },
                  { name: '9' },
                  { name: '10' },
                ],
              },
              drivers_with_criminal: {
                name: 'Allow drivers with criminal record?',
                type: 'radio',
                value: '',
                error: false,
                required: false,
                data: ['Yes', 'No'],
              },
              sap_programs: {
                name: 'Allow drivers with SAP Programs?',
                type: 'radio',
                value: '',
                error: false,
                required: false,
                data: ['Yes', 'No'],
              },
              dui_dwi: {
                name: 'Allow drivers with pending/convicted DUI or DWI charges?',
                type: 'radio',
                value: '',
                error: false,
                required: false,
                data: ['Yes', 'No'],
              },
            },
          },
          additional_information: {
            name: 'Additional Information',
            subgroup: null,
            data: {
              allow_pets: {
                name: 'Allow pets?',
                type: 'radio',
                value: '',
                error: false,
                required: false,
                data: ['Yes', 'No'],
              },
              pet_policy: {
                sibling_radio: 'allow_pets',
                sibling_radio_value: 'Yes',
                name: 'What is your pet policy?',
                type: 'text',
                value: '',
                error: false,
                required: false,
              },
              rider_policy: {
                name: 'Do you have a Rider Policy?',
                type: 'radio',
                value: '',
                error: false,
                required: false,
                data: ['Yes', 'No'],
              },
              indicate_minimum_age: {
                sibling_radio: 'rider_policy',
                sibling_radio_value: 'Yes',
                name: 'Please, indicate minimum age',
                type: 'text',
                value: '',
                error: false,
                required: true,
              },
            },
          },
        },
      },
    },
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
      minHeight: Dimensions.get('window').height,
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
        '100vh',
      ] as any,
      paddingBottom: 50,
      justifyContent: 'flex-end',
    },
  })
  const updateStateSubgroup = (
    val: any,
    groupsKey: string,
    subgroupKey: string,
    dataKey: string
  ) => {
    var newObj = { ...stepData }
    newObj[as as string]['step' + step].groups[groupsKey].subgroup[
      subgroupKey
    ].data[dataKey].value = val
    setStepData(newObj)
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
                      dataObject[stepName][fieldName]['subgroup'][subgroupName][
                        field.name
                      ] = newImageName
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
            })
          }
        })
      })

      if (errorFile != 0) {
        setError(true)
      } else {
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
    scrollToTop(scrollRef)
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

  return (
    <>
      {as == undefined ? null : (
        <Layout title={'APPLY AS A ' + as.toUpperCase()} scrollRef={scrollRef}>
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
                        {Object.keys(group.data).map((it2: any, index: any) => {
                          if (group.data[it2].sibling_radio != undefined) {
                            if (
                              group.data[group.data[it2].sibling_radio].value !=
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
                                  fullWidth={group.data[it2].name == 'State'}
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
                        })}
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
                                <BorderInput key={index} text={subgroup.name}>
                                  <View
                                    sx={{
                                      flexDirection: ['column', 'row'],
                                      flexWrap: ['nowrap', 'wrap'],
                                    }}
                                  >
                                    {Object.keys(subgroup.data).map(
                                      (it3: any, index: number) => {
                                        if (
                                          subgroup.data[it3].sibling_radio !=
                                          undefined
                                        ) {
                                          if (
                                            subgroup.data[
                                              subgroup.data[it3].sibling_radio
                                            ].value !=
                                            subgroup.data[it3]
                                              .sibling_radio_value
                                          ) {
                                            return null
                                          }
                                        }
                                        if (
                                          subgroup.data[it3].sibling_select !=
                                          undefined
                                        ) {
                                          if (
                                            !subgroup.data[
                                              subgroup.data[it3].sibling_select
                                            ].value.includes(
                                              subgroup.data[it3].name.replace(
                                                'Description ',
                                                ''
                                              )
                                            )
                                          ) {
                                            return null
                                          }
                                        }
                                        if (
                                          subgroup.data[it3].type == 'text' ||
                                          subgroup.data[it3].type == 'email' ||
                                          subgroup.data[it3].type == 'numeric'
                                        ) {
                                          return (
                                            <Fragment key={step + it2 + it3}>
                                              <CustomInput
                                                currentValue={
                                                  subgroup.data[it3].value
                                                }
                                                error={subgroup.data[it3].error}
                                                setVal={(val: any) => {
                                                  updateStateSubgroup(
                                                    val,
                                                    it,
                                                    it2,
                                                    it3
                                                  )
                                                }}
                                                type={subgroup.data[it3].type}
                                                label={subgroup.data[it3].name}
                                                required={
                                                  subgroup.data[it3].required
                                                }
                                                multiline={
                                                  subgroup.data[it3]
                                                    .multiline != undefined
                                                }
                                              />
                                            </Fragment>
                                          )
                                        } else if (
                                          subgroup.data[it3].type == 'date'
                                        ) {
                                          return (
                                            <Fragment key={step + it2 + it3}>
                                              <CustomInput
                                                datePicker
                                                currentValue={
                                                  subgroup.data[it3].value
                                                }
                                                error={subgroup.data[it3].error}
                                                setVal={(val: any) => {
                                                  updateStateSubgroup(
                                                    val,
                                                    it,
                                                    it2,
                                                    it3
                                                  )
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
                                                  updateStateSubgroup(
                                                    val,
                                                    it,
                                                    it2,
                                                    it3
                                                  )
                                                }}
                                                label={subgroup.data[it3].name}
                                                data={
                                                  subgroup.data[it3].arrayData
                                                }
                                                optionLabel={
                                                  subgroup.data[it3].optionLabel
                                                }
                                                multiple={
                                                  subgroup.data[it3].multiple
                                                }
                                                optionValue={
                                                  subgroup.data[it3].optionValue
                                                }
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
                                                  updateStateSubgroup(
                                                    val,
                                                    it,
                                                    it2,
                                                    it3
                                                  )
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
                                                  updateStateSubgroup(
                                                    val,
                                                    it,
                                                    it2,
                                                    it3
                                                  )
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
                    setStep((old) => old - 1)
                    scrollToTop(scrollRef)
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
                      setStep((old) => old + 1)
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
