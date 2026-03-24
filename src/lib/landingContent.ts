export type Conference = {
  name: string;
  date: string;
  cta: string;
  location: string;
  tagline: string;
  audience: string;
  outcomes: string[];
};

export type Speaker = {
  name: string;
  title: string;
  bio: string;
  imageUrl?: string;
};

export const conference: Conference = {
  name: "העתיד כבר כאן: רואי חשבון בעידן ה-AI",
  date: "17 במאי 2026",
  cta: "הירשמו עכשיו",
  location: "רעננה, ישראל",
  tagline:
    "עולם הפייננס משתנה במהירות. כלים מבוססי AI ואוטומציות כבר לא שייכים לעתיד - הם כאן, ומשנים את הדרך שבה רואי חשבון עובדים, מנתחים ומקבלים החלטות.",
  audience: "אם גם אתם רוצים לשדרג את מחלקת הפייננס - הכנס הזה בדיוק בשבילכם.",
  outcomes: [
    "לחסוך שעות של עבודה ידנית",
    "לצמצם טעויות אנוש",
    "לקבל תובנות בזמן אמת",
    "להפוך למחלקת פייננס יעילה ואסטרטגית יותר",
  ],
};

export const speakers: Speaker[] = [
  {
    name: "איתי וינברגר",
    title: "מנכ״ל ומייסד Datamint",
    bio: "איתי מוביל את החזון לחיבור בין חדשנות מבוססת AI לבין עבודה פיננסית חכמה, מדויקת ויעילה יותר.",
    imageUrl: "/itay_weinberger.png",
  },
  {
    name: "רונן עמוס",
    title: 'רו"ח (CPA), מרצה ויועץ CFO חיצוני',
    bio: " מרצה ויועץ חיצוני, המקנה לארגונים טכנולוגיות  AI שמקצרות את זמן הדיווח ומגדילות את הדיוק הכלכלי. מומחה באוטומציה לתהליכים פיננסיים באמצעות כלי AI מתקדמים.",
    imageUrl: "/ronen_cohen.jpeg",
  },
  {
    name: "חן כהן",
    title: "VP Finance, visitt",
    bio: "מתמקד בהפיכת  המחלקה הפיננסית למודרנית המונעת על ידי אוטומציה, תוך דגש חזק על מינוף AI וכלים מתקדמים לשיפור היעילות ותהליכי קבלת ההחלטות.",
    imageUrl: "/hen_cohen.jpeg",
  },
  {
    name: "Deb Dor",
    title: "Director of AI at Brooks Keret",
    bio: "מובילת חדשנות ובינה מלאכותית עם ניסיון רב בהובלת שיפור רווחיות ויעילות, באמצעות שילוב פתרונות AI ואוטומציה בתהליכים פיננסיים בארגונים גלובליים ובסטארטאפים",
    imageUrl: "/deb_dor.jpg",
  },
  {
    name: "מאור נווה",
    title: "AI & Data Specialist",
    bio: "מתמקד באוטומציה בתהליכי AP באמצעות כלי AI מתקדמים.",
    imageUrl: "/maor_nuwe.jpg",
  },
];
