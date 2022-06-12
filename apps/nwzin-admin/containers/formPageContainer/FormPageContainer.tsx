/* eslint-disable @typescript-eslint/no-explicit-any */
import { Flex } from '@chakra-ui/react';
import Form from '../../components/form';
import { FC, useEffect, useState } from 'react';
import { formStub } from './stub/form.stub';
import { FormPageContainerProps, FormSchema } from './types';
import PageRenderer from './components/pageRenderer';

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
      handleResize();
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);
  return windowSize;
}

const FormPageContainer: FC<FormPageContainerProps> = ({ currentForm }) => {
  const { form, theme } = currentForm;
  const intialPageByIndex = form.pages.reduce((acc, item, index) => {
    acc[index] = item;
    return acc;
  }, {} as unknown as Record<number, FormSchema>);

  const [currentPageIndex, setPageIndex] = useState<number>(0);
  const [pageIdMap, setPageIdMap] =
    useState<Record<number, FormSchema>>(intialPageByIndex);

  const windowSize = useWindowSize();
  const handleLoginSubmit = (payload) => {
    console.log("payload", payload)
  };

  const buttonBarHeight = windowSize.width < 600 ? 64 : 96;
  return (
    <Flex
      flexDirection="column"
      width="100%"
      minHeight={windowSize && windowSize?.height - buttonBarHeight}
      maxHeight={windowSize && windowSize?.height - buttonBarHeight}
      position="relative"
      overflow="auto"
    >
      <Form
        mode="onChange"
        onSubmit={handleLoginSubmit}
        // resolver={schema}
        formStyles={{
          width: '100%',
          backgroundColor: theme.backgroundColor[300],
          flexDirection: 'column',
          height:"max-content"
        }}
      >
        <PageRenderer
          formState={currentForm}
          height={windowSize.height}
          width={windowSize.width}
          currentPageIndex={currentPageIndex.toString()}
          setPageIndex={setPageIndex}
          pageIdMap={pageIdMap}
          setPageIdMap={setPageIdMap}
        />
      </Form>
    </Flex>
  );
};

FormPageContainer.defaultProps = {
  currentForm: formStub,
};
export default FormPageContainer;
