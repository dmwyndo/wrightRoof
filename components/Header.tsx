"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Logo } from "@/components/Logo";
import { SocialLinks } from "@/components/SocialLinks";
import { site } from "@/lib/site";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={scrolled ? "scrolled" : undefined}>
      <div className="wrap nav">
        <Link className="brand" href="/" aria-label={`${site.name} — Home`}>
          <Logo variant={scrolled ? "light" : "dark"} />
        </Link>
        <nav className="nav-links" aria-label="Primary">
          <Link href="/commercial">Commercial</Link>
          <Link href="/#process">Process</Link>
          <Link href="/#reviews">Reviews</Link>
          <SocialLinks className="nav-social" />
          <a className="phone" href={site.phoneHref} aria-label={`Call ${site.phone}`}>
            <span className="phone-full">{site.phone}</span>
            <span className="phone-short">Call</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
