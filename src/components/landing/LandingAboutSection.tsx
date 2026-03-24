import type { Conference } from '../../lib/landingContent';
import type { RefObject } from 'react';

type Props = {
  conference: Conference;
  applicationUrl: string;
  sectionRef: RefObject<HTMLElement | null>;
  onMeetSpeakers: () => void;
};

export default function LandingAboutSection({
  conference,
  applicationUrl,
  sectionRef,
  onMeetSpeakers,
}: Props) {
  return (
    <section
      ref={sectionRef}
      className="flex min-h-screen items-center bg-slate-50/60 dark:bg-slate-900/20"
    >
      <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-50">
              About
            </h2>
            <p className="mt-4 text-slate-700 dark:text-slate-200">
              This conference is designed for teams who want to move from prototypes to
              production. We focus on practical patterns, real performance tradeoffs, and
              developer-friendly workflows.
            </p>
            <p className="mt-4 text-slate-700 dark:text-slate-200">
              Submit your application and we will review proposals to build a cohesive,
              high-signal agenda.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-50">
              What you’ll get
            </h3>
            <ul className="mt-4 space-y-3 text-slate-700 dark:text-slate-200">
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 flex-none rounded-full bg-slate-900 dark:bg-slate-50" />
                Feedback before the final schedule.
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 flex-none rounded-full bg-slate-900 dark:bg-slate-50" />
                Clear, modern proposal workflow.
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 flex-none rounded-full bg-slate-900 dark:bg-slate-50" />
                Real-world stories from production teams.
              </li>
            </ul>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              <button
                type="button"
                onClick={onMeetSpeakers}
                className="inline-flex items-center justify-center rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-200 dark:text-slate-50"
              >
                Meet the speakers
              </button>
              <a
                href={applicationUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-400"
              >
                {conference.cta}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

