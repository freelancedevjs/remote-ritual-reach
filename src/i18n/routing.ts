import { defineRouting } from 'next-intl/routing'

export const routing = defineRouting({
  locales: ['en', 'hi', 'pa', 'ta', 'te', 'gu', 'ar', 'ur', 'bn', 'de', 'ja', 'pt'],
  defaultLocale: 'en',
  localePrefix: 'as-needed'
})
