'use client'

import { createContext, useContext, useState, ReactNode } from 'react'
import en from '../intl/en.json'
import es from '../intl/es.json'

type Locale = 'en' | 'es'

const messages = { en, es }

const LocaleContext = createContext<{
  locale: Locale
  setLocale: (locale: Locale) => void
  messages: Record<string, string>
}>({
  locale: 'en',
  setLocale: () => {},
  messages: en,
})

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>('en')

  return (
    <LocaleContext.Provider value={{ locale, setLocale, messages: messages[locale] }}>
      {children}
    </LocaleContext.Provider>
  )
}

export function useLocale() {
  return useContext(LocaleContext)
}
