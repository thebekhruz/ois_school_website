import React, { createContext, useContext, useEffect, ReactNode } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router';

type Language = 'ru' | 'uz' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  getLocalizedPath: (path: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

/**
 * Language Provider Component
 * 
 * Manages the current language state based on the URL parameter.
 * Provides utilities for language switching and generating localized paths.
 * 
 * @example
 * const { language, setLanguage, getLocalizedPath } = useLanguage();
 * 
 * // Get current language from URL
 * console.log(language); // 'ru', 'en', or 'uz'
 * 
 * // Switch language (updates URL)
 * setLanguage('en'); // /ru/about → /en/about
 * 
 * // Generate localized path
 * getLocalizedPath('programs/ib'); // '/ru/programs/ib' (if current language is 'ru')
 */
export function LanguageProvider({ children }: { children: ReactNode }) {
  const { lang } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  
  // Extract language from URL, default to 'ru'
  const language = (lang && ['ru', 'en', 'uz'].includes(lang) ? lang : 'ru') as Language;

  /**
   * Switch to a new language
   * Preserves the current path while changing the language prefix
   */
  const setLanguage = (newLang: Language) => {
    // Extract the path without the language prefix
    const currentPath = location.pathname.replace(/^\/(ru|en|uz)/, '') || '/';
    const newPath = `/${newLang}${currentPath === '/' ? '' : currentPath}`;
    navigate(newPath);
  };

  /**
   * Generate a localized path with the current language prefix
   * 
   * @param path - The path without language prefix (e.g., 'about' or 'programs/ib')
   * @returns The full path with language prefix (e.g., '/ru/about')
   */
  const getLocalizedPath = (path: string): string => {
    // Remove leading slash if present
    const cleanPath = path.startsWith('/') ? path.slice(1) : path;
    // Return path with current language prefix
    return `/${language}${cleanPath ? '/' + cleanPath : ''}`;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, getLocalizedPath }}>
      {children}
    </LanguageContext.Provider>
  );
}

/**
 * Hook to access language context
 * 
 * @throws {Error} If used outside of LanguageProvider
 * @returns Language context with current language, setLanguage function, and getLocalizedPath utility
 */
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}