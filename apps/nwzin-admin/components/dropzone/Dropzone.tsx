import { Flex, Text} from '@chakra-ui/react';
import { useToast } from '@chakra-ui/react'
import {ArrowUpIcon, DeleteIcon} from '@chakra-ui/icons'
import React, { FC, useCallback } from 'react';
import { useDropzone, FileRejection } from 'react-dropzone';
import { DropzoneProps, DropFile } from './types';

const FileBox:FC<DropFile> = ({path, ...rest}) => {
    console.log('NAME', rest)
    return(
    <Flex bg="primary" padding="5px 12px" width="100%" borderRadius="md" alignItems="center" justifyContent="space-between" >
        <Text fontFamily="heading" width="80%" fontSize="medium"  color="white" isTruncated> {path}</Text>
        <DeleteIcon color="white" />
    </Flex>
    )
}

const Dropzone: FC<DropzoneProps> = ({ name, value, onChange, ...rest }) => {
  const toast = useToast()
  const onDropAccepted = useCallback((acceptedFiles) => {
    // Do something with the files
    onChange({
      target: {
        value: acceptedFiles,
      },
    });
  }, []);

  const onDropRejected = useCallback((fieRejections: FileRejection[]) => {
    // Do something with the files

    toast({
        title: 'File Error',
        description: fieRejections[0].errors[0].message,
        status: "error",
        duration: 3000,
        isClosable: true,
      })

  }, []);
  const { getRootProps, getInputProps } = useDropzone({ onDropAccepted, onDropRejected, ...rest });
  return (
    <Flex
      {...getRootProps()}
      borderRadius="3xl"
      justifyContent="center"
      alignItems="center"
      fontFamily="heading"
      color="primary"
      boxShadow="base"
      padding="30px"
      border="1px dashed"
      flexDirection="column"
      gap="10px"
      borderColor="primary"
    >
      <input {...getInputProps()} />
      <ArrowUpIcon name="ArrowUpIcon" color="primary" fontSize="3xl" />
      <Text color="primary" fontFamily="heading">Upload</Text>
        {Array.from(value || []).map(({ lastModified, ...rest})=>{
            return <FileBox key={lastModified} lastModified={lastModified} {...rest as unknown as DropFile}  />
        })}
    </Flex>
  );
};

export default Dropzone;
