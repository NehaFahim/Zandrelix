export function ReactIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#61dafb" strokeWidth="1.4">
      <ellipse cx="12" cy="12" rx="10" ry="4.2" />
      <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(120 12 12)" />
      <circle cx="12" cy="12" r="1.8" fill="#61dafb" stroke="none" />
    </svg>
  );
}

export function NextJsIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" fill="#fff" />
      <path d="M9.5 8v8M9.5 8l6 8" stroke="#000" strokeWidth="1.4" fill="none" />
    </svg>
  );
}

export function ReactNativeIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#61dafb" strokeWidth="1.4">
      <rect x="4" y="7" width="16" height="12" rx="2" />
      <path d="M8 7V5.5A1.5 1.5 0 0 1 9.5 4h5A1.5 1.5 0 0 1 16 5.5V7" />
    </svg>
  );
}

export function NodeJsIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#68a063" strokeWidth="1.5">
      <path d="M12 2 21 7v10l-9 5-9-5V7l9-5Z" />
    </svg>
  );
}

export function MongoDbIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#4db33d" strokeWidth="1.5">
      <path d="M12 2c3 4 5 8 5 12a5 5 0 0 1-10 0c0-4 2-8 5-12Z" />
    </svg>
  );
}

export function FirebaseIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#ffcb2b" strokeWidth="1.5">
      <path d="M7 3 5 14h5l-1 7 9-12h-6l2-6H7Z" />
    </svg>
  );
}

export function TailwindIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="1.6">
      <path d="M12 6c-2.7 0-4.3 1.3-5 4 1-1.3 2.2-1.8 3.5-1.5.8.2 1.3.8 2 1.5.9.9 2 2 4.5 2 2.7 0 4.3-1.3 5-4-1 1.3-2.2 1.8-3.5 1.5-.8-.2-1.3-.8-2-1.5-.9-.9-2-2-4.5-2ZM6.5 12c-2.7 0-4.3 1.3-5 4 1-1.3 2.2-1.8 3.5-1.5.8.2 1.3.8 2 1.5.9.9 2 2 4.5 2 2.7 0 4.3-1.3 5-4-1 1.3-2.2 1.8-3.5 1.5-.8-.2-1.3-.8-2-1.5-.9-.9-2-2-4.5-2Z" />
    </svg>
  );
}

export function TypeScriptIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#3178c6" strokeWidth="1.6">
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M8.5 12h5M11 12v6" strokeLinecap="round" />
    </svg>
  );
}

export function JavaScriptIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#f7df1e" strokeWidth="1.6">
      <rect x="3" y="3" width="18" height="18" rx="3" />
    </svg>
  );
}

export function FigmaIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="1.5">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 3v18M3 12h18" opacity=".4" />
    </svg>
  );
}

export function PythonIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#ffd43b" strokeWidth="1.6">
      <circle cx="9" cy="9" r="5" />
      <circle cx="15" cy="15" r="5" />
    </svg>
  );
}

export function ShopifyIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#95bf47" strokeWidth="1.5">
      <path d="M16 7c0-2-1-4-4-4S8 5 8 7" />
      <path d="M6 7h12l1 14H5L6 7Z" />
    </svg>
  );
}
