import React, { useRef } from 'react';
import {
  Box,
  Flex,
  Text,
  useColorModeValue,
  Button,
  VStack,
  Image,
} from '@chakra-ui/react';
import { toPng } from 'html-to-image';
import { NotificationPreviewProps } from '../types/notification';
import { useTranslation } from 'react-i18next';

const NotificationPreview: React.FC<NotificationPreviewProps> = ({ data }) => {
  const { t, i18n } = useTranslation();
  const previewRef = useRef<HTMLDivElement>(null);
  const bgColor = useColorModeValue('rgba(0, 0, 0, 0.85)', 'rgba(0, 0, 0, 0.85)');
  const textColor = useColorModeValue('white', 'white');

  const handleDownload = async () => {
    if (previewRef.current) {
      try {
        const dataUrl = await toPng(previewRef.current, {
          cacheBust: true,
          pixelRatio: 4,
          backgroundColor: 'rgba(0, 0, 0, 0.85)',
          style: {
            transform: 'none'
          },
          quality: 1,
        });

        const link = document.createElement('a');
        link.download = `notification-${data.orderId}.png`;
        link.href = dataUrl;
        link.click();
      } catch (err) {
        console.error('Error generating image:', err);
      }
    }
  };

  const formatCurrency = (amount: number) => {
    return `${data.currency.symbol}${amount.toLocaleString(i18n.language === 'tr' ? 'tr-TR' : 'en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`;
  };

  const formatTime = () => {
    return i18n.language === 'en' ? '1 hr. ago' : '1 sa. önce';
  };

  return (
    <VStack 
      width="100%" 
      maxWidth="400px" 
      spacing={6}
      position="sticky"
      top="20px"
    >
      <Box
        ref={previewRef}
        bg={bgColor}
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
            p={0.25}
            borderRadius="lg"
            width="80px"
            height="80px"
            display="flex"
            alignItems="center"
            justifyContent="center"
            overflow="hidden"
            flexShrink={0}
          >
            <Image 
              src="/shopify-bag.png"
              alt="Shopify Logo"
              width="76px"
              height="76px"
              objectFit="contain"
            />
          </Box>
          <Box flex="1" pr={16}>
            <Text color={textColor} fontSize="15px" fontWeight="medium" mb={0.5} lineHeight="1.2">
              {i18n.language === 'en' ? `Order #${data.orderId}` : `Sipariş #${data.orderId}`}
            </Text>
            <Text color={textColor} fontSize="14px" mb={0.5} lineHeight="1.2">
              {formatCurrency(data.amount)}, {data.quantity} {i18n.language === 'en' ? 'items' : 'ürün'}, 
              {i18n.language === 'en' ? ' order source: ' : ' sipariş kaynağı: '}{data.orderSource}
            </Text>
            <Text color={textColor} fontSize="13px" opacity={0.7} lineHeight="1.2">
              {data.storeName}
            </Text>
          </Box>
        </Flex>
        <Text
          position="absolute"
          top={3.5}
          right={4}
          color={textColor}
          opacity={0.7}
          fontSize="13px"
        >
          {formatTime()}
        </Text>
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
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 11V14H2V11H0V14C0 15.1 0.9 16 2 16H14C15.1 16 16 15.1 16 14V11H14ZM13 7L11.59 5.59L9 8.17V0H7V8.17L4.41 5.59L3 7L8 12L13 7Z" fill="currentColor"/>
  </svg>
);

export default NotificationPreview; 