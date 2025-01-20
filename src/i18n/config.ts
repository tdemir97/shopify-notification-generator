import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  fallbackLng: 'tr',
  resources: {
    tr: {
      translation: {
        title: 'Shopify Sipariş Bildirim Oluşturucu',
        orderNumber: 'Sipariş No',
        storeName: 'Mağaza Adı',
        amount: 'Tutar',
        quantity: 'Adet',
        source: 'Sipariş Kaynağı',
        downloadImage: 'Görseli İndir',
        currency: 'Para Birimi',
        timeAgo: '1 sa. önce',
        order: 'Sipariş'
      }
    },
    en: {
      translation: {
        title: 'Shopify Order Notification Generator',
        orderNumber: 'Order Number',
        storeName: 'Store Name',
        amount: 'Amount',
        quantity: 'Quantity',
        source: 'Order Source',
        downloadImage: 'Download Image',
        currency: 'Currency',
        timeAgo: '1 hour ago',
        order: 'Order'
      }
    }
  }
});

export default i18n; 