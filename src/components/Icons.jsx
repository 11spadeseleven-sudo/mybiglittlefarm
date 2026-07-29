export function ArrowRightIcon({ size = 18 }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function MenuIcon({ open = false, size = 24 }) {
  return open ? (
    <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true">
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  ) : (
    <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true">
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function WhatsAppIcon({ size = 20 }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true">
      <path d="M20.5 11.7a8.5 8.5 0 0 1-12.6 7.4L3.5 20.5l1.4-4.3A8.5 8.5 0 1 1 20.5 11.7Z" />
      <path d="M8.4 7.8c.2-.5.5-.5.8-.5h.5c.2 0 .4.1.5.4l.7 1.7c.1.3.1.5-.1.7l-.6.7c-.2.2-.1.4 0 .6.6 1.1 1.4 1.9 2.5 2.5.2.1.4.2.6 0l.8-1c.2-.2.4-.3.7-.2l1.7.8c.3.1.4.3.4.5 0 .4-.2 1.2-.8 1.7-.6.5-1.4.8-2.2.6-1.2-.3-2.8-1-4.5-2.6-1.4-1.3-2.4-3-2.7-4.3-.2-.7.1-1.3.4-1.6Z" />
    </svg>
  );
}

export function PhoneIcon({ size = 18 }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true">
      <path d="M7.3 3.8 5.6 4.6c-.8.4-1.2 1.2-1 2.1 1 5.9 5.7 10.6 11.6 11.6.9.2 1.7-.2 2.1-1l.8-1.7c.3-.7.1-1.4-.5-1.8l-2.3-1.5c-.6-.4-1.3-.3-1.8.2l-1 1a12.1 12.1 0 0 1-4-4l1-1c.5-.5.6-1.2.2-1.8L9.1 4.3c-.4-.6-1.1-.8-1.8-.5Z" />
    </svg>
  );
}

export function LeafIcon({ size = 30 }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true">
      <path d="M20 4.5C13 4.6 7.8 7.1 6.2 11.2c-1 2.6-.3 5.4 1.7 7.3 1.9-2.1 4.3-4.1 7.4-5.8-2.4 1.8-4.5 4-6.2 6.5 2.7.8 5.7-.1 7.4-2.3C19.2 13.6 19.8 8.8 20 4.5Z" />
    </svg>
  );
}

export function PackageIcon({ size = 30 }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true">
      <path d="M4 7.5h16M5.5 7.5l1-3h11l1 3M5.5 7.5v12h13v-12M9 11.5h6" />
    </svg>
  );
}

export function CareIcon({ size = 30 }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true">
      <path d="M3 13.5h4l2 2h6.5c1.2 0 2.2.9 2.2 2.1S16.7 20 15.4 20H9.8a5 5 0 0 1-3.5-1.4L3 15.4v-1.9Z" />
      <path d="M11 8.2c0-1.7 1.3-3 3-3 .9 0 1.7.4 2.3 1 .5-.6 1.4-1 2.2-1 1.7 0 3 1.3 3 3 0 2.4-2.2 4.2-5.2 6.2-3-2-5.3-3.8-5.3-6.2Z" />
    </svg>
  );
}

export function MessageIcon({ size = 30 }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true">
      <path d="M4 5h16v11H9l-5 4V5Z" />
      <path d="M8 9h8M8 12h6" />
    </svg>
  );
}

export function CheckIcon({ size = 18 }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true">
      <path d="m6 12 4 4 8-9" />
    </svg>
  );
}

export function FacebookIcon({ size = 18 }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true">
      <path d="M14 8h3V4h-3c-3 0-5 2-5 5v3H6v4h3v5h4v-5h3l1-4h-4V9c0-.7.3-1 1-1Z" />
    </svg>
  );
}

export function InstagramIcon({ size = 18 }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true">
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.7" cy="6.6" r=".8" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function TikTokIcon({ size = 18 }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true">
      <path d="M14 4v10.2a4 4 0 1 1-3.1-3.9" />
      <path d="M14 4c.6 2.5 2.1 4 4.5 4.5" />
    </svg>
  );
}

export function UserIcon({ size = 24 }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true">
      <circle cx="12" cy="8" r="3.4" />
      <path d="M5.5 20c.4-4 2.7-6.2 6.5-6.2s6.1 2.2 6.5 6.2" />
    </svg>
  );
}

export function EggIcon({ size = 28 }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true">
      <path d="M12 3.5c-3 0-6.2 5.1-6.2 10.1A6.2 6.2 0 0 0 12 20a6.2 6.2 0 0 0 6.2-6.4C18.2 8.6 15 3.5 12 3.5Z" />
      <path d="M10 9.2h.01M14.6 12.2h.01M9.2 14.6h.01" />
    </svg>
  );
}

export function StoreIcon({ size = 28 }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true">
      <path d="M4 9h16l-1.4-4H5.4L4 9Z" />
      <path d="M5 9v10h14V9M8 19v-5h4v5M4 9c0 1.3 1 2.3 2.3 2.3S8.7 10.3 8.7 9c0 1.3 1 2.3 2.3 2.3s2.3-1 2.3-2.3c0 1.3 1 2.3 2.3 2.3S18 10.3 18 9" />
    </svg>
  );
}

export function HomeIcon({ size = 28 }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true">
      <path d="m3.5 11 8.5-7 8.5 7" />
      <path d="M5.5 9.5V20h13V9.5M9.5 20v-6h5v6" />
    </svg>
  );
}

export function RestaurantIcon({ size = 28 }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true">
      <path d="M7 3v8M4.5 3v5.2A2.8 2.8 0 0 0 7.3 11H9.5V3M7.3 11v10" />
      <path d="M16.7 3c-2 1.2-3 3.6-3 6.2 0 2.3.9 4.2 2.8 4.2h1.1V21M17.6 3v10.4" />
    </svg>
  );
}

export function LocationIcon({ size = 24 }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true">
      <path d="M20 10c0 5.1-8 11-8 11S4 15.1 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.7" />
    </svg>
  );
}
