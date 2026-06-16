/// <reference types="vite/client" />

const PROVIDED_JOTFORM_WIDGET_ID = '019e8d1eb29f770e9812e675798285c79a2d';

export const reviewsConfig = {
  businessName: 'JitanSports',
  rating: '5.0',
  ratingValue: 5.0,
  maxRating: 5,
  provider: 'Google Reviews',
  reviewProofText: 'Gebaseerd op echte klantbeoordelingen',
  jotformWidgetId: import.meta.env.VITE_JOTFORM_WIDGET_ID || PROVIDED_JOTFORM_WIDGET_ID || 'JOTFORM_WIDGET_ID',
  googleReviewUrl: import.meta.env.VITE_GOOGLE_REVIEW_URL || 'GOOGLE_REVIEW_URL',
  carousel: {
    desktopVisibleReviews: 3,
    tabletVisibleReviews: 2,
    mobileVisibleReviews: 1,
    autoplayMs: 5000,
    infiniteLoop: true,
    navigation: 'arrows-swipe',
  },
  fullWidget: {
    layout: 'grid',
    lazyLoad: true,
  },
  placeholders: {
    jotformWidgetId: 'JOTFORM_WIDGET_ID',
    googleReviewUrl: 'GOOGLE_REVIEW_URL',
  },
};

export function isConfiguredReviewValue(value: string | undefined) {
  if (!value) return false;
  return !Object.values(reviewsConfig.placeholders).some((placeholder) => value.includes(placeholder));
}

export const isJotformConfigured = isConfiguredReviewValue(reviewsConfig.jotformWidgetId);
export const isGoogleReviewUrlConfigured = isConfiguredReviewValue(reviewsConfig.googleReviewUrl);