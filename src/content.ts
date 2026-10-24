export type Lang = "ar" | "en";

export type FeatureChapter = {
  id: string;
  index: string;
  /** Short label on the orbit dial */
  short: string;
  title: string;
  desc: string;
  points: readonly string[];
};

export type Copy = {
  langSwitch: string;
  navFeatures: string;
  navPrivacy: string;
  navDownload: string;
  brand: string;
  headline: string;
  lead: string;
  ctaPrimary: string;
  ctaWeb: string;
  marquee: readonly string[];
  promiseLabel: string;
  promiseTitle: string;
  promiseText: string;
  featuresLabel: string;
  featuresTitle: string;
  featuresLead: string;
  featuresHint: string;
  featuresPrev: string;
  featuresNext: string;
  chapters: readonly FeatureChapter[];
  extrasLabel: string;
  extrasTitle: string;
  extras: readonly string[];
  webLabel: string;
  webTitle: string;
  webText: string;
  webCta: string;
  privacyLabel: string;
  privacyTitle: string;
  privacyText: string;
  privacyItems: readonly string[];
  downloadTitle: string;
  downloadText: string;
  getOn: string;
  appStore: string;
  googlePlay: string;
  footerTagline: string;
  footerExplore: string;
  footerContact: string;
  footerCopy: string;
  support: string;
};

export const STORE_URLS = {
  ios: "https://apps.apple.com/us/app/lan-chat/id6787370929",
  android: "https://play.google.com/store/apps/details?id=com.nasser.lanchat",
  web: "https://web.lanchat.net",
} as const;

export const copy: Record<Lang, Copy> = {
  ar: {
    langSwitch: "English",
    navFeatures: "المزايا",
    navPrivacy: "الخصوصية",
    navDownload: "التحميل",
    brand: "LanChat",
    headline: "تواصل بثقة — محادثات ومكالمات وغرف مباشرة",
    lead: "LanChat تطبيق تواصل متكامل بهوية ذهبية: رسائل، ومجموعات، ومكالمات، وحالات، وغرف مباشرة، مع خصوصية حقيقية وويب مرتبط بأمان.",
    ctaPrimary: "حمّل التطبيق",
    ctaWeb: "افتح الويب",
    marquee: [
      "رسائل ووسائط",
      "مجموعات",
      "مكالمات صوت وصورة",
      "حالات",
      "غرف مباشرة",
      "قفل المحادثة",
      "تحقق بخطوتين",
      "ويب مرتبط",
      "استطلاعات",
      "تفاعلات",
      "ترجمة",
    ],
    promiseLabel: "المنتج",
    promiseTitle: "كل ما تحتاجه للتواصل — في مكان واحد",
    promiseText:
      "بدلًا من التشتت بين تطبيقات متعددة، يجمع لان شات المراسلة والمكالمات والحالات والغرف المباشرة في تجربة واحدة سريعة ومتقنة، مصمَّمة للاستخدام اليومي بثقة.",
    featuresLabel: "المزايا",
    featuresTitle: "قدرات التطبيق كاملة",
    featuresLead: "أدر القرص الذهبي، فكل نقطة تفتح مجال ميزة مختلفة.",
    featuresHint: "اضغط على النقاط أو استخدم الأسهم",
    featuresPrev: "السابق",
    featuresNext: "التالي",
    chapters: [
      {
        id: "messaging",
        index: "1",
        short: "رسائل",
        title: "مراسلة ذكية ومتكاملة",
        desc: "محادثات فردية سلسة مع وسائط غنية وتفاصيل تهمك يوميًا.",
        points: [
          "نصوص، صور، فيديو، مستندات، ورسائل صوتية",
          "مشاركة الموقع وجهات الاتصال",
          "تثبيت الرسائل المهمة وأرشفة المحادثات",
        ],
      },
      {
        id: "groups",
        index: "2",
        short: "مجموعات",
        title: "مجموعات منظمة",
        desc: "أنشئ دوائرك وادعُ الآخرين بروابط آمنة مع إدارة واضحة.",
        points: [
          "مجموعات للمحادثة الجماعية",
          "دعوات انضمام سهلة",
          "أدوات إدارة للمشرفين",
        ],
      },
      {
        id: "calls",
        index: "3",
        short: "مكالمات",
        title: "مكالمات صوت وصورة",
        desc: "ابقَ قريبًا بجودة عالية وإشعارات فورية، من الهاتف أو الويب.",
        points: [
          "مكالمات صوتية ومرئية",
          "سجل مكالمات واضح",
          "انتقل من الكتابة إلى الحوار وجهًا لوجه",
        ],
      },
      {
        id: "status",
        index: "4",
        short: "حالات",
        title: "حالات تعبّر عنك",
        desc: "شارك اللحظات وتابع من تهتم بهم بتجربة بصرية أنيقة.",
        points: [
          "حالات صور ونصوص",
          "خلفية وتجربة عرض مميزة",
          "ظهور يومي بسيط وسريع",
        ],
      },
      {
        id: "rooms",
        index: "5",
        short: "غرف",
        title: "غرف مباشرة",
        desc: "انضم إلى غرف صوتية حية وتفاعل في لحظتها مع الآخرين.",
        points: [
          "غرف مباشرة مدمجة داخل التطبيق",
          "دعوات وروابط انضمام",
          "تواصل لحظي يتجاوز الدردشة النصية",
        ],
      },
      {
        id: "privacy",
        index: "6",
        short: "خصوصية",
        title: "خصوصية تحت سيطرتك",
        desc: "أدوات حماية حقيقية، لا عبارات إنشائية.",
        points: [
          "تحقق بخطوتين",
          "قفل المحادثات الحساسة",
          "حظر متقدم وحذف دائم للحساب",
        ],
      },
      {
        id: "web",
        index: "7",
        short: "ويب",
        title: "LanChat Web كجهاز مرتبط",
        desc: "افتح الويب، امسح رمز QR من هاتفك، وتابع محادثاتك على الشاشة الكبيرة.",
        points: [
          "ربط آمن عبر QR",
          "نفس حسابك على المتصفح",
          "مناسب للعمل والمكتب",
        ],
      },
    ],
    extrasLabel: "والمزيد",
    extrasTitle: "تفاصيل تُحسّن الاستخدام اليومي",
    extras: [
      "استطلاعات داخل المحادثة",
      "تفاعلات على الرسائل",
      "ترجمة تساعد على التواصل",
      "مزامنة جهات الاتصال بأسماء دفتر الهاتف",
      "مشاركة الصور والفيديو والمستندات",
    ],
    webLabel: "الويب",
    webTitle: "تجربة سطح المكتب من غير أن تترك هاتفك",
    webText:
      "نسخة الويب جهاز مرتبط: ابدأ من web.lanchat.net وامسح الرمز من التطبيق، فتحصل على جلسة محمية ومتزامنة.",
    webCta: "انتقل إلى الويب",
    privacyLabel: "الأمان",
    privacyTitle: "الخصوصية أساس المنتج، وليست إضافة لاحقة",
    privacyText:
      "لا نبيع بياناتك. نمنحك أدوات واضحة للتحكم: إعدادات الخصوصية، الحظر، والحق الكامل في حذف حسابك وما يرتبط به.",
    privacyItems: [
      "تسجيل برقم الهاتف مع تحقق بخطوتين",
      "قفل المحادثات وحماية الجلسات المرتبطة",
      "حذف دائم للحساب والبيانات بخطوة واحدة",
    ],
    downloadTitle: "ابدأ مع LanChat اليوم",
    downloadText: "نزّل التطبيق على الهاتف، أو افتح نسخة الويب واربط جهازك خلال لحظات.",
    getOn: "حمّل من",
    appStore: "App Store",
    googlePlay: "Google Play",
    footerTagline: "تواصل بثقة — رسائل ومكالمات وغرف مباشرة.",
    footerExplore: "استكشف",
    footerContact: "تواصل",
    footerCopy: "جميع الحقوق محفوظة © Lan SMS Trading",
    support: "Support@lanchat.net",
  },
  en: {
    langSwitch: "العربية",
    navFeatures: "Features",
    navPrivacy: "Privacy",
    navDownload: "Download",
    brand: "LanChat",
    headline: "Connect with confidence — chat, calls, and live rooms",
    lead: "LanChat is an all-in-one communicator with a gold identity: messaging, groups, calls, status, and live rooms — plus real privacy controls and a secure linked web client.",
    ctaPrimary: "Download the app",
    ctaWeb: "Open web",
    marquee: [
      "Rich messaging",
      "Groups",
      "Voice & video calls",
      "Status",
      "Live rooms",
      "Chat lock",
      "Two-step verification",
      "Linked web",
      "Polls",
      "Reactions",
      "Translation",
    ],
    promiseLabel: "Product",
    promiseTitle: "Everything you need to stay connected — in one place",
    promiseText:
      "Instead of juggling apps, LanChat brings messaging, calls, status, and live rooms into one fast, refined experience — built for everyday confidence.",
    featuresLabel: "Features",
    featuresTitle: "The full product surface",
    featuresLead: "Spin the gold dial — each node opens a different capability.",
    featuresHint: "Tap the nodes or use the arrows",
    featuresPrev: "Previous",
    featuresNext: "Next",
    chapters: [
      {
        id: "messaging",
        index: "1",
        short: "Chat",
        title: "Complete smart messaging",
        desc: "Smooth one-to-one chats with rich media and the details that matter daily.",
        points: [
          "Text, photos, video, documents, and voice notes",
          "Share location and contacts",
          "Pin important messages and archive chats",
        ],
      },
      {
        id: "groups",
        index: "2",
        short: "Groups",
        title: "Organized groups",
        desc: "Create your circles, invite with secure links, and manage clearly.",
        points: [
          "Group conversations that stay organized",
          "Easy join invites",
          "Admin tools when you need them",
        ],
      },
      {
        id: "calls",
        index: "3",
        short: "Calls",
        title: "Voice & video calls",
        desc: "Stay close with high-quality calls and instant alerts — on mobile or web.",
        points: [
          "Voice and video calling",
          "Clear call history",
          "Move from typing to a face-to-face conversation",
        ],
      },
      {
        id: "status",
        index: "4",
        short: "Status",
        title: "Status that feels premium",
        desc: "Share moments and follow people you care about with a polished viewer.",
        points: [
          "Photo and text status",
          "Distinct viewing experience",
          "Fast daily sharing",
        ],
      },
      {
        id: "rooms",
        index: "5",
        short: "Rooms",
        title: "Live rooms",
        desc: "Join live audio rooms and interact in the moment.",
        points: [
          "Live rooms built into the app",
          "Invites and join links",
          "Real-time presence beyond text chat",
        ],
      },
      {
        id: "privacy",
        index: "6",
        short: "Privacy",
        title: "Privacy under your control",
        desc: "Real protection tools — not empty slogans.",
        points: [
          "Two-step verification",
          "Lock sensitive chats",
          "Advanced blocking and permanent account deletion",
        ],
      },
      {
        id: "web",
        index: "7",
        short: "Web",
        title: "LanChat Web as a linked device",
        desc: "Open the web client, scan a QR code from your phone, and continue on the big screen.",
        points: [
          "Secure QR pairing",
          "Same account in the browser",
          "Built for desk and productivity",
        ],
      },
    ],
    extrasLabel: "And more",
    extrasTitle: "Details that improve every day",
    extras: [
      "In-chat polls",
      "Message reactions",
      "Translation that helps you connect",
      "Contact sync with real phonebook names",
      "Share photos, videos, and documents",
    ],
    webLabel: "Web",
    webTitle: "Desktop reach without leaving your phone behind",
    webText:
      "LanChat Web is a linked device: start at web.lanchat.net and scan from the app — a protected, synced session.",
    webCta: "Go to web",
    privacyLabel: "Security",
    privacyTitle: "Privacy is the foundation — not an afterthought",
    privacyText:
      "We don’t sell your data. You get clear control: privacy settings, blocking, and the full right to delete your account and everything linked to it.",
    privacyItems: [
      "Phone sign-in with two-step verification",
      "Chat lock and protected linked sessions",
      "One-tap permanent account and data deletion",
    ],
    downloadTitle: "Start with LanChat today",
    downloadText: "Download the mobile app, or open the web client and link your device in seconds.",
    getOn: "Get it on",
    appStore: "App Store",
    googlePlay: "Google Play",
    footerTagline: "Connect with confidence — chat, calls, and live rooms.",
    footerExplore: "Explore",
    footerContact: "Contact",
    footerCopy: "All rights reserved © Lan SMS Trading",
    support: "Support@lanchat.net",
  },
};
