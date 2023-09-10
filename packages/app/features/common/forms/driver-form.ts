const DRIVER_FORM = {
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
          contact_number_driver: {
            name: 'Contact Number',
            type: 'numeric',
            value: '',
            error: false,
            required: true,
          },
          email_driver: {
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

              { name: 'Intermodal' },

              { name: 'Oversize Load' },

              { name: 'Tanker' },
              { name: 'Reefer' },
              { name: 'Dump truck' },
            ],
          },
        },
      },
    },
  },
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
            add: true,
            parent_radio: 'accidents_3_years',
            parent_radio_value: 'Yes',
            name: 'Accident info',
            pattern: {
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
            data: {
              array: [
                {
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
              ],
            },
          },
          moving_violations: {
            add: true,
            parent_radio: 'moving_violations',
            parent_radio_value: 'Yes',
            name: 'Violations info',
            pattern: {
              type_of_violation: {
                name: 'Type of violation',
                type: 'text',
                value: '',
                error: false,
                required: true,
                multiline: true,
                optionLabel: 'name',
                optionValue: 'name',
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
            data: {
              array: [
                {
                  type_of_violation: {
                    name: 'Type of violation',
                    type: 'text',
                    value: '',
                    error: false,
                    required: true,
                    multiline: true,
                    optionLabel: 'name',
                    optionValue: 'name',
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
              ],
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
            name: 'Are you in the SAP program?',
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
        subgroup: {
          uploadfile: {
            add: true,
            name: 'Upload file',
            pattern: {
              upload_cv: {
                name: 'Upload resume',
                type: 'file',
                value: '',
                error: false,
                required: false,
              },
            },
            data: {
              array: [
                {
                  upload_cv: {
                    name: 'Upload resume',
                    type: 'file',
                    value: '',
                    error: false,
                    required: false,
                  },
                },
              ],
            },
          },
        },
        data: {},
      },
    },
  },
}

export default DRIVER_FORM
