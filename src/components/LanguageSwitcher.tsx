import { Select, useColorModeValue } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const bg = useColorModeValue('white', 'gray.700');

  const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <Select
      value={i18n.language}
      onChange={handleLanguageChange}
      width="auto"
      size="sm"
      bg={bg}
      borderRadius="md"
    >
      <option value="tr">Türkçe</option>
      <option value="en">English</option>
    </Select>
  );
};

export default LanguageSwitcher; 