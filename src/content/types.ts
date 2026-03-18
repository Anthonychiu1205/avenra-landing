export type Locale = "zh" | "en";

export type NavItem = { href: string; label: string };

export interface LandingContent {
  navbar: {
    nav: NavItem[];
    ctaLabel: string;
    langSwitchLabel: string;
  };
  hero: {
    title: string[];
    subtitle: string[];
    supportingLine?: string;
    trustLine?: string;
    primaryBtn: string;
    secondaryBtn: string;
    benefits?: string[];
  };
  heroPreview: {
    patientsLabel: string;
    doctorCol1: string;
    doctorCol2: string;
    timeLabels: string[];
    patientNames: string[];
    selectedTime: string;
    dateLabel: string;
    todayLabel: string;
    consultLabel: string;
    treatmentLabel: string;
    analyticsTodayLabel: string;
    analyticsDoneLabel: string;
    analyticsPendingLabel: string;
  };
  trustStrip: {
    items: string[];
  };
  painPoints: {
    title: string[];
    items: string[];
  };
  solution: {
    title: string;
    body: string;
    features: { title: string; desc: string }[];
  };
  coreFeatures: {
    sectionTitle: string;
    features: { title: string; desc: string }[];
  };
  productScreenshots: {
    title: string;
    cards: { label: string }[];
    mockDoctorLabels: [string, string, string];
    mockBookingLabel: string;
    mockTodayLabel: string;
    mockDoneLabel: string;
  };
  howItWorks: {
    title: string;
    steps: string[];
  };
  integrations: {
    title: string;
    names: string[];
  };
  pricing: {
    title: string;
    starter: string;
    growth: string;
    enterprise: string;
    starterDesc: string;
    growthDesc: string;
    enterpriseDesc: string;
    cta: string;
    contactUs: string;
  };
  finalCta: {
    title: string;
    primary: string;
    secondary: string;
  };
  footer: {
    product: string;
    solutions: string;
    pricing: string;
    caseStudies: string;
    contact: string;
    email: string;
    line: string;
    copyright: string;
    langLabel: string;
  };
}
