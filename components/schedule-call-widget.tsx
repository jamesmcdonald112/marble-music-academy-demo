'use client'

import { useState } from 'react'
import { Calendar } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from '@/components/ui/dialog'

export function ScheduleCallWidget() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        aria-label="Book a free consultation call"
        className="fixed bottom-6 right-6 z-40 flex items-center justify-center gap-2 rounded-full bg-accent text-accent-foreground shadow-lg transition-all hover:scale-105 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 h-12 w-12 sm:h-auto sm:w-auto sm:px-5 sm:py-3"
      >
        <Calendar className="h-5 w-5 shrink-0" />
        <span className="hidden text-sm font-semibold sm:inline">Book a Call</span>
      </button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="font-serif text-xl">
              Book a Free Consultation
            </DialogTitle>
            <DialogDescription className="pt-2 leading-relaxed">
              This is a placeholder for Calendly integration. In the live
              version, this is where you would be able to pick a date and time
              to book a free introductory guitar lesson consultation.
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col items-center gap-4 rounded-lg border border-border bg-muted/50 px-6 py-8">
            <Calendar className="h-10 w-10 text-accent" />
            <p className="text-center text-sm text-muted-foreground">
              Calendly scheduling widget will appear here once connected.
            </p>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="default" className="w-full sm:w-auto">
                Got it
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}
