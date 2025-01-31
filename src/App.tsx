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
          ? 'linear-gradient(135deg, #0f172a, #1e1b4b)'
          : 'linear-gradient(to bottom right, #f0f2f5, #ffffff)',
      },
    }),
  },
  components: {
    Button: {
      defaultProps: {
        colorScheme: 'green',
      },
      variants: {
        solid: {
          bg: '#10b981',
          color: 'white',
          _hover: {
            bg: '#059669',
          },
        },
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
        marginBottom: '2',
        fontSize: 'sm',
      }),
    },
    Input: {
      variants: {
        filled: (props: { colorMode: string }) => ({
          field: {
            bg: 'rgba(30, 41, 59, 0.5)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: 'lg',
            color: props.colorMode === 'dark' ? 'white' : 'gray.800',
            height: '48px',
            _hover: {
              bg: 'rgba(30, 41, 59, 0.7)',
            },
            _focus: {
              bg: 'rgba(30, 41, 59, 0.7)',
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
    orderNumber: 'DP59253',
    storeName: 'Dali Pups',
    amount: '3489.90',
    currency: 'TRY',
    quantity: '1',
    source: 'Online Mağaza'
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