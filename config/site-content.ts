/**
 * Site Content Configuration
 * ==========================
 * All editable text content for the site lives here.
 * Update the values below to customise the site for a new teacher/brand.
 *
 * Sections are organised to match the component structure.
 */

export const siteContent = {
  // ─── Global / Meta ───────────────────────────────────────────────
  meta: {
    title: "Group Guitar Lessons in Kilkenny | Marble Music Academy",
    description:
      "Group guitar lessons for ages 8–15 in Kilkenny. Structured 5-week beginner intake (€90) followed by term-based groups (€18/lesson). Limited private lessons available.",
    themeColor: "#f6f3ef",
  },

  // ─── Header ──────────────────────────────────────────────────────
  header: {
    logo: "Marble Music Academy",
    navLinks: [
      { label: "How It Works", href: "#how-it-works" },
      { label: "Programmes", href: "#programs" },
      { label: "About", href: "#about" },
      { label: "FAQ", href: "#faq" },
      { label: "Contact", href: "#contact" },
    ],
    ctaLabel: "Book a Call",
    ctaHref: "/book-a-call",
  },

  // ─── Hero ────────────────────────────────────────────────────────
  hero: {
    tagline: "Group Guitar Lessons in Kilkenny",
    heading: "Structured Group Classes That Actually Work",
    image: { src: "/hero.webp", alt: "Small group guitar class" },
    description:
      "Group guitar lessons for ages 8–15. Clear weekly structure, consistent progress, and a low-risk 5-week beginner intake — instruments included so they can try it properly before committing.",
    primaryCta: { label: "Book a Call", href: "/book-a-call" },
    secondaryCta: { label: "Ask a Question", href: "#contact" },
  },

  // ─── Credentials ─────────────────────────────────────────────────
  credentials: {
    stats: [
      { value: "7+", label: "Years Teaching" },
      { value: "300+", label: "Students Taught" },
      { value: "3–6", label: "Students Per Group" },
      { value: "80–90%+", label: "Typical Exam Scores" },
    ],
  },

  // ─── How It Works ────────────────────────────────────────────────
  howItWorks: {
    tagline: "How It Works",
    heading: "Simple, structured, effective",
    steps: [
      {
        iconName: "CalendarCheck" as const,
        title: "Enquire or book a call",
        description:
          "Submit an enquiry or book a short call. We’ll confirm age, current level, and the days/times that work for your family.",
      },
      {
        iconName: "Target" as const,
        title: "5 Weeks Beginner Program (€90)",
        description:
          "A structured introduction used to build fundamentals and make sure the class environment is the right fit before long-term placement.",
      },
      {
        iconName: "TrendingUp" as const,
        title: "Move into a long-term group",
        description:
          "Students are placed into small, age and level-appropriate groups (3–6 students) on a fixed weekly schedule. Billed by term to protect group stability and support steady progress.",
      },
    ],
  },

  // ─── Video Preview ───────────────────────────────────────────────
  videoPreview: {
    tagline: "See It in Action",
    heading: "What a class looks like",
    description:
      "A short clip showing how sessions run: structured progression, clear rhythm work, and practical guidance students can follow at home.",
    videoEmbedUrl: "https://www.youtube.com/embed/H3Yz4XaMKCM",
    playButtonLabel: "Watch a class preview",
    footnote:
      "Groups are segmented by age and level to keep the pace right for everyone.\nDemo footage for website demonstration only; all rights belong to the original creator: https://www.youtube.com/watch?v=H3Yz4XaMKCM",
  },

  // ─── Programs ────────────────────────────────────────────────────
  programs: {
    tagline: "Programmes",
    heading: "Choose the right starting point",
    description:
      "The model is simple: begin with a low-risk structured intake, then progress into a stable long-term group.",
    types: [
      {
        duration: "€90 total (5 weeks)",
        label: "Beginner Group Program",
        description:
          "A structured 5-week beginner programme (€90) that builds core fundamentals. Classes are organised in small groups (3–6 students) by age and skill level (typically ages 8–15). Instruments are provided, so there’s no upfront equipment cost and no long-term commitment to start.",
        suited: "Best for new starters",
        highlighted: true,
      },
      {
        duration: "€18 per lesson (billed by term)",
        label: "Group Program",
        description:
          "Students from the Beginner Group Program who want to continue move into this next option. Small-group classes (3–6 students) for ages 8–15 are organised by age and skill level, with a fixed weekly time slot, structured progression curriculum, and steady weekly momentum.",
        suited: "Best for long-term progress",
        highlighted: false,
      },
      {
        duration: "€50 per private lesson",
        label: "Private Lessons (Limited)",
        description:
          "For families or adults who need flexibility and can’t commit to a fixed weekly group slot. Limited availability.",
        suited: "Best for flexibility needs",
        highlighted: false,
      },
    ],
  },

  // ─── About ───────────────────────────────────────────────────────
  about: {
    tagline: "About",
    heading: "Your teacher",
    image: { src: "/about.webp", alt: "Guitar teacher in Kilkenny" },
    paragraphs: [
      "I’m James, a classical guitarist and teacher based in Kilkenny. I’ve spent over nine years teaching and have worked with more than 300 students — from complete beginners to exam candidates.",
      "My own training was built on discipline and high standards. I won First Prize at the 2017 and 2018 Feis Ceoil National Classical Guitar Competitions, as well as the 2017 Bridget Doolan Award for Outstanding Performance at WIT. I also hold a First Class Honours degree in Music.",
      "Music, for me, has always been about more than performance. It’s about focus, patience, and learning how progress actually works. I believe students don’t need constant motivation — they need clarity, consistency, and someone who sets the standard.",
      "Whether a student chooses to take exams or simply wants to enjoy playing, my aim is the same: build strong foundations, develop confidence, and help them experience real, measurable improvement over time.",
    ],
  },

  // ─── Song Examples ───────────────────────────────────────────────
  songExamples: {
    tagline: "What They’ll Learn",
    heading: "Songs used to teach real fundamentals",
    description:
      "Song choices depend on age and level. The goal is progression: timing, chord control, clean changes, and playing confidently in time.",
    ctaLabel: "Book a Call",
    ctaHref: "/book-a-call",
    secondaryCtaLabel: "Ask a Question",
    secondaryCtaHref: "#contact",
    songs: [
      {
        title: "Wonderwall",
        artist: "Oasis",
        difficulty: "Beginner",
        videoUrl: "https://www.youtube.com/watch?v=bx1Bh8ZvH84",
      },
      {
        title: "Wish You Were Here",
        artist: "Pink Floyd",
        difficulty: "Beginner",
        videoUrl: "https://www.youtube.com/watch?v=IXdNnw99-Ic",
      },
      {
        title: "Fast Car",
        artist: "Tracy Chapman",
        difficulty: "Beginner",
        videoUrl: "https://www.youtube.com/watch?v=AIOAlaACuv4",
      },
      {
        title: "Blackbird",
        artist: "The Beatles",
        difficulty: "Intermediate",
        videoUrl: "https://www.youtube.com/watch?v=Man4Xw8Xypo",
      },
      {
        title: "Tears in Heaven",
        artist: "Eric Clapton",
        difficulty: "Intermediate",
        videoUrl: "https://www.youtube.com/watch?v=JxPj3GAYYZ0",
      },
      {
        title: "Hotel California",
        artist: "Eagles",
        difficulty: "Intermediate",
        videoUrl: "https://www.youtube.com/watch?v=09839DpTctU",
      },
      {
        title: "Nothing Else Matters",
        artist: "Metallica",
        difficulty: "Intermediate",
        videoUrl: "https://www.youtube.com/watch?v=tAGnKpE4NCI",
      },
      {
        title: "Hallelujah",
        artist: "Jeff Buckley",
        difficulty: "Intermediate",
        videoUrl: "https://www.youtube.com/watch?v=y8AWFf7EAc4",
      },
      {
        title: "Dust in the Wind",
        artist: "Kansas",
        difficulty: "Intermediate",
        videoUrl: "https://www.youtube.com/watch?v=tH2w6Oxx0kQ",
      },
    ],
  },

  // ─── Testimonials ────────────────────────────────────────────────
  testimonials: {
    tagline: "What Parents Say",
    heading: "Structure beats motivation",
    items: [
      {
        quote:
          "My son settled in quickly and actually looks forward to class each week. The routine has made practice much easier at home.",
        name: "Mary P.",
        role: "Group program",
      },
      {
        quote:
          "The beginner programme was a great start. We could see steady progress without feeling pressured to commit straight away.",
        name: "John K.",
        role: "Group program",
      },
      {
        quote:
          "Everything is well organised and clearly explained. It feels like a proper learning path, not just random songs each week.",
        name: "Aoife R.",
        role: "Group program",
      },
      {
        quote:
          "The fixed weekly time has helped massively. We are no longer trying to guess what to practise, and progress has been steady.",
        name: "Liam D.",
        role: "Group program",
      },
      {
        quote:
          "I liked that we could start without buying gear straight away. The classes are structured, calm, and easy for kids to follow.",
        name: "Sarah M.",
        role: "Group program",
      },
      {
        quote:
          "Communication has been excellent from day one. The class structure is clear, and my daughter has become much more confident playing at home.",
        name: "Niamh C.",
        role: "Group program",
      },
    ],
    primaryCta: { label: "Enquire Now", href: "#contact" },
    secondaryCta: { label: "Book a Call", href: "/book-a-call" },
  },

  // ─── Lead Magnet ──────────────────────────────────────────────────
  leadMagnet: {
    tagline: "Free Download",
    heading: "Beginner Guitar Starter Pack",
    description:
      "A simple guide for parents: what to expect in the first few weeks, how practice should look at home, and how to support progress without nagging.",
    bulletPoints: [
      "What a realistic practice week looks like",
      "How to avoid early beginner mistakes",
      "What to buy (and what not to buy) first",
      "How progress is measured in class",
    ],
    pdfPath: "/beginner-guitar-starter-pack.pdf",
    pdfFileName: "Beginner-Guitar-Starter-Pack.pdf",
    fields: {
      name: { label: "Parent name", placeholder: "Your name" },
      email: { label: "Email", placeholder: "you@email.com" },
    },
    submitLabel: "Send Me the Starter Pack",
    successHeading: "Check your inbox!",
    successMessage:
      "Your download is on its way. If you don’t see it within a few minutes, check spam/junk.",
    footnote: "No spam. Unsubscribe any time.",
  },

  // ─── FAQ ─────────────────────────────────────────────────────────
  faq: {
    tagline: "Common Questions",
    heading: "Frequently asked questions",
    items: [
      {
        question: "What ages are the group lessons for?",
        answer:
          "Group programs are primarily for ages 8–15. Groups are segmented by age bracket to keep the pace and class dynamic right.",
      },
      {
        question: "How big are the groups?",
        answer:
          "Groups are kept small — typically 3–6 students — so students still get individual attention while benefiting from a cohort environment.",
      },
      {
        question: "Do we have to commit long-term straight away?",
        answer:
          "No. Most students start with the €90 5-week beginner programme first. After that, students are placed into the right long-term group cohort.",
      },
      {
        question: "Why is the weekly slot fixed?",
        answer:
          "Consistency is what drives progress, and the group structure depends on predictable attendance. Flexibility tends to break momentum and disrupts the class for everyone.",
      },
      {
        question: "Can we pay weekly instead of upfront per term?",
        answer:
          "Term payments are collected upfront to protect the group’s stability and ensure places are held. If you need pay-as-you-go flexibility, private lessons are the better fit (limited availability).",
      },
      {
        question: "What if the schedule doesn’t suit?",
        answer:
          "If there’s no suitable slot available, you can join the waiting list. When a space opens in the right bracket, you’ll be contacted first.",
      },
    ],
  },

  // ─── Booking ─────────────────────────────────────────────────────
  booking: {
    tagline: "Start Here",
    heading: "Join the 5-Week Beginner Intake",
    description:
      "The beginner intake is the simplest way to start: structured, low-risk, and designed to prepare students for long-term group progression.",
    ctaLabel: "Book a Call",
    ctaHref: "/book-a-call",
    secondaryCtaLabel: "Ask a Question",
    secondaryCtaHref: "#contact",
    footnote:
      "Most families decide same day or within 24 hours once the schedule fit is confirmed.",
  },

  // ─── Contact Form ────────────────────────────────────────────────
  contact: {
    tagline: "Get in Touch",
    heading: "Enquire about availability",
    description:
      "Tell me the student’s age, experience level, and what days/times suit. You’ll get a response within 24 hours.",
    submitLabel: "Send Enquiry",
    successHeading: "Thank you",
    successMessage: "I\u2019ll be in touch within 24 hours.",
    fields: {
      name: { label: "Parent name", placeholder: "Your name", required: true },
      email: { label: "Email", placeholder: "you@email.com", required: true },
      phone: { label: "Phone", placeholder: "+353 ...", required: true },
    },
  },

  // ─── Footer ──────────────────────────────────────────────────────
  footer: {
    name: "Marble Music Academy",
    tagline: "Group Guitar Lessons in Kilkenny",
    email: "marblemusicacademy@example.com",
    ctaLabel: "Book a Call",
    ctaHref: "/book-a-call",
    secondaryCtaLabel: "Ask a Question",
    secondaryCtaHref: "#contact",
  },
} as const

/** TypeScript type for the full config – useful if you ever split into multiple files */
export type SiteContent = typeof siteContent
