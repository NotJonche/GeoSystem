"use client";

import { useRef, useState, type FormEvent } from "react";

import ServiceSelect from "@/components/ServiceSelect";

type FormStatus = "idle" | "sending" | "success" | "error";

const inputClass =
  "w-full min-w-0 rounded-md border border-border bg-background px-4 py-4 text-base text-primary outline-none transition-colors placeholder:text-[#89938A] focus:border-primary-light focus:ring-2 focus:ring-primary-light/15";

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);

  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [resetCounter, setResetCounter] = useState(0);

  const isSending = status === "sending";

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (isSending) {
      return;
    }

    const form = event.currentTarget;

    if (!form.reportValidity()) {
      return;
    }

    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      subject: String(formData.get("subject") ?? "").trim(),
      service: String(formData.get("service") ?? "").trim(),
      message: String(formData.get("message") ?? "").trim(),
      website: String(formData.get("website") ?? "").trim(),
    };

    if (
      payload.name.length < 2 ||
      payload.subject.length < 3 ||
      payload.message.length < 10
    ) {
      setStatus("error");
      setErrorMessage(
        "Ju lutemi plotësoni të gjitha fushat me të dhëna të vlefshme.",
      );
      return;
    }

    setStatus("sending");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Contact request failed.");
      }

      const result: unknown = await response.json();

      if (
        !result ||
        typeof result !== "object" ||
        !("ok" in result) ||
        result.ok !== true
      ) {
        throw new Error("Unexpected server response.");
      }

      formRef.current?.reset();

      // Reset the custom service dropdown as well.
      setResetCounter((current) => current + 1);

      setStatus("success");
    } catch {
      setStatus("error");
      setErrorMessage(
        "Mesazhi nuk u dërgua. Ju lutemi provoni përsëri ose na kontaktoni me telefon.",
      );
    }
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
      {/* Name and email */}
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="min-w-0">
          <label
            htmlFor="contact-name"
            className="mb-2 block text-sm font-medium text-primary"
          >
            Emri dhe mbiemri *
          </label>

          <input
            id="contact-name"
            name="name"
            type="text"
            placeholder="Emri juaj"
            autoComplete="name"
            minLength={2}
            maxLength={100}
            required
            disabled={isSending}
            className={inputClass}
          />
        </div>

        <div className="min-w-0">
          <label
            htmlFor="contact-email"
            className="mb-2 block text-sm font-medium text-primary"
          >
            Email *
          </label>

          <input
            id="contact-email"
            name="email"
            type="email"
            placeholder="Email adresa"
            autoComplete="email"
            maxLength={254}
            required
            disabled={isSending}
            className={inputClass}
          />
        </div>
      </div>

      {/* Subject */}
      <div>
        <label
          htmlFor="contact-subject"
          className="mb-2 block text-sm font-medium text-primary"
        >
          Subjekti *
        </label>

        <input
          id="contact-subject"
          name="subject"
          type="text"
          placeholder="Subjekti i mesazhit"
          minLength={3}
          maxLength={150}
          required
          disabled={isSending}
          className={inputClass}
        />
      </div>

      {/* Existing custom service dropdown */}
      <fieldset disabled={isSending} className="min-w-0">
        <ServiceSelect key={resetCounter} />
      </fieldset>

      {/* Message */}
      <div>
        <label
          htmlFor="contact-message"
          className="mb-2 block text-sm font-medium text-primary"
        >
          Mesazhi *
        </label>

        <textarea
          id="contact-message"
          name="message"
          placeholder="Shkruani mesazhin tuaj këtu..."
          rows={8}
          minLength={10}
          maxLength={5000}
          required
          disabled={isSending}
          className={`${inputClass} min-h-48 resize-y`}
        />
      </div>

      {/* Honeypot: hidden from genuine visitors */}
      <div
        aria-hidden="true"
        className="absolute -left-[9999px] h-px w-px overflow-hidden"
      >
        <label htmlFor="contact-website">Website</label>

        <input
          id="contact-website"
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          defaultValue=""
        />
      </div>

      {/* Submission feedback */}
      {status === "success" && (
        <div
          role="status"
          aria-live="polite"
          className="rounded-md border border-green-200 bg-green-50 px-5 py-4 text-sm leading-6 text-green-800"
        >
          Mesazhi juaj u dërgua me sukses! Faleminderit që kontaktuat GeoSystem.
          Do t&apos;ju përgjigjemi sa më shpejt të jetë e mundur.
        </div>
      )}

      {status === "error" && (
        <div
          role="alert"
          className="rounded-md border border-red-200 bg-red-50 px-5 py-4 text-sm leading-6 text-red-800"
        >
          {errorMessage}
        </div>
      )}

      <button
        type="submit"
        disabled={isSending}
        className="inline-flex min-h-14 items-center justify-center rounded-md bg-primary px-8 py-4 font-semibold text-white transition-colors hover:bg-primary-light focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary disabled:cursor-wait disabled:opacity-65"
      >
        {isSending ? (
          <>
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              className="mr-3 h-5 w-5 animate-spin"
            >
              <circle
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
                className="opacity-25"
              />
              <path
                d="M22 12a10 10 0 0 0-10-10"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </svg>
            Duke dërguar...
          </>
        ) : (
          "Dërgo mesazhin"
        )}
      </button>
    </form>
  );
}
