import type { Conference } from '../../lib/landingContent';
import type { RefObject } from 'react';

type Props = {
  conference: Conference;
  applicationUrl: string;
  sectionRef: RefObject<HTMLElement | null>;
};

export default function LandingApplicationSection({
  conference,
  applicationUrl,
  sectionRef,
}: Props) {
  return (
    <section
      ref={sectionRef}
      className="flex min-h-screen items-center bg-slate-50/60 dark:bg-slate-900/20"
    >
      <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-50">
              Application
            </h2>
            <p className="mt-3 text-slate-700 dark:text-slate-200">
              Submit your proposal. Required fields are marked; optional fields help us
              understand your context.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <div className="rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-medium text-slate-700 shadow-sm dark:border-slate-800 dark:bg-slate-950/40 dark:text-slate-200">
                4 fields total
              </div>
              <div className="rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-medium text-slate-700 shadow-sm dark:border-slate-800 dark:bg-slate-950/40 dark:text-slate-200">
                Typical 2-minute completion
              </div>
              <div className="rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-medium text-slate-700 shadow-sm dark:border-slate-800 dark:bg-slate-950/40 dark:text-slate-200">
                Submitted externally
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-50">
              Ready to apply?
            </h3>
            <p className="mt-3 text-sm text-slate-700 dark:text-slate-200">
              Click below to open the application form on a dedicated page.
            </p>
            <div className="mt-6">
              <a
                href={applicationUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full items-center justify-center rounded-lg bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-400"
              >
                {conference.cta}
              </a>
            </div>

            <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700 dark:border-slate-800 dark:bg-slate-950/20 dark:text-slate-200">
              <div className="font-semibold">What reviewers look for</div>
              <div className="mt-1">
                Clarity, practical outcomes, and relevance to production engineering.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

