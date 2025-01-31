import React from 'react';
import {
  Box,
  Flex,
  Text,
  Button,
  VStack,
  Image,
} from '@chakra-ui/react';
import { NotificationPreviewProps } from '../types/notification';
import { useTranslation } from 'react-i18next';
import html2canvas from 'html2canvas';

const NotificationPreview: React.FC<NotificationPreviewProps> = ({
  orderNumber,
  storeName,
  amount,
  quantity,
  source
}) => {
  const { t } = useTranslation();

  const formatPrice = (price: string) => {
    const num = parseFloat(price);
    return new Intl.NumberFormat('tr-TR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(num);
  };

  const handleDownload = async () => {
    const element = document.getElementById('notification-preview');
    if (!element) return;

    const originalBg = element.style.background;
    element.style.background = 'rgba(0, 0, 0, 0.85)';

    const canvas = await html2canvas(element, {
      backgroundColor: null,
      scale: 3,
      logging: false,
      useCORS: true,
      allowTaint: true,
      onclone: (clonedDoc) => {
        const clonedElement = clonedDoc.getElementById('notification-preview');
        if (clonedElement) {
          clonedElement.style.background = 'rgba(0, 0, 0, 0.85)';
        }
      }
    });

    element.style.background = originalBg;

    const link = document.createElement('a');
    link.download = 'shopify-notification.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
  };

  return (
    <VStack width="100%" maxWidth="400px" spacing={6} mx="auto">
      <Box
        id="notification-preview"
        bg="rgba(0, 0, 0, 0.85)"
        py={4}
        px={4}
        borderRadius="2xl"
        width="100%"
        position="relative"
      >
        <Flex alignItems="center" gap={4}>
          <Box
            bg="white"
            p={2}
            borderRadius="xl"
            width="84px"
            height="84px"
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexShrink={0}
          >
            <Image
              src="/shopify-bag.png"
              alt="Shopify"
              width="76px"
              height="76px"
              objectFit="contain"
              style={{ filter: 'brightness(0) saturate(100%) invert(82%) sepia(25%) saturate(1191%) hue-rotate(67deg) brightness(89%) contrast(87%)' }}
            />
          </Box>
          <Box flex={1} pr={20}>
            <Text color="white" fontSize="15px" fontWeight="normal" mb={1} lineHeight="1.2" fontFamily="Helvetica, sans-serif">
              Sipariş {orderNumber}
            </Text>
            <Text color="white" fontSize="14px" mb={1} lineHeight="1.2" fontFamily="Helvetica, sans-serif">
              ₺{formatPrice(amount)}, {quantity} ürün, sipariş kaynağı: {source}
            </Text>
            <Text color="white" fontSize="13px" opacity={0.7} lineHeight="1.2" fontFamily="Helvetica, sans-serif">
              {storeName}
            </Text>
          </Box>
          <Text
            position="absolute"
            top={4}
            right={4}
            color="white"
            opacity={0.7}
            fontSize="13px"
            fontFamily="Helvetica, sans-serif"
          >
            1 sa. önce
          </Text>
        </Flex>
      </Box>
      <Button
        onClick={handleDownload}
        colorScheme="green"
        width="100%"
        size="lg"
        leftIcon={<DownloadIcon />}
      >
        {t('downloadImage')}
      </Button>
    </VStack>
  );
};

const DownloadIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14 11V14H2V11H0V14C0 15.1 0.9 16 2 16H14C15.1 16 16 15.1 16 14V11H14ZM13 7L11.59 5.59L9 8.17V0H7V8.17L4.41 5.59L3 7L8 12L13 7Z"
      fill="currentColor"
    />
  </svg>
);

export default NotificationPreview; 