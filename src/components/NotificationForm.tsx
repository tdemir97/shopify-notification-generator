import React from 'react';
import {
  VStack,
  FormControl,
  FormLabel,
  Input,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Select,
  FormErrorMessage,
  Box,
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { NotificationData } from '../types/notification';
import { CURRENCIES } from '../types/notification';

interface NotificationFormProps {
  notificationData: NotificationData;
  setNotificationData: (data: NotificationData) => void;
}

const NotificationForm: React.FC<NotificationFormProps> = ({
  notificationData,
  setNotificationData,
}) => {
  const { t } = useTranslation();

  const handleChange = (
    field: keyof NotificationData,
    value: string | number
  ) => {
    setNotificationData({
      ...notificationData,
      [field]: value.toString(),
    });
  };

  return (
    <VStack spacing={6} align="stretch" width="100%">
      <FormControl isRequired>
        <FormLabel>{t('orderNumber')}</FormLabel>
        <Input
          value={notificationData.orderNumber}
          onChange={(e) => handleChange('orderNumber', e.target.value)}
          placeholder="#1234"
          bg="rgba(30, 41, 59, 0.5)"
          border="1px solid rgba(255, 255, 255, 0.1)"
          borderRadius="lg"
          height="48px"
          _hover={{
            bg: 'rgba(30, 41, 59, 0.7)',
          }}
          _focus={{
            bg: 'rgba(30, 41, 59, 0.7)',
            borderColor: 'blue.400',
          }}
        />
      </FormControl>

      <FormControl isRequired>
        <FormLabel>{t('storeName')}</FormLabel>
        <Input
          value={notificationData.storeName}
          onChange={(e) => handleChange('storeName', e.target.value)}
          bg="rgba(30, 41, 59, 0.5)"
          border="1px solid rgba(255, 255, 255, 0.1)"
          borderRadius="lg"
          height="48px"
          _hover={{
            bg: 'rgba(30, 41, 59, 0.7)',
          }}
          _focus={{
            bg: 'rgba(30, 41, 59, 0.7)',
            borderColor: 'blue.400',
          }}
        />
      </FormControl>

      <FormControl isRequired>
        <FormLabel>{t('amount')}</FormLabel>
        <NumberInput
          value={notificationData.amount}
          onChange={(value) => handleChange('amount', value)}
          min={0}
        >
          <NumberInputField
            bg="rgba(30, 41, 59, 0.5)"
            border="1px solid rgba(255, 255, 255, 0.1)"
            borderRadius="lg"
            height="48px"
            _hover={{
              bg: 'rgba(30, 41, 59, 0.7)',
            }}
            _focus={{
              bg: 'rgba(30, 41, 59, 0.7)',
              borderColor: 'blue.400',
            }}
          />
          <NumberInputStepper>
            <NumberIncrementStepper borderColor="rgba(255, 255, 255, 0.1)" />
            <NumberDecrementStepper borderColor="rgba(255, 255, 255, 0.1)" />
          </NumberInputStepper>
        </NumberInput>
      </FormControl>

      <FormControl isRequired>
        <FormLabel>{t('currency')}</FormLabel>
        <Select
          value={notificationData.currency}
          onChange={(e) => handleChange('currency', e.target.value)}
          bg="rgba(30, 41, 59, 0.5)"
          border="1px solid rgba(255, 255, 255, 0.1)"
          borderRadius="lg"
          height="48px"
          _hover={{
            bg: 'rgba(30, 41, 59, 0.7)',
          }}
          _focus={{
            bg: 'rgba(30, 41, 59, 0.7)',
            borderColor: 'blue.400',
          }}
        >
          {CURRENCIES.map((currency) => (
            <option key={currency.value} value={currency.value}>
              {currency.label}
            </option>
          ))}
        </Select>
      </FormControl>

      <FormControl>
        <FormLabel>{t('quantity')}</FormLabel>
        <NumberInput
          value={notificationData.quantity}
          onChange={(value) => handleChange('quantity', value)}
          min={1}
        >
          <NumberInputField
            bg="rgba(30, 41, 59, 0.5)"
            border="1px solid rgba(255, 255, 255, 0.1)"
            borderRadius="lg"
            height="48px"
            _hover={{
              bg: 'rgba(30, 41, 59, 0.7)',
            }}
            _focus={{
              bg: 'rgba(30, 41, 59, 0.7)',
              borderColor: 'blue.400',
            }}
          />
          <NumberInputStepper>
            <NumberIncrementStepper borderColor="rgba(255, 255, 255, 0.1)" />
            <NumberDecrementStepper borderColor="rgba(255, 255, 255, 0.1)" />
          </NumberInputStepper>
        </NumberInput>
      </FormControl>

      <FormControl isRequired>
        <FormLabel>{t('source')}</FormLabel>
        <Input
          value={notificationData.source}
          onChange={(e) => handleChange('source', e.target.value)}
          bg="rgba(30, 41, 59, 0.5)"
          border="1px solid rgba(255, 255, 255, 0.1)"
          borderRadius="lg"
          height="48px"
          _hover={{
            bg: 'rgba(30, 41, 59, 0.7)',
          }}
          _focus={{
            bg: 'rgba(30, 41, 59, 0.7)',
            borderColor: 'blue.400',
          }}
        />
      </FormControl>
    </VStack>
  );
};

export default NotificationForm; 