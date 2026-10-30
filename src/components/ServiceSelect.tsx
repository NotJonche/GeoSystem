"use client";

import { useEffect, useRef, useState, type KeyboardEvent } from "react";

import { services } from "@/data/services";

type ServiceOption = {
  value: string;
  label: string;
};

const options: ServiceOption[] = [
  ...services.map((service) => ({
    value: service.id,
    label: service.title,
  })),
  {
    value: "other",
    label: "Tjetër / Nuk jam i sigurt",
  },
];

export default function ServiceSelect() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("");
  const [focusedIndex, setFocusedIndex] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const optionRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const selectedOption = options.find((option) => option.value === selected);

  const selectedIndex = options.findIndex(
    (option) => option.value === selected,
  );

  // Close when clicking outside the dropdown.
  useEffect(() => {
    function handlePointerDown(event: PointerEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, []);

  // Focus the selected option when the list opens.
  useEffect(() => {
    if (!open) return;

    optionRefs.current[focusedIndex]?.focus();
  }, [open, focusedIndex]);

  function openDropdown(index?: number) {
    const initialIndex = index ?? (selectedIndex >= 0 ? selectedIndex : 0);

    setFocusedIndex(initialIndex);
    setOpen(true);
  }

  function closeDropdown(restoreFocus = false) {
    setOpen(false);

    if (restoreFocus) {
      triggerRef.current?.focus();
    }
  }

  function selectOption(option: ServiceOption) {
    setSelected(option.value);
    closeDropdown(true);
  }

  function handleTriggerKeyDown(event: KeyboardEvent<HTMLButtonElement>) {
    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      event.preventDefault();

      openDropdown(
        selectedIndex >= 0
          ? selectedIndex
          : event.key === "ArrowDown"
            ? 0
            : options.length - 1,
      );
    }
  }

  function handleOptionKeyDown(
    event: KeyboardEvent<HTMLButtonElement>,
    index: number,
  ) {
    if (event.key === "ArrowDown") {
      event.preventDefault();

      setFocusedIndex((index + 1) % options.length);
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();

      setFocusedIndex((index - 1 + options.length) % options.length);
    }

    if (event.key === "Home") {
      event.preventDefault();
      setFocusedIndex(0);
    }

    if (event.key === "End") {
      event.preventDefault();
      setFocusedIndex(options.length - 1);
    }

    if (event.key === "Escape") {
      event.preventDefault();
      closeDropdown(true);
    }

    if (event.key === "Tab") {
      setOpen(false);
    }
  }

  return (
    <div ref={containerRef} className="relative min-w-0">
      <label
        id="contact-service-label"
        className="mb-2 block text-sm font-medium text-primary"
      >
        Shërbimi që ju nevojitet
      </label>

      {/* Form value, ready for future submission */}
      <input type="hidden" name="service" value={selected} />

      {/* Dropdown trigger */}
      <button
        ref={triggerRef}
        type="button"
        aria-labelledby="contact-service-label contact-service-value"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={open ? "contact-service-options" : undefined}
        onClick={() => {
          if (open) {
            closeDropdown();
          } else {
            openDropdown();
          }
        }}
        onKeyDown={handleTriggerKeyDown}
        className={`
          flex min-h-14 w-full min-w-0
          items-center justify-between gap-3
          rounded-md border
          bg-background px-4 py-3
          text-left text-base
          outline-none transition-colors

          ${
            open
              ? "border-primary ring-2 ring-primary/15"
              : "border-border hover:border-primary-light"
          }

          focus-visible:border-primary
          focus-visible:ring-2
          focus-visible:ring-primary/15
        `}
      >
        <span
          id="contact-service-value"
          className={`min-w-0 flex-1 truncate ${
            selectedOption ? "text-primary" : "text-muted"
          }`}
        >
          {selectedOption?.label ?? "Zgjidhni shërbimin"}
        </span>

        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`h-5 w-5 shrink-0 text-primary transition-transform ${
            open ? "rotate-180" : ""
          }`}
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>

      {/* Scrollable options */}
      {open && (
        <div
          id="contact-service-options"
          role="listbox"
          aria-labelledby="contact-service-label"
          className="
            absolute left-0 right-0 top-full z-50
            mt-2 max-h-64 w-full
            overflow-y-auto overscroll-contain
            rounded-lg border border-border
            bg-white p-1 shadow-xl
          "
        >
          {options.map((option, index) => {
            const isSelected = selected === option.value;

            return (
              <button
                key={option.value}
                ref={(element) => {
                  optionRefs.current[index] = element;
                }}
                type="button"
                role="option"
                aria-selected={isSelected}
                tabIndex={focusedIndex === index ? 0 : -1}
                onFocus={() => {
                  if (focusedIndex !== index) {
                    setFocusedIndex(index);
                  }
                }}
                onKeyDown={(event) => handleOptionKeyDown(event, index)}
                onClick={() => selectOption(option)}
                className={`
                  flex min-h-11 w-full
                  items-center justify-between
                  gap-3 rounded-md
                  px-3 py-2.5 text-left
                  text-sm transition-colors
                  outline-none

                  ${
                    isSelected
                      ? "bg-[#EEF4E5] font-semibold text-primary"
                      : "text-primary hover:bg-[#EEF4E5]"
                  }

                  focus-visible:bg-[#EEF4E5]
                  focus-visible:ring-2
                  focus-visible:ring-inset
                  focus-visible:ring-primary/20
                `}
              >
                <span>{option.label}</span>

                {isSelected && (
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4 shrink-0"
                  >
                    <path d="m5 12 4 4L19 6" />
                  </svg>
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
