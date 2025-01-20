import { Button, HStack, IconButton, useColorMode } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const { colorMode, toggleColorMode } = useColorMode();

  const TRFlag = () => (
    <svg width="24" height="24" viewBox="0 0 512 512" fill="none">
      <path d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0 0 114.6 0 256s114.6 256 256 256z" fill="#D80027"/>
      <path d="M256 128c-70.7 0-128 57.3-128 128s57.3 128 128 128 128-57.3 128-128-57.3-128-128-128zm0 219.4l-39.8-39.8 39.8-39.8 39.8 39.8-39.8 39.8z" fill="#F0F0F0"/>
      <path d="M350.8 196.6l-39.8 39.8-39.8-39.8 39.8-39.8 39.8 39.8zm-149.6 0l39.8 39.8-39.8 39.8-39.8-39.8 39.8-39.8z" fill="#F0F0F0"/>
    </svg>
  );

  const ENFlag = () => (
    <svg width="24" height="24" viewBox="0 0 512 512" fill="none">
      <path d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0 0 114.6 0 256s114.6 256 256 256z" fill="#F0F0F0"/>
      <path d="M512 256c0-23.1-3.1-45.4-8.8-66.7H8.8C3.1 210.6 0 233 0 256c0 23.1 3.1 45.4 8.8 66.7h494.4c5.7-21.3 8.8-43.6 8.8-66.7z" fill="#0052B4"/>
      <path d="M256 512c97.5 0 182.5-52.8 228.3-131.3H27.7C73.5 459.2 158.5 512 256 512zM27.7 131.3h456.6C438.5 52.8 353.5 0 256 0S73.5 52.8 27.7 131.3z" fill="#D80027"/>
    </svg>
  );

  return (
    <HStack spacing={2}>
      <Button
        size="sm"
        variant={i18n.language === 'tr' ? 'solid' : 'ghost'}
        onClick={() => i18n.changeLanguage('tr')}
        leftIcon={<TRFlag />}
        colorScheme="blue"
        _hover={{ bg: i18n.language === 'tr' ? 'blue.600' : 'whiteAlpha.200' }}
      >
        TR
      </Button>
      <Button
        size="sm"
        variant={i18n.language === 'en' ? 'solid' : 'ghost'}
        onClick={() => i18n.changeLanguage('en')}
        leftIcon={<ENFlag />}
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