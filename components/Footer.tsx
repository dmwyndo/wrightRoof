import Link from "next/link";
import { Logo } from "@/components/Logo";
import { SocialLinks } from "@/components/SocialLinks";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-grid">
          <div>
            <Link
              className="foot-brand"
              href="/"
              aria-label={`${site.name} — Home`}
            >
              <Logo variant="dark" />
            </Link>
            <SocialLinks className="foot-social" />
          </div>
          <div className="foot-meta">
            {site.locations}
            <br />
            <a href={site.phoneHref}>{site.phone}</a>
          </div>
          <div className="foot-meta">
            Residential · Commercial · Repairs
            <br />
            Free roof inspections
          </div>
        </div>
        <div className="foot-legal">
          <span>© {new Date().getFullYear()} {site.name}. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
