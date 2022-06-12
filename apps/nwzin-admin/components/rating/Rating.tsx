import { RatingProps, RatingWrapperProps } from './types';
import { Flex, Icon } from '@chakra-ui/react';
import React, { FC, forwardRef } from 'react';
import FormField from '../formField';
import { MdStar } from 'react-icons/md';

export const Rating: FC<RatingProps> = forwardRef<RatingProps, any>(
  ({ id, pageItem, theme, onChange, value }, ref) => {
    const { primaryColor } = theme;

    const handleClick = (currentValue: number) => () => {
      onChange({
        target: {
          value: currentValue,
        },
      });
    };
    return (
      <Flex
        marginTop="8px"
        borderRadius="8px"
        overflow="hidden"
        width="max-content"
        gap="15px"
        role="switch"
        cursor="pointer"
        ref={ref as any}
      >
        {[1, 2, 3, 4, 5].map((item) => {
          const isSelected = item <= value;
          return (
            <Icon
              key={item}
              as={MdStar}
              w={8} 
              h={8}
              onClick={handleClick(item)}
              color={isSelected ? primaryColor[700] : "#ccc"}
            />
          );
        })}
      </Flex>
    );
  }
);

Rating.displayName = 'Rating';

const RatingWrapper: FC<RatingWrapperProps> = ({ pageItem, theme }) => {
  const { id, configurations } = pageItem;
  const { primaryColor } = theme;
  const { label, name } = configurations.settings;
  const { text, ...labelStyles } = label || {};
  return (
    <FormField
      key={id}
      name={name || text}
      label={text}
      labelStyles={{
        ...labelStyles,
        color: primaryColor[600],
      }}
    >
      <Rating pageItem={pageItem} theme={theme} />
    </FormField>
  );
};

export default RatingWrapper;
