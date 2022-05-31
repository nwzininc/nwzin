import { MdShortText, MdOutlineEmail, MdPhone } from 'react-icons/md';
import { BsCardText, BsCalendarDate } from 'react-icons/bs';
import { FaSignature, FaAddressCard } from 'react-icons/fa';

export const componentListTypes = [
  {
    id: 'heading',
    label: 'Heading',
    icon: MdShortText,
    bgColor: '#5ed6c8',
  },
  {
    id: 'description',
    label: 'Descriptions',
    icon: BsCardText,
    bgColor: '#d55b99',
  },
  {
    id: 'email',
    label: 'Email',
    icon: MdOutlineEmail,
    bgColor: '#adebe4',
  },
  {
    id: 'phone',
    label: 'Phone',
    icon: MdPhone,
    bgColor: '#fba136',
  },
  {
    id: 'signature',
    label: 'Signature',
    icon: FaSignature,
    bgColor: '#69b5fc',
  },
  {
    id: 'datePicker',
    label: 'Date Picker',
    icon: BsCalendarDate,
    bgColor: '#5ed6c8',
  },
  {
    id: 'address',
    label: 'Address',
    icon: FaAddressCard,
    bgColor: '#f25042',
  },
  {
    id: 'dropdown',
    label: 'Dropdown',
    icon: BsCardText,
    bgColor: '#024643',
  },
  {
    id: 'multiSelect',
    label: 'MultiSelect',
    icon: BsCardText,
    bgColor: '#fabb60',
  },
  {
    id: 'yesNo',
    label: 'Yes or No',
    icon: BsCardText,
    bgColor: '#d9376d',
  },
  {
    id: 'rating',
    label: 'Rating',
    icon: BsCardText,
    bgColor: '#7e5bf0',
  },
  {
    id: 'number',
    label: 'Number',
    icon: BsCardText,
    bgColor: '#4fc3cf',
  },
  {
    id: 'button',
    label: 'Button',
    icon: BsCardText,
    bgColor: '#4fc3cf',
  },
];
