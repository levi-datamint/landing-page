import { useRef, type RefObject } from 'react';
import LandingNav from '../components/landing/LandingNav';
import LandingHeroSection from '../components/landing/LandingHeroSection';
import LandingAboutSection from '../components/landing/LandingAboutSection';
import LandingSpeakersSection from '../components/landing/LandingSpeakersSection';
import { conference, speakers } from '../lib/landingContent';

export default function Landing() {
  const heroRef = useRef<HTMLElement | null>(null);
  const aboutRef = useRef<HTMLElement | null>(null);
  const speakersRef = useRef<HTMLElement | null>(null);

  const scrollTo = (ref: RefObject<HTMLElement | null>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div dir="rtl" className="min-h-screen bg-white text-right">
      <LandingNav
        conferenceName={conference.name}
        aboutRef={aboutRef}
        speakersRef={speakersRef}
        onScrollTo={scrollTo}
      />

      <main>
        <LandingHeroSection
          conference={conference}
          sectionRef={heroRef}
        />

        <LandingAboutSection sectionRef={aboutRef} />

        <LandingSpeakersSection speakers={speakers} sectionRef={speakersRef} />
      </main>

      <footer className="border-t border-[#30E3CA]/40 py-8">
        <div className="mx-auto max-w-7xl px-4 text-base text-[#40514E] sm:px-6 lg:px-8">
          © {new Date().getFullYear()} {conference.name}. נבנה עבור עתיד הפיננסים.
        </div>
      </footer>
    </div>
  );
}