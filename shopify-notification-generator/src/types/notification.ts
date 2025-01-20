export interface CurrencyOption {
  value: string;
  label: string;
  symbol: string;
}

export const CURRENCIES: CurrencyOption[] = [
  { value: 'TRY', label: 'Türk Lirası', symbol: '₺' },
  { value: 'USD', label: 'US Dollar', symbol: '$' },
  { value: 'EUR', label: 'Euro', symbol: '€' },
  { value: 'GBP', label: 'British Pound', symbol: '£' },
  { value: 'JPY', label: 'Japanese Yen', symbol: '¥' },
  { value: 'AUD', label: 'Australian Dollar', symbol: 'A$' },
  { value: 'CAD', label: 'Canadian Dollar', symbol: 'C$' },
  { value: 'CHF', label: 'Swiss Franc', symbol: 'CHF' },
  { value: 'CNY', label: 'Chinese Yuan', symbol: '¥' },
  { value: 'INR', label: 'Indian Rupee', symbol: '₹' }
];

export interface NotificationData {
  orderId: string;
  amount: number;
  quantity: number;
  orderSource: string;
  storeName: string;
  currency: CurrencyOption;
}

export interface NotificationFormProps {
  data: NotificationData;
  onChange: (data: NotificationData) => void;
}

export interface NotificationPreviewProps {
  data: NotificationData;
}

export interface NotificationStyleProps {
  isDarkMode: boolean;
} 