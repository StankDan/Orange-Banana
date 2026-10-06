import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router";
import Layout from "./components/Layout";
import { ConsentProvider } from "./consent/ConsentContext";
import HomePage from "./pages/HomePage";

// Everything but the home page loads on demand, so the first visit stays light.
const WhoWeWorkWithPage = lazy(() => import("./pages/WhoWeWorkWithPage"));
const ApproachPage = lazy(() => import("./pages/ApproachPage"));
const WhatWeDoPage = lazy(() => import("./pages/WhatWeDoPage"));
const InsightsPage = lazy(() => import("./pages/InsightsPage"));
const StrategicAdviceGapArticle = lazy(() => import("./pages/StrategicAdviceGapArticle"));
const AonUsiArticle = lazy(() => import("./pages/AonUsiArticle"));
const RenewalBookArticle = lazy(() => import("./pages/RenewalBookArticle"));
const FoundingPartnersPage = lazy(() => import("./pages/FoundingPartnersPage"));
const InsurtechPage = lazy(() => import("./pages/InsurtechPage"));
const MessagingAuditPage = lazy(() => import("./pages/MessagingAuditPage"));
const StartConversationPage = lazy(() => import("./pages/StartConversationPage"));
const PrivacyPage = lazy(() => import("./pages/PrivacyPage"));
const TermsPage = lazy(() => import("./pages/TermsPage"));
const CookiesPage = lazy(() => import("./pages/CookiesPage"));

export default function App() {
  return (
    <ConsentProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="who-we-work-with" element={<WhoWeWorkWithPage />} />
          <Route path="approach" element={<ApproachPage />} />
          <Route path="what-we-do" element={<WhatWeDoPage />} />
          <Route path="insights" element={<InsightsPage />} />
          <Route path="insights/strategic-advice-gap" element={<StrategicAdviceGapArticle />} />
          <Route path="insights/aon-usi-middle-market" element={<AonUsiArticle />} />
          <Route path="insights/renewal-book-2027" element={<RenewalBookArticle />} />
          <Route path="founding-partners" element={<FoundingPartnersPage />} />
          <Route path="insurtech" element={<InsurtechPage />} />
          <Route path="messaging-audit" element={<MessagingAuditPage />} />
          <Route path="start-a-conversation" element={<StartConversationPage />} />
          <Route path="privacy" element={<PrivacyPage />} />
          <Route path="terms" element={<TermsPage />} />
          <Route path="cookies" element={<CookiesPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </ConsentProvider>
  );
}
