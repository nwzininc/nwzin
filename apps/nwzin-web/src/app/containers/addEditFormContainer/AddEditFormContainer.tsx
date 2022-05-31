import { Flex } from '@chakra-ui/react';
import React, { FC } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Params, useParams } from 'react-router-dom';
import Topbar from './components/topbar';
import AddEditForm from './components/addEditForm';
import { AddEditFormContainerProps } from './types';
import FormSidebar from './components/formSidebar';
import FormDesigner from './components/formDesigner';
import FormConfigBar from './components/formConfigBar';
import { useAppSelector } from '../../../store';
import ThemeBuilder from './components/themeBuilder';

const AddEditFormContainer: FC<AddEditFormContainerProps> = () => {
  const params = useParams<Params<'formId'>>();
  const isEdit = params.formId ? true : false;
  const isThemeUpdated = useAppSelector(
    (state) => state.currentFormState.currentTheme.isUpdated
  );;
  return (
    <DndProvider backend={HTML5Backend}>
      <Flex width="100%" bg="whiteAlpha.900" height="100%" overflow="hidden">
        {isThemeUpdated && (
          <>
            <Topbar />
            <AddEditForm isEdit={isEdit} formId={params?.formId} />
            <FormSidebar />
            <FormDesigner />
            <FormConfigBar />
          </>
        )}
         {!isThemeUpdated  && <ThemeBuilder />}
      </Flex>
    </DndProvider>
  );
};

export default AddEditFormContainer;
