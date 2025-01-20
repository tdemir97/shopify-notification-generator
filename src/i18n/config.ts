import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      order: 'Order',
      item: 'item',
      orderSource: 'order source',
      generateNotification: 'Generate Notification',
      downloadImage: 'Download Image',
      error: 'Error',
      fillRequiredFields: 'Please fill all required fields',
      orderId: 'Order ID',
      productName: 'Product Name',
      storeName: 'Store Name',
      amount: 'Amount',
      quantity: 'Quantity',
      currency: 'Currency',
    },
  },
  tr: {
    translation: {
      order: 'Sipariş',
      item: 'ürün',
      orderSource: 'sipariş kaynağı',
      generateNotification: 'Bildirim Oluştur',
      downloadImage: 'Görseli İndir',
      error: 'Hata',
      fillRequiredFields: 'Lütfen gerekli alanları doldurun',
      orderId: 'Sipariş No',
      productName: 'Ürün Adı',
      storeName: 'Mağaza Adı',
      amount: 'Tutar',
      quantity: 'Adet',
      currency: 'Para Birimi',
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'tr',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n; 