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
          : 'linear-gradient(to bottom right, #f0f2f5, #ffffff)',
      },
    }),
  },
  components: {
    Button: {
      defaultProps: {
        colorScheme: 'blue',
      },
    },
    Box: {
      baseStyle: (props: { colorMode: string }) => ({
        color: props.colorMode === 'dark' ? 'white' : 'gray.800',
      }),
    },
    FormLabel: {
      baseStyle: (props: { colorMode: string }) => ({
        color: props.colorMode === 'dark' ? 'gray.300' : 'gray.600',
      }),
    },
    Input: {
      variants: {
        filled: (props: { colorMode: string }) => ({
          field: {
            bg: props.colorMode === 'dark' ? 'gray.900' : 'white',
            borderColor: props.colorMode === 'dark' ? 'gray.700' : 'gray.200',
            color: props.colorMode === 'dark' ? 'white' : 'gray.800',
            _hover: {
              bg: props.colorMode === 'dark' ? 'gray.800' : 'gray.50',
            },
            _focus: {
              bg: props.colorMode === 'dark' ? 'gray.800' : 'white',
              borderColor: 'blue.400',
            },
          },
        }),
      },
      defaultProps: {
        variant: 'filled',
      },
    },
  },
})

function App() {
  const { t } = useTranslation()
  const [notificationData, setNotificationData] = useState({
    orderNumber: '1001',
    storeName: 'Les Benjamins',
    amount: '4600',
    currency: 'TRY',
    quantity: '1',
    source: 'Online Store'
  })

  return (
    <ChakraProvider theme={theme}>
      <Box minH="100vh" transition="background 0.2s ease">
        <Container maxW="container.xl" py={8}>
          <Flex justify="space-between" mb={8} align="center">
            <Box as="h1" fontSize="3xl" fontWeight="bold">
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