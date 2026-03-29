import { type RefObject } from 'react';

type Props = {
  conferenceName: string;
  aboutRef: RefObject<HTMLElement | null>;
  speakersRef: RefObject<HTMLElement | null>;
  onScrollTo: (ref: RefObject<HTMLElement | null>) => void;
};

export default function LandingNav({
  conferenceName,
  aboutRef,
  speakersRef,
  onScrollTo,
}: Props) {
  return (
    <header className="sticky top-0 z-10 border-b border-[#30E3CA]/40 bg-[#E4F9F5]/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl flex-row-reverse items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <img
          src="/datamint_logo.png"
          alt={conferenceName}
          className="h-10 w-auto"
        />
        <nav className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => onScrollTo(aboutRef)}
            className="text-base font-medium text-[#40514E] transition hover:text-[#11999E]"
          >
            על הכנס
          </button>
          <button
            type="button"
            onClick={() => onScrollTo(speakersRef)}
            className="text-base font-medium text-[#40514E] transition hover:text-[#11999E]"
          >
            דוברים
          </button>
        </nav>
      </div>
    </header>
  );
}

