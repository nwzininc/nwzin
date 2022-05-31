import {
  Button,
  Flex,
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  useDisclosure,
  Icon,
} from '@chakra-ui/react';
import _get from 'lodash/get';
import _map from 'lodash/map';
import _case from 'lodash/startCase';
import { useAppSelector, useAppDispatch } from '../../../../../store';
import React, { FC } from 'react';
import { ConfigSettingsProps } from './types';
import { getCMCMapping } from '../../mapping';
import ConfigFieldRenderer from './ConfigFieldRenderer';
import { MdDeleteForever } from 'react-icons/md';
import { deleteNode } from '../../reducer';

const ConfigSettings: FC<ConfigSettingsProps> = () => {
  const { currentSelectedField, currentForm, currentPage } = useAppSelector(
    (state) => state.currentFormState
  );
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useAppDispatch();
  const cancelRef = React.useRef();

  if (currentSelectedField) {
    const currentPageIndex = currentForm.pages.findIndex(
      (page) => page.pageId === currentPage
    );
    const field = _get(
      currentForm?.pages[currentPageIndex].pageItems,
      currentSelectedField
    );
    const { settings } = getCMCMapping(field.componentId);

    const handleDelete = () => {
      onClose();
      dispatch(
        deleteNode({ fieldId: currentSelectedField, parentId: field.parentId })
      );
    };
    const isRoot = currentSelectedField === 'ROOT';
    return (
      <Flex flexDirection="column" overflow="auto" maxHeight="100%" gap="4px">
        {!isRoot && (
          <Button
            variant="solid"
            marginBottom="10px"
            _focus={{ boxShadow: 'none' }}
            size="sm"
            textAlign="left"
            colorScheme="red"
            onClick={onOpen}
            width="max-content"
          >
            <Icon as={MdDeleteForever} onClick={onOpen} />
          </Button>
        )}
        {_map(settings, (value, key) => {
          return (
            <ConfigFieldRenderer
              key={key}
              title={key}
              field={field}
              configs={value}
            />
          );
        })}
        <AlertDialog
          isOpen={isOpen}
          leastDestructiveRef={cancelRef as unknown as any}
          onClose={onClose}
        >
          <AlertDialogOverlay>
            <AlertDialogContent>
              <AlertDialogHeader fontSize="lg" fontWeight="bold">
                Delete
              </AlertDialogHeader>

              <AlertDialogBody>
                Do you want to delete <b>{_case(field?.componentId)}</b> field?
                You can't undo this action afterwards.
              </AlertDialogBody>

              <AlertDialogFooter>
                <Button ref={cancelRef as unknown as any} onClick={onClose}>
                  Cancel
                </Button>
                <Button colorScheme="red" onClick={handleDelete} ml={3}>
                  Delete
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
      </Flex>
    );
  }
  return <Flex>Select Some Fields</Flex>;
};

export default ConfigSettings;
