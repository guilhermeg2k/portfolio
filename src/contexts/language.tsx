import { createContext, useState, useEffect, ReactNode } from "react";

interface LanguageProviderProps {
  children: ReactNode;
}

interface LanguageContextData {
  language: Language;
  setLanguage: (language: Language) => void;
}

export enum Language {
  en,
  pt 
}

export const LanguageContext = createContext({} as LanguageContextData);

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguage] = useState(0 as Language);
  return (
    <LanguageContext.Provider
      value={
        {
          language,
          setLanguage
        }
      }
    >
      {children}
    </LanguageContext.Provider>
  )
}
