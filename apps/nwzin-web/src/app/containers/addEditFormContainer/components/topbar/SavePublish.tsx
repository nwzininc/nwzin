import { Flex, Text, Box, Button } from '@chakra-ui/react';
import { useAppDispatch, useAppSelector } from '../../../../../store';
import React, { FC, MouseEvent } from 'react';
import { savePublishForm } from '../../reducer';
import { SavePublishProps } from './types';
import { useNavigate } from 'react-router-dom';

const SavePublish: FC<SavePublishProps> = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate()
    const hanldeSave = () => {
        dispatch(savePublishForm({}))
        navigate("/forms")
    }
    return (
        <Flex position="fixed" gap="15px" right="30px">
          <Button colorScheme="green" onClick={hanldeSave}> Save </Button>
          <Button colorScheme="green">Publish </Button>
        </Flex>
    )
};

export default SavePublish;