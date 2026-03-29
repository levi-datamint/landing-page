import type { Conference } from "../../lib/landingContent";
import type { RefObject } from "react";
import { openRegistrationForm } from "../../lib/tickchak";

type Props = {
  conference: Conference;
  sectionRef: RefObject<HTMLElement | null>;
  onMeetSpeakers: () => void;
};

export default function LandingAboutSection({
  conference,
  sectionRef,
  onMeetSpeakers,
}: Props) {
  return (
    <section ref={sectionRef} className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <h2 className="text-4xl font-bold tracking-tight text-[#40514E] sm:text-5xl">
              מה תלמדו בכנס
            </h2>
            <p className="mt-4 text-lg text-[#40514E]">
              במהלך הכנס נצלול לעולם ה-AI והאוטומציות ונראה איך מיישמים אותם
              בפועל:
            </p>
            <ul className="mt-5 space-y-3 text-lg text-[#40514E]">
              <li className="flex gap-3">
                <span className="mt-3 h-2 w-2 flex-none rounded-full bg-[#11999E]" />
                שימוש ב-AI לניתוח נתונים פיננסיים.
              </li>
              <li className="flex gap-3">
                <span className="mt-3 h-2 w-2 flex-none rounded-full bg-[#11999E]" />
                אוטומציה של תהליכים כמו התאמות בנקים, חשבוניות ודיווחים.
              </li>
              <li className="flex gap-3">
                <span className="mt-3 h-2 w-2 flex-none rounded-full bg-[#11999E]" />
                זיהוי חריגות וטעויות בזמן אמת.
              </li>
              <li className="flex gap-3">
                <span className="mt-3 h-2 w-2 flex-none rounded-full bg-[#11999E]" />
                שילוב AI במערכות קיימות (ERP, הנה"ח, BI).
              </li>
              <li className="flex gap-3">
                <span className="mt-3 h-2 w-2 flex-none rounded-full bg-[#11999E]" />
                כלים פרקטיים שתוכלו להתחיל להשתמש בהם כבר מחר.
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-[#30E3CA]/40 bg-white p-7 shadow-sm">
            <h3 className="text-xl font-semibold text-[#40514E]">
              למי הכנס מתאים
            </h3>
            <ul className="mt-4 space-y-3 text-lg text-[#40514E]">
              <li className="flex gap-3">
                <span className="mt-3 h-2 w-2 flex-none rounded-full bg-[#11999E]" />
                רואי חשבון.
              </li>
              <li className="flex gap-3">
                <span className="mt-3 h-2 w-2 flex-none rounded-full bg-[#11999E]" />
                מנהלי כספים (CFO).
              </li>
              <li className="flex gap-3">
                <span className="mt-3 h-2 w-2 flex-none rounded-full bg-[#11999E]" />
                חשבים.
              </li>
              <li className="flex gap-3">
                <span className="mt-3 h-2 w-2 flex-none rounded-full bg-[#11999E]" />
                כל מי שעוסק בתהליכי פייננס ורוצה להתייעל.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
