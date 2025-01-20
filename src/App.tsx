import { useState } from 'react'
import NotificationForm from './components/NotificationForm'
import NotificationPreview from './components/NotificationPreview'
import LanguageSwitcher from './components/LanguageSwitcher'
import { useTranslation } from 'react-i18next'
import { Box, ChakraProvider, Container, Flex } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
})

function App() {
  const { t } = useTranslation()
  const [notificationData, setNotificationData] = useState({
    orderNumber: '',
    storeName: '',
    amount: '',
    currency: 'USD',
    quantity: '1',
    source: ''
  })

  return (
    <ChakraProvider theme={theme}>
      <Box minH="100vh" bg="gray.900">
        <Container maxW="container.xl" py={5}>
          <Flex justify="space-between" mb={4}>
            <Box as="h1" fontSize="2xl" fontWeight="bold" color="white">
              {t('title')}
            </Box>
            <LanguageSwitcher />
          </Flex>
          <Flex gap={6} flexDirection={{ base: 'column', md: 'row' }}>
            <Box flex={1}>
              <NotificationForm
                notificationData={notificationData}
                setNotificationData={setNotificationData}
              />
            </Box>
            <Box flex={1}>
              <NotificationPreview {...notificationData} />
            </Box>
          </Flex>
        </Container>
      </Box>
    </ChakraProvider>
  )
}

export default App 