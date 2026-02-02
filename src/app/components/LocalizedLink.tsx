import { Link, LinkProps } from 'react-router';
import { useLanguage } from '@/app/contexts/LanguageContext';
import { ReactNode } from 'react';

interface LocalizedLinkProps extends Omit<LinkProps, 'to'> {
  to: string;
  children: ReactNode;
}

/**
 * A wrapper around Link that automatically adds the current language prefix to paths.
 * 
 * @example
 * <LocalizedLink to="about">About Us</LocalizedLink>
 * // Renders: <Link to="/ru/about"> if current language is 'ru'
 */
export function LocalizedLink({ to, children, ...props }: LocalizedLinkProps) {
  const { getLocalizedPath } = useLanguage();
  
  return (
    <Link to={getLocalizedPath(to)} {...props}>
      {children}
    </Link>
  );
}
