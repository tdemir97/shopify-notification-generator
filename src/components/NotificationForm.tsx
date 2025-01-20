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
import { NotificationData, CURRENCIES } from '../types/notification';

interface NotificationFormProps {
  data: NotificationData;
  onChange: (data: NotificationData) => void;
}

const NotificationForm: React.FC<NotificationFormProps> = ({ data, onChange }) => {
  const { t } = useTranslation();

  const handleChange = (field: keyof NotificationData, value: any) => {
    onChange({ ...data, [field]: value });
  };

  return (
    <VStack spacing={4} align="stretch">
      <FormControl isRequired>
        <FormLabel>{t('orderNumber')}</FormLabel>
        <Input
          value={data.orderId}
          onChange={(e) => handleChange('orderId', e.target.value)}
          placeholder="#1234"
        />
      </FormControl>

      <FormControl isRequired>
        <FormLabel>{t('storeName')}</FormLabel>
        <Input
          value={data.storeName}
          onChange={(e) => handleChange('storeName', e.target.value)}
        />
      </FormControl>

      <FormControl isRequired>
        <FormLabel>{t('amount')}</FormLabel>
        <NumberInput
          value={data.amount}
          onChange={(_, value) => handleChange('amount', value)}
          min={0}
          precision={2}
        >
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      </FormControl>

      <FormControl isRequired>
        <FormLabel>{t('currency')}</FormLabel>
        <Select
          value={data.currency.value}
          onChange={(e) => {
            const selectedCurrency = CURRENCIES.find(c => c.value === e.target.value);
            if (selectedCurrency) {
              handleChange('currency', selectedCurrency);
            }
          }}
        >
          {CURRENCIES.map((currency) => (
            <option key={currency.value} value={currency.value}>
              {currency.label} ({currency.symbol})
            </option>
          ))}
        </Select>
      </FormControl>

      <FormControl>
        <FormLabel>{t('quantity')}</FormLabel>
        <NumberInput
          value={data.quantity}
          onChange={(_, value) => handleChange('quantity', value)}
          min={1}
          defaultValue={1}
        >
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      </FormControl>

      <FormControl isRequired>
        <FormLabel>{t('orderSource')}</FormLabel>
        <Input
          value={data.orderSource}
          onChange={(e) => handleChange('orderSource', e.target.value)}
          placeholder="Online Store"
        />
      </FormControl>
    </VStack>
  );
};

export default NotificationForm; 