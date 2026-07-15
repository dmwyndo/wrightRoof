import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Commercial Roofing",
  description:
    "Commercial roof installation, replacement, and maintenance — flat and sloped systems for offices, retail, warehouses, and more. Wright Roofing, Inc.",
};

const offerings = [
  "Flat and sloped commercial roof installations",
  "Low-slope and flat roofing with high-performance materials",
  "Roof replacement or retrofitting to meet updated codes",
  "Maintenance plans to extend lifespan and minimize downtime",
  "Metal roofing systems built for performance and curb appeal",
] as const;

export default function CommercialPage() {
  return (
    <main id="top">
      <section className="page-hero">
        <div className="page-hero-img">
          <Image
            src="/commercial/hero.jpg"
            alt="Commercial roofing project by Wright Roofing"
            fill
            priority
            sizes="100vw"
          />
        </div>
        <div className="wrap page-hero-inner">
          <p className="eyebrow page-hero-eyebrow">Idaho Falls · Wichita</p>
          <h1 className="display page-hero-title">Commercial Work</h1>
        </div>
      </section>

      <section className="commercial-content">
        <div className="wrap commercial-grid">
          <Reveal className="commercial-lead">
            <h2>
              Our commercial roofing services deliver the performance, durability,
              and code compliance your business needs — from small offices to
              large warehouses.
            </h2>
            <p>
              Based in Idaho Falls and Wichita, Wright Roofing handles every kind
              of commercial roofing need for businesses and property managers.
            </p>
          </Reveal>

          <Reveal className="commercial-block">
            <h3>What we offer</h3>
            <ul className="commercial-list">
              {offerings.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="commercial-block">
            <h3>Why businesses trust us</h3>
            <p>
              Precision, safety, and minimal disruption. We understand commercial
              requirements — and we deliver on time and on budget.
            </p>
          </Reveal>

          <Reveal className="commercial-cta-wrap">
            <Link className="btn commercial-cta" href="/#contact">
              Get a commercial roofing quote
              <span className="commercial-cta-icon" aria-hidden>
                <svg viewBox="0 0 24 24" width="14" height="14">
                  <path
                    d="M8 5l8 7-8 7"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </Link>
            <p className="commercial-cta-note">
              Or call us directly at{" "}
              <a href={site.phoneHref}>{site.phone}</a>
            </p>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
