import type { Conference } from '../../lib/landingContent';
import type { RefObject } from 'react';

type Props = {
  conference: Conference;
  applicationUrl: string;
  sectionRef: RefObject<HTMLElement | null>;
  onScrollToApplication: () => void;
};

export default function LandingHeroSection({
  conference,
  applicationUrl,
  sectionRef,
  onScrollToApplication,
}: Props) {
  return (
    <section ref={sectionRef} className="flex min-h-screen items-center">
      <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-medium text-slate-600 dark:text-slate-300">
              {conference.location}
            </p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-50 sm:text-5xl">
              {conference.name}
            </h1>
            <p className="mt-4 text-lg text-slate-700 dark:text-slate-200">
              A focused, practical conference on building production systems with modern data
              platforms.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={applicationUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full items-center justify-center rounded-lg bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-400 sm:w-auto"
              >
                {conference.cta}
              </a>
              <div className="text-sm text-slate-600 dark:text-slate-300">
                <span className="font-semibold text-slate-900 dark:text-slate-50">
                  {conference.date}
                </span>
                <span className="mx-2 text-slate-400">•</span>
                Applications open now
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <div className="rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-medium text-slate-700 shadow-sm dark:border-slate-800 dark:bg-slate-950/40 dark:text-slate-200">
                High-signal sessions
              </div>
              <div className="rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-medium text-slate-700 shadow-sm dark:border-slate-800 dark:bg-slate-950/40 dark:text-slate-200">
                Production-first patterns
              </div>
              <div className="rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-medium text-slate-700 shadow-sm dark:border-slate-800 dark:bg-slate-950/40 dark:text-slate-200">
                Developer-friendly format
              </div>
            </div>
          </div>

          <div className="w-full max-w-md justify-self-end">
            <div className="rounded-2xl border border-slate-200 bg-white/60 p-6 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-950/40">
              <dl className="grid gap-4">
                <div>
                  <dt className="text-sm font-medium text-slate-600 dark:text-slate-300">
                    Conference Date
                  </dt>
                  <dd className="mt-1 text-base font-semibold text-slate-900 dark:text-slate-50">
                    {conference.date}
                  </dd>
                </div>
                <div className="border-t border-slate-200 pt-4 dark:border-slate-800">
                  <dt className="text-sm font-medium text-slate-600 dark:text-slate-300">
                    What to submit
                  </dt>
                  <dd className="mt-1 text-base text-slate-700 dark:text-slate-200">
                    Your talk proposal, including role and company.
                  </dd>
                </div>
                <div className="border-t border-slate-200 pt-4 dark:border-slate-800">
                  <dt className="text-sm font-medium text-slate-600 dark:text-slate-300">
                    Who should apply
                  </dt>
                  <dd className="mt-1 text-base text-slate-700 dark:text-slate-200">
                    Builders with practical production experience.
                  </dd>
                </div>
              </dl>
            </div>

            <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950">
              <h2 className="text-sm font-semibold text-slate-900 dark:text-slate-50">
                Quick guide
              </h2>
              <p className="mt-2 text-sm text-slate-700 dark:text-slate-200">
                Tell us what you’re building, why it matters, and what attendees will learn.
              </p>
              <div className="mt-4">
                <button
                  type="button"
                  onClick={onScrollToApplication}
                  className="inline-flex w-full items-center justify-center rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-400"
                >
                  See application details
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

