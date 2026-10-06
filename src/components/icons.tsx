type IconProps = { className?: string };

/** The Orange Banana mark, taken from the logo file. */
export function LogoMark({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 123.816 172.046"
      fill="currentColor"
      fillRule="nonzero"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M 101.960938 111.640625 C 91.429688 111.640625 82.414062 105.382812 78.265625 96.421875 C 75.90625 118.371094 66.507812 139.214844 50.636719 157.257812 C 48.148438 160.089844 47.925781 164.058594 50.082031 167.121094 C 52.492188 170.542969 57.175781 171.886719 61.210938 170.292969 C 94.640625 157.066406 117.828125 130.472656 123.585938 100.191406 C 118.875 107.105469 110.949219 111.640625 101.960938 111.640625" />
      <path d="M 50.644531 13.710938 C 66.507812 31.742188 75.902344 52.597656 78.265625 74.535156 C 82.414062 65.5625 91.429688 59.308594 101.960938 59.308594 C 110.949219 59.308594 118.875 63.855469 123.582031 70.753906 C 117.824219 40.492188 94.640625 13.902344 61.21875 0.664062 C 60.070312 0.21875 58.871094 -0.00390625 57.695312 -0.00390625 C 54.699219 -0.00390625 51.804688 1.378906 50.074219 3.847656 C 47.917969 6.917969 48.148438 10.878906 50.644531 13.710938" />
      <path d="M 52.578125 85.472656 C 52.578125 71.023438 40.863281 59.308594 26.414062 59.308594 C 11.964844 59.308594 0.25 71.023438 0.25 85.472656 C 0.25 99.925781 11.964844 111.640625 26.414062 111.640625 C 40.863281 111.640625 52.578125 99.925781 52.578125 85.472656" />
    </svg>
  );
}

/** The arrow used on every call to action. */
export function ArrowRight({ className }: IconProps) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg>
  );
}

export function ArrowDown({ className }: IconProps) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
    </svg>
  );
}

export function MenuIcon({ className }: IconProps) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}

export function CloseIcon({ className }: IconProps) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}
