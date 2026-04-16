"use client";

import { useState, type FormEvent } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import Button from "./Button";

const TOPIC_OPTIONS = [
  "Neue Website (Starter-Paket)",
  "Neue Website (Business-Paket)",
  "Neue Website (Premium-Paket)",
  "Noch unsicher – lass uns beraten",
  "Bestehende Website überarbeiten",
  "Wartung & Betreuung",
  "Sonstiges",
] as const;

const PAKET_TO_TOPIC: Record<string, string> = {
  starter: "Neue Website (Starter-Paket)",
  business: "Neue Website (Business-Paket)",
  premium: "Neue Website (Premium-Paket)",
  wartung: "Wartung & Betreuung",
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type FieldErrors = Partial<
  Record<"name" | "email" | "topic" | "message" | "privacy", string>
>;

const LABEL_CLASS =
  "mb-2 block font-sora text-[14px] font-semibold text-primary";
const INPUT_BASE =
  "w-full rounded-btn border bg-white px-4 py-3 font-serif text-[16px] text-dark placeholder:text-muted transition-colors focus:outline-none focus:ring-2 focus:ring-accent/30";
const INPUT_OK = "border-border focus:border-accent";
const INPUT_ERR = "border-red-500 focus:border-red-500";

function inputClass(hasError: boolean) {
  return `${INPUT_BASE} ${hasError ? INPUT_ERR : INPUT_OK}`;
}

export default function ContactForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialTopic =
    PAKET_TO_TOPIC[(searchParams.get("paket") ?? "").toLowerCase()] ?? "";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [topic, setTopic] = useState(initialTopic);
  const [message, setMessage] = useState("");
  const [privacy, setPrivacy] = useState(false);
  const [website, setWebsite] = useState(""); // honeypot

  const [errors, setErrors] = useState<FieldErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  function validate(): FieldErrors {
    const next: FieldErrors = {};
    if (!name.trim()) next.name = "Bitte gib deinen Namen an.";
    if (!email.trim()) {
      next.email = "Bitte gib deine E-Mail-Adresse an.";
    } else if (!EMAIL_REGEX.test(email.trim())) {
      next.email = "Bitte gib eine gültige E-Mail-Adresse an.";
    }
    if (!topic) next.topic = "Bitte wähle ein Thema aus.";
    if (!message.trim()) next.message = "Bitte schreib mir eine kurze Nachricht.";
    if (!privacy)
      next.privacy = "Bitte bestätige die Datenschutzerklärung.";
    return next;
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitError(null);

    const validation = validate();
    setErrors(validation);
    if (Object.keys(validation).length > 0) return;

    // Honeypot: wenn ausgefüllt, Bot erkannt – stumm abbrechen.
    if (website) return;

    setSubmitting(true);
    try {
      const res = await fetch("/api/kontakt", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          company: company.trim(),
          topic,
          message: message.trim(),
          website,
        }),
      });
      if (!res.ok) throw new Error("submit failed");
      router.push("/kontakt/danke");
    } catch {
      setSubmitError(
        "Es ist ein Fehler aufgetreten. Bitte versuche es erneut oder schreib direkt an info@klarteq.de."
      );
      setSubmitting(false);
    }
  }

  return (
    <form noValidate onSubmit={handleSubmit} className="space-y-6">
      {submitError && (
        <div
          role="alert"
          className="rounded-btn border border-red-500 bg-red-50 px-4 py-3 font-serif text-[15px] leading-[1.6] text-red-600"
        >
          {submitError}
        </div>
      )}

      {/* Honeypot – für Menschen unsichtbar */}
      <div style={{ display: "none" }} aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="name" className={LABEL_CLASS}>
          Name <span aria-hidden="true" className="text-accent">*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          aria-invalid={errors.name ? true : undefined}
          aria-describedby={errors.name ? "name-error" : undefined}
          className={inputClass(!!errors.name)}
        />
        {errors.name && (
          <p id="name-error" className="mt-2 text-[13px] text-red-600">
            {errors.name}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="email" className={LABEL_CLASS}>
          E-Mail <span aria-hidden="true" className="text-accent">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          aria-invalid={errors.email ? true : undefined}
          aria-describedby={errors.email ? "email-error" : undefined}
          className={inputClass(!!errors.email)}
        />
        {errors.email && (
          <p id="email-error" className="mt-2 text-[13px] text-red-600">
            {errors.email}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="company" className={LABEL_CLASS}>
          Unternehmen{" "}
          <span className="font-normal text-muted">(optional)</span>
        </label>
        <input
          id="company"
          name="company"
          type="text"
          autoComplete="organization"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          className={inputClass(false)}
        />
      </div>

      <div>
        <label htmlFor="topic" className={LABEL_CLASS}>
          Worum geht&apos;s?{" "}
          <span aria-hidden="true" className="text-accent">*</span>
        </label>
        <select
          id="topic"
          name="topic"
          required
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          aria-invalid={errors.topic ? true : undefined}
          aria-describedby={errors.topic ? "topic-error" : undefined}
          className={inputClass(!!errors.topic)}
        >
          <option value="" disabled>
            Bitte auswählen
          </option>
          {TOPIC_OPTIONS.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
        {errors.topic && (
          <p id="topic-error" className="mt-2 text-[13px] text-red-600">
            {errors.topic}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="message" className={LABEL_CLASS}>
          Deine Nachricht{" "}
          <span aria-hidden="true" className="text-accent">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder="Erzähl kurz, worum es geht. Was ist dein Unternehmen, was brauchst du?"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          aria-invalid={errors.message ? true : undefined}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={`${inputClass(!!errors.message)} resize-y`}
        />
        {errors.message && (
          <p id="message-error" className="mt-2 text-[13px] text-red-600">
            {errors.message}
          </p>
        )}
      </div>

      <div>
        <label className="flex items-start gap-3">
          <input
            type="checkbox"
            name="privacy"
            checked={privacy}
            onChange={(e) => setPrivacy(e.target.checked)}
            aria-invalid={errors.privacy ? true : undefined}
            aria-describedby={errors.privacy ? "privacy-error" : undefined}
            className={`mt-[5px] h-[18px] w-[18px] shrink-0 cursor-pointer accent-[var(--color-accent)] ${
              errors.privacy ? "outline outline-2 outline-red-500" : ""
            }`}
            required
          />
          <span className="font-serif text-[15px] leading-[1.6] text-dark">
            Ich habe die{" "}
            <Link
              href="/datenschutz"
              className="text-accent hover:text-accent-hover hover:underline"
            >
              Datenschutzerklärung
            </Link>{" "}
            gelesen und bin mit der Verarbeitung meiner Daten zur Bearbeitung
            meiner Anfrage einverstanden.
          </span>
        </label>
        {errors.privacy && (
          <p id="privacy-error" className="mt-2 text-[13px] text-red-600">
            {errors.privacy}
          </p>
        )}
      </div>

      <div>
        <Button
          type="submit"
          variant="primary"
          size="lg"
          loading={submitting}
        >
          Anfrage senden
        </Button>
        <p className="mt-4 font-serif text-[13px] leading-[1.6] text-muted">
          Deine Daten werden ausschließlich zur Bearbeitung deiner Anfrage
          genutzt. Keine Newsletter, keine Weitergabe, keine Tracker.
        </p>
      </div>
    </form>
  );
}
