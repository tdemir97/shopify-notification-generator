import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      orderId: 'Order ID',
      storeName: 'Store Name',
      amount: 'Amount',
      currency: 'Currency',
      quantity: 'Quantity',
      orderSource: 'Order Source',
      downloadImage: 'Download Image'
    }
  },
  tr: {
    translation: {
      orderId: 'Sipariş No',
      storeName: 'Mağaza Adı',
      amount: 'Tutar',
      currency: 'Para Birimi',
      quantity: 'Adet',
      orderSource: 'Sipariş Kaynağı',
      downloadImage: 'Görseli İndir'
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'tr',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n; 