// INFO: for numeric values,`null` means unlimited
// All limits set to unlimited for self-hosted version

export type TPlanLimits = {
  users: number | null;
  links: number | null;
  documents: number | null;
  domains: number | null;
  datarooms: number | null;
  customDomainOnPro: boolean;
  customDomainInDataroom: boolean;
  advancedLinkControlsOnPro: boolean | null;
  watermarkOnBusiness?: boolean | null;
  agreementOnBusiness?: boolean | null;
};

const UNLIMITED_LIMITS = {
  users: null,
  links: null,
  documents: null,
  domains: null,
  datarooms: null,
  customDomainOnPro: true,
  customDomainInDataroom: true,
  advancedLinkControlsOnPro: true,
  watermarkOnBusiness: true,
  agreementOnBusiness: true,
  conversationsInDataroom: true,
  fileSizeLimits: {
    video: null,
    document: null,
    image: null,
    excel: null,
    maxFiles: null,
    maxPages: null,
  },
};

export const FREE_PLAN_LIMITS = UNLIMITED_LIMITS;
export const PRO_PLAN_LIMITS = UNLIMITED_LIMITS;
export const BUSINESS_PLAN_LIMITS = UNLIMITED_LIMITS;
export const DATAROOMS_PLAN_LIMITS = UNLIMITED_LIMITS;
export const DATAROOMS_PLUS_PLAN_LIMITS = UNLIMITED_LIMITS;

export const PAUSED_PLAN_LIMITS = {
  // No restrictions - pausing disabled
  canCreateLinks: true,
  canReceiveViews: true,
  canCreateDocuments: true,
  canCreateDatarooms: true,
  canViewAnalytics: true,
  canAccessExistingContent: true,
};
