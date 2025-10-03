const mylogo = (
  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="coolGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#667eea;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#764ba2;stop-opacity:1" />
      </linearGradient>
      <linearGradient id="lightGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#4facfe;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#00f2fe;stop-opacity:1" />
      </linearGradient>
    </defs>

    <circle
      cx="100"
      cy="100"
      r="90"
      fill="none"
      stroke="url(#lightGradient)"
      stroke-width="2"
      opacity="0.3"
    />

    <circle
      cx="100"
      cy="100"
      r="75"
      fill="none"
      stroke="url(#coolGradient)"
      stroke-width="3"
      opacity="0.5"
    />

    <path
      d="M 100 55 L 120 95 L 112 95 L 108 85 L 92 85 L 88 95 L 80 95 Z M 95 78 L 105 78 L 100 65 Z"
      fill="url(#coolGradient)"
    />

    <circle cx="125" cy="95" r="3" fill="url(#lightGradient)" />

    <text
      x="100"
      y="125"
      font-family="Arial, sans-serif"
      font-size="20"
      font-weight="300"
      fill="url(#coolGradient)"
      text-anchor="middle"
      letter-spacing="2"
    >
      Jamil
    </text>

    <line
      x1="70"
      y1="135"
      x2="130"
      y2="135"
      stroke="url(#lightGradient)"
      stroke-width="1"
      opacity="0.5"
    />

    <circle cx="65" cy="135" r="2" fill="url(#coolGradient)" opacity="0.6" />
    <circle cx="135" cy="135" r="2" fill="url(#coolGradient)" opacity="0.6" />
  </svg>
);

const HEADER_1 = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-5 h-5"
  >
    <path
      fillRule="evenodd"
      d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
      clipRule="evenodd"
    />
  </svg>
);

const HERO_1 = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-4 w-4 mr-1"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
      clipRule="evenodd"
    />
  </svg>
);

const HERO_2 = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-4 w-4 mr-1"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
      clipRule="evenodd"
    />
  </svg>
);

const HERO_3 = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z"
      clipRule="evenodd"
    />
  </svg>
);
