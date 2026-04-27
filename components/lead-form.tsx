'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod/v4';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { SITE } from '@/lib/site-config';

const CONSENT_TEXT = `By checking this box and clicking Get My Free Inspection, I give my prior express written consent for Redline Roofing & Restoration, LLC to contact me at the phone number I provided above, including by automated telephone dialing system, artificial or prerecorded voice, AI-generated voice, and/or text message, for marketing purposes regarding roofing services. I understand consent is not a condition of any purchase and that message and data rates may apply. I can revoke consent at any time by replying STOP to a text or telling the caller to stop calling. See our Privacy Policy and SMS Terms.`;

const CONSENT_VERSION = '2026-04-A';

const issueOptions = [
  'I think I have storm damage',
  'Active leak / emergency',
  'Old roof, time to replace',
  'Just want a free inspection',
  'Commercial property',
  'Insurance claim help',
] as const;

const schema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  phone: z.string().min(10, 'Valid phone number required'),
  address: z.string().min(5, 'Property address is required'),
  issue: z.string().min(1, 'Please select an option'),
  consent: z.boolean().refine((v) => v === true, 'Consent is required'),
});

type FormData = z.infer<typeof schema>;

interface LeadFormProps {
  source?: string;
  className?: string;
  compact?: boolean;
}

export function LeadForm({ source = 'inline', className = '', compact = false }: LeadFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [submittedName, setSubmittedName] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      firstName: '',
      phone: '',
      address: '',
      issue: '',
      consent: false,
    },
  });

  const onSubmit = async (data: FormData) => {
    try {
      const payload = {
        firstName: data.firstName,
        phone: data.phone,
        address: data.address,
        issue: data.issue,
        consent: true,
        consentText: CONSENT_TEXT,
        consentTimestamp: new Date().toISOString(),
        consentVersion: CONSENT_VERSION,
        pageUrl: typeof window !== 'undefined' ? window.location.href : '',
        userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : '',
        source,
      };

      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error('Submission failed');

      setSubmittedName(data.firstName);
      setSubmitted(true);
    } catch {
      toast.error('Something went wrong. Please try again or call us directly.', {
        action: {
          label: 'Retry',
          onClick: () => handleSubmit(onSubmit)(),
        },
      });
    }
  };

  if (submitted) {
    return (
      <div className={`rounded-xl bg-white p-8 shadow-soft ${className}`}>
        <div className="text-center">
          <p className="mb-2 text-2xl font-display font-semibold text-success">
            &#10003; Got it, {submittedName}.
          </p>
          <p className="mb-6 text-slate-deep/80">
            Our AI assistant will call you at the number you provided within 30 seconds to schedule your free inspection. Watch your phone!
          </p>
          <a
            href={SITE.phoneHref}
            className="inline-flex min-h-[48px] items-center rounded-lg border-2 border-copper px-6 py-3 font-semibold text-copper transition-colors hover:bg-copper hover:text-white"
          >
            Call now to skip the wait: {SITE.phone}
          </a>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`rounded-xl bg-white p-6 shadow-soft sm:p-8 ${className}`}
      noValidate
    >
      {!compact && (
        <p className="mb-6 font-display text-xl font-semibold">
          Get your free roof inspection
        </p>
      )}

      <div className="space-y-4">
        <div>
          <Label htmlFor={`firstName-${source}`}>First name</Label>
          <Input
            id={`firstName-${source}`}
            autoComplete="given-name"
            aria-invalid={!!errors.firstName}
            aria-describedby={errors.firstName ? `fn-error-${source}` : undefined}
            {...register('firstName')}
          />
          {errors.firstName && (
            <p id={`fn-error-${source}`} className="mt-1 text-sm text-destructive" role="alert">
              {errors.firstName.message}
            </p>
          )}
        </div>

        <div>
          <Label htmlFor={`phone-${source}`}>Phone</Label>
          <Input
            id={`phone-${source}`}
            type="tel"
            autoComplete="tel"
            inputMode="numeric"
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? `ph-error-${source}` : undefined}
            {...register('phone')}
          />
          {errors.phone && (
            <p id={`ph-error-${source}`} className="mt-1 text-sm text-destructive" role="alert">
              {errors.phone.message}
            </p>
          )}
        </div>

        <div>
          <Label htmlFor={`address-${source}`}>Property address</Label>
          <Input
            id={`address-${source}`}
            autoComplete="street-address"
            aria-invalid={!!errors.address}
            aria-describedby={errors.address ? `addr-error-${source}` : undefined}
            {...register('address')}
          />
          {errors.address && (
            <p id={`addr-error-${source}`} className="mt-1 text-sm text-destructive" role="alert">
              {errors.address.message}
            </p>
          )}
        </div>

        <div>
          <Label htmlFor={`issue-${source}`}>Roof issue</Label>
          <select
            id={`issue-${source}`}
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            aria-invalid={!!errors.issue}
            aria-describedby={errors.issue ? `issue-error-${source}` : undefined}
            {...register('issue')}
          >
            <option value="">Select your situation...</option>
            {issueOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
          {errors.issue && (
            <p id={`issue-error-${source}`} className="mt-1 text-sm text-destructive" role="alert">
              {errors.issue.message}
            </p>
          )}
        </div>

        <div className="flex items-start gap-3">
          <input
            type="checkbox"
            id={`consent-${source}`}
            className="mt-1 h-4 w-4 rounded border-slate-deep/30 text-copper focus:ring-copper"
            aria-invalid={!!errors.consent}
            aria-describedby={`consent-text-${source}`}
            {...register('consent')}
          />
          <label
            htmlFor={`consent-${source}`}
            id={`consent-text-${source}`}
            className="text-[13px] leading-snug text-slate-deep/85"
          >
            {CONSENT_TEXT}
          </label>
        </div>
        {errors.consent && (
          <p className="text-sm text-destructive" role="alert">
            {errors.consent.message}
          </p>
        )}

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full min-h-[48px] bg-copper text-white hover:bg-copper-dk rounded-lg px-6 py-3.5 font-semibold text-base"
        >
          {isSubmitting ? 'Sending...' : 'Get My Free Inspection →'}
        </Button>

        <p className="text-center text-xs text-slate-deep/60">
          Our AI assistant will call you within 30 seconds to schedule your appointment.
        </p>
      </div>
    </form>
  );
}
