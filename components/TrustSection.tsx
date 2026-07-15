import { Bowtie } from "@/components/Bowtie";
import { Reveal } from "@/components/Reveal";
import { SocialLinks } from "@/components/SocialLinks";
import { site } from "@/lib/site";

export function TrustSection() {
  return (
    <section className="trust" id="trust">
      <div className="wrap">
        <Reveal className="sect-head trust-head">
          <p className="eyebrow">
            <Bowtie />
            Why people choose us
          </p>
          <h2 className="display trust-headline">
            <span className="trust-headline-desktop">
              <span className="trust-headline-line">Why homeowners &</span>
              <br aria-hidden />
              <span className="trust-headline-line">businesses choose us.</span>
            </span>
            <span className="trust-headline-mobile">
              <span className="trust-headline-line">Why homeowners</span>
              <br aria-hidden />
              <span className="trust-headline-line">& businesses choose us.</span>
            </span>
          </h2>
          <p className="trust-lead">{site.trustCopy}</p>
        </Reveal>

        <Reveal className="trust-points">
          {site.trustPoints.map((point) => (
            <span key={point}>{point}</span>
          ))}
        </Reveal>

        <Reveal className="trust-social">
          <p>Find us online</p>
          <SocialLinks className="trust-social-links" />
        </Reveal>
      </div>
    </section>
  );
}
