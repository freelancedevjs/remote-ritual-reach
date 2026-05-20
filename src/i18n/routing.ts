import { defineRouting } from 'next-intl/routing'

export const routing = defineRouting({
  locales: [
    'en', 'hi', 'pa', 'ta', 'te', 'gu',
    'ar', 'ur', 'bn',
    'he', 'es', 'fr', 'de', 'pt', 'ru',
    'zh', 'ja', 'ko',
    'ms', 'id',
  ],
  defaultLocale: 'en',
  localePrefix: 'as-needed',
})
