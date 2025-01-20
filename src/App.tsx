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
  styles: {
    global: (props: { colorMode: string }) => ({
      body: {
        bg: props.colorMode === 'dark' 
          ? 'linear-gradient(to bottom right, #1a1c2b, #2d1b43)'
          : 'linear-gradient(to bottom right, #f7fafc, #e2e8f0)',
      },
    }),
  },
  components: {
    Button: {
      defaultProps: {
        colorScheme: 'blue',
      },
    },
  },
})

function App() {
  const { t } = useTranslation()
  const [notificationData, setNotificationData] = useState({
    orderNumber: '',
    storeName: '',
    amount: '',
    currency: 'TRY',
    quantity: '1',
    source: ''
  })

  return (
    <ChakraProvider theme={theme}>
      <Box minH="100vh" transition="background 0.2s ease">
        <Container maxW="container.xl" py={8}>
          <Flex justify="space-between" mb={8} align="center">
            <Box as="h1" fontSize="3xl" fontWeight="bold" color="white">
              {t('title')}
            </Box>
            <LanguageSwitcher />
          </Flex>
          <Flex gap={8} flexDirection={{ base: 'column', lg: 'row' }}>
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