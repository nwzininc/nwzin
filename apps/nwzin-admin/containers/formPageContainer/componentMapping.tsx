import Input from "../../components/input";
import _get from 'lodash/get';
import HeadLine from "../../components/heading";
import { Flex } from "@chakra-ui/react";
import Description from "../../components/description";
import NumberInput from "../../components/number";
import Dropdown from "../../components/dropdown";
import ButtonBar from "../../components/buttonBar";
import Phone from "../../components/phone";
import DatePicker from "../../components/datePicker";
import MultiChoice from "../../components/multiChoice";
import YesNo  from "../../components/yesNo";
import Rating from "../../components/rating";

export const componentMapping = {
  heading: HeadLine,
  description: Description,
  input: Input,
  rating: Rating,
  yesNo: YesNo,
  multiSelect: MultiChoice,
  phone: Phone,
  number: NumberInput,
  dropdown: Dropdown,
  address: Flex,
  signature: Flex,
  datePicker: DatePicker,
  button: ButtonBar,
  uploadCard: Flex,
  location: Flex,
};


export const getComponentMapping = (componentId: string): React.FC<any> => {
    return _get(componentMapping, componentId);
  };