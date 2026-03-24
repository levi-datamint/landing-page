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
    <section ref={sectionRef} className="bg-[#E4F9F5] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl items-center justify-center">
          <h2 className="text-4xl font-bold tracking-tight text-[#40514E] sm:text-5xl">
            הדוברים
          </h2>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {speakers.map((s) => (
            <div
              key={s.name}
              className="rounded-2xl border border-[#30E3CA]/40 bg-white p-7 shadow-sm"
            >
              <div className="text-center">
                <div className="text-lg font-semibold text-[#40514E]">
                  {s.name}
                </div>
                <div className="mt-1 text-base text-[#40514E]/80">
                  {s.title}
                </div>
              </div>

              <div className="mt-5 flex justify-center">
                {s.imageUrl ? (
                  <img
                    src={s.imageUrl}
                    alt={s.name}
                    className="h-36 w-36 rounded-full object-cover ring-2 ring-[#30E3CA]/50"
                  />
                ) : (
                  <div className="flex h-24 w-24 items-center justify-center rounded-full bg-[#11999E] text-2xl font-semibold text-white">
                    {s.name
                      .split(' ')
                      .slice(0, 2)
                      .map((part) => part[0])
                      .join('')}
                  </div>
                )}
              </div>
              <p className="mt-5 text-base leading-7 text-[#40514E]">{s.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

