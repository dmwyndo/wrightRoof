import { site } from "@/lib/site";

type SocialLinksProps = {
  className?: string;
};

function GoogleIcon() {
  return (
    <svg className="social-google-icon" viewBox="0 0 24 24" aria-hidden>
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.081-.62z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      />
    </svg>
  );
}

export function SocialLinks({ className }: SocialLinksProps) {
  return (
    <div
      className={className ? `social-links ${className}` : "social-links"}
    >
      <a
        className="social-link social-link--facebook"
        href={site.links.facebook}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Wright Roofing on Facebook"
      >
        <svg viewBox="0 0 24 24" aria-hidden>
          <path d="M13.5 22v-8.2h2.75l.42-3.18H13.5V9.02c0-.92.26-1.55 1.58-1.55h1.7V4.36c-.29-.04-1.3-.13-2.47-.13-2.45 0-4.13 1.49-4.13 4.22V10.6H7.5v3.18h2.68V22h3.32z" />
        </svg>
      </a>
      <a
        className="social-link social-link--instagram"
        href={site.links.instagram}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Wright Roofing on Instagram"
      >
        <svg viewBox="0 0 24 24" aria-hidden>
          <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 5.5A4.5 4.5 0 1 0 16.5 12 4.5 4.5 0 0 0 12 7.5zm6.25-2.75a1.25 1.25 0 1 0 1.25 1.25 1.25 1.25 0 0 0-1.25-1.25z" />
        </svg>
      </a>
      <a
        className="social-link social-link--linkedin"
        href={site.links.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Wright Roofing on LinkedIn"
      >
        <svg viewBox="0 0 24 24" aria-hidden>
          <path d="M4.98 3.5a2.25 2.25 0 1 1 0 4.5 2.25 2.25 0 0 1 0-4.5zM3 8.98h3.96V21H3V8.98zm7.04 0H14v1.64h.05c.55-1.04 1.9-2.14 3.91-2.14 4.18 0 4.95 2.75 4.95 6.33V21h-3.96v-5.56c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94V21H10V8.98z" />
        </svg>
      </a>
      <a
        className="social-link social-link--google"
        href={site.links.google}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Wright Roofing on Google Maps"
      >
        <GoogleIcon />
      </a>
    </div>
  );
}
