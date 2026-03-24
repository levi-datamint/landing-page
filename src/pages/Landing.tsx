import { useRef, type RefObject } from 'react';
import LandingNav from '../components/landing/LandingNav';
import LandingHeroSection from '../components/landing/LandingHeroSection';
import LandingAboutSection from '../components/landing/LandingAboutSection';
import LandingSpeakersSection from '../components/landing/LandingSpeakersSection';
import { conference, speakers } from '../lib/landingContent';

const applicationUrl = 'https://conference.datamint.biz';

export default function Landing() {
  const heroRef = useRef<HTMLElement | null>(null);
  const aboutRef = useRef<HTMLElement | null>(null);
  const speakersRef = useRef<HTMLElement | null>(null);
  const applicationRef = useRef<HTMLElement | null>(null);

  const scrollTo = (ref: RefObject<HTMLElement | null>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen">
      <LandingNav
        conferenceName={conference.name}
        ctaLabel={conference.cta}
        applicationUrl={applicationUrl}
        aboutRef={aboutRef}
        speakersRef={speakersRef}
        applicationRef={applicationRef}
        onScrollTo={scrollTo}
      />

      <main>
        <LandingHeroSection
          conference={conference}
          applicationUrl={applicationUrl}
          sectionRef={heroRef}
          onScrollToApplication={() => scrollTo(applicationRef)}
        />

        <LandingAboutSection
          conference={conference}
          applicationUrl={applicationUrl}
          sectionRef={aboutRef}
          onMeetSpeakers={() => scrollTo(speakersRef)}
        />

        <LandingSpeakersSection speakers={speakers} sectionRef={speakersRef} />
      </main>

      <footer className="border-t border-slate-200 py-8 dark:border-slate-800">
        <div className="mx-auto max-w-6xl px-4 text-sm text-slate-600 dark:text-slate-300 sm:px-6 lg:px-8">
          © {new Date().getFullYear()} {conference.name}. Built with React.
        </div>
      </footer>
    </div>
  );
}