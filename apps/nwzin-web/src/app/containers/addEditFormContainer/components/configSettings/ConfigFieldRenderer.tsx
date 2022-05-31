import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Text,
} from '@chakra-ui/react';
import React, { ChangeEvent, FC, useCallback } from 'react';
import _get from 'lodash/get';
import _map from 'lodash/map';
import _case from 'lodash/startCase';
import {
  ConfigFieldRendererProps,
  ConfigOption,
  DesignerConfig,
} from './types';
import { getComponentByConfigMapping } from './map';
import { useAppDispatch, useAppSelector } from '../../../../../store';
import { updateChildNode } from '../../reducer';

const ConfigFieldRenderer: FC<ConfigFieldRendererProps> = ({
  configs,
  field,
  title,
}) => {
  const dispatch = useAppDispatch();
  const subFieldId = useAppSelector(
    (state) => state.currentFormState.subFieldId
  );
  const handleChange = useCallback(
    (id: string) => (event: ChangeEvent<HTMLInputElement> | ConfigOption) => {
      const value = (event as unknown as ConfigOption)?.label
        ? (event as unknown as ConfigOption).value
        : (event as unknown as ChangeEvent<HTMLInputElement>).target.value;
      dispatch(updateChildNode({ id, value: value }));
    },
    []
  );
  const isNotRecursiveExist = _get(configs, 'designerConfig');
  if (isNotRecursiveExist) {
    const fieldValue = configs as DesignerConfig;
    const configValue = _get(field, fieldValue.id);
    const Component = getComponentByConfigMapping(fieldValue.type);
    return (
      <Flex marginTop="5px" key={fieldValue.id}>
        <FormControl>
          {/* <FormLabel fontFamily="heading" color="blackAlpha.600" fontSize="md">{value.label}</FormLabel> */}
          {Component && (
            <Component
              value={configValue}
              configLabel={fieldValue.type}
              onChange={handleChange(`${field.id}.${fieldValue.id}`)}
              {...fieldValue}
            />
          )}
        </FormControl>
      </Flex>
    );
  }
  const isSubFieldSelected =subFieldId?.includes(`.${title}`);
  if (isSubFieldSelected) {
    return (
     <Flex flexDirection="column">
      <Heading fontFamily="heading" color="blackAlpha.600" size="sm"> {_case(title)}</Heading>
        {_map(configs, (innerFieldvalue) => {
          const fieldValue = innerFieldvalue as DesignerConfig;
          const configValue = _get(field, fieldValue.id);
          const Component = getComponentByConfigMapping(fieldValue.type);
          return (
            <Flex marginTop="5px" key={fieldValue.id}>
              <FormControl>
                {/* <FormLabel fontFamily="heading" color="blackAlpha.600" fontSize="md">{value.label}</FormLabel> */}
                {Component && (
                  <Component
                    value={configValue}
                    configLabel={fieldValue.type}
                    onChange={handleChange(`${field.id}.${fieldValue.id}`)}
                    {...fieldValue}
                  />
                )}
              </FormControl>
            </Flex>
          );
        })}
        <Divider variant="solid" />
      </Flex>
    );
  }
  return null;
};

export default ConfigFieldRenderer;
