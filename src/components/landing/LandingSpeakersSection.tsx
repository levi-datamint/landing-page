import type { Speaker } from '../../lib/landingContent';
import type { RefObject } from 'react';

type Props = {
  speakers: Speaker[];
  sectionRef: RefObject<HTMLElement | null>;
};

export default function LandingSpeakersSection({
  speakers,
  sectionRef,
}: Props) {
  return (
    <section ref={sectionRef} className="flex min-h-screen items-center">
      <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-50">
            Speakers
          </h2>
          <p className="mt-3 text-slate-700 dark:text-slate-200">
            A quick preview of the caliber of sessions we’re building. Speakers below are
            mock data.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {speakers.map((s) => (
            <div
              key={s.name}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-900 text-sm font-semibold text-white dark:bg-slate-50 dark:text-slate-900">
                  {s.name
                    .split(' ')
                    .slice(0, 2)
                    .map((part) => part[0])
                    .join('')}
                </div>
                <div>
                  <div className="text-base font-semibold text-slate-900 dark:text-slate-50">
                    {s.name}
                  </div>
                  <div className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                    {s.title}
                  </div>
                </div>
              </div>
              <p className="mt-4 text-sm text-slate-700 dark:text-slate-200">{s.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

