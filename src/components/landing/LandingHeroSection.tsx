import type { Conference } from "../../lib/landingContent";
import type { ReactNode, RefObject } from "react";
import { openRegistrationForm } from "../../lib/tickchak";

type Props = {
  conference: Conference;
  sectionRef: RefObject<HTMLElement | null>;
};

function MetaCard({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="rounded-2xl border border-[#30E3CA]/45 bg-white/85 p-5 shadow-sm backdrop-blur-sm">
      <p className="text-sm font-semibold text-[#11999E]">{label}</p>
      <div className="mt-3 space-y-2 text-base leading-relaxed text-[#40514E]">
        {children}
      </div>
    </div>
  );
}

export default function LandingHeroSection({ conference, sectionRef }: Props) {
  const [headlineLead, ...headlineRest] = conference.name.split(":");
  const headlineTail = headlineRest.join(":").trim();

  return (
    <section
      ref={sectionRef}
      className="bg-[#E4F9F5] pb-14 pt-8 sm:pb-16 sm:pt-10"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-start lg:gap-10">
          <div className="lg:col-span-7">
            <p className="text-base font-medium text-[#11999E]">
              {conference.location}
            </p>

            <h1 className="mt-3 min-w-full text-4xl font-bold leading-tight tracking-tight text-[#40514E] sm:text-5xl lg:text-6xl">
              {headlineTail ? (
                <>
                  {headlineLead}:
                  <br />
                  {headlineTail}
                </>
              ) : (
                conference.name
              )}
            </h1>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-[#40514E]">
              {conference.tagline}
            </p>
            <p className="mt-3 max-w-3xl text-lg leading-8 text-[#40514E]/90">
              {conference.audience}
            </p>

            <div className="mt-8">
              <button
                type="button"
                onClick={openRegistrationForm}
                className="inline-flex w-full items-center justify-center rounded-xl bg-[#11999E] px-7 py-3.5 text-base font-semibold text-white shadow-sm transition hover:bg-[#40514E] focus:outline-none focus:ring-2 focus:ring-[#30E3CA] sm:w-auto"
              >
                {conference.cta}
              </button>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <MetaCard label="מתי">
                <p className="text-lg font-semibold text-[#40514E]">
                  {conference.date}
                </p>
                <p>{conference.receptionNote}</p>
                <p className="font-medium text-[#40514E]">
                  {conference.eventEndNote}
                </p>
              </MetaCard>
              <MetaCard label="איפה">
                <p className="text-lg font-semibold text-[#40514E]">
                  {conference.location}
                </p>
                <a
                  href={conference.mapOpenUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-medium text-[#11999E] underline decoration-[#30E3CA]/70 underline-offset-4 transition hover:text-[#40514E]"
                >
                  פתיחה ב-Google Maps
                </a>
              </MetaCard>
            </div>
          </div>
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="overflow-hidden rounded-2xl">
              <img
                src="/accountant.png"
                alt="איור לכנס"
                className="aspect-4/5 h-full w-full object-cover sm:aspect-auto sm:max-h-[min(640px,70vh)] lg:max-h-none lg:min-h-112"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
