import { Button, HStack, IconButton, useColorMode } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <HStack spacing={2}>
      <Button
        size="sm"
        variant={i18n.language === 'tr' ? 'solid' : 'ghost'}
        onClick={() => i18n.changeLanguage('tr')}
        leftIcon={<span style={{ fontSize: '1.2em' }}>🇹🇷</span>}
        colorScheme="blue"
        _hover={{ bg: i18n.language === 'tr' ? 'blue.600' : 'whiteAlpha.200' }}
      >
        TR
      </Button>
      <Button
        size="sm"
        variant={i18n.language === 'en' ? 'solid' : 'ghost'}
        onClick={() => i18n.changeLanguage('en')}
        leftIcon={<span style={{ fontSize: '1.2em' }}>🇬🇧</span>}
        colorScheme="blue"
        _hover={{ bg: i18n.language === 'en' ? 'blue.600' : 'whiteAlpha.200' }}
      >
        EN
      </Button>
      <IconButton
        aria-label="Toggle color mode"
        icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
        onClick={toggleColorMode}
        size="sm"
        colorScheme="blue"
        variant="ghost"
        _hover={{ bg: 'whiteAlpha.200' }}
      />
    </HStack>
  );
};

export default LanguageSwitcher; 