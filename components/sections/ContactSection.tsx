"use client";

import { useActionState } from "react";
import { siteConfig } from "@/lib/site";
import { contactContent, contactNextSteps } from "@/lib/contact";
import {
  submitContact,
  type ContactFormState,
} from "@/app/contact/actions";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { CheckIcon } from "@/components/icons";

const initialState: ContactFormState = { success: false, message: "" };

const inputClass =
  "w-full h-11 px-3.5 text-sm text-ink bg-canvas border border-hairline rounded-lg transition-colors focus:outline-none focus:border-ink placeholder:text-muted";

const labelClass = "block text-xs font-semibold uppercase tracking-wider text-muted mb-2";

function MailIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M3 7l9 6 9-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function MapPinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="M12 21s7-4.5 7-11a7 7 0 10-14 0c0 6.5 7 11 7 11z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function ClockIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 7v5l3 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function ContactChannels() {
  const channels = [
    {
      icon: MailIcon,
      label: "Email",
      value: siteConfig.email,
      href: `mailto:${siteConfig.email}`,
    },
    {
      icon: MapPinIcon,
      label: "Location",
      value: siteConfig.location,
    },
    {
      icon: ClockIcon,
      label: "Hours",
      value: siteConfig.hours,
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-8 sm:mt-10">
      {channels.map(({ icon: Icon, label, value, href }) => (
        <div
          key={label}
          className="rounded-xl border border-hairline bg-canvas p-4 card-shadow"
        >
          <Icon className="w-5 h-5 text-brand-accent mb-3" />
          <p className="text-[10px] font-semibold uppercase tracking-wider text-muted">
            {label}
          </p>
          {href ? (
            <a
              href={href}
              className="mt-1 block text-sm font-medium text-ink hover:text-brand-accent transition-colors break-all"
            >
              {value}
            </a>
          ) : (
            <p className="mt-1 text-sm font-medium text-ink">{value}</p>
          )}
        </div>
      ))}
    </div>
  );
}

function NextSteps() {
  return (
    <div className="mt-12">
      <p className="text-xs font-semibold uppercase tracking-wider text-muted mb-4">
        What happens next
      </p>
      <ol className="space-y-4">
        {contactNextSteps.map((item) => (
          <li key={item.step} className="flex gap-4">
            <span className="font-mono text-sm font-semibold text-brand-accent shrink-0 pt-0.5">
              {item.step}
            </span>
            <div>
              <p className="text-sm font-semibold text-ink">{item.title}</p>
              <p className="mt-0.5 text-sm text-body leading-relaxed">{item.detail}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

function ContactForm() {
  const [state, formAction, pending] = useActionState(submitContact, initialState);

  if (state.success) {
    return (
      <div className="rounded-2xl border border-hairline bg-canvas p-10 md:p-12 text-center card-shadow-md h-full flex flex-col items-center justify-center min-h-[420px]">
        <span className="flex items-center justify-center w-14 h-14 rounded-full bg-success/10 text-success border border-success/20 mb-5">
          <CheckIcon className="w-7 h-7" />
        </span>
        <p className="text-xl font-semibold text-ink">Message sent!</p>
        <p className="mt-2 text-body max-w-sm">{state.message}</p>
      </div>
    );
  }

  return (
    <form
      action={formAction}
      className="rounded-2xl border border-hairline bg-canvas card-shadow-md overflow-hidden"
    >
      <div className="px-6 py-5 border-b border-hairline bg-surface-strong/25">
        <p className="text-xs font-semibold uppercase tracking-wider text-muted">
          Project brief
        </p>
        <p className="mt-1 text-sm text-body">
          Tell us what you&apos;re building — we&apos;ll reply within 24 hours.
        </p>
      </div>

      <div className="p-6 md:p-8 space-y-6">
        {state.message && !state.success && (
          <p className="text-sm text-error rounded-lg border border-error/20 bg-error/5 px-4 py-3" role="alert">
            {state.message}
          </p>
        )}

        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="name" className={labelClass}>
              Name
            </label>
            <input
              id="name"
              name="name"
              required
              className={inputClass}
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="email" className={labelClass}>
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className={inputClass}
              placeholder="you@company.com"
            />
          </div>
        </div>

        <div>
          <label htmlFor="company" className={labelClass}>
            Company <span className="normal-case font-normal text-muted">(optional)</span>
          </label>
          <input
            id="company"
            name="company"
            className={inputClass}
            placeholder="Your company"
          />
        </div>

        <div>
          <label htmlFor="message" className={labelClass}>
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            className={`${inputClass} h-auto py-3 resize-y min-h-[120px]`}
            placeholder="Goals, timeline, links to references — the more context, the better."
          />
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-2">
          <p className="text-xs text-muted max-w-xs">
            By submitting, you agree we may email you about this inquiry.
          </p>
          <Button
            type="submit"
            variant="primary"
            disabled={pending}
            className="w-full sm:w-auto shrink-0"
          >
            {pending ? "Sending..." : "Send message"}
          </Button>
        </div>
      </div>
    </form>
  );
}

export function ContactSection() {
  return (
    <section
      id="contact"
      className="section-py bg-canvas border-t border-hairline-soft relative overflow-hidden"
    >
      <div
        className="absolute inset-0 hero-grid-bg opacity-25 pointer-events-none"
        aria-hidden="true"
      />

      <Container className="relative">
        <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] gap-8 sm:gap-12 lg:gap-16 items-start">
          <div className="lg:sticky lg:top-24">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted mb-3">
              {contactContent.badge}
            </p>
            <h2 className="font-display text-display-lg text-ink">
              {contactContent.title}
            </h2>
            <p className="mt-4 text-base sm:text-lg text-body leading-relaxed">
              {contactContent.lead}
            </p>

            <ContactChannels />
            <NextSteps />
          </div>

          <ContactForm />
        </div>
      </Container>
    </section>
  );
}
