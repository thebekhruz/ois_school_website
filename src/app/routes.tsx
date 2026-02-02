import { createBrowserRouter, Outlet, Navigate, useParams } from 'react-router';
import type { RouteObject } from 'react-router';
import { PageLayout } from '@/app/components/PageLayout';
import { LanguageProvider } from '@/app/contexts/LanguageContext';

// Pages
import { HomePage } from '@/app/pages/HomePage';
import { AboutPage } from '@/app/pages/AboutPage';
import { RussianSchoolPage } from '@/app/pages/RussianSchoolPage';
import { BenefitsPage } from '@/app/pages/BenefitsPage';
import { AdmissionPage } from '@/app/pages/AdmissionPage';
import { GalleryPage } from '@/app/pages/GalleryPage';
import { NewsPage } from '@/app/pages/NewsPage';
import { FAQPage } from '@/app/pages/FAQPage';
import { TeamPage } from '@/app/pages/TeamPage';
import { CareersPage } from '@/app/pages/CareersPage';
import { ContactPage } from '@/app/pages/ContactPage';
import { NotFoundPage } from '@/app/pages/NotFoundPage';

// New Program Pages
import { EarlyYearsPage } from '@/app/pages/programs/EarlyYearsPage';
import { PrimarySchoolPage } from '@/app/pages/programs/PrimarySchoolPage';
import { HighSchoolPage } from '@/app/pages/programs/HighSchoolPage';
import { ComparePage } from '@/app/pages/programs/ComparePage';
import { IBProgramPage } from '@/app/pages/programs/IBProgramPage';

// Admissions Pages
import { ApplyPage } from '@/app/pages/admissions/ApplyPage';
import { TuitionPage } from '@/app/pages/admissions/TuitionPage';

// About Pages
import { WhyPage } from '@/app/pages/about/WhyPage';
import { CampusesPage } from '@/app/pages/about/CampusesPage';
import { StudentLifePage } from '@/app/pages/about/StudentLifePage';
import { OutcomesPage } from '@/app/pages/about/OutcomesPage';

// Contact Pages
import { TourPage } from '@/app/pages/contact/TourPage';

// Legal Pages
import { PrivacyPage } from '@/app/pages/PrivacyPage';
import { TermsPage } from '@/app/pages/TermsPage';

/**
 * Layout wrapper component with language validation
 * 
 * URL Structure:
 * - /ru/          → Russian homepage
 * - /en/          → English homepage
 * - /uz/          → Uzbek homepage
 * - /ru/about/    → Russian about page
 * - /en/programs/early-years → English early years page
 * 
 * Invalid language codes redirect to /ru/
 */
function LanguageLayout() {
  const { lang } = useParams();
  const validLanguages = ['ru', 'en', 'uz'];
  
  if (lang && !validLanguages.includes(lang)) {
    return <Navigate to="/ru" replace />;
  }
  
  return (
    <LanguageProvider>
      <PageLayout>
        <Outlet />
      </PageLayout>
    </LanguageProvider>
  );
}

export const router = createBrowserRouter([
  // Root path redirects to Russian by default
  {
    path: '/',
    element: <Navigate to="/ru" replace />,
  },
  // All routes are prefixed with language code
  {
    path: '/:lang',
    element: <LanguageLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'about',
        element: <AboutPage />,
      },
      // Programs
      {
        path: 'programs/kindergarten',
        element: <EarlyYearsPage />,
      },
      {
        path: 'programs/early-years',
        element: <Navigate to="../kindergarten" replace />,
      },
      {
        path: 'programs/primary-school',
        element: <PrimarySchoolPage />,
      },
      {
        path: 'programs/high-school',
        element: <HighSchoolPage />,
      },
      {
        path: 'programs/ib',
        element: <IBProgramPage />,
      },
      {
        path: 'programs/russian',
        element: <RussianSchoolPage />,
      },
      {
        path: 'programs/compare',
        element: <ComparePage />,
      },
      // Admissions
      {
        path: 'admissions/apply',
        element: <ApplyPage />,
      },
      {
        path: 'admissions/tuition',
        element: <TuitionPage />,
      },
      {
        path: 'admission',
        element: <AdmissionPage />,
      },
      // About
      {
        path: 'about/why',
        element: <WhyPage />,
      },
      {
        path: 'about/campuses',
        element: <CampusesPage />,
      },
      {
        path: 'about/student-life',
        element: <StudentLifePage />,
      },
      {
        path: 'about/outcomes',
        element: <OutcomesPage />,
      },
      // Other pages
      {
        path: 'benefits',
        element: <BenefitsPage />,
      },
      {
        path: 'gallery',
        element: <GalleryPage />,
      },
      {
        path: 'news',
        element: <NewsPage />,
      },
      {
        path: 'faq',
        element: <FAQPage />,
      },
      {
        path: 'team',
        element: <TeamPage />,
      },
      {
        path: 'careers',
        element: <CareersPage />,
      },
      // Contact
      {
        path: 'contact',
        element: <ContactPage />,
      },
      {
        path: 'contact/tour',
        element: <TourPage />,
      },
      // Legal
      {
        path: 'privacy',
        element: <PrivacyPage />,
      },
      {
        path: 'terms',
        element: <TermsPage />,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
  // Catch-all for invalid paths
  {
    path: '*',
    element: <Navigate to="/ru" replace />,
  },
]);