"use client";

import { useState, type FormEvent } from "react";
import { useLocale } from "@/lib/i18n";
import { Reveal } from "./Reveal";
import { Stamp } from "./Stamp";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function Contact() {
  const { t } = useLocale();
  const f = t.contact.form;
  const [values, setValues] = useState({ name: "", email: "", phone: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  const update = (key: keyof typeof values) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setValues((v) => ({ ...v, [key]: e.target.value }));

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const nextErrors: Record<string, string> = {};
    if (!values.name.trim()) nextErrors.name = f.errorRequired;
    if (!values.email.trim()) nextErrors.email = f.errorRequired;
    else if (!EMAIL_RE.test(values.email)) nextErrors.email = f.errorEmail;
    if (!values.message.trim()) nextErrors.message = f.errorRequired;
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    const body = [
      `${f.name}: ${values.name}`,
      `${f.email}: ${values.email}`,
      values.phone && `${f.phone}: ${values.phone}`,
      "",
      values.message,
    ]
      .filter(Boolean)
      .join("\n");

    window.location.href = `mailto:${t.contact.email}?subject=${encodeURIComponent(
      f.mailSubject
    )}&body=${encodeURIComponent(body)}`;

    setSent(true);
  };

  return (
    <section id="contact" className="border-t px-6 py-28 md:px-12" style={{ borderColor: "var(--color-rule)" }}>
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-16 md:grid-cols-[1fr_1.2fr]">
        <Reveal>
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.14em]" style={{ color: "var(--color-stamp)" }}>
            {t.contact.eyebrow}
          </p>
          <h2
            className="mt-4 text-balance font-[family-name:var(--font-display)] text-4xl font-medium leading-tight md:text-5xl"
            style={{ color: "var(--color-ink)" }}
          >
            {t.contact.heading}
          </h2>
          <p className="mt-5 max-w-md text-lg leading-relaxed" style={{ color: "var(--color-ink-muted)" }}>
            {t.contact.body}
          </p>

          <dl className="mt-10 space-y-5">
            <ContactRow label={t.contact.phoneLabel} value={t.contact.phone} href={`tel:${t.contact.phone.replace(/\s+/g, "")}`} mono />
            <ContactRow label={t.contact.emailLabel} value={t.contact.email} href={`mailto:${t.contact.email}`} />
            <ContactRow label={t.contact.addressLabel} value={t.contact.address} />
          </dl>
        </Reveal>

        <Reveal delay={150}>
          <div
            className="relative rounded-[8px] border p-8"
            style={{ borderColor: "var(--color-rule)", backgroundColor: "var(--color-card)" }}
          >
            {sent && (
              <div
                className="absolute right-6 top-6 stamp-land"
                aria-hidden
              >
                <Stamp top="OK" bottom={f.submitted.slice(0, 12)} size={72} />
              </div>
            )}

            <form onSubmit={onSubmit} noValidate className="space-y-5">
              <Field label={f.name} error={errors.name}>
                <input
                  type="text"
                  value={values.name}
                  onChange={update("name")}
                  placeholder={f.namePlaceholder}
                  className="field-input"
                />
              </Field>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <Field label={f.email} error={errors.email}>
                  <input
                    type="email"
                    value={values.email}
                    onChange={update("email")}
                    placeholder={f.emailPlaceholder}
                    className="field-input"
                  />
                </Field>
                <Field label={f.phone}>
                  <input
                    type="tel"
                    value={values.phone}
                    onChange={update("phone")}
                    placeholder={f.phonePlaceholder}
                    className="field-input font-figure"
                  />
                </Field>
              </div>

              <Field label={f.message} error={errors.message}>
                <textarea
                  value={values.message}
                  onChange={update("message")}
                  placeholder={f.messagePlaceholder}
                  rows={5}
                  className="field-input resize-none"
                />
              </Field>

              <button
                type="submit"
                className="w-full rounded-[8px] px-7 py-3.5 font-mono text-sm font-semibold uppercase tracking-[0.05em] text-white transition-transform hover:-translate-y-0.5 hover:shadow-lg sm:w-auto"
                style={{ backgroundColor: "var(--color-stamp)" }}
              >
                {sent ? f.submitted : f.submit}
              </button>
            </form>
          </div>
        </Reveal>
      </div>

      <style jsx global>{`
        .field-input {
          width: 100%;
          border-radius: 6px;
          border: 1px solid color-mix(in oklab, var(--color-ink) 15%, transparent);
          background: var(--color-paper);
          color: var(--color-ink);
          padding: 0.7rem 0.9rem;
          font-size: 0.95rem;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }
        .field-input::placeholder {
          color: var(--color-ink-muted);
          opacity: 0.6;
        }
        .field-input:focus {
          outline: none;
          border-color: var(--color-stamp);
          box-shadow: 0 0 0 2px color-mix(in oklab, var(--color-stamp) 30%, transparent);
        }
      `}</style>
    </section>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block font-mono text-[0.7rem] uppercase tracking-[0.06em]" style={{ color: "var(--color-ink-muted)" }}>
        {label}
      </span>
      {children}
      {error && (
        <span className="mt-1 block font-mono text-xs" style={{ color: "var(--color-error)" }}>
          {error}
        </span>
      )}
    </label>
  );
}

function ContactRow({ label, value, href, mono }: { label: string; value: string; href?: string; mono?: boolean }) {
  const content = (
    <span className={mono ? "font-figure" : ""} style={{ color: "var(--color-ink)" }}>
      {value}
    </span>
  );
  return (
    <div>
      <dt className="font-mono text-[0.7rem] uppercase tracking-[0.06em]" style={{ color: "var(--color-ink-muted)" }}>
        {label}
      </dt>
      <dd className="mt-0.5 text-lg">
        {href ? (
          <a href={href} className="transition-colors hover:text-[color:var(--color-stamp)]">
            {content}
          </a>
        ) : (
          content
        )}
      </dd>
    </div>
  );
}
