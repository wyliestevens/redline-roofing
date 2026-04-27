'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod/v4';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { CheckCircle } from 'lucide-react';
import Image from 'next/image';
import { SITE } from '@/lib/site-config';

const CONSENT_TEXT = `By checking this box and clicking Get My Free Inspection, I give my prior express written consent for Redline Roofing & Restoration, LLC to contact me at the phone number I provided above, including by automated telephone dialing system, artificial or prerecorded voice, AI-generated voice, and/or text message, for marketing purposes regarding roofing services. I understand consent is not a condition of any purchase and that message and data rates may apply. I can revoke consent at any time by replying STOP to a text or telling the caller to stop calling. See our Privacy Policy and SMS Terms.`;

const STORAGE_KEY = 'redline_exit_shown';
const EXPIRY_DAYS = 14;

const schema = z.object({
  firstName: z.string().min(1, 'Required'),
  phone: z.string().min(10, 'Valid phone required'),
  consent: z.boolean().refine((v) => v, 'Required'),
});

type FormData = z.infer<typeof schema>;

export function ExitIntentPopup() {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submittedName, setSubmittedName] = useState('');
  const timeOnPage = useRef(0);
  const maxScroll = useRef(0);
  const lastScrollY = useRef(0);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const canShow = useCallback(() => {
    if (typeof window === 'undefined') return false;
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const expiry = parseInt(stored, 10);
      if (Date.now() < expiry) return false;
    }
    if (timeOnPage.current < 15) return false;
    if (maxScroll.current < 30) return false;
    return true;
  }, []);

  const showPopup = useCallback(() => {
    if (!canShow()) return;
    setOpen(true);
    localStorage.setItem(STORAGE_KEY, String(Date.now() + EXPIRY_DAYS * 86400000));
  }, [canShow]);

  useEffect(() => {
    const timer = setInterval(() => {
      timeOnPage.current += 1;
    }, 1000);

    const handleScroll = () => {
      const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      maxScroll.current = Math.max(maxScroll.current, scrollPercent);

      // Mobile: scroll up detection
      if (window.innerWidth < 768) {
        const scrollDelta = lastScrollY.current - window.scrollY;
        if (scrollDelta > 150 && maxScroll.current > 40) {
          showPopup();
        }
      }
      lastScrollY.current = window.scrollY;
    };

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && e.movementY < 0) {
        showPopup();
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      clearInterval(timer);
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [showPopup]);

  const onSubmit = async (data: FormData) => {
    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: data.firstName,
          phone: data.phone,
          consent: true,
          consentText: CONSENT_TEXT,
          consentTimestamp: new Date().toISOString(),
          consentVersion: '2026-04-A',
          pageUrl: window.location.href,
          userAgent: navigator.userAgent,
          source: 'exit_intent',
        }),
      });
      if (!res.ok) throw new Error();
      setSubmittedName(data.firstName);
      setSubmitted(true);
    } catch {
      toast.error('Something went wrong. Please try again.');
    }
  };

  return (
    <Dialog open={open} onOpenChange={(value) => setOpen(value)}>
      <DialogContent
        className="max-w-lg border-t-4 border-t-copper bg-white p-0 overflow-hidden"
        aria-labelledby="exit-popup-title"
      >
        <div className="relative h-48 w-full">
          <Image
            src="/img/exit-popup-crew.jpg"
            alt="Redline Roofing crew installing GAF Timberline HDZ shingles on an Oklahoma City home"
            fill
            sizes="(max-width: 512px) 100vw, 512px"
            className="object-cover"
          />
        </div>

        <div className="p-6">
          {submitted ? (
            <div className="text-center py-4">
              <p className="text-xl font-display font-semibold text-success mb-2">
                &#10003; Got it, {submittedName}.
              </p>
              <p className="text-slate-deep/80">
                Our AI assistant will call you within 30 seconds to schedule your inspection!
              </p>
            </div>
          ) : (
            <>
              <DialogTitle id="exit-popup-title" className="font-display text-2xl font-semibold mb-2">
                Wait — your roof inspection is free, and we&rsquo;ll meet your adjuster.
              </DialogTitle>
              <p className="text-slate-deep/80 mb-4">
                Spring storm season hits OKC March through June. The average State Farm hail claim in Oklahoma is now $17,000. Don&rsquo;t find out you have damage when the leak starts.
              </p>

              <ul className="mb-6 space-y-2">
                {[
                  '27-point HAAG-certified inspection — free, no obligation',
                  'We meet your adjuster on-site, free',
                  '$0 down financing if you need a new roof',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm">
                    <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-copper" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-3" noValidate>
                <div>
                  <Label htmlFor="exit-firstName">First name</Label>
                  <Input
                    id="exit-firstName"
                    autoComplete="given-name"
                    aria-invalid={!!errors.firstName}
                    {...register('firstName')}
                  />
                </div>
                <div>
                  <Label htmlFor="exit-phone">Phone</Label>
                  <Input
                    id="exit-phone"
                    type="tel"
                    autoComplete="tel"
                    inputMode="numeric"
                    aria-invalid={!!errors.phone}
                    {...register('phone')}
                  />
                </div>
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="exit-consent"
                    className="mt-1 h-4 w-4 rounded border-slate-deep/30"
                    {...register('consent')}
                  />
                  <label htmlFor="exit-consent" className="text-[13px] leading-snug text-slate-deep/85">
                    {CONSENT_TEXT}
                  </label>
                </div>
                {errors.consent && (
                  <p className="text-sm text-destructive" role="alert">{errors.consent.message}</p>
                )}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full min-h-[48px] bg-copper text-white hover:bg-copper-dk rounded-lg font-semibold"
                >
                  {isSubmitting ? 'Sending...' : 'Send My Inspector'}
                </Button>
              </form>

              <button
                onClick={() => setOpen(false)}
                className="mt-3 w-full text-center text-sm text-slate-deep/50 underline hover:text-slate-deep/70"
              >
                No thanks, I&rsquo;ll wait until I have a leak.
              </button>
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
