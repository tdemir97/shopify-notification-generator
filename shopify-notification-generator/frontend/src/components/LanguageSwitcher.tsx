import React from 'react';
import { Button, HStack } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'tr' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <HStack spacing={2}>
      <Button
        size="sm"
        variant="ghost"
        onClick={toggleLanguage}
        fontWeight="medium"
      >
        {i18n.language === 'en' ? '🇹🇷 TR' : '🇺🇸 EN'}
      </Button>
    </HStack>
  );
};

export default LanguageSwitcher; 