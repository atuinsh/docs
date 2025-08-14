import en from './en.json';
import ptBr from './pt-br.json';

const languages = {
  en,
  'pt-br': ptBr,
};

export function getLangFromUrl(url: URL) {
  const parts = url.pathname.split('/');
  if (parts[1] && Object.keys(languages).includes(parts[1])) {
    return parts[1];
  }
  return 'en'; // Default language
}

export function useTranslations(lang: keyof typeof languages) {
  return function t(key: keyof typeof languages['en']) {
    return languages[lang][key] || key;
  }
}