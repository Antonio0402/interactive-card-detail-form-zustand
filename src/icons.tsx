export const CardLogo = () => (
  <svg width="84" height="47" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="23.478" cy="23.5" rx="23.478" ry="23.5" fill="#fff" />
    <path
      d="M83.5 23.5c0 5.565-4.507 10.075-10.065 10.075-5.559 0-10.065-4.51-10.065-10.075 0-5.565 4.506-10.075 10.065-10.075 5.558 0 10.065 4.51 10.065 10.075Z"
      stroke="#fff"
    />
  </svg>
);

export const IconComplete = () => (
  <svg width="80" height="80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="40" cy="40" r="40" fill="url(#a)" />
    <path d="M28 39.92 36.08 48l16-16" stroke="#fff" strokeWidth="3" />
    <defs>
      <linearGradient
        id="a"
        x1="-23.014"
        y1="11.507"
        x2="0"
        y2="91.507"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#6348FE" />
        <stop offset="1" stopColor="#610595" />
      </linearGradient>
    </defs>
  </svg>
);

export const IconInfo = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
    />
  </svg>
);
