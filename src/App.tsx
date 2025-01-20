import { Box, Container, Heading, useColorModeValue, VStack, HStack, IconButton, useColorMode } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import NotificationForm from './components/NotificationForm';
import NotificationPreview from './components/NotificationPreview';
import { useState } from 'react';
import { NotificationData } from './types/notification';
import LanguageSwitcher from './components/LanguageSwitcher';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

const MotionBox = motion(Box);

function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  const [notificationData, setNotificationData] = useState<NotificationData>({
    orderId: '',
    amount: 0,
    quantity: 1,
    orderSource: '',
    storeName: '',
    currency: { value: 'TRY', label: 'Türk Lirası', symbol: '₺' }
  });

  const bgGradient = useColorModeValue(
    'linear(to-br, purple.50, gray.50)',
    'linear(to-br, gray.900, purple.900)'
  );
  
  const containerBg = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  return (
    <Box 
      minH="100vh" 
      bgGradient={bgGradient}
      py={8}
    >
      <Container maxW="container.xl" px={4}>
        <VStack spacing={8} w="100%">
          <HStack w="100%" justify="space-between" align="center">
            <MotionBox
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Heading size="lg">Shopify Order Notification Generator</Heading>
            </MotionBox>
            <HStack>
              <LanguageSwitcher />
              <IconButton
                aria-label="Toggle color mode"
                icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                onClick={toggleColorMode}
              />
            </HStack>
          </HStack>

          <Box 
            w="100%" 
            display={{ base: 'block', lg: 'flex' }} 
            gap={8}
          >
            <Box 
              flex="1" 
              bg={containerBg} 
              p={6} 
              borderRadius="xl" 
              borderWidth="1px"
              borderColor={borderColor}
              boxShadow="sm"
            >
              <NotificationForm data={notificationData} onChange={setNotificationData} />
            </Box>
            <Box flex="1">
              <NotificationPreview data={notificationData} />
            </Box>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
}

export default App; 