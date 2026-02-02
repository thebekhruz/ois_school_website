/**
 * Oxbridge International School Color System
 * 
 * This file provides a centralized color system for the entire application.
 * Use these constants instead of hardcoded hex values for consistent theming.
 */

export const colors = {
  // Primary Navy
  navy: {
    DEFAULT: '#2A4578',
    light: '#2F5DA1',
    dark: '#0D3174',
    gradient: 'from-[#2A4578] to-[#2F5DA1]',
  },
  
  // Accent Red
  red: {
    DEFAULT: '#AD2D32',
    dark: '#AC2421',
    gradient: 'from-[#AD2D32] to-[#8B2327]',
  },
  
  // Bright Yellow
  yellow: {
    DEFAULT: '#FCDA49',
    icon: '#FDC300',
    gradient: 'from-[#FCDA49] to-[#FDC300]',
  },
  
  // Light Blue
  lightBlue: '#D2E2F2',
  
  // Legacy color mapping (for gradual migration)
  legacy: {
    oldNavy: '#003A70',
    oldNavyDark: '#001a3d',
    oldNavyMedium: '#003c79',
    oldRed: '#C41E3A',
    oldRedDark: '#A01830',
    oldYellow: '#FFD700',
    oldYellowDark: '#FFC700',
  },
} as const;

// Tailwind class helpers
export const bgGradients = {
  navy: 'bg-gradient-to-br from-[#2A4578] to-[#2F5DA1]',
  red: 'bg-gradient-to-br from-[#AD2D32] to-[#8B2327]',
  yellow: 'bg-gradient-to-br from-[#FCDA49] to-[#FDC300]',
} as const;

export const textColors = {
  navy: 'text-[#2A4578]',
  navyLight: 'text-[#2F5DA1]',
  navyDark: 'text-[#0D3174]',
  red: 'text-[#AD2D32]',
  redDark: 'text-[#AC2421]',
  yellow: 'text-[#FCDA49]',
  yellowIcon: 'text-[#FDC300]',
  lightBlue: 'text-[#D2E2F2]',
} as const;

export const bgColors = {
  navy: 'bg-[#2A4578]',
  navyLight: 'bg-[#2F5DA1]',
  navyDark: 'bg-[#0D3174]',
  red: 'bg-[#AD2D32]',
  redDark: 'bg-[#AC2421]',
  yellow: 'bg-[#FCDA49]',
  yellowIcon: 'bg-[#FDC300]',
  lightBlue: 'bg-[#D2E2F2]',
} as const;

export const borderColors = {
  navy: 'border-[#2A4578]',
  red: 'border-[#AD2D32]',
  yellow: 'border-[#FCDA49]',
} as const;
