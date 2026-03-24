import { type RefObject } from 'react';

type Props = {
  conferenceName: string;
  ctaLabel: string;
  applicationUrl: string;
  aboutRef: RefObject<HTMLElement | null>;
  speakersRef: RefObject<HTMLElement | null>;
  applicationRef: RefObject<HTMLElement | null>;
  onScrollTo: (ref: RefObject<HTMLElement | null>) => void;
};

export default function LandingNav({
  conferenceName,
  ctaLabel,
  applicationUrl,
  aboutRef,
  speakersRef,
  applicationRef,
  onScrollTo,
}: Props) {
  return (
    <header className="sticky top-0 z-10 border-b border-slate-200 bg-white/80 backdrop-blur dark:border-slate-800 dark:bg-slate-950/60">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <div className="text-sm font-semibold text-slate-900 dark:text-slate-50">
          {conferenceName}
        </div>
        <nav className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => onScrollTo(aboutRef)}
            className="text-sm font-medium text-slate-700 transition hover:text-slate-900 dark:text-slate-200 dark:hover:text-slate-50"
          >
            About
          </button>
          <button
            type="button"
            onClick={() => onScrollTo(speakersRef)}
            className="text-sm font-medium text-slate-700 transition hover:text-slate-900 dark:text-slate-200 dark:hover:text-slate-50"
          >
            Speakers
          </button>
          <a
            href={applicationUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-400"
          >
            {ctaLabel}
          </a>
        </nav>
      </div>
    </header>
  );
}

