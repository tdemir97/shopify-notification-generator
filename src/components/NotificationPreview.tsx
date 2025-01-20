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
import { CURRENCIES } from '../types/notification';

const NotificationPreview: React.FC<NotificationPreviewProps> = ({
  orderNumber,
  storeName,
  amount,
  currency,
  quantity,
  source
}) => {
  const { t } = useTranslation();

  const getCurrencySymbol = (currencyCode: string) => {
    const currencyOption = CURRENCIES.find(c => c.value === currencyCode);
    return currencyOption ? currencyOption.symbol : currencyCode;
  };

  const handleDownload = async () => {
    const element = document.getElementById('notification-preview');
    if (!element) return;

    const canvas = await html2canvas(element, {
      backgroundColor: '#1A202C',
      scale: 2,
      logging: false,
      useCORS: true,
      allowTaint: true,
    });

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
        py={3.5}
        px={4}
        borderRadius="2xl"
        width="100%"
        position="relative"
        backdropFilter="blur(10px)"
        boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)"
      >
        <Flex alignItems="center" gap={3}>
          <Box
            bg="white"
            p={1}
            borderRadius="lg"
            width="72px"
            height="72px"
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexShrink={0}
            overflow="hidden"
          >
            <Image
              src="/shopify-bag.png"
              alt="Shopify"
              width="68px"
              height="68px"
              objectFit="contain"
            />
          </Box>
          <Box flex={1} pr={16}>
            <Text color="white" fontSize="15px" fontWeight="medium" mb={0.5} lineHeight="1.2">
              {t('order')} #{orderNumber}
            </Text>
            <Text color="white" fontSize="14px" mb={0.5} lineHeight="1.2">
              {getCurrencySymbol(currency)}{amount}, {quantity} {t('item')}, {t('source')}: {source}
            </Text>
            <Text color="white" fontSize="13px" opacity={0.7} lineHeight="1.2">
              {storeName}
            </Text>
          </Box>
          <Text
            position="absolute"
            top={3.5}
            right={4}
            color="white"
            opacity={0.7}
            fontSize="13px"
          >
            {t('timeAgo')}
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