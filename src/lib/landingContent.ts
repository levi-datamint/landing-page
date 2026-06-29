export type ScheduleSlot = {
  timeRange: string;
  label: string;
};

export type Location = {
  venue: string;
  address: string;
};

export type Conference = {
  name: string;
  date: string;
  cta: string;
  location: Location;
  schedule: ScheduleSlot[];
  mapEmbedUrl: string;
  mapOpenUrl: string;
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
  date: "16 ביולי 2026",
  cta: "הירשמו עכשיו",
  location: {
    venue: "SAP offices",
    address: "אלי הורביץ 14, רעננה",
  },
  schedule: [
    { timeRange: "09:30–10:00", label: "התכנסות ומינגלינג" },
    { timeRange: "10:00–11:30", label: "הרצאות" },
    { timeRange: "11:30–12:00", label: "מינגלינג ונטוורקינג" },
    { timeRange: "12:00–14:00", label: "המשך הרצאות" },
  ],
  mapEmbedUrl:
    "https://www.openstreetmap.org/export/embed.html?bbox=34.8870%2C32.1740%2C34.8935%2C32.1785&layer=mapnik&marker=32.1757457%2C34.8900512",
  mapOpenUrl:
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent("אלי הורביץ 14, רעננה"),
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
  // {
  //   name: "יונתן שטרן",
  //   title: "Founder & CEO of SmartUp Academy",
  //   bio: "יונתן שטרן הוא יזם ישראלי ומייסד SmartUp Academy. הוא הקים ומכר מספר חברות, כולל ZoomInfo, ופיתח את שיטת “SmartUp” שמטרתה לעזור ליזמים לבנות חברות רווחיות ויציבות לאורך זמן.",
  //   imageUrl: "/yonatan_stern.jpg",
  // },
  // {
  //   name: "רונן עמוס",
  //   title: 'רו"ח (CPA), מרצה ויועץ CFO חיצוני',
  //   bio: " מרצה ויועץ חיצוני, המקנה לארגונים טכנולוגיות  AI שמקצרות את זמן הדיווח ומגדילות את הדיוק הכלכלי. מומחה באוטומציה לתהליכים פיננסיים באמצעות כלי AI מתקדמים.",
  //   imageUrl: "/ronen_cohen.jpeg",
  // },
  // {
  //   name: "חן כהן",
  //   title: "VP Finance, visitt",
  //   bio: "מתמקד בהפיכת  המחלקה הפיננסית למודרנית המונעת על ידי אוטומציה, תוך דגש חזק על מינוף AI וכלים מתקדמים לשיפור היעילות ותהליכי קבלת ההחלטות.",
  //   imageUrl: "/hen_cohen.jpeg",
  // },
  {
    name: "Deb Dor",
    title: "Director of AI at Brooks Keret",
    bio: "מובילת חדשנות ובינה מלאכותית עם ניסיון רב בהובלת שיפור רווחיות ויעילות, באמצעות שילוב פתרונות AI ואוטומציה בתהליכים פיננסיים בארגונים גלובליים ובסטארטאפים",
    imageUrl: "/deb_dor.jpg",
  },
  // {
  //   name: "מאור נווה",
  //   title: "AI & Data Specialist",
  //   bio: "מומחה AI ודאטה ב-SmartUp Academy עם מעל 4 שנות ניסיון כמהנדס דאטה ואלגוריתמים. המחקר שלו מתמקד בהבנה מדוע סטארטאפים מצליחים או נכשלים, והוא גם מלווה סטארטאפים בתחומי הדאטה וה-AI. בעל תואר שני בהצטיינות במדעי הנתונים ו-AI יישומי (עם מחקר ב-Computer Vision) ותואר ראשון בהצטיינות בניהול טכנולוגיה ומערכות מידע.",
  //   imageUrl: "/maor_nave.jpeg",
  // },
  // {
  //   name: "אנדרי פלטונוב",
  //   title: "רו״ח",
  //   bio: "סמנכ״ל כספים המתמחה באוטומציות, AI וייעול תהליכים פיננסיים. בעל ניסיון בהבראת חברות ובהטמעת כלים טכנולוגיים מתקדמים לשיפור ביצועים וצמיחה עסקית.",
  //   imageUrl: "/andrey_platonov.jpeg",
  // },
  {
    name: "אלמוג פישלר",
    title: "מייסד Fishler AI",
    bio: "מומחה ליישום AI בארגונים. מסייע לצוותים להפוך את ה-AI מכלי לשיחה לכלי עבודה אמיתי שמבצע משימות, חוסך זמן ומייעל תהליכים.",
    imageUrl: "/almog_fishler.png",
  },
  {
    name: "לינור גולן",
    title: "רו״ח ו - CFO",
    bio: "לינור היא רואת חשבון ו-CFO וגם מייעצת לסטארטאפים וחברות. במקום לחכות שמישהו יבנה את הכלים שהיא צריכה היא בונה אותם בעצמה עם Claude Code בלי רקע בתכנות. בהרצאה היא תראה איך כל איש כספים יכול להפוך אקסל שמצריך שעות של עבודה ידנית לכלי חכם שעובד בשבילו.",
    imageUrl: "/linor.png",
  },
  {
    name: "תום פניני בראון",
    title: "רו״ח",
    bio: "משמש כ-Fractional CFO ומלווה חברות בהטמעת טכנולוגיות AI, ייעול תהליכים פיננסיים ושילוב חכם בין כספים, נתונים וחדשנות.",
    imageUrl: "/tom_pnini.png",
  },
];
