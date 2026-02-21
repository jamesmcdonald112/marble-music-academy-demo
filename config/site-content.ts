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
    title: "Guitar Lessons for Busy Professionals | Online 1:1 Tuition",
    description:
      "Structured, personalised online guitar lessons designed for busy adults. 9+ years experience, 300+ students taught. Book your first lesson today.",
    themeColor: "#f6f3ef",
    /** Google Analytics Measurement ID – set to "" to disable */
    gaId: "G-0NN2JH51SF",
  },

  // ─── Header ──────────────────────────────────────────────────────
  header: {
    logo: "Guitar with James",
    navLinks: [
      { label: "How It Works", href: "#how-it-works" },
      { label: "Lessons", href: "#lessons" },
      { label: "About", href: "#about" },
      { label: "Contact", href: "#contact" },
    ],
    ctaLabel: "Book a Lesson",
    ctaHref: "#book",
  },

  // ─── Hero ────────────────────────────────────────────────────────
  hero: {
    tagline: "Online 1:1 Guitar Lessons",
    heading: "Learn guitar on your schedule",
    image: { src: "/hero.webp", alt: "Close-up of fingers playing guitar strings" },
    description:
      "Structured, personalised lessons designed for busy professionals who want real progress without wasting time.",
    primaryCta: { label: "Book a Lesson", href: "#book" },
    secondaryCta: { label: "Ask a Question", href: "#contact" },
  },

  // ─── Credentials ─────────────────────────────────────────────────
  credentials: {
    stats: [
      { value: "9+", label: "Years Teaching" },
      { value: "300+", label: "Students Taught" },
      { value: "80\u201390%+", label: "Typical Exam Scores" },
      { value: "1st Class", label: "Honours in Music" },
    ],
  },

  // ─── How It Works ────────────────────────────────────────────────
  howItWorks: {
    tagline: "How It Works",
    heading: "Simple, structured, effective",
    steps: [
      {
        iconName: "CalendarCheck" as const,
        title: "Book a time that suits you",
        description:
          "Choose a 30, 45, or 60 minute slot that fits your schedule. Lessons happen over Zoom, so you can learn from anywhere.",
      },
      {
        iconName: "Target" as const,
        title: "Get a structured plan",
        description:
          "No aimless noodling. Every lesson follows a clear plan tailored to your goals, skill level, and the time you have to practise.",
      },
      {
        iconName: "TrendingUp" as const,
        title: "See real progress",
        description:
          "Track your improvement week by week. Efficient practice routines mean you make genuine progress, even with a busy life.",
      },
    ],
  },

  // ─── Video Preview ───────────────────────────────────────────────
  videoPreview: {
    tagline: "See It in Action",
    heading: "A taste of how I teach",
    description:
      "Watch a short clip to see what a lesson looks like. Structured, focused, and always tailored to where you are right now.",
    videoEmbedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    playButtonLabel: "Watch a lesson preview",
    footnote:
      "This is a short preview. Every lesson is fully personalised to your goals.",
  },

  // ─── Lessons ─────────────────────────────────────────────────────
  lessons: {
    tagline: "Lessons",
    heading: "Choose the format that fits your life",
    description:
      "All lessons are 1:1 over Zoom. Every session is personalised to your goals, pace, and the music you want to play.",
    types: [
      {
        duration: "30 min",
        label: "Focused Session",
        description:
          "Perfect for maintaining momentum between longer sessions. Ideal for targeted technique work or quick check-ins on your progress.",
        suited: "Best for weekly top-ups",
        highlighted: false,
      },
      {
        duration: "45 min",
        label: "Standard Session",
        description:
          "The most popular option. Enough time to warm up, work on new material, and practise together. A great balance of depth and efficiency.",
        suited: "Most popular",
        highlighted: true,
      },
      {
        duration: "60 min",
        label: "Deep Dive",
        description:
          "For those who want to go deeper. Cover multiple topics, learn full songs, or work through theory and technique in a single session.",
        suited: "Best for faster progress",
        highlighted: false,
      },
    ],
    ctaBand: {
      heading: "Ready to make real progress?",
      description:
        "Your first lesson includes a free consultation to map out your goals and build a personalised plan.",
      primaryCta: { label: "Book a Lesson", href: "#book" },
      secondaryCta: { label: "Ask a Question", href: "#contact" },
    },
  },

  // ─── About ───────────────────────────────────────────────────────
  about: {
    tagline: "About",
    heading: "Your teacher",
    image: { src: "/about.webp", alt: "James playing classical guitar" },
    paragraphs: [
      "I\u2019m James, and I\u2019ve been teaching guitar for over nine years. I hold a first-class honours degree in music, and I\u2019ve had the privilege of working with more than 300 students\u2009\u2014\u2009from complete beginners to those preparing for graded exams.",
      "My students who have taken exams typically score between 80\u201390%+. But results aside, what I care about most is helping you enjoy the process and see real, measurable improvement.",
      "I specialise in working with busy adults. That means no wasted time, no vague advice\u2009\u2014\u2009just clear, structured teaching that respects your schedule and gets you playing the music you love.",
    ],
  },

  // ─── Song Examples ───────────────────────────────────────────────
  songExamples: {
    tagline: "Song Examples",
    heading: "Learn songs you actually want to play",
    description:
      "Examples of songs we can work toward (tailored to your level).",
    ctaLabel: "Book a Lesson",
    ctaHref: "#book",
    songs: [
      {
        title: "Wish You Were Here",
        artist: "Pink Floyd",
        difficulty: "Beginner",
        videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      },
      {
        title: "Wonderwall",
        artist: "Oasis",
        difficulty: "Beginner",
        videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      },
      {
        title: "Blackbird",
        artist: "The Beatles",
        difficulty: "Intermediate",
        videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      },
      {
        title: "Hotel California",
        artist: "Eagles",
        difficulty: "Intermediate",
        videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      },
      {
        title: "Tears in Heaven",
        artist: "Eric Clapton",
        difficulty: "Intermediate",
        videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      },
      {
        title: "Nothing Else Matters",
        artist: "Metallica",
        difficulty: "Intermediate",
        videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      },
      {
        title: "Fast Car",
        artist: "Tracy Chapman",
        difficulty: "Beginner",
        videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      },
      {
        title: "Hallelujah",
        artist: "Leonard Cohen",
        difficulty: "Beginner",
        videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      },
      {
        title: "Classical Gas",
        artist: "Mason Williams",
        difficulty: "Advanced",
        videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      },
    ],
  },

  // ─── Testimonials ────────────────────────────────────────────────
  testimonials: {
    tagline: "What Students Say",
    heading: "Real progress, real people",
    items: [
      {
        quote:
          "I tried learning on my own for years. After just a few weeks with James, I was playing songs I never thought I could. The structured approach makes all the difference.",
        name: "Sarah M.",
        role: "Marketing Director",
      },
      {
        quote:
          "As someone with very little free time, I needed a teacher who wouldn\u2019t waste a single minute. James is exactly that. Every lesson is focused and productive.",
        name: "David R.",
        role: "Software Engineer",
      },
      {
        quote:
          "I picked up the guitar at 40 and scored 87% on my Grade 3 exam within a year. James has a real gift for making complex things feel simple.",
        name: "Tom K.",
        role: "Financial Analyst",
      },
    ],
    primaryCta: { label: "Book a Lesson", href: "#book" },
    secondaryCta: { label: "Ask a Question", href: "#contact" },
  },

  // ─── Lead Magnet ──────────────────────────────────────────────────
  leadMagnet: {
    tagline: "Free Download",
    heading: "The Simple Guitar Practice Framework",
    description:
      "A clear, repeatable system for making real progress with limited time. Used by 300+ students to build effective practice habits.",
    bulletPoints: [
      "The three-stage practice cycle",
      "The \"three clean\" rule for faster learning",
      "How to practise when you only have 10 minutes",
      "Why slow practice builds lasting skill",
    ],
    pdfPath: "/simple-guitar-practice-framework.pdf",
    pdfFileName: "Simple-Guitar-Practice-Framework.pdf",
    fields: {
      name: { label: "First name", placeholder: "Your first name" },
      email: { label: "Email", placeholder: "you@email.com" },
    },
    submitLabel: "Send Me the Guide",
    successHeading: "Check your inbox!",
    successMessage:
      "Your free guide is on its way. If you don\u2019t see it within a few minutes, check your spam folder.",
    footnote: "No spam. Unsubscribe any time.",
  },

  // ─── FAQ ─────────────────────────────────────────────────────────
  faq: {
    tagline: "Common Questions",
    heading: "Frequently asked questions",
    items: [
      {
        question: "Am I too old to start?",
        answer:
          "Not at all. Adults often progress faster because they\u2019re focused and intentional with their time. The key isn\u2019t age \u2014 it\u2019s consistency. Even small, regular practice blocks create real momentum.",
      },
      {
        question: "How much practice do I need each week?",
        answer:
          "If you take a one-hour lesson, a good benchmark is roughly 4\u20135 hours of practice per week. That\u2019s not always realistic for busy professionals, so we focus on making your available time highly effective. A practical minimum is 1\u20132 hours per week spread across at least 3 days.",
      },
      {
        question: "What do I need for online lessons?",
        answer:
          "A reliable internet connection, a laptop or tablet with a camera, and good lighting so I can clearly see your hands. Headphones are helpful but not essential. I\u2019ll guide you through setup so your sessions run smoothly from the start.",
      },
      {
        question: "How do rescheduling and cancellations work?",
        answer:
          "Lessons can be rescheduled outside a 24-hour window using Calendly. Changes within 24 hours aren\u2019t refundable. This keeps the schedule consistent and ensures committed progress.",
      },
      {
        question: "What will we focus on in the first lesson?",
        answer:
          "If you\u2019re starting from scratch, we\u2019ll cover basic rhythm reading, how to read guitar tablature, and playing in time with a recording. You\u2019ll leave with a clear practice plan. The goal is to give you structure and early wins from day one.",
      },
    ],
  },

  // ─── Booking ─────────────────────────────────────────────────────
  booking: {
    tagline: "Book a Lesson",
    heading: "Ready to start playing?",
    description:
      "Pick a time that works for you. Your first lesson includes a short consultation to understand your goals and build your personalised learning plan.",
    ctaLabel: "Book a Lesson",
    ctaHref: "https://calendly.com",
    footnote: "Free consultation included with your first lesson",
  },

  // ─── Contact Form ────────────────────────────────────────────────
  contact: {
    tagline: "Get in Touch",
    heading: "Have a question?",
    description:
      "Send me your details and I\u2019ll get back to you within 24 hours.",
    submitLabel: "Send Enquiry",
    successHeading: "Thank you",
    successMessage: "I\u2019ll be in touch within 24 hours.",
    fields: {
      name: { label: "Name", placeholder: "Your name", required: true },
      email: { label: "Email", placeholder: "you@email.com", required: true },
      phone: { label: "Phone", placeholder: "+44 7000 000000", required: false },
    },
  },

  // ─── Footer ──────────────────────────────────────────────────────
  footer: {
    name: "Your Name",
    tagline: "Online Guitar Lessons for Busy Professionals",
    email: "youremail@example.com",
    ctaLabel: "Book a Lesson",
    ctaHref: "#book",
    secondaryCtaLabel: "Ask a Question",
    secondaryCtaHref: "#contact",
  },
} as const

/** TypeScript type for the full config – useful if you ever split into multiple files */
export type SiteContent = typeof siteContent
