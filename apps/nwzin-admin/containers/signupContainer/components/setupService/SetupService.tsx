/* eslint-disable react/no-children-prop */
import { Button, Flex, FormLabel, InputGroup, InputRightAddon, Text } from '@chakra-ui/react';
import Form from '../../../../components/form';
import FormField from '../../../../components/formField';
import React, { FC } from 'react';
import * as yup from 'yup';
import { SetupServiceProps } from './types';
import PickColor from '../pickColor';
import Dropzone from '../../../../components/dropzone';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yupResolver(
    yup.object({
      company: yup.string().max(32).min(3).required(),
      subDomain: yup.string().max(32).min(3).matches(/^[a-z0-9\s]+$/, "Only Lower case alphabets and numerics are allowed for this field").required(),
    })
  );

  
const SetupService: FC<SetupServiceProps> = ({ handleSetupService }) => {
  return (
    <Flex
      height={["auto","100vh"]}
      width="100%"
      alignItems="center"
      justifyContent="center"
      margin={["60px 0px", "0px"]}
    >
      <Flex
        width={["100%", "60%"]}
        minWidth={["80%", "800px"]}
        bg="whiteAlpha.700"
        padding={['15px', '30px']}
        minHeight="calc(60vh)"
        boxShadow={["none","2xl"]}
        borderRadius={["0px","3xl"]}
        flexDirection="column"
      >
        <Text fontFamily="heading" fontWeight="black" fontSize="2xl">
          Setup your Service
        </Text>
        <Form
          mode="onChange"
          onSubmit={handleSetupService}
          formStyles={{
            marginTop: ['20px', '0px'],
            padding: ['5px', '30px'],
            flexDirection: ['column', 'row'],
            flexWrap: 'wrap',
            gap: ['10px', '40px'],
          }}
          resolver={schema}
          defaultValues={{
            colorScheme: {
              primary: '#2adcb1',
              secondary: '#a11cf8',
              tertiary: '#fdc914',
            },
          }}
        >
          <Flex
            flexDirection={['column', 'row']}
            width="100%"
            gap={['20px', '50px']}
          >
            <FormField
              size="lg"
              borderColor="secondary"
              fontFamily="heading"
              label="Company Name"
              name="company"
              placeholder={'your_company'}
            />
            <Flex flexDirection="column" width="100%">
            <FormLabel fontFamily="heading" color="">
                Sub Domain
            </FormLabel>
            <InputGroup size="lg">
              <FormField
                size="lg"
                borderColor="secondary"
                fontFamily="heading"
                label=""
                name="subDomain"
                placeholder={'your_domain'}
              />
              <InputRightAddon children=".nwzin.com" />
            </InputGroup>                
            </Flex>
          </Flex>
          <Flex
            flexDirection={['column', 'row']}
            width="100%"
            marginTop={['20px', '0px']}
            gap={['20px', '20px']}
          >
            <FormField
              label="Choose Brand Color"
              name="colorScheme"
              width="50%"
              placeholder=""
            >
              <PickColor />
            </FormField>
            <FormField
              label="Upload your logo"
              name="logo"
              width="50%"
              placeholder=""
            >
              <Dropzone accept="image/*" maxSize={2000000} />
            </FormField>
          </Flex>
          <Button fontFamily="heading" marginTop="20px" bg="secondary" color="white" type="submit">
              Complete Registration
          </Button>
        </Form>
      </Flex>
    </Flex>
  );
};

export default SetupService;
