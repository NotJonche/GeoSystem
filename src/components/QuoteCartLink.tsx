"use client";

import Link from "next/link";
import { useQuoteCart } from "@/lib/quoteCart";

type QuoteCartLinkProps = {
  onClick?: () => void;
  mobile?: boolean;
};

export default function QuoteCartLink({
  onClick,
  mobile = false,
}: QuoteCartLinkProps) {
  const items = useQuoteCart();

  const count = items.reduce((total, item) => total + item.quantity, 0);

  return (
    <Link
      href="/Quote"
      onClick={onClick}
      aria-label={`Shporta, ${count} pajisje të zgjedhura`}
      className={
        mobile
          ? "flex min-h-11 items-center justify-between rounded-lg px-4 py-3 font-medium text-primary transition-colors hover:bg-[#E4ECD7]"
          : "inline-flex min-h-11 items-center gap-2 rounded-lg px-2 text-sm font-semibold text-primary transition-colors hover:bg-[#E4ECD7]"
      }
    >
      <span className="inline-flex items-center gap-2">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          className="h-5 w-5"
        >
          <path d="m3 9 2 11h14l2-11H3Z" />
          <path d="m9 9 3-6 3 6" />
        </svg>
        Shporta
      </span>

      <span
        className="ml-2 inline-flex h-6 min-w-6 items-center justify-center rounded-full bg-primary px-2 text-xs font-semibold text-white"
        aria-hidden="true"
      >
        {count}
      </span>
    </Link>
  );
}
