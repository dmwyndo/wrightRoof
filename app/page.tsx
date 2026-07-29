import Image from "next/image";
import Link from "next/link";
import { Bowtie } from "@/components/Bowtie";
import { Reveal } from "@/components/Reveal";
import { GoogleReviewsSection } from "@/components/GoogleReviewsSection";
import { TrustSection } from "@/components/TrustSection";
import { site } from "@/lib/site";

const whyItems = [
  {
    title: "Local & family-owned",
    body: "For more than 60 years, Wright Roofing has been a trusted name for homeowners and businesses across the region.",
  },
  {
    title: "Licensed, insured & bonded",
    body: "Your property is protected with fully licensed crews and the coverage you expect from a professional roofing team.",
  },
  {
    title: "Transparent estimates",
    body: "No-pressure inspections and clear pricing — we tell you what you need and what you don’t.",
  },
  {
    title: "Reliable communication",
    body: "Responsive crews, strong warranties up to 25 years, and dependable follow-through from start to finish.",
  },
] as const;

const services = [
  {
    key: "res",
    tag: "Residential",
    title: "Residential projects",
    body: "From shingle replacements to complete roof installations, we provide expert craftsmanship, honest pricing, and roofing solutions that last for decades.",
    image: "/wright/services-residential.jpg",
    alt: "Completed residential roofing project by Wright Roofing",
  },
  {
    key: "com",
    tag: "Commercial",
    title: "Commercial work",
    body: "Performance, durability, and code compliance for offices, retail, warehouses, and property managers — from small buildings to large commercial sites.",
    image: "/wright/services-commercial.jpg",
    alt: "Commercial flat roof installation by Wright Roofing",
  },
  {
    key: "repairs",
    tag: "Repairs & maintenance",
    title: "Repairs & maintenance",
    body: "Whether it’s a small leak or major damage, our expert team quickly diagnoses and fixes the problem — saving you stress, time, and money.",
    image: "/wright/services-repairs.jpg",
    alt: "Roof repair and maintenance work by Wright Roofing",
  },
] as const;

const steps = [
  {
    n: "01",
    title: "Inspect",
    body: "Free, honest roof inspections to catch issues early — whether you're selling, buying, or protecting your property.",
  },
  {
    n: "02",
    title: "Plan",
    body: "Clear scope, material options, and transparent pricing with no pressure.",
  },
  {
    n: "03",
    title: "Install",
    body: "Professional crews using quality materials — residential, commercial, flat, and metal systems.",
  },
  {
    n: "04",
    title: "Finish",
    body: "Thorough cleanup and warranty-backed workmanship you can count on.",
  },
] as const;

export default function HomePage() {
  return (
    <main id="top">
      <section className="hero">
        <div className="hero-img" aria-hidden>
          <iframe
            className="hero-video"
            src={site.heroVideoEmbedUrl}
            title=""
            loading="eager"
            allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
            tabIndex={-1}
          />
        </div>
        <p className="hero-brandline">
          Trusted roofing · 60+ years strong
        </p>
        <div className="wrap hero-inner">
          <div className="hero-top">
            <p className="eyebrow">{site.areas}</p>
            <h1 className="display">
              <span className="hero-title-line">One call gets</span>{" "}
              <br className="hero-title-break" aria-hidden />
              <span className="hero-title-phrase">
                it Wright<span className="dot">.</span>
              </span>
            </h1>
          </div>
          <div className="hero-bottom">
            <p>
              Expert residential and commercial roofing — from quick repairs to
              full replacements — with the honest pricing and quality workmanship
              your home or business deserves.
            </p>
            <aside className="hero-trust" aria-label="Our promise">
              <p>{site.trustCopy}</p>
            </aside>
            <div className="hero-ctas">
              <Link className="btn on-dark solid" href="#contact">
                Get a free roof inspection
              </Link>
              <a className="btn on-dark ghost" href={site.phoneHref}>
                Call {site.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="intro">
        <div className="wrap intro-grid">
          <Reveal className="stat">
            <div className="num">
              60<span>+</span>
            </div>
            <div className="label">Years of local trust</div>
          </Reveal>
          <Reveal className="intro-copy">
            <h2>
              High-integrity roofing solutions backed by decades of local
              experience.
            </h2>
            <p>
              What began as a small, local operation has grown into one of the
              region&apos;s most trusted roofing teams. We install, replace, and
              repair residential and commercial roofs across Idaho Falls and
              Wichita — with integrity, quality, and roofs that last.
            </p>
          </Reveal>
        </div>
      </section>

      <TrustSection />

      <section className="why">
        <div className="wrap">
          <Reveal className="sect-head">
            <p className="eyebrow">Why Wright</p>
            <h2 className="display">
              Reliable solutions,
              <br />
              without the runaround.
            </h2>
          </Reveal>
          <div className="why-list">
            {whyItems.map((item) => (
              <Reveal key={item.title} className="why-item">
                <Bowtie />
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="services" id="services">
        <div className="wrap">
          <Reveal className="sect-head">
            <p className="eyebrow">Our roofing services</p>
            <h2 className="display">
              Homes and businesses.
              <br />
              Flat roofs and steep slopes.
            </h2>
          </Reveal>
          <div className="svc-grid">
            {services.map((svc) => (
              <Reveal key={svc.key} as="article" className={`svc ${svc.key}`}>
                <div className="ph">
                  <Image
                    src={svc.image}
                    alt={svc.alt}
                    fill
                    sizes={
                      svc.key === "repairs"
                        ? "100vw"
                        : "(max-width: 820px) 100vw, 50vw"
                    }
                  />
                </div>
                <div className="svc-body">
                  <p className="tag">{svc.tag}</p>
                  <h3>{svc.title}</h3>
                  <p>{svc.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="svc-ctas">
            <Link className="btn on-dark solid" href="#contact">
              Get a free roof inspection
            </Link>
            <Link className="btn on-dark ghost" href="/commercial">
              See commercial services
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="process" id="process">
        <div className="wrap">
          <Reveal className="sect-head">
            <p className="eyebrow">Process</p>
            <h2 className="display">How we work</h2>
          </Reveal>
          <Reveal className="steps">
            {steps.map((step) => (
              <div className="step" key={step.n}>
                <span className="n">{step.n}</span>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <GoogleReviewsSection />

      <section className="closing" id="contact">
        <div className="bg">
          <Image
            src="/wright/closing.jpg"
            alt=""
            fill
            sizes="100vw"
            aria-hidden
          />
        </div>
        <Reveal className="wrap">
          <Bowtie />
          <h2 className="display">Ready when you are.</h2>
          <p>
            Schedule a free roof inspection or call us — we&apos;ll make the next
            step clear.
          </p>
          <div className="hero-ctas">
            <a className="btn on-dark solid" href={site.phoneHref}>
              Get a free roof inspection
            </a>
            <a className="btn on-dark ghost" href={site.phoneHref}>
              {site.phone}
            </a>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
