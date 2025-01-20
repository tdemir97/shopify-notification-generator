import React from 'react';
import {
  VStack,
  FormControl,
  FormLabel,
  Input,
  Select,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { NotificationFormProps, CURRENCIES } from '../types/notification';

const NotificationForm: React.FC<NotificationFormProps> = ({
  notificationData,
  setNotificationData,
}) => {
  const { t } = useTranslation();

  const handleChange = (field: keyof typeof notificationData, value: string) => {
    setNotificationData({
      ...notificationData,
      [field]: value,
    });
  };

  return (
    <VStack spacing={6} align="stretch" bg="gray.800" p={8} borderRadius="xl">
      <FormControl isRequired>
        <FormLabel color="gray.300" mb={2}>{t('orderNumber')}</FormLabel>
        <Input
          value={notificationData.orderNumber}
          onChange={(e) => handleChange('orderNumber', e.target.value)}
          placeholder="#1234"
          bg="gray.900"
          color="white"
          border="1px solid"
          borderColor="gray.700"
          _hover={{ borderColor: 'gray.600' }}
          _focus={{ borderColor: 'blue.400', boxShadow: 'none' }}
          height="45px"
          fontSize="md"
        />
      </FormControl>

      <FormControl isRequired>
        <FormLabel color="gray.300" mb={2}>{t('storeName')}</FormLabel>
        <Input
          value={notificationData.storeName}
          onChange={(e) => handleChange('storeName', e.target.value)}
          placeholder={t('storeName')}
          bg="gray.900"
          color="white"
          border="1px solid"
          borderColor="gray.700"
          _hover={{ borderColor: 'gray.600' }}
          _focus={{ borderColor: 'blue.400', boxShadow: 'none' }}
          height="45px"
          fontSize="md"
        />
      </FormControl>

      <FormControl isRequired>
        <FormLabel color="gray.300" mb={2}>{t('amount')}</FormLabel>
        <NumberInput
          value={notificationData.amount}
          onChange={(value) => handleChange('amount', value)}
          min={0}
          bg="gray.900"
          borderColor="gray.700"
          height="45px"
        >
          <NumberInputField
            color="white"
            border="1px solid"
            borderColor="gray.700"
            _hover={{ borderColor: 'gray.600' }}
            _focus={{ borderColor: 'blue.400', boxShadow: 'none' }}
            height="45px"
            fontSize="md"
          />
          <NumberInputStepper>
            <NumberIncrementStepper borderColor="gray.700" color="gray.400" />
            <NumberDecrementStepper borderColor="gray.700" color="gray.400" />
          </NumberInputStepper>
        </NumberInput>
      </FormControl>

      <FormControl isRequired>
        <FormLabel color="gray.300" mb={2}>{t('currency')}</FormLabel>
        <Select
          value={notificationData.currency}
          onChange={(e) => handleChange('currency', e.target.value)}
          bg="gray.900"
          color="white"
          border="1px solid"
          borderColor="gray.700"
          _hover={{ borderColor: 'gray.600' }}
          _focus={{ borderColor: 'blue.400', boxShadow: 'none' }}
          height="45px"
          fontSize="md"
        >
          {CURRENCIES.map((currency) => (
            <option key={currency.value} value={currency.value}>
              {currency.label} ({currency.symbol})
            </option>
          ))}
        </Select>
      </FormControl>

      <FormControl>
        <FormLabel color="gray.300" mb={2}>{t('quantity')}</FormLabel>
        <NumberInput
          value={notificationData.quantity}
          onChange={(value) => handleChange('quantity', value)}
          min={1}
          bg="gray.900"
          borderColor="gray.700"
          height="45px"
        >
          <NumberInputField
            color="white"
            border="1px solid"
            borderColor="gray.700"
            _hover={{ borderColor: 'gray.600' }}
            _focus={{ borderColor: 'blue.400', boxShadow: 'none' }}
            height="45px"
            fontSize="md"
          />
          <NumberInputStepper>
            <NumberIncrementStepper borderColor="gray.700" color="gray.400" />
            <NumberDecrementStepper borderColor="gray.700" color="gray.400" />
          </NumberInputStepper>
        </NumberInput>
      </FormControl>

      <FormControl isRequired>
        <FormLabel color="gray.300" mb={2}>{t('source')}</FormLabel>
        <Input
          value={notificationData.source}
          onChange={(e) => handleChange('source', e.target.value)}
          placeholder="Online Store"
          bg="gray.900"
          color="white"
          border="1px solid"
          borderColor="gray.700"
          _hover={{ borderColor: 'gray.600' }}
          _focus={{ borderColor: 'blue.400', boxShadow: 'none' }}
          height="45px"
          fontSize="md"
        />
      </FormControl>
    </VStack>
  );
};

export default NotificationForm; 