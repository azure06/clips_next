export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID;

const pageTitleByPath = (path: string) => {
  switch (path) {
    case '/':
      return 'Home';
    case '/features':
      return 'Features';
    case '/premium':
      return 'Premium';
    case '/blog':
      return 'Blog';
    case '/about':
      return 'About';
    case '/contact':
      return 'Contact';
    case '/privacy':
      return 'Privacy';
    case '/app/privacy':
      return 'App Privacy';
    case '/blog/introduction':
      return 'Blog:Introduction';
    case '/blog/student-review':
      return 'Blog:StudentReview';
    default:
      path;
  }
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: URL): void => {
  window.gtag('config', GA_TRACKING_ID, {
    page_title: pageTitleByPath(url as any),
    page_location: window.location.href,
    page_path: url,
  });
};

type GTagEvent = {
  action: string;
  category: string;
  label: string;
  value: number;
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }: GTagEvent): void => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};
