import type { Conference } from "../../lib/landingContent";
import type { RefObject } from "react";

type Props = {
  conference: Conference;
  applicationUrl: string;
  sectionRef: RefObject<HTMLElement | null>;
};

export default function LandingHeroSection({
  conference,
  applicationUrl,
  sectionRef,
}: Props) {
  return (
    <section ref={sectionRef} className="bg-[#E4F9F5] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-center lg:gap-10">
          <div className="lg:col-span-7">
            <p className="mt-4 text-base font-medium text-[#11999E]">
              {conference.location}
            </p>

            <h1 className="mt-3 min-w-full text-4xl font-bold leading-tight tracking-tight text-[#40514E] sm:text-5xl lg:text-6xl">
              {conference.name}
            </h1>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-[#40514E]">
              {conference.tagline}
            </p>
            <p className="mt-3 max-w-3xl text-lg leading-8 text-[#40514E]/90">
              {conference.audience}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={applicationUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full items-center justify-center rounded-xl bg-[#11999E] px-7 py-3.5 text-base font-semibold text-white shadow-sm transition hover:bg-[#40514E] focus:outline-none focus:ring-2 focus:ring-[#30E3CA] sm:w-auto"
              >
                {conference.cta}
              </a>
              <div className="rounded-xl border border-[#30E3CA]/40 bg-white/70 px-4 py-3 text-base text-[#40514E]/90">
                <span className="font-semibold text-[#40514E]">
                  {conference.date}
                </span>
                <span className="mx-2 text-[#11999E]/60">•</span>
                רעננה
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
