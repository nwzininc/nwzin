import React, { FC, forwardRef } from 'react';
import EditableText from '../editbleText';
import { MdOutlineCloudUpload } from 'react-icons/md';
import { Flex, Icon, Text } from '@chakra-ui/react';
import DesignerWrapper from '../designerWrapper';
import { EditbleUploadCardProps } from './types';
import { useAppSelector } from '../../../store';

const UploadCard: FC<EditbleUploadCardProps> = forwardRef<
  HTMLDivElement,
  EditbleUploadCardProps
>(({ id, label }, ref) => {
  const labelId = `${id}.configurations.settings.label.text`;
  const { primaryColor } = useAppSelector(
    (state) => state.currentFormState.currentTheme
  );
  return (
    <DesignerWrapper id={id} ref={ref}>
      <Flex width="max-content" flexDirection="column" padding="0px 0px">
        <EditableText
          componentId={id}
          id={labelId}
          isHeading={false}
          selectionId={'configurations.settings.label'}
          {...label}
          color={primaryColor[600]}
          value={label?.text}
          placeholder="Type File Upload Label"
        />
        <Flex
          minWidth="364px"
          width="100%"
          maxWidth="450px"
          padding="48px"
          marginTop="8px"
          alignItems="center"
          justifyContent="center"
          borderRadius="8px"
          flexDirection="column"
          color={primaryColor[500]}
          gap='5px'
          border={`1px dotted ${primaryColor[500]}`}
        >
          <Icon as={MdOutlineCloudUpload} size={12} />
          <Flex alignItems="baseline">
            <Text fontFamily="heading" fontWeight="bold">Choose file</Text>
            &nbsp;
            <Text fontFamily="heading" fontWeight="light">or</Text>
            &nbsp;
            <Text fontFamily="heading" fontWeight="bold">drag here</Text>
          </Flex>
          <Flex alignItems="baseline" gap="5px">
            <Text  fontWeight="light" fontFamily="heading" fontSize="small">Size Limit</Text>
            <Text fontFamily="heading" fontWeight="bold" fontSize="small">10MB</Text>
        </Flex>
        </Flex>
      </Flex>
    </DesignerWrapper>
  );
});

export default UploadCard;
