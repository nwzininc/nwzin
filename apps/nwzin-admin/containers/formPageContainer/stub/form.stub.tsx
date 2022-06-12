import { FormState } from '../types';

export const formStub: FormState = {
  form: {
    pages: [
      {
        pageItems: {
          ROOT: {
            id: 'ROOT',
            parentId: 'ROOT',
            componentId: 'ROOT',
            childNodes: [
              'buttonId',
              'deyrn7cCopd2NgbnCAoqb',
              'cuSZrSoCpnTTI4DhmQLaW',
              'S1w_aDOWcmKQxq1C8J4Sm',
              '9KN2fNEF8ldP8oeAsImX2',
              'VKPjb38tYVpCJBq--452P',
              'kaxFpgeuygBpImOCPJk87',
              'GImO9JS2ftXF8Dtzmxy_8',
              'Dkw_8zgyWFGw3h2EcoNaJ',
              'qsQmn7ndgNPCVr9oigcNE',
              'wlEdiNWIaQspJv835-7a4',
              '8rZU9EfEsS6QTFzrgKvWw',
            ],
            componentType: 'LAYOUT',
            configurations: {
              settings: {
                rootStyles: {
                  padding: '8px 0px 0px 16px',
                },
              },
              validations: {},
              dataMapping: {},
            },
          },
          buttonId: {
            id: 'buttonId',
            parentId: 'ROOT',
            componentId: 'button',
            childNodes: [],
            componentType: 'LAYOUT',
            configurations: {
              settings: {
                backButtonlabel: {
                  size: 'md',
                  fontWeight: 'semibold',
                  align: 'left',
                  padding: 0,
                  text: 'Back',
                },
                resetButtonlabel: {
                  size: 'md',
                  fontWeight: 'semibold',
                  align: 'left',
                  padding: 0,
                  text: 'Clear',
                },
                submitButtonlabel: {
                  size: 'md',
                  fontWeight: 'semibold',
                  align: 'left',
                  padding: 0,
                  text: 'Open Account',
                },
                backButtonStyles: {
                  border: '1.5px solid',
                  borderRadius: '8px',
                  width: 'max-content',
                  padding: '8px 16px 8px 16px',
                },
                resetButtonStyles: {
                  border: '1.5px solid',
                  borderRadius: '8px',
                  width: 'max-content',
                  padding: '8px 16px 8px 16px',
                },
                submitButtonStyles: {
                  border: '1px solid',
                  borderRadius: '8px',
                  width: 'max-content',
                  padding: '8px 16px 8px 16px',
                },
                buttonBarStyles: {
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '100%',
                  padding: '16px',
                },
                showBackButton: false,
                showResetButton: true,
                showSubmitButton: true,
              },
              dataMapping: {},
              validations: {},
            },
          },
          deyrn7cCopd2NgbnCAoqb: {
            id: 'deyrn7cCopd2NgbnCAoqb',
            componentId: 'heading',
            parentId: 'ROOT',
            componentType: 'FORM_FIELD',
            childNodes: [],
            configurations: {
              settings: {
                text: {
                  size: '3xl',
                  color: '#2D3748',
                  fontWeight: 'bold',
                  align: 'left',
                  letterSpacing: '1px',
                  text: 'Account Opening with RBL',
                },
                containerStyles: {
                  padding: '0px 0px 0px 0px',
                  border: '0px solid #ccc',
                },
              },
              dataMapping: {},
              validations: {},
            },
          },
          cuSZrSoCpnTTI4DhmQLaW: {
            id: 'cuSZrSoCpnTTI4DhmQLaW',
            componentId: 'description',
            parentId: 'ROOT',
            componentType: 'FORM_FIELD',
            childNodes: [],
            configurations: {
              settings: {
                description: {
                  size: 'md',
                  color: '#2D3748',
                  fontWeight: 'normal',
                  align: 'left',
                  padding: 0,
                  text: "Account Opening is simply dummied text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
                },
                containerStyles: {
                  padding: '0px 0px 0px 0px',
                  border: '0px solid #ccc',
                  whiteSpace: 'break-spaces',
                },
              },
              dataMapping: {},
              validations: {},
            },
          },
          S1w_aDOWcmKQxq1C8J4Sm: {
            id: 'S1w_aDOWcmKQxq1C8J4Sm',
            componentId: 'input',
            parentId: 'ROOT',
            componentType: 'FORM_FIELD',
            childNodes: [],
            configurations: {
              settings: {
                label: {
                  size: 'md',
                  fontWeight: 'semibold',
                  align: 'left',
                  padding: 0,
                  text: 'First Name',
                },
                placeholder: {
                  size: 'md',
                  fontWeight: 'normal',
                  align: 'left',
                  padding: 0,
                  text: 'Your name',
                },
                inputStyles: {
                  borderWidth: '1px',
                  borderStyle: 'solid',
                  minWidth: 280,
                  paddingLeft: '16px',
                  paddingRight: '16px',
                  paddingTop: '8px',
                  paddingBottom: '8px',
                  width: 364,
                  height: 54,
                  borderRadius: 6,
                },
              },
              dataMapping: {},
              validations: {
                required: {
                  value: false,
                  message: null,
                },
                minLength: {
                  value: 6,
                  message: null,
                },
                maxLength: {
                  value: 256,
                  message: null,
                },
              },
            },
          },
          '9KN2fNEF8ldP8oeAsImX2': {
            id: '9KN2fNEF8ldP8oeAsImX2',
            componentId: 'input',
            parentId: 'ROOT',
            componentType: 'FORM_FIELD',
            childNodes: [],
            configurations: {
              settings: {
                label: {
                  size: 'md',
                  fontWeight: 'semibold',
                  align: 'left',
                  padding: 0,
                  text: 'Last Name',
                },
                placeholder: {
                  size: 'md',
                  fontWeight: 'normal',
                  align: 'left',
                  padding: 0,
                  text: 'Last name',
                },
                inputStyles: {
                  borderWidth: '1px',
                  borderStyle: 'solid',
                  minWidth: 280,
                  paddingLeft: '16px',
                  paddingRight: '16px',
                  paddingTop: '8px',
                  paddingBottom: '8px',
                  width: 364,
                  height: 54,
                  borderRadius: 6,
                },
              },
              dataMapping: {},
              validations: {
                required: {
                  value: false,
                  message: null,
                },
                minLength: {
                  value: 6,
                  message: null,
                },
                maxLength: {
                  value: 256,
                  message: null,
                },
              },
            },
          },
          'VKPjb38tYVpCJBq--452P': {
            id: 'VKPjb38tYVpCJBq--452P',
            componentId: 'datePicker',
            parentId: 'ROOT',
            componentType: 'FORM_FIELD',
            childNodes: [],
            configurations: {
              settings: {
                label: {
                  size: 'md',
                  fontWeight: 'semibold',
                  align: 'left',
                  padding: 0,
                  text: 'DOB',
                },
                placeholder: {
                  size: 'md',
                  fontWeight: 'normal',
                  align: 'left',
                  padding: 0,
                  text: 'DD/MM/YYYY',
                },
                inputStyles: {
                  borderWidth: '1px',
                  borderStyle: 'solid',
                  minWidth: 280,
                  paddingLeft: '16px',
                  paddingRight: '16px',
                  paddingTop: '8px',
                  paddingBottom: '8px',
                  width: 364,
                  height: 54,
                  borderRadius: 6,
                },
              },
              dataMapping: {},
              validations: {
                required: {
                  value: false,
                  message: 'Select Date',
                },
              },
            },
          },
          kaxFpgeuygBpImOCPJk87: {
            id: 'kaxFpgeuygBpImOCPJk87',
            componentId: 'phone',
            parentId: 'ROOT',
            componentType: 'FORM_FIELD',
            childNodes: [],
            configurations: {
              settings: {
                label: {
                  size: 'md',
                  fontWeight: 'semibold',
                  align: 'left',
                  padding: 0,
                  text: 'Mobile',
                },
                placeholder: {
                  size: 'md',
                  fontWeight: 'normal',
                  align: 'left',
                  padding: 0,
                  text: '90000000000',
                },
                inputStyles: {
                  borderWidth: '1px',
                  borderStyle: 'solid',
                  minWidth: 280,
                  paddingLeft: '16px',
                  paddingRight: '16px',
                  paddingTop: '8px',
                  paddingBottom: '8px',
                  width: 364,
                  height: 54,
                  borderRadius: 6,
                },
              },
              dataMapping: {},
              validations: {
                required: {
                  value: false,
                  message: null,
                },
                minLength: {
                  value: 10,
                  message: null,
                },
                maxLength: {
                  value: 10,
                  message: null,
                },
              },
            },
          },
          GImO9JS2ftXF8Dtzmxy_8: {
            id: 'GImO9JS2ftXF8Dtzmxy_8',
            componentId: 'input',
            parentId: 'ROOT',
            componentType: 'FORM_FIELD',
            childNodes: [],
            configurations: {
              settings: {
                label: {
                  size: 'md',
                  fontWeight: 'semibold',
                  align: 'left',
                  padding: 0,
                  text: 'Email',
                },
                placeholder: {
                  size: 'md',
                  fontWeight: 'normal',
                  align: 'left',
                  padding: 0,
                  text: 'youremail@gmail.com',
                },
                inputStyles: {
                  borderWidth: '1px',
                  borderStyle: 'solid',
                  minWidth: 280,
                  paddingLeft: '16px',
                  paddingRight: '16px',
                  paddingTop: '8px',
                  paddingBottom: '8px',
                  width: 364,
                  height: 54,
                  borderRadius: 6,
                },
              },
              dataMapping: {},
              validations: {
                required: {
                  value: false,
                  message: null,
                },
                minLength: {
                  value: 6,
                  message: null,
                },
                maxLength: {
                  value: 256,
                  message: null,
                },
              },
            },
          },
          qsQmn7ndgNPCVr9oigcNE: {
            id: 'qsQmn7ndgNPCVr9oigcNE',
            componentId: 'multiSelect',
            parentId: 'ROOT',
            componentType: 'FORM_FIELD',
            childNodes: [],
            configurations: {
              settings: {
                options: [
                  {
                    label: 'India',
                    value: 'India',
                  },
                  {
                    label: 'USA',
                    value: 'USA',
                  },
                  {
                    label: 'China',
                    value: 'China',
                  },
                  {
                    label: 'Japan',
                    value: 'Japan',
                  },
                ],
                question: {
                  size: 'md',
                  fontWeight: 'semibold',
                  align: 'left',
                  padding: 0,
                  text: 'Select below country',
                },
              },
              dataMapping: {},
              validations: {
                required: {
                  value: true,
                  message: 'Select atleast one options',
                },
              },
            },
          },
          'wlEdiNWIaQspJv835-7a4': {
            id: 'wlEdiNWIaQspJv835-7a4',
            componentId: 'yesNo',
            parentId: 'ROOT',
            componentType: 'FORM_FIELD',
            childNodes: [],
            configurations: {
              settings: {
                label: {
                  size: 'md',
                  fontWeight: 'semibold',
                  align: 'left',
                  padding: 0,
                  text: 'Gender',
                },
                yesLabel: {
                  size: 'lg',
                  fontWeight: 'bold',
                  align: 'left',
                  padding: 0,
                  text: 'Male',
                },
                noLabel: {
                  size: 'lg',
                  fontWeight: 'bold',
                  align: 'left',
                  padding: 0,
                  text: 'Female',
                },
                yesContainer: {},
                noContainer: {
                  backgroundColor: '#fff',
                },
              },
              dataMapping: {},
              validations: {
                required: {
                  value: false,
                  message: 'Choose atleast one',
                },
              },
            },
          },
          Dkw_8zgyWFGw3h2EcoNaJ: {
            id: 'Dkw_8zgyWFGw3h2EcoNaJ',
            componentId: 'number',
            parentId: 'ROOT',
            componentType: 'FORM_FIELD',
            childNodes: [],
            configurations: {
              settings: {
                label: {
                  size: 'md',
                  fontWeight: 'semibold',
                  align: 'left',
                  padding: 0,
                  text: 'Salary',
                },
                placeholder: {
                  size: 'md',
                  fontWeight: 'normal',
                  align: 'left',
                  padding: 0,
                  text: '25,000',
                },
                inputStyles: {
                  borderWidth: '1px',
                  borderStyle: 'solid',
                  minWidth: 280,
                  paddingLeft: '16px',
                  paddingRight: '16px',
                  paddingTop: '8px',
                  paddingBottom: '8px',
                  width: 364,
                  height: 54,
                  borderRadius: 6,
                },
              },
              dataMapping: {},
              validations: {
                required: {
                  value: false,
                  message: null,
                },
                min: {
                  value: 6,
                  message: null,
                },
                max: {
                  value: 256,
                  message: null,
                },
              },
            },
          },
          '8rZU9EfEsS6QTFzrgKvWw': {
            id: '8rZU9EfEsS6QTFzrgKvWw',
            componentId: 'rating',
            parentId: 'ROOT',
            componentType: 'FORM_FIELD',
            childNodes: [],
            configurations: {
              settings: {
                label: {
                  size: 'md',
                  fontWeight: 'semibold',
                  align: 'left',
                  padding: 0,
                  text: 'How was your Experience ?',
                },
                unratedIconStyles: {
                  size: '30px',
                },
                ratedIconStyles: {
                  size: '30px',
                },
              },
              dataMapping: {},
              validations: {
                required: {
                  value: false,
                  message: 'Enter your ratings',
                },
              },
            },
          },
        },
        pageId: 'xV7gGp2J2S3ICgbF-uZhw',
        pageName: '',
      },
    ],
    groups: [],
    assignedTo: [],
    isPublic: false,
    isAcceptingResponse: true,
    isPublished: false,
  },
  theme: {
    isUpdated: true,
    primaryColor: {
      '50': '#06D154',
      '100': '#05BB4B',
      '200': '#05A542',
      '300': '#048F39',
      '400': '#048435',
      '500': '#036E2C',
      '600': '#036328',
      '700': '#025823',
      '800': '#024D1F',
      '900': '#023716',
    },
    backgroundColor: {
      '50': '#FFFFFF',
      '100': '#FFFFFF',
      '200': '#FFFFFF',
      '300': '#FFFFFF',
      '400': '#FFFFFF',
      '500': '#F8F8F6',
      '600': '#E2E2DA',
      '700': '#CDCDBE',
      '800': '#B7B7A3',
      '900': '#8B8B6C',
    },
  },
};
