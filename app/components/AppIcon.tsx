export type IconName =
  | "crown"
  | "live"
  | "slot"
  | "fish"
  | "lottery"
  | "sports"
  | "cards"
  | "esports"
  | "news"
  | "shield"
  | "support"
  | "phone"
  | "message"
  | "line"
  | "spark"
  | "wallet"
  | "globe"
  | "star";

export default function AppIcon({
  name,
  className,
}: {
  name: IconName;
  className?: string;
}) {
  switch (name) {
    case "crown":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="currentColor">
          <path d="M3.5 18.5h17l-1 2h-15z" />
          <path d="M5 7.5 9 12l3-8 3 8 4-4.5 1.5 10h-17z" />
          <circle cx="5" cy="7" r="1.2" />
          <circle cx="12" cy="4.2" r="1.2" />
          <circle cx="19" cy="7" r="1.2" />
        </svg>
      );
    case "live":
      return (
        <svg
          viewBox="0 0 24 24"
          className={className}
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.8"
        >
          <rect x="4" y="6" width="16" height="12" rx="2.5" />
          <path d="m10 10 5 2-5 2zM8 4.5h8M8 19.5h8" />
        </svg>
      );
    case "slot":
      return (
        <svg
          viewBox="0 0 24 24"
          className={className}
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.8"
        >
          <rect x="5" y="4.5" width="14" height="15" rx="2.5" />
          <path d="M8 8.5h8M8 12h3m2 0h3M8 15.5h8M19 8l2-1.5v8L19 13" />
        </svg>
      );
    case "fish":
      return (
        <svg
          viewBox="0 0 24 24"
          className={className}
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.8"
        >
          <path d="M5 12c2.5-4 7-5.5 11-5l3-2v14l-3-2c-4 .5-8.5-1-11-5z" />
          <circle cx="14.5" cy="10.2" r="1" fill="currentColor" stroke="none" />
          <path d="M6 12H3M9.5 8.5 8 6.8m1.5 8.7L8 17.2" />
        </svg>
      );
    case "lottery":
      return (
        <svg
          viewBox="0 0 24 24"
          className={className}
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.8"
        >
          <path d="M6 6.5h12v11H6z" />
          <path d="M8 9h8M8 12h6M8 15h4M16 5v3M10 5v3M14 5v3" />
        </svg>
      );
    case "sports":
      return (
        <svg
          viewBox="0 0 24 24"
          className={className}
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.8"
        >
          <circle cx="12" cy="12" r="7.5" />
          <path d="m12 4.5 2.6 3.8-1 4.2h-3.2l-1-4.2zM6.4 9.5l4.1.9m3 0 4.1-.9M8.1 18l2.4-3.4h3l2.4 3.4" />
        </svg>
      );
    case "cards":
      return (
        <svg
          viewBox="0 0 24 24"
          className={className}
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.8"
        >
          <path d="M8 5h9a2 2 0 0 1 2 2v10H10a2 2 0 0 1-2-2z" />
          <path d="M6 7H5a2 2 0 0 0-2 2v8h10" />
          <path d="m13 9 1 1.6 1-1.6 1.4 2.3-2.4 4.2-2.4-4.2z" />
        </svg>
      );
    case "esports":
      return (
        <svg
          viewBox="0 0 24 24"
          className={className}
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.8"
        >
          <path d="M7 8h10a3 3 0 0 1 3 3v3.5a2.5 2.5 0 0 1-2.5 2.5H15l-3 2-3-2H6.5A2.5 2.5 0 0 1 4 14.5V11a3 3 0 0 1 3-3z" />
          <path d="M9 12h2m4 0h-2m-2-2v4" />
        </svg>
      );
    case "news":
      return (
        <svg
          viewBox="0 0 24 24"
          className={className}
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.8"
        >
          <path d="M6 7h11a2 2 0 0 1 2 2v8H8a2 2 0 0 1-2-2z" />
          <path d="M6 7v8a2 2 0 0 1-2 2h13M9 10h7M9 13h7M9 16h4" />
        </svg>
      );
    case "shield":
      return (
        <svg
          viewBox="0 0 24 24"
          className={className}
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.8"
        >
          <path d="M12 3.5 5.5 6v5.8c0 4 2.5 7.6 6.5 8.7 4-1.1 6.5-4.7 6.5-8.7V6z" />
          <path d="m9.5 12 1.8 1.8 3.5-4" />
        </svg>
      );
    case "support":
      return (
        <svg
          viewBox="0 0 24 24"
          className={className}
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.8"
        >
          <path d="M5 14v-1a7 7 0 0 1 14 0v1" />
          <path d="M6.5 15.5h-1A1.5 1.5 0 0 1 4 14v-1a1.5 1.5 0 0 1 1.5-1.5h1v4zM17.5 11.5h1A1.5 1.5 0 0 1 20 13v1a1.5 1.5 0 0 1-1.5 1.5h-1v-4zM9 18.5a3.5 3.5 0 0 0 6 0" />
        </svg>
      );
    case "phone":
      return (
        <svg
          viewBox="0 0 24 24"
          className={className}
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.8"
        >
          <path d="M6.5 4.5h3l1.5 4-2 1.4a15.6 15.6 0 0 0 5.1 5.1l1.4-2 4 1.5v3A2.5 2.5 0 0 1 17 20c-7.2-.5-12.5-5.8-13-13A2.5 2.5 0 0 1 6.5 4.5z" />
        </svg>
      );
    case "message":
      return (
        <svg
          viewBox="0 0 24 24"
          className={className}
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.8"
        >
          <path d="M5 6.5h14a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H10l-4.5 3v-3H5a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2z" />
          <path d="M8 11h8M8 14h5" />
        </svg>
      );
    case "line":
      return (
        <svg
          viewBox="0 0 24 24"
          className={className}
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.8"
        >
          <path d="M6.5 8.5h11a3.5 3.5 0 0 1 0 7H13l-3.5 3v-3h-3a3.5 3.5 0 0 1 0-7z" />
          <path d="M8.5 12h7" />
        </svg>
      );
    case "spark":
      return (
        <svg
          viewBox="0 0 24 24"
          className={className}
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.8"
        >
          <path d="m12 3 1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8zM18.5 15.5l.8 2.2 2.2.8-2.2.8-.8 2.2-.8-2.2-2.2-.8 2.2-.8zM5.5 15l.7 1.7 1.7.7-1.7.7-.7 1.7-.7-1.7-1.7-.7 1.7-.7z" />
        </svg>
      );
    case "wallet":
      return (
        <svg
          viewBox="0 0 24 24"
          className={className}
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.8"
        >
          <path d="M4.5 8.5h14a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-14a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2z" />
          <path d="M16 12h4.5M6 8.5V7A1.5 1.5 0 0 1 7.5 5.5H17" />
          <circle cx="16" cy="12" r=".9" fill="currentColor" stroke="none" />
        </svg>
      );
    case "globe":
      return (
        <svg
          viewBox="0 0 24 24"
          className={className}
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.8"
        >
          <circle cx="12" cy="12" r="8" />
          <path d="M4.5 12h15M12 4a12.7 12.7 0 0 1 3 8 12.7 12.7 0 0 1-3 8 12.7 12.7 0 0 1-3-8 12.7 12.7 0 0 1 3-8z" />
        </svg>
      );
    case "star":
      return (
        <svg
          viewBox="0 0 24 24"
          className={className}
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.8"
        >
          <path d="m12 3.7 2.6 5.2 5.8.8-4.2 4 1 5.7L12 16.7 6.8 19.4l1-5.7-4.2-4 5.8-.8z" />
        </svg>
      );
  }
}
