
export default function HeroBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      {/* Decorative cadastral map texture */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/images/geosystem-cadastral-background.webp')",
        }}
      />

      {/* Soft green-to-cream gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#FAFBF6]/90 via-[#F7F9F0]/65 to-[#C5D4A0]/35" />

      {/* Subtle olive tint on the right */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 90% 55%, rgba(116,140,57,0.17), transparent 50%)",
        }}
      />
    </div>
  );
}
