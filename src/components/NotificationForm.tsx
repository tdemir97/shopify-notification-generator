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
    <VStack spacing={4} align="stretch" bg="gray.800" p={6} borderRadius="xl">
      <FormControl isRequired>
        <FormLabel color="white">{t('orderNumber')}</FormLabel>
        <Input
          value={notificationData.orderNumber}
          onChange={(e) => handleChange('orderNumber', e.target.value)}
          placeholder={t('orderNumber')}
          bg="gray.700"
          color="white"
          borderColor="gray.600"
        />
      </FormControl>

      <FormControl isRequired>
        <FormLabel color="white">{t('storeName')}</FormLabel>
        <Input
          value={notificationData.storeName}
          onChange={(e) => handleChange('storeName', e.target.value)}
          placeholder={t('storeName')}
          bg="gray.700"
          color="white"
          borderColor="gray.600"
        />
      </FormControl>

      <FormControl isRequired>
        <FormLabel color="white">{t('amount')}</FormLabel>
        <NumberInput
          value={notificationData.amount}
          onChange={(value) => handleChange('amount', value)}
          min={0}
          bg="gray.700"
          borderColor="gray.600"
        >
          <NumberInputField color="white" />
          <NumberInputStepper>
            <NumberIncrementStepper borderColor="gray.600" color="white" />
            <NumberDecrementStepper borderColor="gray.600" color="white" />
          </NumberInputStepper>
        </NumberInput>
      </FormControl>

      <FormControl isRequired>
        <FormLabel color="white">{t('currency')}</FormLabel>
        <Select
          value={notificationData.currency}
          onChange={(e) => handleChange('currency', e.target.value)}
          bg="gray.700"
          color="white"
          borderColor="gray.600"
        >
          {CURRENCIES.map((currency) => (
            <option key={currency.value} value={currency.value}>
              {currency.label} ({currency.symbol})
            </option>
          ))}
        </Select>
      </FormControl>

      <FormControl>
        <FormLabel color="white">{t('quantity')}</FormLabel>
        <NumberInput
          value={notificationData.quantity}
          onChange={(value) => handleChange('quantity', value)}
          min={1}
          bg="gray.700"
          borderColor="gray.600"
        >
          <NumberInputField color="white" />
          <NumberInputStepper>
            <NumberIncrementStepper borderColor="gray.600" color="white" />
            <NumberDecrementStepper borderColor="gray.600" color="white" />
          </NumberInputStepper>
        </NumberInput>
      </FormControl>

      <FormControl isRequired>
        <FormLabel color="white">{t('source')}</FormLabel>
        <Input
          value={notificationData.source}
          onChange={(e) => handleChange('source', e.target.value)}
          placeholder={t('source')}
          bg="gray.700"
          color="white"
          borderColor="gray.600"
        />
      </FormControl>
    </VStack>
  );
};

export default NotificationForm; 