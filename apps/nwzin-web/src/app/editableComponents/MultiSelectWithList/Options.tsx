import React, { FC, MouseEvent } from 'react';
import EditableText from '../editbleText';
import { MdCheck, MdDelete } from 'react-icons/md';
import { AlphabetMapper } from './constant';
import { EditableOptionProps } from './types';
import { Flex, Text } from '@chakra-ui/react';
import { useAppDispatch } from '../../../store';
import { setCurrentField } from '../../containers/addEditFormContainer/reducer';

const EditableOption: FC<EditableOptionProps> = ({
  id,
  index,
  value,
  handleDelete,
  componentId,
  optionStyles,
  isCurrentSelceted,
}) => {
  const selectedOptionStylesId = `${id}.configurations.settings.optionStyles`;
  const dispatch = useAppDispatch();

  const handleClick =
    (subFieldId: string) => (event: MouseEvent<HTMLDivElement>) => {
      event.stopPropagation();
      dispatch(setCurrentField({ currentField: componentId, subFieldId: subFieldId }));
    };

  const isOptional = ![0].includes(index as any);
  const isFirstOption = (index as unknown as number) === 0;
  const order = AlphabetMapper[index];
  const styles = optionStyles;
  return (
    <Flex alignItems="center">
      <Flex
        width="100%"
        minWidth="400px"
        alignItems="center"
        border={`1px solid ${styles.color}`}
        padding="8px 12px"
        borderRadius="8px"
        maxWidth="400px"
      >
        <Flex
          height="26px"
          width="26px"
          minWidth="26px"
          borderRadius="8px"
          justifyContent="center"
          alignItems="center"
          border={`1px solid ${styles.color}`}
          boxShadow="base"
          backgroundColor={isFirstOption ? styles.color : '#fff'}
          onClick={handleClick(selectedOptionStylesId)}
        >
          <Text
            fontSize="md"
            fontFamily="heading"
            color={isFirstOption ? '#fff' : styles.color}
          >
            {order}
          </Text>
        </Flex>
        <EditableText
          componentId={componentId}
          paddingLeft="10px"
          id={[`${id}.label`, `${id}.value`]}
          value={value}
          selectionId={`configurations.settings.optionStyles`}
          placeholder={'Type Option here'}
          isHeading={false}
          color={styles.color}
          {...styles}
        />
        <Flex
          height="26px"
          width="26px"
          minWidth="26px"
          borderRadius="8px"
          justifyContent="center"
          alignItems="center"
          border={`1px solid ${styles.color}`}
          boxShadow="base"
          onClick={handleClick(selectedOptionStylesId)}
          backgroundColor={isFirstOption ? styles.color : '#fff'}
        >
          {isFirstOption && <MdCheck color="#fff" />}
        </Flex>
      </Flex>
      {isFirstOption && isCurrentSelceted && (
        <Text
          marginLeft="20px"
          fontSize="10px"
          fontFamily="heading"
          color="gray.600"
        >
          * This is how it looks when user selects, By default it will not be
          selected
        </Text>
      )}
      {isOptional && isCurrentSelceted && (
        <Flex
          marginLeft="20px"
          onClick={handleDelete(index as any)}
          cursor="pointer"
        >
          <MdDelete />
        </Flex>
      )}
    </Flex>
  );
};

export default EditableOption;
