import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Credentials } from "@/components/credentials"
import { HowItWorks } from "@/components/how-it-works"
import { VideoPreview } from "@/components/video-preview"
import { Lessons } from "@/components/lessons"
import { About } from "@/components/about"
import { SongExamples } from "@/components/song-examples"
import { Testimonials } from "@/components/testimonials"
import { LeadMagnet } from "@/components/lead-magnet"
import { Faq } from "@/components/faq"
import { Booking } from "@/components/booking"
import { ContactForm } from "@/components/contact-form"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Credentials />
        <LeadMagnet />
        <HowItWorks />
        <VideoPreview />
        <Lessons />
        <About />
        <SongExamples />
        <Testimonials />
        <Faq />
        <Booking />
        <ContactForm />
      </main>
      <Footer />
    </>
  )
}
